<template>
    <div class="modal p-6 animate__animated"  :class="{'is-active animate__fadeIn': this.$store.state.aboutStatus}">
        <div class="modal-background"></div>
            <div class="modal-card game-help">
                <section class="modal-card-body">
                    <button class="delete is-pulled-right" @click="removeAbout" aria-label="close"></button>
                    <div class="instruction">
                        <p><strong>Ўйин қоидалари</strong></p>
                        <br>    
                        <p>6 та уринишда кун <strong>СЎЗ</strong>ини топинг</p>
                        <br>
                        <p>Ҳар бир тахминдан сўнг, катакларнинг ранги ўзгариб, сизнинг тахминингиз кун сўзига қанчалик яқин эканлигини кўрсатади.</p>
                    </div>
                    <div class="examples mt-3">
                        <div class="example">
                            <div class="row has-text-centered is-flex has-text-weight-medium">
                                <p class="letter mr-1 has-background-success has-text-white animate__animated animate__flipInX">С</p>
                                <p class="letter mr-1">А</p>
                                <p class="letter mr-1">Л</p>
                                <p class="letter mr-1">О</p>
                                <p class="letter mr-1">М</p>
                            </div>
                        </div>
                        <p class=""><strong>С</strong> ҳарфи СЎЗ ичида бор ва тўғри ўриндан жой олган.</p>
                        <div class="example">
                            <div class="row has-text-centered is-flex has-text-weight-medium">
                                <p class="letter mr-1">П</p>
                                <p class="letter mr-1">А</p>
                                <p class="letter mr-1 has-background-warning  has-text-white animate__animated animate__flipInX">Х</p>
                                <p class="letter mr-1">Т</p>
                                <p class="letter mr-1">А</p>
                            </div>
                        </div>
                        <p><strong>Х</strong> ҳарфи СЎЗ ичида бор лекин, нотўғри ўриндан жой олган.</p>
                        <div class="example">
                            <div class="row has-text-centered is-flex has-text-weight-medium">
                                <p class="letter mr-1 animate__animated animate__fadeIn">К</p>
                                <p class="letter mr-1">И</p>
                                <p class="letter mr-1">Т</p>
                                <p class="letter mr-1">О</p>
                                <p class="letter mr-1 has-text-white has-background-grey-light animate__animated animate__flipInX">Б</p>
                            </div>
                        </div>
                        <p class="mb-2"><strong>Б</strong> ҳарфи СЎЗ ичида иштирок этмаган.</p>
                    </div>
                    <br>
                    <p><strong>Ҳар куни сўз янгиланади!</strong></p>
                </section>
            </div>
    </div>
</template>
<script>
export default {
    name: "About",
    data() {
        return {
        }
    },
    props: {
        isActive: Boolean,
    },
    setup() {
        
    },
    mounted(){
    },
    methods: {
        removeAbout() {
          this.$store.state.aboutStatus = false
        },
    }
}
</script>


<style scoped>
    .border-gray-500 {
        border-color: #000000 !important;
    }
    .has-background-warning {
        background: #c9b458 !important;
        border-color: #c9b458 !important;
    }
    .has-background-grey-light {
        background: #787c7e !important;
        border-color: #787c7e !important;
    }
    .has-background-success {
        background: #6aaa64 !important;
        border-color: #6aaa64 !important; 
    }
    .modal-card {
        max-width: 500px !important;
    }

    .instructions {
        font-size: 14px;
    }
    .examples {
        border-bottom: 1px solid ;
        border-top: 1px solid;
    }
    .example {
        margin-top: 25px;
        margin-bottom: 10px;
    }
    .letter {
        width: 40px;
        height: 40px;
        font-size: 2rem;
        border: 2px solid #878a8c;
        box-sizing: border-box;
        text-transform: uppercase;
        text-align: center;
        padding-bottom: 20px;
        line-height: 35px;
    }
    @media only screen and (max-width: 500px) {
        .letter {
            width: 30px;
            height: 30px;
            line-height: 26px;
            text-align: center;
            font-size: 24px;
        }
    }
    @media only screen and (max-width: 500px) {
        p {
            line-height: 20px;
            font-size: 16px;
        }
        .modal-card {
            width: 350px;
            max-height: 710px;
        }
    }
    @media only screen and (min-width: 320px)
                       and (max-width: 360px){
        .letter {
            width: 30px;
            height: 30px;
            box-sizing: border-box;
            text-align: center;
            line-height: 24px;
            font-size: 25px;
        }
        p {
            line-height: 20px;
            font-size: 15px;
        }
        .modal-card {
            width: 350px;
            max-height: 680px;
        }
    }
    .modal-background {
        opacity: 0.3 !important;

    }

  


</style>