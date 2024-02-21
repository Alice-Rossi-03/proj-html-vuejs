<script>
  export default{
    name: 'AppNavBar',
    props:[
        'propsItem'
    ]
}

</script>

<template>
    <li :class="propsItem.active ? 'current' : '' " class="li" >{{ propsItem.name }}</li>
    
</template>

<style lang="scss" scoped>

@use '../../styles/partials/variables' as *;
    .li{
        list-style-type: none;

        &:hover{
            color: $light-green;
            cursor: pointer;
        }
    }

    .current{
        color: $light-green;
    }
</style>
