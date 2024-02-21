<script>
import {store} from '../../store'; 

  export default{
    name: 'NewArticle',
    props:[
        'propsItem'
    ],
    data(){
        return{
            store
        }
    }
  }
</script>

<template>
  <div class="box">
    <figure>
        <img :src="propsItem.img" alt="">
    </figure>
    <div class="d-flex">
        <div class="statistics">
            <div class="stats-con"> 
                <i class="fa-solid fa-clock"></i>
                <span>10 Min</span>
            </div>
            <div class="stats-con">
                <i class="fa-solid fa-eye"></i>
                <span>240</span>
            </div>
            <div class="stats-con">
                <i class="fa-regular fa-calendar"></i>
                <span>11 April 2022</span>
            </div>
        </div>
        <h3>{{propsItem.name}}</h3>
    </div>
    
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *; 

.box{
    background-color: $blue;
    border-radius: 1em;
    display: flex;
    gap: 0.3em;
    align-items: center;
    // justify-content: center;
    width: 100%;
    height: calc((100% / 3) - 1em);
    
    .d-flex{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    figure{
        // width: 6em;
        height: 100%;
        img{
            // width: 100%;
            height: 100%;
            border-radius: 1em;
        }
    }
    .statistics{
        padding-inline: 1.4em;
        display: flex;
        gap: 1.5em;


        .stats-con{
            display: flex;
            align-items: center;
            gap: 0.3em;
            margin-bottom: 0.5em;

            span{
                color: $light-green;
                font-size: 0.9em;
                font-family: sans-serif;
            }

            i{
                color: $light-green;
                font-size: 0.9em;
            }

        }
    }   

    h3{
        padding-inline: 1em;
        padding-bottom: 1em;
        color: $white;
        font-size: 1.3em;
    }
}

</style>
