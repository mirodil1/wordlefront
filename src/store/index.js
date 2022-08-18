import { createStore } from 'vuex'

export default createStore({
  state: {
    solution: "",
    guesses: ["", "", "", "", "", ""],
    currentGuessIndex: 0,
    guessedLetters: {
      miss: [],
      found: [],
      hint: []
    },
    lastSubmitted: "",
    isWinner: false,
  },
  mutations: {
    checkWinner(state) {
      if (localStorage.getItem('lastSubmitted')==state.solution) {
        state.isWinner = true
      } else {
        state.isWinner = false
      }
    },
    setIsWinner(state, status) {
      state.isWinner = status
    }
  },
  actions: {
  },
  modules: {
  }
})