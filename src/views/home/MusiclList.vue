<template>
    <div id="musicListB">
        <h3>推荐歌单</h3> 
        <div id="musicListBo">
             <a class="musicListBox1" v-for="(item,index) in musiclist" :key="index"
                @click="clickListCardItem(item.id)"
             >
            <div class="bImg">
                <img :src="item.picUrl" alt="">
            </div>
            <p>{{item.name}}</p>
        </a>
        </div>  
       

    </div>

</template>


<script>
export default {
    props:{
        musiclist:{
            type:Array,
            required:true
        }
    },
    methods:{
        clickListCardItem(id){
            this.$emit("clickListCardItem",id);
        }
    }
}
</script>

<style>
#musicListB{
    width: 1000px;
    margin: 20px auto;
    
}
#musicListBo{
    display: flex;
    justify-content:space-between;
    align-items: center;
     flex-direction: row;
 flex-wrap: wrap;
}
.musicListBox1{
    margin-top: 15px;
    width: 150px;
    height: 200px;
    display: block;
    cursor: pointer;
}
.bImg{
    width: 150px;
    height: 150px;  
    border-radius: 10px;
    overflow: hidden;
}
.bImg img{
    width: 100%;
}
.musicListBox1 p{
    overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
}
</style>




