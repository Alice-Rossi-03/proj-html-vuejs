<script>
  export default{
    name: 'AppMainFour',
    data(){
        return{
            active: false
        }
    },
    methods:{
        showVid(){
            this.active = true
        }
    }
  }
</script>

<template>
  <div class="bg-banner">
    <div class="container">
        <div class="stream-container">
            <h5>Live Streaming</h5>
            <h2>Watch The Streams</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam distinctio qui omnis nihil eaque quod nobis fugiat inventore assumenda facilis provident temporibus, aliquid eligendi fugit deleniti nisi ab perferendis doloremque.</p>
        </div>

        <div class="stream-screen">

            <figure>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/qcL3nk6sYv0?si=eF-AwY0_doKgFGgw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </figure>

            <div class="pos-abs" :class="active ? 'd-none' : ''">
                
                <div class="live-container">
                    <i class="fa-solid fa-bullseye"></i>
                    <span>Live</span>
                </div>

                <div class="button-container">
                    <div class="border-button">
                        <button @click="showVid">
                            <i class="fa-solid fa-play"></i>
                        </button>
                    </div>
                    <h3>League Of Legends</h3>
                </div>

                <div class="infos-container">
                    <div class="views">
                        <h5>360K</h5>
                        <i class="fa-solid fa-eye"></i>
                    </div>
                    <div class="likes">
                        <h5>60K</h5>
                        <i class="fa-solid fa-thumbs-up"></i>
                    </div>
                </div>

            </div>
            
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

@use '../../styles/partials/variables' as *; 

    .bg-banner{
        background-image: url('../../assets/img/live-streaming-bg.png') ;
        background-repeat: no-repeat;
        background-size: contain;
        background-color: $black;
        .container{
            width: 80%;
            margin: 0 auto;
            padding-bottom: 4em;
            
            .stream-container{
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

            .stream-screen{
                display: flex;
                justify-content: center;
                border-radius: 1em;
                position: relative;

                figure{
                        border-radius: 1em;

                        iframe{
                            overflow: hidden;
                            border-radius: 1em;
                            box-shadow: 0px 0px 15px 3px rgba(0,0,0,0.83);
                        }
                    }
                .pos-abs{
                    position: absolute;
                    background-image: url('../../assets/img/video-bg.png');
                    width:560px;
                    height:315px; 
                    border-radius: 1em;
                    background-size: cover;
                    

                    .live-container{
                        background-color: $orange;
                        width: fit-content;
                        padding: 0.5em;
                        border-radius: 1em;
                        font-family: sans-serif;
                        display: flex;
                        gap: 0.3em;
                        position: absolute;
                        top: 1em;
                        right: 1em;
                    }

                    .button-container{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        position: absolute;
                        top: 50%;
                        right: 50%;
                        transform: translate(50%, -50%);
                        
                        .border-button{
                            width: fit-content;
                            border-radius: 1.3em; 
                            border: 1px solid $acquamarine; 

                            button{
                                background-color: tra;
                                border: 0; 
                                margin: 0.3em; 
                                border-radius: 1.3em; 
                                padding: 0.8em;
                                background-color: $white;

                                i{
                                    color: $acquamarine; 
                                    font-size: 1.5em;

                                }
                            }
                        }

                        h3{
                            color: $white;
                            margin-top: 0.3em;
                        }
                    }

                    .infos-container{
                        display: flex;
                        gap: 2em;
                        position: absolute;
                        left: 1em;
                        bottom: 1em;
                        .views{
                            display: flex;
                            gap: 0.2em;
                            align-items: center;

                            h5{
                                color: $light-green; 
                            }
                            i{
                                color: $white;
                            }
                        }
                        .likes{
                            display: flex;
                            gap: 0.2em;
                            align-items: center;

                            h5{
                                color: $light-green; 
                            }
                            i{
                                color: $white;
                            }
                        }

                        
                    }
                }

                .d-none{
                    display: none;
                }

                


            }
        }

    }
    
</style>
