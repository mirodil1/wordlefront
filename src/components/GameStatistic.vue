<template>
    <div class="modal p-6 animate__animated animate__fadeIn" v-bind:class="{'is-active': this.$store.state.isFinished}">
        <!-- <div class="modal-background"></div>
        <div class="">
            <div class="modal-card info pb-5">
            <section class="modal-card-body">
            <button class="delete is-pulled-right" @click="removeStat" aria-label="close"></button>
            <p class="card-title has-text-centered subtitle is-family-secondary is-size-4">СТАТИСТИКА</p>
            <div class="columns px-4 py-3 is-flex">
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
            </div>
            </section>
        </div>
        </div> -->
    </div>
</template>

<script>
import { toast } from 'bulma-toast'
export default {
    name: "GameStatistic",
    data() {
       return {
       } 
    },
    props: {
        isFinished: Boolean
    },
    mounted() {
    },
    watch: {
        isFinished: {
            handler(isFinished) {
                if (isFinished) {
                    console.log("Finished")
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
            let statText = "<b>СТАТИСТИКА</b>\n\n"
            
            statText+= `Ўйналган ўйинлар — ${this.$store.state.numberOfGames} та\n`
            statText+= `Ғалаба — ${this.$store.state.victoryPercentage} %\n`
            statText+= `Кетма-кет ғалаба — ${this.$store.state.sequenceVictory} та\n`
            statText+= `Кетма-кет ғалабалар рекорди — ${this.$store.state.sequenceVictoryRecord} та\n`
            statText+= "<b>ТАХМИНЛАР ТАҚСИМОТИ</b>\n\n"
            statText+= `1 🤯 × ${this.$store.state.trueGuess[0]}\n`
            statText+= `2 🤩 × ${this.$store.state.trueGuess[1]}\n`
            statText+= `3 😎 × ${this.$store.state.trueGuess[2]}\n`
            statText+= `4 🥳 × ${this.$store.state.trueGuess[3]}\n`
            statText+= `5 👍 × ${this.$store.state.trueGuess[4]}\n`
            statText+= `6 👏 × ${this.$store.state.trueGuess[5]}\n`
            tg.sendData(statText)
        },

        share() {
            if (navigator.share) {
                    navigator.share({
                    text: localStorage.getItem("isWinner") ? `${localStorage.getItem('currentGuessIndex')}/6` : "x/6",
                    url: "https://t.me/WordleUzBot",
                    title: "WordleUzBot"
                })
            } else {
                navigator.clipboard.writeText(localStorage.getItem("isWinner") ? `${localStorage.getItem('currentGuessIndex')}/6` : "x/6")
                toast({
                message: "Кўчирилди",
                type: 'is-success is-light',
                dismissible: false,
                animate: { in: 'backInDown', out: 'backOutDown' },
                pauseOnHover: false,
                duration: 2000,
                position: 'top-center',
            })
            }
        },
        removeStat() {
          this.$store.state.isFinished = false
        },
        copyToClipBoard(){
            let textToCopy = "https://t.me/gamewordlebot"
            navigator.clipboard.writeText(textToCopy);    
            toast({
                message: "Кўчирилди",
                type: 'is-success is-light',
                dismissible: false,
                animate: { in: 'backInDown', out: 'backOutDown' },
                pauseOnHover: false,
                duration: 2000,
                position: 'top-center',
            })
        }

        // timer() {
        //     var countDownDate = new Date("Aug 23, 2022 14:36:00 GMT-09:00").getTime() + new Date().getTime();
        //     // Update the count down every 1 second
        //     var x = setInterval(function() {

        //     // Get today's date and time
        //     var now = new Date().getTime();
                
        //     // Find the distance between now and the count down date
        //     var distance = countDownDate - now;
            
        //     // Time calculations for days, hours, minutes and seconds
        //     //var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        //     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        //     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        //     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        //     // Output the result in an element with id="demo"
        //     // this.timerP = hours + ":"
        //     // + minutes + ":" + seconds;
        //     document.getElementById("demo").innerHTML = hours + ":"
        //     + minutes + ":" + seconds;
                
        //     // If the count down is over, write some text 
        //     if (distance < 0) {
        //         clearInterval(x);
        //     }
        //     }, 1000);
        // }
    },

}
</script>

<style scoped>
    .modal-background {
        opacity: 0.3 !important;

    }
</style>