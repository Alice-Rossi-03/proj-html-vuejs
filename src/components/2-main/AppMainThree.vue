<script>
  export default{
    name: 'AppMainThree'
  }
</script>

<template>
  <div class="bg-black">
    <div class="container">
        <h2>Futio Quick Facts</h2>

        <div class="box-container">
            <div class="box">
                <h2>1135</h2>
                <div>Twitch Streams</div>
            </div>
            <div class="box">
                <h2>44</h2>
                <div>Total Games</div>
            </div>
            <div class="box">
                <h2>982</h2>
                <div>Youtube Streams</div>
            </div>
            <div class="box">
                <h2>40</h2>
                <div>Pro Team</div>
            </div>

        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

.bg-black{
    background-color: $black;

    .container{
        width: 80%;
        margin: 0 auto;
        padding-block: 4em;

        h2{
            font-size: 2.5em; 
            color: $white; 
            text-align: center;
        }

        .box-container{
            display: flex;
            justify-content: space-between;
            gap: 1em;

            .box{
                width: calc(25% - 1em);
                text-align: center;
                margin-top: 3em;
                border: 1px solid $darker-blue; 
                border-radius: 2em;
                padding: 1em;
                box-shadow: 0px 0px 7px 5px $darker-blue;

                div{
                    color: $light-green;
                    font-family: sans-serif;
                    margin-top: 1em;
                    opacity: 0.6;
                }
            }
        }

    }

}


</style>
