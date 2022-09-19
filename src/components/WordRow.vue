<template>
    <div class="column is-12">
        <div class="columns is-flex is-vcentered is-centered" :class="{'animate__animated animate__shakeX': isActive}">
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
    watch: {
        submitted: {
            async handler(submitted) {
                if (submitted) {
                    localStorage.setItem("guesses", JSON.stringify(this.$store.state.guesses));
                    
                    let s = this.solution;
                    let v = this.value;

                    // adding colors for letteres
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
                        this.$store.state.colorList[this.$store.state.currentGuessIndex-1][i] = temp[i]
                        await new Promise((resolve) => setTimeout(resolve, 500));
                    }
                    localStorage.setItem("color", JSON.stringify(this.$store.state.colorList))

                    if (s == v) {
                        localStorage.setItem('lastSubmitted', s)
                        this.$store.commit('setIsWinner', true)

                        // update and set number of victory
                        let numberOfVictory = this.$store.state.numberOfVictory
                        localStorage.setItem('numberOfVictory', parseInt(numberOfVictory)+1)
                        this.$store.state.lastSubmitted = s
                        
                        // update and set true guesses value
                        this.$store.state.trueGuess[this.$store.state.currentGuessIndex-1] = this.$store.state.trueGuess[this.$store.state.currentGuessIndex-1] + 1
                        localStorage.setItem("trueGuess", JSON.stringify(this.$store.state.trueGuess))

                        // message when found word
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
                        // solution msg if cannot find word
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
}
</script>

