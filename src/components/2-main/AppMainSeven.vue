<script>
import NewArticle from './NewArticle.vue'; 
import {store} from '../../store'; 

  export default{
    name: 'AppMainSeven',
    components:{
        NewArticle
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
    <div class="container">
        <div class="infos">
            <h5>Latest News</h5>
            <h2>Stay Updated With Our Latest News Articles</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam distinctio qui omnis nihil eaque quod nobis fugiat inventore assumenda facilis provident temporibus, aliquid eligendi fugit deleniti nisi ab perferendis doloremque.</p>
        </div>
        <div class="flex-box">
            <div class="box-con">
                <div class="big-box">
                    <figure>
                        <img src="../../assets/img/blog-item-1.png" alt="">
                    </figure>
                    <div class="statistics">
                        <div class="stats-con"> 
                            <i class="fa-solid fa-clock"></i>
                            <span>10 Min</span>
                        </div>
                        <div class="stats-con">
                            <i class="fa-solid fa-eye"></i>
                            <span>240</span>
                        </div>
                        <div class="stats-con">
                            <i class="fa-regular fa-calendar"></i>
                            <span>11 April 2022</span>
                        </div>
                    </div>
                    <h3>Secrets To An Amazing Role Playing Games</h3>
                </div>
            </div>
            <div class="box-con-flex">
                <NewArticle v-for="(item, index) in store.articlesList" :key="index" :propsItem="item"/>
            </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *; 

.bg-black{
    background-color: $black;
    padding-bottom: 10em; 

    .container{
        width: 80%;
        margin: 0 auto;
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

        .flex-box{
            display: flex;
            gap: 1em;
            height: 485px;

            .box-con{
                width: 50%;
                // height: 100%;

                .big-box{
                    width: 100%;
                    height: 100%;
                    background-color: $blue;
                    display: flex;
                    flex-direction: column;
                    gap: 0.7em;
                    border-radius: 1em;

                    figure{
                        img{
                            width: 100%;
                        }
                    }

                    .statistics{
                        padding-inline: 1em;
                        display: flex;
                        gap: 1.5em;

                        .stats-con{
                            display: flex;
                            align-items: center;
                            gap: 0.3em;

                            span{
                                color: $light-green;
                                font-family: sans-serif;
                            }

                            i{
                                color: $light-green;
                            }

                        }
                    }

                    h3{
                        padding-inline: 1em;
                        padding-bottom: 1em;
                        color: $white;
                    }
                }
            }

            .box-con-flex{
                display: flex;
                flex-direction: column;
                // gap: 1em;
                justify-content: space-between;
                width: calc(50% - 1em);
                height: 100%;
            }
        }
    }

}
</style>
