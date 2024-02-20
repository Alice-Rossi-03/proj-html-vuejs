<script>
import {store} from '../../store.js';

  export default{
    name: 'ListItem',
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
  <li>
    <figure>
        <i :class="propsItem.fa"></i>
    </figure>

    <div>
        <h4>{{ propsItem.name }}</h4>
        <p>{{ propsItem.infos }}</p>
    </div>
  </li>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *; 

li{
    display: flex;
    gap: 0.5em;
    list-style-type: none;
    margin-bottom: 1.5em;

    figure{
        i{
            font-size: 2em;
            color: $acquamarine; 
            background-color: #21261F;
            border-radius: 50%;
            padding: 0.5em;
        }
    }

    div{
        h4{
            color:$white; 
            margin-bottom: 0.3em;
        }
        p{
            font-family: sans-serif; 
            color: $white; 
            opacity: 0.60; 
            line-height: 1.4em; 
            font-size: 0.8em; 
        }

    }
}


</style>
