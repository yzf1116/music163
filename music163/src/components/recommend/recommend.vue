<template>
  <div class="recommend">
    <scroll ref="scroll" class="recommend-content" :data="newMusicList">
      <div>
        <div class="title">
          <span class="text">推荐歌单</span>
        </div>

        <div class="recommend-list">
          <div v-for="item in discList" class="item">
            <div class="icon">
              <img width="120" height="120" v-lazy="item.picUrl"/>
            </div>
            <div class="text">
              <span v-html="item.name"></span>
            </div>
          </div>

        </div>

        <div class="title">
          <span class="text">最新音乐</span>
        </div>
        <div class="newMusic-list">

          <div class="item" v-for="item in newMusicList">
            <div class="item-music">
              <div class="item-title">
                <div class="item-name">
                  {{item.name}}
                </div>
                <div class="item-singer">
                  <div v-for="art in item.song.artists">{{art.name}}/</div>
                  <div>{{item.name}}</div>
                </div>
              </div>
              <div class="item-play"> <i class="fa fa-play-circle-o" aria-hidden="true"></i></div>
            </div>
          </div>


        </div>
      </div>
    </scroll>
  </div>

</template>

<script>
  import Scroll from 'base/scroll/scroll'

  export default {
    data () {
      return {
        recommends: [],
        discList: [],
        newMusicList: [],
        dataList: []
      }
    },
    created () {
      console.log('created')
      this.handlePlayList()
      this.new_music_list()
    },
    methods: {
      handlePlayList () {
        let vm = this
        this.$http.get('/api/personalized').then(function (res) {
          console.log('数据', res)
          if (res) {
            if (res.data.result.length > 0) {
              vm.discList = res.data.result.slice(0, 6)
            }
          }
        })
      },
      new_music_list () {
        let vm = this
        this.$http.get('/api/personalized/newsong').then(function (res) {
          console.log('音乐', res)
          if (res) {
            if (res.data.result.length > 0) {
              vm.newMusicList = res.data.result
            }
          }
        })
      }
    },
    components: {
      Scroll
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .title
        display: flex
        border-left: 2px solid #d43c33
        margin-top: 10px
        .text
          margin-left: 10px
      .recommend-list
        display: flex
        flex-wrap: wrap
        margin-top: 10px
        .item
          flex: 1
      .newMusic-list
        display: flex
        flex-direction: column
        margin-top: 10px
        .item
          display :flex
          padding-left: 10px;
          .item-music
            display: flex;
            position: relative;
            flex : 1 1 auto
            justify-content: space-between
            .item-title
              flex: 1 1 auto;
              padding: 6px 0;
              width: 0;
              .item-name
                display: flex
                font-size: 17px
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                word-break: normal;
              .item-singer
                display : flex
                flex-direction : row
                font-size: 12px;
                color: #888;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                word-break: normal;
            .item-play
              display: flex;
              -webkit-box-align: center;
              align-items: center;
              padding: 0 10px;


</style>
