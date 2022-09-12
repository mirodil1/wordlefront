<template>
    <div class="column">
        <div class="columns is-flex is-centered " :class="{'animate__animated animate__shakeX': isActive}">
            <Letter
                v-for="i in 5"
                :key="i"
                :letter="value[i-1]"
                :color="temp_colors[i-1]"
            />
        </div>
    </div>
</template>

<script>
import Letter from './Letter.vue'
import { toast } from 'bulma-toast'

export default {
    name: "WordRow",
    props: {
        value: String,
        solution: String,
        submitted: Boolean,
        temp_colors: Array,
    },
    data() {
        return {
            colors: ["", "", "", "", ""],
            isActive: false,
            victoryMessage: ["ДАҲО", "АЖОЙИБ", "БАРАКАЛЛА", "ЗЎР", "ҚОЙИЛ", "УДДАЛАДИК"],
        }
    },
    components: {
        Letter
    },
    mounted() {
        // this.color()
    },
    watch: {
        submitted: {
            async handler(submitted) {
                if (submitted) {
                    localStorage.setItem("guesses", JSON.stringify(this.$store.state.guesses));

                    let s = this.solution;
                    let v = this.value;
                    let temp = ["gray", "gray", "gray", "gray", "gray"];
                    let letterPool = [];
                    for (let i = 0; i < 5; i++) {
                        if (s.charAt(i) == v.charAt(i)) {
                            temp[i] = "green";
                        } else {
                            letterPool.push(s.charAt(i));
                        }
                    }
                    for (let i = 0; i < 5; i++) {
                        if (temp[i] == "gray") {
                            if (letterPool.indexOf(v.charAt(i)) != -1) {
                                letterPool.splice(letterPool.indexOf(v.charAt(i)), 1);
                                temp[i] = "yellow";
                            }
                        }
                        // this.colors[i]= temp[i];
                        this.$store.state.colorList[this.$store.state.currentGuessIndex-1][i] = temp[i]
                        await new Promise((resolve) => setTimeout(resolve, 500));
                    }
                    console.log(this.$store.state.colorList)
                    localStorage.setItem("color", JSON.stringify(this.$store.state.colorList))

                    if (s == v) {
                        localStorage.setItem('lastSubmitted', s)
                        this.$store.commit('setIsWinner', true)
                        let numberOfVictory = this.$store.state.numberOfVictory
                        localStorage.setItem('numberOfVictory', parseInt(numberOfVictory)+1)
                        this.$store.state.lastSubmitted = s
                        toast({
                            message: this.victoryMessage[this.$store.state.currentGuessIndex-1],
                            type: 'is-success is-light',
                            dismissible: false,
                            animate: { in: 'backInDown', out: 'backOutDown' },
                            pauseOnHover: false,
                            duration: 2000,
                            position: 'top-center',
                        })
                    } else if (this.$store.state.currentGuessIndex >= 6) {
                        // localStorage.setItem('currentGuessIndex', this.$store.state.currentGuessIndex)
                        toast({
                            message: this.$store.state.solution,
                            type: 'is-dark is-light',
                            dismissible: false,
                            animate: { in: 'backInDown', out: 'backOutDown' },
                            pauseOnHover: false,
                            duration: 2000,
                            position: 'top-center',
                        })
                        
                    }
                    this.$store.commit('checkWinner')
                    this.$store.commit('checkNumberOfGames')
                }
            }
        },
    },
    methods: {
        // color() {
        //     if (localStorage.getItem("color")) {
        //         for (let i = 0; i < JSON.parse(localStorage.getItem("color")).length; i++) {
        //             console.log(JSON.parse(localStorage.getItem("color")).length)
        //         }
        //     }
        // }
    
    }
    
}
</script>

<style scoped>

.board{
  width: 350px;
  height: 420px;
}
</style>