<template>
  <div>
    <div class="simple-keyboard"></div>
  </div>
</template>

<script>
import Keyboard from 'simple-keyboard';
import 'simple-keyboard/build/css/index.css';

export default {
  data: () => ({
  keyboard: null
  }),
  name: 'KeyBoard',
  props: {
    keyboardClass: {
      default: "simple-keyboard",
      type: String
    },
    guessedLetters: Object,
    input: {
      type: String
    }
  },
  
  mounted() {
     this.keyboard = new Keyboard(this.keyboardClass, {
      layout: {
        'default': [
          "q w e r t y u i o p ó",
          ' a s d f g h j k l ',
          '{enter} z x c v b n m {bksp}',
        ]
      },
      onChange: this.onChange,
      onKeyPress: this.onKeyPress
    });
  },
  watch: {
    guessedLetters: {
      handler(guessedLetters) {
        this.keyboard.addButtonTheme(
          guessedLetters.miss.join(" "), 
          "miss"
        );
        this.keyboard.addButtonTheme(
          guessedLetters.found.join(" "), 
          "found"
        );
        this.keyboard.addButtonTheme(
          guessedLetters.found.join(" "),
          "hint"
        );
      },
    deep: true
    }
  },
  methods: {
    onChange(input) {
      this.$emit("onChange", input);
    },
    onKeyPress(button) {
      this.$emit("onKeyPress", button);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .border {
    border: 1px solid red;
  }
  #div.found {
    background-color: green !important;
  }
  #div.hint {
    background-color: yellow !important;
  }
</style>
