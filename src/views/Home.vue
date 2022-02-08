<template>
  <div class="home">
    <div id="bannerT">
       <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="(item,index) in banners1" :key="index">
      <img :src="item.imageUrl" alt="">
    </el-carousel-item>
  </el-carousel>
    </div>


    <div id="musicList">
          <musicListA :musiclist=" musicList1"
            @clickListCardItem="clickListCardItem"
          />
    </div>

    
  </div>
</template>

<script>
// @ is an alias to /src
import musicListA from './home/MusiclList.vue'

export default {
  name: 'Home',
  components: {
    musicListA 
  },data(){
    return{
      banners1:[],
      musicList1:[]
    }
  },
 
  methods:{
    async musicBanner(){
      // this.$request("/banner")
      // .then(res=>{
      //   this.banners1 =res.data.banners;
      // })
      // .catch(error=>{
      //   console.log(error);
      // })
      let result = await this.$request("/banner");
      // console.log(result);
      this.banners1 = result.data.banners;
    },
    musicList(){
      this.$request("/personalized",{
          limit:12
        }).then(res=>{
        // console.log(res.data)
        this.musicList1 = res.data.result;
      })
      .catch(error=>{
        console.log(error);
      })
    },
    clickListCardItem(id){
      // console.log(id) 点击获取的歌单id
      this.$router.push({ name:"musicListDetail",params: { id }});
    }

  }, created(){
    this.musicBanner()
    this.musicList()
  },


}
</script>
<style>
#bannerT{
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
#bannerT img{
  width: 100%;
  height: 105%;
}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>