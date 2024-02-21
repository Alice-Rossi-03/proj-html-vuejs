<script>
import ReviewCard from './ReviewCard.vue'; 
import {store} from '../../store'; 

  export default{
    name: 'AppMainFive',
    components:{
        ReviewCard
    },
    data(){
        return{
            store,
            position: 0
        }
    },
    methods:{
        autoScroll(){
            console.log('helloWorld')
            const slider = document.getElementById('carousel')
            let amount = slider.offsetWidth/3
            this.position++ 
            if(this.position > 6){
                this.position = 0
                slider.scrollLeft = 0
            }
            slider.scrollBy({
                left: amount,
                behavior: 'smooth'
            });
        }
    },
    created(){
        setInterval(this.autoScroll, 3000)
    }
  }
</script>

<template>
  <div class="bg-black">
    <div class="container">
        <div class="infos-container">
            <h5>Live Streaming</h5>
            <h2>Watch The Streams</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam distinctio qui omnis nihil eaque quod nobis fugiat inventore assumenda facilis provident temporibus, aliquid eligendi fugit deleniti nisi ab perferendis doloremque.</p> 
        </div>

        <div id='carousel' class="carousel-container">
            <ReviewCard v-for="(item, index) in store.reviewsList" :key="index" :propsItem="item"/>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *; 
    .bg-black{
        background-color: $black;

        .container{
            width: 80%;
            margin: 0 auto;
            padding-top: 1em;
            padding-bottom: 3em;

            .infos-container{
                display: flex;
                flex-direction: column;
                gap: 0.5em;
                width: 60%;
                margin: 0 auto;
                text-align: center;

                h5{
                    color: $light-green;
                }

                h2{
                    color: $white; 
                    font-size: 2.5em; 
                    margin-block: 0.2em;
                }

                p{
                    font-family: sans-serif; 
                    color: $white; 
                    opacity: 0.60; 
                    line-height: 1.4em; 
                    font-size: 0.8em; 
                    margin-bottom: 1.5em;
                }

            }

            .carousel-container{
                display: flex;
                gap: 1em;
                overflow-x: scroll;
            }

            .carousel-container::-webkit-scrollbar {
                display: none;
            }
        }
    }
</style>
