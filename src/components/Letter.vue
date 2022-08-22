<template>
    <div 
        class="letter-border has-text-centered m-1 has-text-weight-bold "
        :class="{
            'has-background-grey-light has-text-white animate__animated animate__flipInX'
             : color == 'gray',
            'has-background-success	has-text-white animate__animated animate__flipInX'
             : color == 'green',
             'has-background-warning has-text-white animate__animated animate__flipInX'
             : color == 'yellow',
            //  'animate__animated animate__shakeX'
            //  : checked == true
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
        },
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
        width: 60px;
        height: 60px;
        font-size: 2rem;
        /* line-height: 55px; */
        border: 2px solid #d3d6da;
        box-sizing: border-box;
        text-transform: uppercase;
    }
    @media only screen and (max-width: 500px) {
        .letter-border {
            width: 50px;
            height: 50px;
            line-height: 3rem;
            text-align: center;
            font-size: 25px;
        }
    }
    @media only screen and (min-width: 320px) 
                       and (max-width: 375px){
        .letter-border {
            width: 40px;
            height: 40px;
            box-sizing: border-box;
            text-align: center;
            line-height: 30px;
            font-size: 25px;
        }
    }

</style>