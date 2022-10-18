<template>
    <div class="wrapper">
      <Ads
      />
      <About
      />
      <GameStatistic
       :gameOver="this.$store.state.gameOver"
      />
      <div class="">
        <div class="mt-6">
          <WordRow
            v-for="(guess, i) in this.$store.state.guesses"
            :key="i"
            :value="guess"
            :solution="this.$store.state.solution"
            :submitted="i < this.$store.state.currentGuessIndex"
            :temp_colors="this.$store.state.colorList[i]"
          />
        </div>
        <div class="is-centered">
           <KeyBoard
            @keypress="onKeyPress"
            @onKeyPress="onKeyPress"
            :guessedLetters="this.$store.state.guessedLetters"
            :input="input"/>
        </div>
      </div>
    </div>
    
  </template>
  
  <script>
  import WordRow from './WordRow.vue';
  import KeyBoard from './KeyBoard.vue';
  import About from './WordleAbout.vue'
  import GameStatistic from './GameStatistic.vue'
  import Ads from './WordleAds.vue';
  import { toast } from 'bulma-toast'
  
  export default {
    name: 'Game',
    components: {
      KeyBoard,
      WordRow,
      About,
      GameStatistic,
      Ads,
    },
    data() {
      return {
        input: "",
        guessedLetters: {
          miss: [],
          found: [],
          hint: []
        },
      }
    },
    beforeMount() {
      this.getWords()
      this.$store.commit("initializeValue")
    },
    mounted() {
      window.addEventListener("keypress", (e) =>{
        e.preventDefault();
        let button =
          e.keyCode == 13
           ? "{enter}"
           : e.keyCode == 8
           ? "{bksp}"
           : String.fromCharCode(e.keyCode).toLowerCase();
           this.onKeyPress(button.toLowerCase())
      })
      window.addEventListener("keyup", (e) =>{
        e.preventDefault();
        let button =
           e.keyCode == 8
           ? "{bksp}"
           : ""
          this.onKeyPress(button)
      })
      document.title = "Wordle"
    },
    methods: {
      getWords() {
        const now = new Date()
        const start = new Date(2022, 7, 29)
        const diff = Number(now) - Number(start)
  
        let day = Math.floor(diff / (1000 * 60 * 60 * 24))
        if (localStorage.getItem("today")) {
          if (parseInt(localStorage.getItem("today")) < day) {
            if (localStorage.getItem("lastSubmitted")!=this.$store.state.solution || parseInt(localStorage.getItem("currentGuessIndex"))>=6)  {
              this.$store.state.guesses = ["", "", "", "", "", ""],
              this.$store.state.colorList = [["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""]],
              this.$store.state.guessedLetters = { miss: [], found: [], hint: [] },
              localStorage.setItem("currentGuessIndex", 0)
              localStorage.setItem("guesses", JSON.stringify(this.$store.state.guesses));
              localStorage.setItem("color", JSON.stringify(this.$store.state.colorList));
              localStorage.setItem("guessedLetters", JSON.stringify(this.$store.state.guessedLetters));
              this.$store.state.isFinished = false
              localStorage.setItem("today", day)
            }
          } else {
              localStorage.setItem("today", day)
            }
        }  else {
            localStorage.setItem("today", day)
        }
        while (day > this.$store.state.words_list.length) {
          day -= this.$store.state.words_list.length
        }
        this.$store.state.solution = this.$store.state.words_list[day]
        return this.$store.state.words_list[day]
      },
      onKeyPress(button) {
        const guesses = this.$store.state.guesses
        const currentGuessIndex = this.$store.state.currentGuessIndex
        const currentGuess = guesses[currentGuessIndex]
        if (currentGuessIndex >= 6 || localStorage.getItem('lastSubmitted')==this.$store.state.solution || localStorage.getItem('currentGuessIndex')>=6) {
          return;
        }
        if (button == "{enter}") {
          if (currentGuess.length == 5) {
            if (this.$store.state.words_list.includes(this.$store.state.guesses[currentGuessIndex])) {
              this.$store.state.currentGuessIndex++;
              localStorage.setItem('currentGuessIndex', parseInt(this.$store.state.currentGuessIndex))
              for (var i = 0; i < currentGuess.length; i ++) {
                let c = currentGuess.charAt(i);
                if (c == this.$store.state.solution.charAt(i)) {
                  this.$store.state.guessedLetters.found.push(c)
                } else if (this.$store.state.solution.indexOf(c) != -1) {
                  this.$store.state.guessedLetters.hint.push(c);
                } else {
                  this.$store.state.guessedLetters.miss.push(c);
                }
              }
              localStorage.setItem('guessedLetters', JSON.stringify(this.$store.state.guessedLetters))
            } else {
              toast({
                  message: "Бундай сўз рўйхатда мавжуд эмас",
                  type: 'is-warning',
                  dismissible: false,
                  animate: { in: 'shakeX'},
                  pauseOnHover: false,
                  duration: 2000,
                  position: 'top-center',
              })
            }
          }
        } else if (button == "{bksp}") {
          guesses[currentGuessIndex] = currentGuess.slice(0, -1);
        } else if (currentGuess.length < 5) {
          const alphaRegex = /[а-яА-Я,Ғ,Ҳ,Қ,Ё,Ў,ғ,ҳ,қ,ё,ў]/;
          if (alphaRegex.test(button)) {
            guesses[currentGuessIndex] += button;
          }
        }
      },
    }
  }
  </script>
  
  <style>
  
  </style>
  