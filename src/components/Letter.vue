<template>
    <div 
        class="column is-2-desktop is-2-tablet is-2-mobile letter-border has-text-centered m-1 has-text-weight-bold	"
        :class="{
            'has-background-grey-light has-text-white'
             : color == 'gray',
            'has-background-success	has-text-white'
             : color == 'green',
             'has-background-warning has-text-white'
             : color == 'yellow'          
        }"
    >
        {{letter}}
    </div>
</template>

<script>
export default {
    name: "Letter",
    props: {
        letter: {
            type: String,
            default: "",
        },
        color: {
            type: String,
            default: ""
        }
    },
    // data() {
    //     return {
    //         letter: "A"
    //     }
    // },
}
</script>

<style scoped>
    .letter-border {
        width: 100%;
        height: 60px;
        font-size: 2rem;
        line-height: 2rem;
        border: 2px solid #d3d6da;
        box-sizing: border-box;
        text-transform: uppercase;
    }
    @media only screen and (max-width: 500px) {
        .letter-border {
            height: 55px;
            line-height: 2rem;
            text-align: center; 
        }
    }
    @media only screen and (min-width: 320px) 
                       and (max-width: 375px){
        .letter-border {
            height: 40px;
            box-sizing: border-box;
            text-align: center;
            line-height: 12px;
            font-size: 25px;
        }
    }
</style>