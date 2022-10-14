<template>
  <van-cell>
    <van-cell :title="name" :label="author + '' + name" center @click="$router.push({path:'/comment',query:{id:id}})">
      <van-icon
        slot="right-icon"
        name="play-circle-o"
        class="custom-icon"
        @touchstart="playFn"
      />
    </van-cell>
  </van-cell>
</template>

<script>
export default {
  props: {
    name: String, // 歌名
    author: String, // 歌手
    id: Number, // 歌曲id (标记这首歌曲-为将来跳转播放页做准备)
  },
  methods: {
    playFn() {
      this.$router.push({
        path: "/play",
        query: {
          id: this.id, // 歌曲id, 通过路由跳转传递过去
        },
      });
    },
  },
};
</script>

<style scoped>
.custom-icon {
  font-size: 24px;
  line-height: middle;
}
</style>