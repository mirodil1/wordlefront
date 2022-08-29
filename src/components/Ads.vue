<template>
    <div>
        <div class="modal" :class="{'is-active': isActive}">
            <div class="modal-background"></div>
            <div class="modal-content">
                <p class="image is-4by3">
                <img v-bind:src="'https://cp.wordlebot.uz'+ads.image">
                </p>
            </div>
            <button class="modal-close is-large" @click="switchModal"  aria-label="close"></button>
        </div>
    </div>

</template>

<script>
import axios from 'axios';
    export default {
        name: 'Ads',
        data() {
            return {
                ads: {},
                isActive: true,
            }
        },
        mounted() {
            this.getAds()
            // this.switchModal()
        },
        methods: {
            async getAds() {
                await axios
                    .get('api/v1/ads/')
                    .then(response => {
                        this.ads = response.data[0]
                        // console.log(response.data)
                        // console.log(this.ads.get_image)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            switchModal() {
                if (!localStorage.getItem('newUser')) {
                    localStorage.setItem('newUser', false)
                    this.$store.state.aboutStatus = true
                    console.log(true)
                } else {
                    this.$store.state.aboutStatus = false
                }
                this.isActive = false
                this.$store.commit('checkWinner')
            }
        }

    }
</script>