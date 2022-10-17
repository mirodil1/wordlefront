<template>
  <div class="wrapper">
    <Header/>
    <!-- <About
    /> -->
    <router-view/>
  </div>
</template>

<script>
import Header from './components/WordleHeader.vue';
// import About from './components/WordleAbout.vue'
// import { toast } from 'bulma-toast'

export default {
  name: 'App',
  components: {
    Header,
    // About,
  },
}
</script>

<style>
@import '~bulma/css/bulma.css';
  .is-centered {
    display: flex;
    justify-content: center;
  }
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
                       and (max-width: 360px){
    .info {
        width: 340px;
        /* box-sizing: border-box;
        text-align: center;
        line-height: 20px;
        font-size: 20px; */
    }
  }

</style>
