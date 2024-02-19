<script>
import {store} from '../../store.js';
import AppNavBar from './AppNavBar.vue'

  export default{
    name: 'AppNav',
    components:{
        AppNavBar
    },
    data(){
        return{
            store
        }
    }
  }
</script>

<template>
  <div class="container">
    <div class="logo">
        <figure>
            <img src="../../assets/img/fav.png"/>
        </figure>
        <div class='futio'>FUTIO</div>
    </div>
    <div>
        <ul>
            <AppNavBar v-for="(item, index) in store.listItems" :key="index" :propsItem="item"/> 
        </ul>
    </div>
    <div class="streaming-button">
        <div class="figure-container">
            <figure>
                <img src="../../assets/icon/cart-icon.png"/>
            </figure>
        </div>
        
        <div class="notification">03</div>
        <div class="button-border">
            <button>live streaming</button>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables.scss' as *;

.container{
    width: 80%; 
    margin: 0 auto; 
    display: flex; 
    align-items: center; 
    justify-content: space-between; 

    .logo{
        display: flex;
        align-items: center;
        padding-block: 1em; 

        .futio{
        color: $white; 
    }

    }

    ul{
        display: flex; 
        align-items: center; 
        gap: 1em; 
        color: $white; 
        font-size: 0.8em; 
    }

    .streaming-button{
        display: flex; 
        gap: 1em; 
        align-items: center; 

        .figure-container{
            position: relative; 
        }

        .notification{
            position: absolute; 
            top: 1.2em;
            right: 24em; 
            color: $black; 
            font-size: 0.8em; 
            padding: 0.1em;
            border-radius: 50%; 
            font-family: sans-serif; 
            background-color: $acquamarine; 
        }

        .button-border{
            border-radius: 1.3em; 
            border: 1px solid $acquamarine; 

            button{
            background-color: $acquamarine; 
            border: 0; 
            padding: 0.7em; 
            text-transform: uppercase; 
            border-radius: 1.3em; 
            margin: 0.3em
        }
        }

        
    }

    
}

</style>
