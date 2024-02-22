<script>
import SocialItem from './SocialItem.vue'; 
import {store} from '../../store'; 

  export default{
    name: 'AppFooter',
    components:{
      SocialItem
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
    <div class="bg-lighter">
        <div class="newsletter">
          <h2>Subscribe Newsletter</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam velit ratione, dolore qui possimus a, natus rerum eius assumenda voluptatem veniam aliquid rem ab laborum asperiores quisquam. Quas, mollitia corporis.</p>
        </div>
        <div class="input-button">
          <input type="text" placeholder="Enter Your Email..">
          <button>
            <i class="fa-brands fa-telegram"></i>
          </button>
        </div>
    </div>
    <div class="container">
      <div class="socials">
        <div class="logo">
          <figure>
            <img src="../../assets/img/fav.png" alt="">
          </figure>
          <div>FUTIO</div>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus vel quisquam, perferendis incidunt porro voluptates voluptate eos magni quos. Architecto, voluptate. At iure possimus odit quidem error molestiae reprehenderit dolorum.</p>
        <div class="icons">
          <div class="icon-box">
            <i class="fa-brands fa-instagram"></i>
          </div>
          <div class="icon-box">
            <i class="fa-brands fa-youtube"></i>
          </div>
          <div class="icon-box">
            <i class="fa-brands fa-twitch"></i>
          </div>
          <div class="icon-box">
            <i class="fa-brands fa-facebook"></i>
          </div>
        </div>
      </div>
      <div class="lists">
        <h3>Quick Links</h3>
        <ul>
          <SocialItem v-for="(item, index) in store.quickLinks" :key="index" :propsItem="item"/>
        </ul>
      </div>
      <div class="lists">
        <h3>Help</h3>
        <ul>
          <SocialItem v-for="(item, index) in store.helpList" :key="index" :propsItem="item"/>        
        </ul>
      </div>
      <div class="lists">
        <h3>Follow Us</h3>
        <ul>
          <SocialItem v-for="(item, index) in store.followList" :key="index" :propsItem="item"/>        
        </ul>
      </div>
      <div class="lists">
        <h3>Contact Us</h3>
        <div>
          <h4>Location:</h4>
          <div>4 Mayfield, Buckden, PE19 5SZ</div>
        </div>
        <div>
          <h4>Phone:</h4>
          <div>(302) 555-0107</div>
        </div>
      </div>
    </div>
    <div class="bg-darker">
      <span>
        <span>Copyright </span> 
        <i class="fa-regular fa-copyright"></i>
      </span>
      <span>
        <span>2022 </span>
        <span class="light-green">FUTIO</span>
        <span>.</span>
      </span>
      <span>All rights reserved.</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *; 
  .bg-blue{
    background-color: $blue;
    padding-top: 10em;

    .bg-lighter{
      background-color: $lighter-blue;
      padding: 3em;
      width: 70%;
      margin: 0 auto;
      border-radius: 1.5em;
      box-shadow: 0px 0px 10px 10px $black;
      color: $white;
      display: flex;
      align-items: center;
      margin-top: -17em;

      .newsletter{
        width: 60%;
        padding-right: 2em;

        h2{
        font-size: 2.5em;
        padding-bottom: 0.6em;
        }

        p{
          font-family: sans-serif;
          opacity: 0.7;
          line-height: 150%;
        }
      }

      .input-button{
        width: 50%;

        input{
          display: inline;
          background-color: #425374;
          border: none;
          width:100% ;
          height: 3em;
          padding: 1em;
          border-radius: 1.5em;   
          &:active{
            border: 1px solid $light-green;
          }
        }

        button{
          position: absolute;
          margin-top: em;
          margin-left: -2.8em;
          background-color: transparent;
          border: 0;
          overflow: hidden;
          border-radius: 50%;

          i{
            background-color: $white;
            font-size: 2.8em;
            border: 1px solid $white;
            color: $light-green;
          }
        }
      }
      

      
    }


    .container{
      width: 80%;
      margin: 0 auto;
      display: flex;
      padding-top: 6em;
      justify-content: space-between;
      align-items: flex-start;

      .socials{
        display: flex;
        flex-direction: column;
        gap: 1.5em;
        width: 30%;

        .logo{
          display: flex;
          gap: 0.5em;
          align-items: center;
          color: $white;
        }

        p{
          font-family: sans-serif;
          color: $white;
          opacity: 0.6;
        }

        .icons{
          display: flex; 
          gap: 1em; 
          align-items: center;

          .icon-box{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 3em;
            height: 3em;
            border: 1px solid $white;
            border-radius: 50%;
            &:hover{
              background-color: $light-green;
            }

            i{
            // border: 1px solid $white;
            // border-radius: 0.5em;
            color: $white;
            font-size: 1.5em;
            // padding: 0.5em;
          }
          }

          
        }
      }

      .lists{
        display: flex;
        flex-direction: column;
        gap: 1em;
        color: $white;

        ul{
          display: flex;
          flex-direction: column;
          gap: 0.6em;
        }

        h4{
          color: $light-green; 
          font-family: sans-serif;
        }

        div{
          font-family: sans-serif;
          // opacity: 0.6;
          line-height: 140%;
        }
      }
    }

    .bg-darker{
      text-align: center;
      color: white;
      background-color: $darker-blue;
      margin-top: 4em;
      padding-block: 2em;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.6em;
      font-family: sans-serif;

      .light-green{
        color: $light-green;
      }
    }
  }
</style>
