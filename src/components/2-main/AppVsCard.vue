<script>
import {store} from '../../store'; 

  export default{
    name: 'AppVsCard',
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
  <div class="container-card">
    <div class="top">
        <div class="top-in">
            <figure>
                <img :src="propsItem.opponentOne" alt="opp1">
            </figure>
            <figure>
                <img src="../../assets/img/verus-icon.png" alt="vs-icon">
            </figure>
            <figure>
                <img :src="propsItem.opponentTwo" alt="opp2">
            </figure>
        </div>
    </div>
    <div class="middle">
        <div class="infos">
            <h3>{{ propsItem.name }}</h3>
            <div>{{ propsItem.date }}</div>
        </div>
    </div>
    <div class="bottom">
        <div class="in-bottom">
            <div class="socials">
                <figure>
                    <i class="fa-brands fa-youtube"></i>
                </figure>
                <span>Youtube</span>
            </div>
            <div class="socials">
                <figure>
                    <i class="fa-brands fa-twitch"></i>
                </figure>
                <span>Twitch</span>
            </div>
        </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *; 

.container-card{
    width: calc(50% - 1em);
    border: 2px solid $lighter-blue; 
    border-radius: 1em;

    .top{
        background-color: $medium-blue;
        border-top-right-radius: 1em;
        border-top-left-radius: 1em;

        .top-in{
            padding: 1.7em;
            display: flex;
            justify-content: space-evenly;
            gap: 1em;
            align-items: center;
        }


    }

    .middle{
        background-color: $lighter-blue;

        .infos{
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            padding: 1.5em;

            h3{
                color: $white; 
            }

            div{
                color: $light-green; 
                opacity: 0.7;
                font-family: sans-serif;
                margin-top: 1em;
            }
        }
    }

    .bottom{
        background-color: $medium-blue;
        border-bottom-right-radius: 1em;
        border-bottom-left-radius: 1em;

        .in-bottom{
            display: flex;
            gap: 1em;
            justify-content: center;
            padding: 1.7em;
            align-items: center;

            .socials{
                display: flex;
                align-items: center;
                gap: 0.2em;
            }
        }
    }

    .fa-youtube{
        color: #F30B03; 
        font-size: 2em;
    }
    .fa-twitch{
        font-size: 2em;
        color: #9146FF; 
    }

    span{
        color: $white; 
        font-family: sans-serif;
    }
    
}
</style>
