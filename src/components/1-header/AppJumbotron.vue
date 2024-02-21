<script>
  export default{
    name: 'AppJumbotron'
  }
</script>

<template>
  <div class="container">
    <div class="features-description">
        <h5>Game With Live Streaming</h5>
        <h2>Future Of E-Sports</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem possimus ex similique nobis labore fugiat? Quam dolorem laudantium praesentium ab cumque, sequi voluptates perferendis quibusdam? Ullam atque eligendi reiciendis harum.</p>
        <div class="buttons-container">

            <div class="button-border">
                <button class="explore-button">explore games</button>
            </div>
            <div class="button-border">
                <button class="play-button">
                    <i class="fa-solid fa-play"></i>
                </button>
            </div>
            
        </div>
    </div>
    
    <!-- <figure>
        <img src="../../assets/img/index-banner-illus.png" alt="">
    </figure> -->

    <div class="bg-banner"></div>
    
  </div>

  <figure class="pos-abs">
    <img src="../../assets/img/game-controler.png"/>
  </figure>

</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables.scss' as *;

    .container{
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        z-index: 999; 
        position: relative;

        .features-description{
            align-self: center; 
            display: flex; 
            flex-direction: column; 
            gap: 0.4em; 
            
            h5{
                color: $light-green;
            }

            h2{
                color: $white; 
                font-size: 2.5em; 
            }

            p{
                font-family: sans-serif; 
                color: $white; 
                opacity: 0.60; 
                line-height: 1.4em; 
                font-size: 0.8em; 
            }

            .buttons-container{
                display: flex; 
                gap: 1em; 
                margin-block: 1em; 

                .button-border{
                    border-radius: 1.3em; 
                    border: 1px solid $acquamarine; 

                    .explore-button{
                            background-color: $acquamarine;
                        }

                    button{
                        border: 0; 
                        padding: 0.7em; 
                        text-transform: uppercase; 
                        border-radius: 1.3em; 
                        margin: 0.3em;

                        
                        .play-button{
                            border-radius: 50%; 
                        }
                        i{
                            color: $acquamarine; 
                            }
                    }
                }
            }
        }

        
        figure{
            width: 60em;
            img{
                width: 100%;
            }
        } 

        .bg-banner{
            background-image: url('../../assets/img/index-banner-illus.png');
            background-size: cover; 
            background-repeat: no-repeat; 
            background-position: center; 
            width: 75em; 
            height: 32em; 
        }
    }

    .pos-abs{
            position: absolute; 
            z-index: 1; 
            bottom: 2em; 
            width: 20em; 

            img{
                width: 100%; 
            }
        }
</style>
