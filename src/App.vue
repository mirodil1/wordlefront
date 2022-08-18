<template>

  <div class="wrapper">
    <Header/>
    <div class="columns is-centered is-vcentered pt-2">
      <div class="px-5 py-5 is-5-tablet is-12-mobile ">
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
        <div class="modal p-5" v-bind:class="{'is-active': $store.state.isWinner}">
            <div class="modal-background"></div>
            <div class="">
             <div class="card p-5">
              <section class="card-body">
                <p class="card-title">Tahminlar hisoboti</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
              </section>
            </div>
            </div>
            <!-- <button class="modal-close is-large" aria-label="close"></button> -->
        </div>
      </div>
    <div class="columns px-3 pb-3 is-centered is-vcentered">
      <div class="column is-4-desktop is-12-mobile is-8-tablet">
         <KeyBoard
          @onChange="onChange"
          @keypress="onKeyPress"
          @onKeyPress="onKeyPress"
          :guessedLetters="this.$store.state.guessedLetters"
          :input="input"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Header from './components/Header.vue';
import WordRow from './components/WordRow.vue';
import KeyBoard from './components/KeyBoard.vue';

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
      words_list: []
    }
  },
  beforeCreate() {
    console.log(this.$store.state.isWinner)
    this.$store.commit('checkWinner')
  },
  mounted() {
    this.get_words()
    window.addEventListener("keyup", (e) =>{
      e.preventDefault();
      let button = 
        e.keyCode == 13
         ? "{enter}"
         : e.keyCode == 8
         ? "{bksp}"
         : String.fromCharCode(e.keyCode).toLowerCase();
      this.onKeyPress(button)  
    } )
    document.title = "Wordle"
  },
  methods: {
    async get_words() {
      await axios
        .get('/api/v1/words/')
        .then(response => {
          this.words_list = response.data
          this.$store.state.solution = Object.values(this.words_list)[this.words_list.length-1].words
        })
        .catch(error => {
          console.log(error)
        })
    },
    onChange(input) {
      this.input = input;
    },
    onKeyPress(button) {
      const guesses = this.$store.state.guesses
      const currentGuessIndex = this.$store.state.currentGuessIndex
      const currentGuess = guesses[currentGuessIndex]
      if (currentGuessIndex >= 6 || localStorage.getItem('lastSubmitted')==this.$store.state.solution) {
        return;
      }
      if (button == "{enter}") {
        if (currentGuess.length == 5) {
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
        }
      } else if (button == "{bksp}") {
        guesses[currentGuessIndex] = currentGuess.slice(0, -1);
      } else if (currentGuess.length < 5) {
        const alphaRegex = /[a-zA-Z, ó]/;
        if (alphaRegex.test(button)) {
          guesses[currentGuessIndex] += button;
        }
      }
      console.log("button", button);
    },
    onInputChange(input) {
      this.input = input.target.value;
    },
      
  }
}
</script>

<style>
@import '~bulma/css/bulma.css';

/* 
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        color: #1a1a1b;
        border-bottom: 1px solid #d3d6da;
    } */
</style>
