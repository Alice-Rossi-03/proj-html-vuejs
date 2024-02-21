<script>
import {store} from '../../store'; 

export default{
    name: 'SocialItem',
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
        {{ propsItem.name }}
    </li>
</template>

<style lang="scss" scoped>

li{
    opacity: 0.6;
    list-style-type: none;
    font-family: sans-serif;

    a{
        text-decoration: none;
    }
}
</style>