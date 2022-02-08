<template>
    <div class="home">
      <div v-for="(item, index) in list" :key="index" class="test" 
           :class="{ selected: selected === index }" @click="choose(index)">
        {{ item }}
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5],
      selected: 4, //默认选中第五个元素
    };
  },
  methods: {
    choose(index) {
      this.selected = index;//获得点击元素的index
    },
  },
};
</script>
<style  scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid red;
  height: 400px;
  width: 400px;
  
}.test {
    margin-left: 3%;
    box-sizing: border-box;
    width: 30%;
    height: 100px;
    border: 1px solid red;
  }
  .selected {
    background: pink;
  }
</style>
