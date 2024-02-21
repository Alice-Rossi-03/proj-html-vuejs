<script>
  export default{
    name: 'AppMainThree',
    data(){
        return{
            min: '', 
            max:''
        }
    },
    methods: {
        getRandomNumber(min, max){
            return Math.floor(Math.random()*(max-min + 1) )
        }
    },
    mounted(){
        this.getRandomNumber(min,max)
    }
  }
</script>

<template>
  <div class="bg-black">
    <div class="container">
        <h2>Futio Quick Facts</h2>

        <div class="box-container">
            <div class="box">
                <h2>{{getRandomNumber(1,5000)}}</h2>
                <div>Twitch Streams</div>
            </div>
            <div class="box">
                <h2>{{getRandomNumber(1,70)}}</h2>
                <div>Total Games</div>
            </div>
            <div class="box">
                <h2>{{getRandomNumber(1,100)}}</h2>
                <div>Youtube Streams</div>
            </div>
            <div class="box">
                <h2>{{getRandomNumber(1,200)}}</h2>
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
