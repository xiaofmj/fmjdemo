<template>
  <div>
    <van-search
      v-model="searchValue"
      placeholder="请输入搜索关键词"
      shape="round"
    />
    <!-- 搜索容器 -->
    <div class="search_wrap" v-if="resultList.length === 0">
      <p class="hot_title">热门搜索</p>
      <!-- 关键字 -->
      <ul class="hot_name_wrap">
        <li
          class="hot_item"
          v-for="(obj, index) in hotList"
          :key="index"
          @click="btn(obj.first)"
        >
          {{ obj.first }}
        </li>
      </ul>
    </div>
    <div class="search_wrap" v-else>
      <!-- 标题 -->
      <p class="hot_title">最佳匹配</p>
      <SongItem
        v-for="obj in resultList"
        :key="obj.id"
        :name="obj.name"
        :author="obj.ar[0].name"
        :id="obj.id"
      >
      </SongItem>
    </div>
  </div>
</template>

<script>
import { hotSearchAPI, searchResultAPI } from "@/api";
import SongItem from "@/components/SongItem.vue";
export default {
  data() {
    return {
      searchValue: "",
      hotList: [],
      resultList: [],
    };
  },
  async created() {
    const res = await hotSearchAPI();
    console.log(res);
    this.hotList = res.data.result.hots;
  },
  methods: {
    async btn(str) {
      this.searchValue = str; //点击的关键字在输入框显示
      const res = await searchResultAPI({
        type: 1,
        keywords: this.searchValue,
      });
      console.log(res);
      this.resultList = res.data.result.songs;
      setTimeout(() => {
        clearTimeout(this.timer);
      });
    },
  },
  watch: {
    //监听变量
    async searchValue(val) {
      if (val.length === 0) this.resultList = [];
      else {
        //搜索框的值改变（点击/输入） 则立刻执行
        const res = await searchResultAPI({
          type: 1,
          keywords: val,
        });
        console.log(res);
        this.resultList = res.data.result.songs;
      }
    },
  },
  components: {
    SongItem,
  },
};
</script>

<style scoped>
.hot_title {
  font-size: 0.32rem;
  color: #666;
}
.search_wrap {
  padding: 0.266667rem;
}
.hot_name_wrap {
  margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 0.853333rem;
  margin-right: 0.213333rem;
  margin-bottom: 0.213333rem;
  padding: 0 0.373333rem;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  color: #333;
  border-color: #d3d4da;
  border-radius: 0.853333rem;
  border: 1px solid #d3d4da;
}
</style>