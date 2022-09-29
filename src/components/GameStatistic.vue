<template>
    <div class="modal p-6 animate__animated animate__fadeIn" v-bind:class="{'is-active': this.$store.state.isFinished}">
        <div class="modal-background"></div>
        <div class="">
            <div class="modal-card info pb-5">
            <section class="modal-card-body">
            <button class="delete is-pulled-right" @click="removeStat" aria-label="close"></button>
            <p class="is-size-5 has-text-centered">Бугунги сўз:</p>
            <p class="has-text-bold has-text-centered is-uppercase is-size-4">{{this.$store.state.solution}}</p>
            <br>
            <p class="has-text-centered  is-size-5">Кун сўзи янгиланишигача:</p>
            <p id="demo" class="has-text-bold has-text-centered is-size-2"></p>

            <!-- <div class="columns px-4 py-3 is-flex">
                <div class="column px-4">
                <p class="has-text-centered is-size-3">{{this.$store.state.numberOfGames}}</p>
                <p class="has-text-centered is-size-7">та ўйин</p>
                </div>
                <div class="column px-4">
                <p class="has-text-centered is-size-3">{{this.$store.state.victoryPercentage}}</p>
                <p class="has-text-centered is-size-7">% ютуқ</p>
                </div>
                <div class="column px-4">
                <p class="has-text-centered is-size-3">{{this.$store.state.sequenceVictory}}</p>
                <p class="has-text-centered is-size-7">Кетма-кет ғалаба</p>
                </div>
                <div class="column px-4">
                <p class="has-text-centered is-size-3">{{this.$store.state.sequenceVictoryRecord}}</p>
                <p class="has-text-centered is-size-7">Кетма-кет ғалабалар рекорди</p>
                </div>
            </div>
            <div class="columns px-4 is-flex">
                <div class="column">
                <p id="demo" class="has-text-bold has-text-centered is-size-6">Янги сўз киритилишини кутинг</p>
                </div>
                <div class="column">
                <button class="button is-primary has-text-centered is-centered" @click="share">УЛАШИШ</button>
                </div>
            </div> -->
            </section>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
    name: "GameStatistic",
    data() {
       return {
        statData: {
            data: "",
            userTries: "",
            setEmoji: "",
        }
       }
    },
    props: {
        gameOver: Boolean
    },
    mounted() {
        this.timer()
    },
    watch: {
        gameOver: {
            handler(gameOver) {
                if (gameOver) {
                    setTimeout(()=> {
                        this.sendResult()
                    }, 1000)
                }
            }
        }
    },
    methods: {
        sendResult() {
            let tg = window.Telegram.WebApp;
            let emoji = ["🤯", "🤩", "😎", "🥳", "👍", "👏"]
            let statText = "<b>СТАТИСТИКА</b>\n\n"

            statText+= `Ўйналган ўйинлар — <b>${this.$store.state.numberOfGames} </b>та\n`
            statText+= `Ғалаба — <b> ${this.$store.state.victoryPercentage} % </b>\n`
            statText+= `Кетма-кет ғалаба — <b>${this.$store.state.sequenceVictory} </b>та\n`
            statText+= `Кетма-кет ғалабалар рекорди — <b>${this.$store.state.sequenceVictoryRecord}</b> та\n\n`
            statText+= "<b>ТАХМИНЛАР ТАҚСИМОТИ</b>\n\n"
            statText+= `1 🤯 × <b>${this.$store.state.trueGuess[0]}</b>\n`
            statText+= `2 🤩 × <b>${this.$store.state.trueGuess[1]}</b>\n`
            statText+= `3 😎 × <b>${this.$store.state.trueGuess[2]}</b>\n`
            statText+= `4 🥳 × <b>${this.$store.state.trueGuess[3]}</b>\n`
            statText+= `5 👍 × <b>${this.$store.state.trueGuess[4]}</b>\n`
            statText+= `6 👏 × <b>${this.$store.state.trueGuess[5]}</b>\n`
            
            let userTry = `${this.$store.state.words_list.indexOf(this.$store.state.solution)+1} `
            userTry +=  this.$store.state.isWinner ? `${localStorage.getItem('currentGuessIndex')}/6 \n` : "x/6 \n"
            for (let i = 0; i < this.$store.state.currentGuessIndex; i++) {
                userTry+=`\n`
                for (let j = 0; j < 5; j++) {
                    userTry+=`${this.$store.state.userTries[i][j]}`
                }
            }

            this.statData.data = statText
            this.statData.userTries = userTry
            this.statData.setEmoji = this.$store.state.isWinner ? emoji[this.$store.state.currentGuessIndex-1] : "☹️"
            tg.sendData(JSON.stringify(this.statData))
        },
        removeStat() {
          this.$store.state.isFinished = false
        },
        timer() {
            var tomorrow =  new Date().getDate() + 1
            var month = new Date().getMonth()+1
            var year = new Date().getFullYear()
            var countDownDate = new Date(`${month} ${tomorrow} ${year} 00:00:00`)

            // Update the count down every 1 second
            var x = setInterval(function() {

            // Get today's date and time
            var now = new Date().getTime();
                
            // Find the distance between now and the count down date
            var distance = countDownDate.getTime() - now;
            
            // Time calculations for days, hours, minutes and seconds
            // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            // Output the result in an element with id="demo"
            // this.timerP = hours + ":"
            // + minutes + ":" + seconds;
            document.getElementById("demo").innerHTML = (hours <  10 ? "0" + hours : hours) + ":" +
            (minutes <  10 ? "0" + minutes : minutes) + ":" +  (seconds <  10 ? "0" + seconds  : seconds);
                
            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "Янги сўз киритилишини кутинг";
            }
            }, 1000);
        }
    },

}
</script>

<style scoped>
    .modal-background {
        opacity: 0.3 !important;

    }
</style>