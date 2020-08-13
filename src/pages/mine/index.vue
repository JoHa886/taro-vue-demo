<template>
  <view class="index">
    内容展示
    我的
    <text>首页点击数字：{{ getCount }}</text>
    <button @tap="getBanner">
      请求数据
    </button>
    <view
      v-for="n in infoList"
      :key="n.id"
    >
      <image :src="n.img_url" />
    </view>
  </view>
</template>

<script>
import { bannerList } from "../../libs/api/login";
export default {
  name: 'Index',
  components: {
  },
  data () {
    return {
      infoList:[]
    }
  },
  computed: {
    getCount(){
      return this.$store.getters.getCount
    }
  },
  methods: {
    getBanner(){
      console.log('bannerList')
      bannerList({ city_id: 1 }).then(r=>{
        console.log(r,'res')
        this.infoList = r.data
      })
      .catch(r=>{
        console.log(r)
      })
    }
  }
}
</script>

<style>
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
