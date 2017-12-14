<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/recommend">
      <span class="tab-link">推荐音乐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/rank">
      <span class="tab-link">热歌榜</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/search">
      <span class="tab-link">搜索</span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
      name: 'tab'
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  .tab
    display: flex
    height : 44px
    line-height : 44px
    font-size : 16px
    .tab-item
      flex :1
      text-align : center
      .tab-link
        padding-bottom : 5px
        color : black
      &.router-link-active
        .tab-link
          color: brown
          border-bottom :2px solid brown
</style>
