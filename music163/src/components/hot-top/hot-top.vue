<template>
  <div class="wrapper">
    <div class="hot-top-bg">
      <div class="img-bg">
        <div class="date">
          更新日期
        </div>

      </div>

    </div>

    <div class="wrapper-content">
      <div class="hot-songs">
        <div class="songs-index">01</div>
        <div class="songs-item">
          <div class="item">
            <div class="song-name">背过手</div>
            <div class="song-singer">薛之谦-渡</div>
          </div>
          <div class="item-play"> <i class="fa fa-play-circle-o" aria-hidden="true"></i></div>
        </div>
      </div>
    </div>

  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        hot_top_list: []
      }
    },
    created () {
      this._hot_top_list()
    },
    methods: {
      _hot_top_list () {
        console.log('晴天')
        let _this = this
        _this.$http.get('/api/top/list?idx=1').then(function (res) {
          console.log('数据', res)
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  .wrapper
    .hot-top-bg
      .img-bg
        background: url('~common/image/hot_music_bg.jpg') no-repeat
        position: relative
        padding-top: 38.9%
        overflow: hidden
        background-size: contain
        .date
          margin-top: 10px
          color: hsla(0, 0%, 100%, .8)
          font-size: 12px
          -webkit-transform: scale(.91)
          transform: scale(.91)
          -webkit-transform-origin: left top
          transform-origin: left top
    .wrapper-content
      .hot-songs
        display: flex
        padding-left: 10px
        .songs-index
          display: flex
          color: #df3436
          width: 28px
          font-size: 17px
          align-items : center
        .songs-item
          display: flex
          flex: 1 1 auto
          position: relative
          .item
            display: flex
            flex-direction: column
            flex: 1 1 auto
            padding: 6px 0
            width: 0
            justify-content: flex-start
            .song-name



</style>
