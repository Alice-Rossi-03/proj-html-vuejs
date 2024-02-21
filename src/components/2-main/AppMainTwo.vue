<script>
import AppVsCard from './AppVsCard.vue';
import {store} from '../../store';


  export default{
    name: 'AppMainTwo',
    components:{
        AppVsCard
    },
    data(){
        return{
            store
        }
    }
  }
</script>

<template>
    <div class="bg-blue">
        <div class="container">

            <div class="top-container">
                <h5>Trending Battle</h5>
                <h2>Keep Eyes & Manage Upcoming Battle</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem possimus ex            similique nobis labore fugiat? Quam dolorem laudantium praesentium ab cumque,       sequi voluptates perferendis quibusdam? Ullam atque eligendi reiciendis harum.</p>
            </div>
            <div class="bottom-container">
                <AppVsCard v-for="(item, index) in store.vsCardList" :key="index" :propsItem="item"/>
            </div>

            
            <div class="button-container">
                <div class="button-border">
                    <button>
                        <span>view all matches </span> 
                        <i class="fa-solid fa-angles-right"></i>
                    </button>
                </div>
            </div>
            


        </div>
    </div>
  
</template>

<style lang="scss" scoped>

@use '../../styles/partials/variables' as *; 
    .bg-blue{
        background-color: $darker-blue;
    
        .container{
            width: 80%;
            text-align: center;
            margin: 0 auto;
            padding-block: 3em;

            .top-container{
                width: 50%;
                margin: 0 auto;
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
                    margin-bottom: 1.5em;
                }
            }
            .bottom-container{
                margin-top: 2em;
                display: flex;
                flex-wrap: wrap;
                gap: 1em;
                justify-content: center;
            }

            .button-container{
                display: flex;
                justify-content: center;
                margin-top: 2em; 
                .button-border{
                    border-radius: 1.3em; 
                    border: 1px solid $acquamarine; 
                    &:hover{
                        border: 1px dashed $yellowish;
                        cursor: pointer;
                    }

                    button{
                        background-color: $acquamarine; 
                        border: 0; 
                        padding: 0.7em; 
                        text-transform: uppercase; 
                        border-radius: 1.3em; 
                        margin: 0.3em; 

                        &:hover{
                            background-color: $yellowish;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
</style>
