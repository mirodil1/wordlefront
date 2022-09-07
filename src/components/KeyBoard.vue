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
      // theme: "hg-theme-default hg-layout-default myTheme",
      layout: {
        'default': [
          
          "Q Ё Й Ц У К Е Н Г Ш Ў З Х Ъ",
          'Ф Қ В А П Р О Л Д Ж Э',
          'Я Ч С М И Т Ь Б Ю Ғ Ҳ {bksp}',
          "{enter}",
        ]
      },
      buttonTheme: [
        {
          class: "hg-red",
          buttons: "Q Я Ч С М И Т Ь Б Ю Ғ Ҳ"
        },
        {
          class: "hg-highlight",
          buttons: "Q Ф Қ В А П Р О"
        }
      ],
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
        // this.keyboard.addButtonTheme(
        //   guessedLetters.miss.join(" "), 
        //   "is-dark"
        // );
        this.keyboard.addButtonTheme(
          guessedLetters.miss.map(name => name.toUpperCase()).join(" "),
          "is-dark"
        );
        console.log(this.keyboard)
        console.log(guessedLetters.found.map(name => name.toUpperCase()).join(","), "found");
        this.keyboard.addButtonTheme(
          guessedLetters.found.map(name => name.toUpperCase()).join(" "),
          "is-primary"
        );
        // console.log(guessedLetters.found.join(" "),
        //   "is-warning")
        this.keyboard.addButtonTheme(
          guessedLetters.hint.join(" "),
          "is-warning"
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
      console.log(this.keyboard.buttonTheme, this.guessedLetters)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .simple-keyboard.hg-theme-default.myTheme {
    border: 1px solid rgba(45, 30, 80, 0.7);
    border-radius: 10px;
    margin: 10px;
    width: calc(100% - 20px);
  }
  .simple-keyboard.hg-layout-default .hg-button.hg-red {
    background: rgba(0, 247, 49, 0.7);
    color: white;
  }
  .simple-keyboard.hg-layout-default .hg-button.hg-highlight {
    box-shadow: 0px 0px 40px 5px rgba(255, 136, 0, 0.5);
    z-index: 1;
  }
  /* .border {
    border: 1px solid red;
  }
  #div.found {
    background-color: green !important;
  }
  .hint {
    background-color: yellow !important;
  } */
  
</style>
