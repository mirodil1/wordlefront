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
    guessedLetters: {
      type: Object
    },
    input: {
      type: String
    }
  },
  
  mounted() {
     this.keyboard = new Keyboard(this.keyboardClass, {
      layout: {
        'default': [
          
          "Ё Й Ц У К Е Н Г Ш Ў З Х Ъ",
          'Ф Қ В А П Р О Л Д Ж Э',
          'Я Ч С М И Т Ь Б Ю Ғ Ҳ {bksp}',
          "{enter}",
        ]
      },
      display: {
        '{bksp}': '⌫',
        '{enter}': 'Текшириш'
      },
      onChange: this.onChange,
      onKeyPress: this.onKeyPress
    });
    
  },
  watch: {
    guessedLetters: {
      handler(guessedLetters) {
        console.log(guessedLetters)
        this.keyboard.addButtonTheme(
          guessedLetters.miss.map(name => name.toUpperCase()).join(" "),
          "is-dark animate__animated animate__fadeIn"
        );
        this.keyboard.addButtonTheme(
          guessedLetters.found.map(name => name.toUpperCase()).join(" "),
          "is-success animate__animated animate__fadeIn"
        );
        this.keyboard.addButtonTheme(
          guessedLetters.hint.map(name => name.toUpperCase()).join(" "),
          "is-warning animate__animated animate__fadeIn"
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
      this.$emit("onKeyPress", button.toLowerCase());
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .simple-keyboard.hg-layout-default .hg-button.is-warning {
    background: hsl(48, 100%, 67%);
    color: white;
  }
  .simple-keyboard.hg-layout-default .hg-button.is-dark {
    background: hsl(0, 0%, 71%);
    color: white;
  }
  .simple-keyboard.hg-layout-default .hg-button.is-success {
    background: hsl(141, 53%, 53%);
    color: white;
  }
</style>
