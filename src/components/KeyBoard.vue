<template>
  <div>
    <div :class="keyboardClass" class="found" ></div>
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
          
          "Ё Й Й Ц У К Е Н Г Ш Ў З Х Ъ",
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
        console.log("keyboard")
        this.keyboard.addButtonTheme(
          guessedLetters.miss.join(" "), 
          "miss"
        );
        console.log(guessedLetters.found.map(name => name.toUpperCase()).join(" "), "found");
        this.keyboard.addButtonTheme(
          guessedLetters.found.map(name => name.toUpperCase()).join(" "),
          "found"
        );
        this.keyboard.addButtonTheme(
          guessedLetters.found.join(" "),
          "hint"
        );
      },
    // deep: true
    }
  },
  methods: {
    onChange(input) {
      this.$emit("onChange", input);
    },
    onKeyPress(button) {
      this.$emit("onKeyPress", button.toLowerCase());
      console.log(this.keyboard.addButtonTheme())
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
  .hint {
    background-color: yellow !important;
  }
  .hg-red {
    background-color: red;
  }
  
</style>
