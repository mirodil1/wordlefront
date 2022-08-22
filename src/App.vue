<template>

  <div class="wrapper">
    <Header/>
    <div class="columns is-centered is-vcentered pt-2">
      <div class="px-5 py-5 is-5-tablet is-12-mobile">
        <WordRow
          v-for="(guess, i) in this.$store.state.guesses"
          :key="i"
          :value="guess"
          :solution="this.$store.state.solution"
          :submitted="i < this.$store.state.currentGuessIndex"
        />
      </div>
    </div>
    <div class="column">
        <div class="modal p-6 animate__animated animate__fadeIn" v-bind:class="{'is-active': $store.state.isWinner}">
            <div class="modal-background"></div>
            <div class="">
             <div class="card info pb-5">
              <section class="card-body">
                <p class="card-title pt-4 has-text-centered subtitle is-family-secondary is-size-4">HISOBOTLAR</p>
                <div class="columns px-4 py-3 is-flex">
                  <div class="column px-4">
                    <p class="has-text-centered is-size-3">1</p>
                    <p class="has-text-centered is-size-7">та ўйин</p>
                  </div>
                  <div class="column px-4">
                    <p class="has-text-centered is-size-3">100</p>
                    <p class="has-text-centered is-size-7">% ютуқ</p>
                  </div>
                  <div class="column px-4">
                    <p class="has-text-centered is-size-3">1</p>
                    <p class="has-text-centered is-size-7">Кетма-кет ғалаба</p>
                  </div>
                  <div class="column px-4">
                    <p class="has-text-centered is-size-3">1</p>
                    <p class="has-text-centered is-size-7">Кетма-кет ғалабалар рекорди</p>
                  </div>
                </div>
                <div class="columns px-4 is-flex">
                  <div class="column">
                    <p>Янги сўз киритилишини кутинг</p>
                  </div>
                  <div class="column">
                    <button class="button is-primary">ULASHISH</button>
                  </div>
                </div>
              </section>
            </div>
            </div>
            <!-- <button class="modal-close is-large" aria-label="close"></button> -->
        </div>
      </div>
    <div class="columns px-3 pb-3 is-centered is-vcentered">
      <div class="column is-4-desktop is-12-mobile is-8-tablet">
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
// import axios from 'axios';
import Header from './components/Header.vue';
import WordRow from './components/WordRow.vue';
import KeyBoard from './components/KeyBoard.vue';
import { toast } from 'bulma-toast'

export default {
  name: 'App',
  components: {
    Header,
    KeyBoard,
    WordRow
  },
  data() {
    return {
      input: "",
      // counter: localStorage.getItem("NumberOfGames")
    }
  },
  beforeMount() {
    console.log(this.$store.state.isWinner)
    this.$store.commit('checkWinner')
  },
  mounted() {
    this.getWords()
    this.$store.commit('checkWinner') 
    window.addEventListener("keyup", (e) =>{
      e.preventDefault();
      let button =
        e.keyCode == 13
         ? "{enter}"
         : e.keyCode == 8
         ? "{bksp}"
         : String.fromCharCode(e.keyCode).toLowerCase();
      this.onKeyPress(button.toLowerCase())
    } )
    document.title = "Wordle"
  },
  methods: {
    getWords() {
      const now = new Date()
      const start = new Date(2022, 0, 0)
      const diff = Number(now) - Number(start)
      let day = Math.floor(diff / (1000 * 60 * 60 * 24))
      console.log(this.$store.state.words_list.length)
      while (day > this.$store.state.words_list.length) {
        day -= this.$store.state.words_list.length
        console.log(day)
      }
      console.log(this.$store.state.words_list[day])
      this.$store.state.solution = this.$store.state.words_list[day]
      return this.$store.state.words_list[day]
    },
    onKeyPress(button) {
      const guesses = this.$store.state.guesses
      const currentGuessIndex = this.$store.state.currentGuessIndex
      const currentGuess = guesses[currentGuessIndex]
      if (currentGuessIndex >= 6 || localStorage.getItem('lastSubmitted')==this.$store.state.solution) {
        // let counter = localStorage.getItem("NumberOfGames");
        // localStorage.setItem("NumberOfGames", this.counter++);
        console.log(localStorage.getItem("NumberOfGames"))
        return;
      }
    
      if (button == "{enter}") {
        console.log(this.$store.state.guesses[currentGuessIndex])
        if (currentGuess.length == 5) {
          if (this.$store.state.words_list.includes(this.$store.state.guesses[currentGuessIndex])) {
            this.$store.state.currentGuessIndex++;
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
          } else {
            toast({
                message: "Бундай сўз рўйхатда мавжуд эмас",
                type: 'is-warning',
                dismissible: false,
                animate: { in: 'shakeX'},
                pauseOnHover: false,
                duration: 1500,
                position: 'top-center',
            })
          }
        }
      } else if (button == "{bksp}") {
        guesses[currentGuessIndex] = currentGuess.slice(0, -1);
      } else if (currentGuess.length < 5) {
        const alphaRegex = /[а-яА-Я,Ғ,Ҳ,Қ,ғ,ҳ,қ]/;
        if (alphaRegex.test(button)) {
          guesses[currentGuessIndex] += button;
        }
      }
      console.log("button", button);
    },
    
  }
}
</script>

<style>
@import '~bulma/css/bulma.css';

  .info {
    width: 370px;

  }

  @media only screen and (max-width: 500px) {
    .info {
        width: 370px;
        /* line-height: 3rem;
        text-align: center;
        font-size: 25px; */
    }
  }
  @media only screen and (min-width: 320px) 
                       and (max-width: 375px){
    .info {
        width: 340px;
        /* box-sizing: border-box;
        text-align: center;
        line-height: 20px;
        font-size: 20px; */
    }
  }

</style>
