<script>
  export default{
    name: 'AppMainSix'
  }
</script>

<template>
  <div class="bg-black">
    <div class="container">
        
        <figure class="bottom-left">
            <img src="../../assets/img/banner-item-obj1.png" alt="">
        </figure>

        <div class="infos">
            <h5>Make Offer</h5>
            <h2>Get 70% Offer Discount</h2>
            <button>Get Offers</button>
        </div>

        <figure class="top-right">
            <img src="../../assets/img/banner-item-obj2.png" alt="">
        </figure>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *; 

.bg-black{
    background-color: $black;
    padding-top: 4em; 

    .container{
        background-image: url('../../assets/img/banner-item-bg.png');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 1em;
        width: 80%;
        margin: 0 auto;
        box-shadow: 0px 0px 5px 5px #41ba5f76;
        padding-block: 2em;
        position: relative;
        overflow: hidden;

        .infos{
            margin: 0 auto;
            width: 50%;
            text-align: center;
            color: white;
            display: flex;
            flex-direction: column;
            gap: 1em;

            h2{
                font-size: 2.5em;
            }

            button{
                width: fit-content;
                margin: 0 auto;
                background-color: #308F3E;
                border: 0;
                padding: 1em;
                border-radius: 1.5em;
                font-size: 0.8em;
                color: $white;
                
            }
        }

        .bottom-left{
            position: absolute;
            width: 15em;

            img{
                width: 100%;
            }
        }

        .top-right{
            position: absolute;
            width: 15em;
            top: -3em;
            right: 1em;

            img{
                width: 100%;
            }
        }
    }
}
</style>
