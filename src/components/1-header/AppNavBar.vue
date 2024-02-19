<script>
  export default{
    name: 'AppNavBar',
    props:[
        'propsItem'
    ]
}

</script>

<template>
    <li>{{ propsItem.name }}</li>
</template>

<style lang="scss" scoped>
    li{
        list-style-type: none;
    }
</style>
