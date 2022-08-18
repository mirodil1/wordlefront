<template>
    <div class="column">
        <div class="columns is-flex is-centered">
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

export default {
    name: "WordRow",
    props: {
        value: String,
        solution: String,
        submitted: Boolean,
    },
    data() {
        return {
            colors: ["", "", "", "", ""]
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
                    console.log(s, v)
                    if (s == v) {
                        localStorage.setItem('lastSubmitted', s)
                        this.$store.commit('checkWinner')
                    }
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
                        await new Promise((resolve) => setTimeout(resolve, 400));
                    }
                }
            }
        }
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