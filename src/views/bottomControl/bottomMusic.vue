<template>
    <div>
        <h1>dddddddf</h1>
      <!-- <audio
      src="https://moeplayer.b0.upaiyun.com/aplayer/secretbase.mp3"
      ref="audioPlayer"
      autoplay
      @play="changeState(true)"
      @pause="changeState(false)"
      @ended="changeMusic('next')"
      @timeupdate="timeupdate"
    ></audio> -->
   
    <aplayer autoplay
  :music="{
    title: 'secret base~君がくれたもの~',
    artist: 'Silent Siren',
    src: 'http://m8.music.126.net/20220208143523/5b11d821d0b85d064bd551dc9efed241/ymusic/4b0e/c937/8f7e/465c450cd62e279f2f032385b7f48eb7.mp3',
    pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg'
  }"
/> 
<!-- 
  //测试一
  <audio
        controls
         src="http://m8.music.126.net/20220207212006/2cc4b9d7f589a04e851f55a66700e934/ymusic/0fd6/4f65/43ed/a8772889f38dfcb91c04da915b301617.mp3"
    ></audio> -->



    </div>
</template>
<script>
import Aplayer from 'vue-aplayer'
export default {
    components:{
        Aplayer
    },
    provide(){
      //解决多层次嵌套嵌套通信问题
      return{
        // addSong:this.addSong
      }
    },
    data(){
      return{
        isPlay: false,
        songList:[]
      }
    },
    created(){
        // this.addSong()
    },
     provide() {
        return {
            addSong: this.addSong
        }
    },
     methods: {

         addSong(row) {
            console.log(row)
            this.isPlay = true;

            if (!this.findElem(this.songList,"id",song.id)){
                this.songList.push({
                    // id: song.id,
                    // title: song.name,
                    // artist: song.singer.singerName,
                    // src: song.songUrl,
                    // pic: song.pictureUrl,
                })
            }
        },
        findElem(arrayToSearch, attr, val) {
            for (var i = 0; i < arrayToSearch.length; i++) {
                if (arrayToSearch[i][attr] == val) {
                    return true;
                }
            }
            return false;
        },
        
      
    }
}
</script>

<style scoped>

</style>



