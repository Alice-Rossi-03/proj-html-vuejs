<script>
import ListItem from '../../components/2-main/ListItem.vue'; 
import {store} from '../../store.js';

  export default{
    name: 'AppMainOne',
    components:{
        ListItem
    },
    data(){
        return{
            store
        }
    }
  }
</script>

<template>
    <div class="bg-black">
        <div class="bg-banner"></div>

        <div class="container">
            <div class="container-info">
                <h5>The Ultimate Competitive Gaming Platform</h5>
                <h2>Make Your Mark On The Battle Field</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem possimus ex similique nobis labore     fugiat? Quam dolorem laudantium praesentium ab cumque, sequi voluptates perferendis quibusdam? Ullam    atque eligendi reiciendis harum.</p>

                <ul class="listItems">
                    <ListItem v-for="(item, index) in store.featuresList" :key="index" :propsItem="item"/>
                </ul>


                <div class="buttons-container">
            
                    <div class="button-border">
                        <button class="explore-button">plan now</button>
                    </div>
                    
                </div>
            
            
            </div>
        </div>
    </div>
    
  


</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *; 

.bg-black{
    background-color: $black;
    padding-top: 4em;
    padding-bottom: 2em;
    display: flex;

    .bg-banner{
        background-image: url('../../assets/img/features-illus.png');
        width: 60em;
        // height: 80em;
        background-size: contain;
        background-repeat: no-repeat;
        }
    .container{
        background-color: $black;
        display: block;
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: center;

        .container-info{
            text-align: start;
            display: flex;
            flex-direction: column;
            gap: 0.4em; 
            width: 60%;
            // margin-right: auto;

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

            .buttons-container{
                display: flex; 
                gap: 1em; 
                margin-block: 1em; 

                .button-border{
                    border-radius: 1.3em; 
                    border: 1px solid $acquamarine; 
                    &:hover{
                        border: 1px dashed $yellowish;
                        cursor: pointer;
                    }
                    .explore-button{
                            background-color: $acquamarine;

                            &:hover{
                            background-color: $yellowish;
                            cursor: pointer;

                        }
                        }

                    button{
                        border: 0; 
                        padding: 0.7em; 
                        text-transform: uppercase; 
                        border-radius: 1.3em; 
                        margin: 0.3em;
                    }
                }

            }
        
        }
    }
}
    
</style>
