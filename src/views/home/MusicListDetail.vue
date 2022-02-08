<template>
    <div id="musicListDetail" v-if="playlist1">
        <div id="musicDetailHeader">
            <div class="listAvatar">
                <img :src="playlist1.coverImgUrl" alt="">
            </div>
            <div class="allAvatar">
                <div class="title">
                    <h3>{{playlist1.name}}</h3>
                </div>

                <div class="createrUser">
                    <img :src="playlist1.creator.avatarUrl" alt="">
                   <a href="#"> {{playlist1.creator.nickname}}</a>
                   <span>{{playlist1.createTime | showDate}}创建</span>
                </div>
                <!-- 标签 播放量 简介-->
                <div class="tags">
                    标签：
                    <span class="tagItem" v-for="(item,index) in playlist1.tags"
                    :key="index"
                    >
                        {{item}}
                    </span>
                </div>
                <div class="therInfo">
                    <!-- <span> 歌曲： {{playlist1.trackCount | handleNum}}</span>s -->
                  <span> 播放：{{playlist1.playCount | handleNum}}</span>
                  
                </div>
                <div class="desc1">
                  <p>简介：{{playlist1.description?playlist1.description:"暂无简介"}}</p>  
                </div>

                
            </div>
        </div>
        <!-- 歌曲列表 -->
        <div id="musicList">
             <el-table
                :data="playlist1.tracks"
                @row-dblclick="clickRow"
                stripe
                style="width: 100%">
                 <el-table-column
              label=""
              width="40"
              type="index"
              :index="handleIndex"
            ></el-table-column>
                <el-table-column
                prop="name"
                label="歌曲标题"
               min-width="250">
                </el-table-column>
                <el-table-column
                prop="ar[0].name"
                label="歌手"
                min-width="120">
                </el-table-column>
                <el-table-column
                prop="al.name"
                label="专辑"
                min-width="170"
                >
                </el-table-column>
                <el-table-column prop="dt" label="时长" min-width="100">
            </el-table-column>
                <el-table-column
                prop=""
                label=""
                min-width="">
                 <!-- <i :class="cur==0?'el-icon-video-pause':'el-icon-video-play'" @click="play(1)"></i> -->
                <!-- <a href="#" @click="playId(index)">播放</a> -->
                
                </el-table-column>
            </el-table>
            
        </div>

    </div>
</template>


<script>
import {formatDate,handleNum,handleMusicTime} from "../../plugins/utils"
export default {
    components:{
    },
    data(){

        return{
            musicListDetail:[],
            playlist1:null,
             currentPage3: 5,
            musicAbout:[]
        }
    },
    inject: ['addSong'],
    filters:{
        showDate(value){
            // 1.先将时间转为Date对象
            const date = new Date(value);
            //2.将date进行格式化
            return formatDate(date,"yyyy-MM-dd");
        },handleNum
    },
    created(){
        this.getMusicListDetail();
        
        // this.idddd();
    },
    methods:{
        async getMusicListDetail() {
      // var timestamp = Date.parse(new Date());
      // console.log(this.$route.params.id);
      let res = await this.$request("/playlist/detail", {
        id: this.$route.params.id,
        // timestamp,
      });
            this.playlist1 =res.data.playlist;
      this.playlist1.tracks.forEach((item, index) => {
        this.playlist1.tracks[index].dt = handleMusicTime(item.dt);
      });

        },
        idddd(){
            // console.log( this.$route.params.id);
        },
        // 分页
         handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
       // 事件函数
    handleIndex(index) {
      // console.log(index);
      index += 1;
      if (index < 10) {
        return "0" + index;
      } else {
        return index;
      }
    },
    
      // 双击table的row的回调
    async clickRow(row) {
        //双击后就获取到当前歌曲数据
    //   console.log(row);
     
    //   let res =await this.$request("/song/url",{id:row.id});
            // console.log(res.data.data[0].url);
            // this.srcSong =res.data.data[0].url;
             this.addSong(row);
    },
        
    }    
}
</script>

<style scoped>
#musicListDetail{
    width: 1000px;
    margin: 0 auto;
}
#musicDetailHeader{
    width: 1000px;
    height: 250px;
    background: rgba(22, 22, 2, 0.1);
    position: relative;
    box-shadow: 1px 1px 10px rgba(22, 22, 2, 0.3);
}
.listAvatar{
    width: 180px;
    height: 180px;
    overflow: hidden;
    border-radius: 10px;
    position: absolute;
	top: 50%;
	transform: translate(10px,-50%);
}
.listAvatar img{
    width: 100%;
}
.allAvatar{
    position:absolute;
    left: 200px;
    height: 180px;
    top: 50%;
    transform: translate(0,-50%);
}
.createrUser{
    margin: 15px 0;
    height: 40px;
    width: 100%;
    line-height: 40px;
    float: left;

}
.createrUser img{
    width: 40px;
    height: 40px;
    border-radius: 30px;
    overflow: hidden;
    float: left;
}
.createrUser a,.createrUser span{
    display: block;
    float: left;
    margin: 0 10px;
    
}
.tags{
    float: left;
    width: 100%;
}
.desc1 p{
    /* width: 100%;
     overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap; */
overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}


#musicList{

}
</style>

