<template>
    <div class="modal p-6 animate__animated"  :class="{'is-active animate__fadeIn': this.$store.state.aboutStatus}">
        <div class="modal-background"></div>
            <div class="modal-card game-help p-3">
                <section class="modal-card-body">
                    <button class="delete is-pulled-right" @click="removeAbout" aria-label="close"></button>
                    <div class="instruction">
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
                                <p class="letter mr-1">С</p>
                                <p class="letter mr-1">А</p>
                                <p class="letter mr-1 has-background-warning  has-text-white animate__animated animate__flipInX">Л</p>
                                <p class="letter mr-1">О</p>
                                <p class="letter mr-1">М</p>
                            </div>
                        </div>
                        <p><strong>Л</strong> ҳарфи СЎЗ ичида бор ва нотўғри ўриндан жой олган.</p>
                        <div class="example">
                            <div class="row has-text-centered is-flex has-text-weight-medium">
                                <p class="letter mr-1 animate__animated animate__fadeIn">С</p>
                                <p class="letter mr-1">А</p>
                                <p class="letter mr-1">Л</p>
                                <p class="letter mr-1 has-text-white has-background-grey-light animate__animated animate__flipInX">О</p>
                                <p class="letter mr-1">М</p>
                            </div>
                        </div>
                        <p><strong>О</strong> ҳарфи СЎЗ ичида иштирок этмаган.</p>
                    </div>
                </section>
                
            </div>
    </div>
</template>
<script>
export default {
    name: "About",
    props: {
        isActive: Boolean,
    },
    setup() {
        
    },
    methods: {
        removeAbout() {
          this.$store.state.aboutStatus = false
        },
    }
}
</script>


<style scoped>
    .game-help {
        max-width: 460px !important;
    }

    .instructions {
        font-size: 14px;
    }
    /* .game-help {
        max-width: 466px;
    } */
    .examples {
        border-bottom: 1px solid ;
        border-top: 1px solid;
    }
    .example {
        margin-top: 24px;
        margin-bottom: 24px;
    }
    .letter {
        width: 40px;
        height: 40px;
        font-size: 2rem;
        border: 2px solid #d3d6da;
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
            line-height: 24px;
            text-align: center;
            font-size: 24px;
        }
    }
    @media only screen and (max-width: 500px) {
        p {
            line-height: 16px;
            font-size: 13px;
        }
    }
    @media only screen and (min-width: 320px)
                       and (max-width: 375px){
        .letter {
            width: 30px;
            height: 30px;
            box-sizing: border-box;
            text-align: center;
            line-height: 25px;
            font-size: 25px;
        }
    }
    .modal-background {
        opacity: 0.3 !important;

    }


</style>