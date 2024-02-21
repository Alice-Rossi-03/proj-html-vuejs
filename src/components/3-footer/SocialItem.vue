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
@use '../../styles/partials/variables' as *;
li{
    opacity: 0.6;
    list-style-type: none;
    font-family: sans-serif;

    &:hover{
        color: $light-green;
        cursor: pointer;
    }
}
</style>