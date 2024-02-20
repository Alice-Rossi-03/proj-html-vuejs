<script>
  export default{
    name: 'AppMainSeven'
  }
</script>

<template>
  <div class="bg-black">
    <div class="container">
        <div class="infos">
            <h5>Latest News</h5>
            <h2>Stay Updated With Our Latest News Articles</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam distinctio qui omnis nihil eaque quod nobis fugiat inventore assumenda facilis provident temporibus, aliquid eligendi fugit deleniti nisi ab perferendis doloremque.</p>
        </div>
        <div class="flex-box">

        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *; 

.bg-black{
    background-color: $black;
    padding-top: 4em; ;

    .container{
        .infos{
            text-align: center;
            padding-top: 5em;
            padding-bottom: 3em;
            width: 60%;
            margin: 0 auto;
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
    }

}
</style>
