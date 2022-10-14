<template>
  <div>
    <!-- 上导航 -->
    <van-nav-bar :title="activeTitle" fixed />
    
    <div class="main">
      <keep-alive>
        <router-view> </router-view>
      </keep-alive>
      
    </div>
    <!-- 下导航 -->
    <van-tabbar v-model="active" route @change="onChange">
      <van-tabbar-item icon="home-o" name="首页" replace to="/layout/home"
        >首页</van-tabbar-item
      >
      <van-tabbar-item icon="search" name="搜索" replace to="/layout/search"
        >搜索</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return { active: 0, activeTitle: this.$route.meta.title };
  },
  methods: {
    onChange(str) {
      this.activeTitle = str;
    },
  },
};
</script>

<style scoped>
.main {
  padding-top: 46px;
  padding-bottom: 50px;
}
</style>