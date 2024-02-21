<script>
import {store} from '../../store'; 

  export default{
    name: 'ReviewCard',
    props:[
        'propsItem'
    ],
    data(){
        return{
            store,
            ratingStars: '',
            emptyStars: ''
        }
    },
    methods:{
        getRating(){
            this.ratingStars = this.propsItem.rating;
            this.ratingStars = Math.ceil(this.ratingStars / 2);
            this.emptyStars = 5 - this.ratingStars; 
        }
    },
    mounted(){
        this.getRating()
    }
  }
</script>

<template>
  <div class="box">
    <div> 
        <div class="stars">
            <!-- {{ propsItem.rating }} -->
            <i class="fa-solid fa-star" style="color: gold" v-for="(item) in ratingStars"></i>
            <i class="fa-solid fa-star" style="opacity: 0.50;" v-for="(item) in emptyStars"></i>
        </div>
        <p>
            {{ propsItem.review }}
        </p>
    </div>
    
    <div class="profile">
        <figure>
            <img :src="propsItem.img" alt="img">
        </figure>
        <div>
        
            <h4>
                {{ propsItem.name }}
            </h4>
            <div class="country">{{ propsItem.country }}</div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *; 
    .box{
        background-color: $lighter-blue;
        width: calc(25% - 1em);
        padding: 1em;
        border-radius: 1em;
        margin-top: 3em;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 1.2em;

        figure{
            width: 2em;
            img{
                width: 100%;
            }
        }
        p{
            font-family: sans-serif;
            line-height: 150%;
            opacity: 0.55;
            color: $white;
            margin-top: 0.7em;
        }

        .profile{
            display: flex;
            gap: 0.6em;
            // align-items: start;
            align-content:end;

            h4{
                color: $white;
            }

            .country{
                color: $light-green;
                font-size: 0.9em;
                font-family: sans-serif;
            }
        }
    }
</style>
