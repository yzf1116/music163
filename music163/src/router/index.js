import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const Recommend = () => import('components/recommend/recommend')
const Rank = () => import('components/hot-top/hot-top')
const Search = () => import('components/search/search')

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'

    }, {
      path: '/recommend',
      component: Recommend
    }, {
      path: '/rank',
      component: Rank
    },
    {
      path: '/search',
      compoment: Search
    }
  ]
})
