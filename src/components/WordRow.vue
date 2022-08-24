<template>
    <div class="column">
        <div class="columns is-flex is-centered " :class="{'animate__animated animate__shakeX': isActive}">
            <Letter
                v-for="i in 5"
                :key="i"
                :letter="value[i-1]"
                :color="colors[i-1]"
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
    },
    data() {
        return {
            colors: ["", "", "", "", ""],
            isActive: false,
            victoryMessage: ["ДАҲО", "АЖОЙИБ", "БАРАКАЛЛА", "ЗЎР", "ҚОЙИЛ", "УДДАЛАДИК"]
        }
    },
    components: {
        Letter
    },
    watch: {
        submitted: {
            async handler(submitted) {
                if (submitted) {
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
                            console.log(temp[i])
                            if (letterPool.indexOf(v.charAt(i)) != -1) {
                                letterPool.splice(letterPool.indexOf(v.charAt(i)), 1);
                                temp[i] = "yellow";
                            }
                        }
                        this.colors[i]= temp[i];
                        // console.log(this.colors[i])
                        await new Promise((resolve) => setTimeout(resolve, 500));
                    }
                    
                    if (s == v) {
                        localStorage.setItem('lastSubmitted', s)
                        this.$store.commit('checkWinner')
                        toast({
                            message: this.victoryMessage[this.$store.state.currentGuessIndex-1],
                            type: 'is-success is-light',
                            dismissible: false,
                            animate: { in: 'backInDown', out: 'backOutDown' },
                            pauseOnHover: false,
                            duration: 2000,
                            position: 'top-center',
                        })
                        this.$store.commit('checkNumberOfGames')
                        // let numberOfsequenceVictory = this.$store.state.sequenceVictory+1
                        // localStorage.setItem("numberOfsequenceVictory", numberOfsequenceVictory)
                        
                        // if (numberOfsequenceVictory > this.$store.state.sequenceVictoryRecord) {
                        //     this.$store.state.sequenceVictoryRecord = numberOfsequenceVictory
                        //     localStorage.setItem("numberOfsequenceVictoryRecord", this.$store.state.sequenceVictoryRecord)
                        // }


                    } else if (this.$store.state.currentGuessIndex >= 6) {
                        toast({
                            message: this.$store.state.solution,
                            type: 'is-dark is-light',
                            dismissible: false,
                            animate: { in: 'backInDown', out: 'backOutDown' },
                            pauseOnHover: false,
                            duration: 2000,
                            position: 'top-center',
                        })
                        // this.$store.state.sequenceVictory = 0
                        // localStorage.setItem("numberOfsequenceVictory", this.$store.state.sequenceVictory)
                        this.$store.commit('checkNumberOfGames')
                        this.$store.commit('checkWinner')
                    }
                    
                    
                }
            }
        },
    },
    methods: {
    }
    
}
</script>

<style scoped>

.board{
  width: 350px;
  height: 420px;
}
</style>