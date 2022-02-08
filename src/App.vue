<template>
  <div id="app">

    <div id="nav">
      <div id="navigation">
        <img :src="logo" alt="">
          <router-link exact to="/">首页</router-link>
           <router-link exact to="/songSheet">歌单</router-link>
            <router-link exact to="/singer">歌手</router-link>
             <!-- <router-link exact to="/rankingList">排行榜</router-link>
      <router-link to="/about">关于</router-link> -->
      </div>
      
    </div>
    
    <router-view/>
  
 
  <div v-if="isPlay" id="footer">
            <aplayer ref="player"
                    autoplay
                     listMaxHeight="200px"
                     :music="songList[0]"
                     :list="songList"
            />
        </div>

 

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import aplayer from "vue-aplayer";
import BottomControl from "./views/bottomControl/BottomControl.vue"
export default {
  name: 'app',
  components: {
    // HelloWorld
    aplayer,BottomControl
  }, data() {
        return {
             isPlay: false,
            songList:[],
            songList2:[],
            logo:require('./assets/logo2.png')
        }
    },

    provide() {
        return {
            addSong: this.addSong
        }
    },methods: {
        async addSong(row) {
            console.log(row);
            this.isPlay = true;


            if (!this.findElem(this.songList,"id",row.id)){
                    
                this.songList.push({
                  
                    id:row.id,
                    title:row.ar[0].name,
                    artist:row.al.name,
                    src:this.songUrl(row.id),
                    pic:row.al.picUrl,
                  
                })
                // console.log(src,title)
            }
            console.log(this.songUrl(row.id));
        

        },
        async songUrl(id){
             let res =await this.$request("/song/url",{id:id});
            // console.log(res.data.data[0].url);
          //  srcSong=res.data.data[0].url;
            return res.data.data[0].url;
        },
        findElem(arrayToSearch, attr, val) {
           
            for (var i = 0; i < arrayToSearch.length; i++) {
                if (arrayToSearch[i][attr] == val) {
                    return true;
                }
            }
            return false;
        },
    },
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}

#nav{
  width: 100%;
  height: 50px;
  /* background:rgba(99, 99,99, 0.1) */
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
}
#navigation{
  margin: 0 auto;;
  width: 1200px;
  height: 50px;
  line-height: 50px;
  background: rgba(226, 98, 94, 0.2);
}
#navigation a{
  text-align: center;
  float: left;
  display: block;
  width: 150px;
  height: 50px;
  font-size: 22px;
}
#navigation img{
  width: 150px;
  height: 50px;
  float: left;
}
#navigation a:hover{
  background: rgba(226, 98, 94, 0.5);
}
.Active{
  color: red
}
#footerMusic{
  position: fixed;
    left: 0px;
    bottom: 0px;
  width: 100%;
  height: 150px;
  background: rgba(11, 222, 21, 0.6);
  z-index: 9999;
}
</style>
