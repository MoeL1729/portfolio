import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Uni from '@/components/uni'
import viewOn from '@/components/viewOn'
import Aprogen from '@/components/aprogen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello2',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/bye',
      name: 'ByeWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'HelloWorld2',
      component: Uni
    },
    {
      path: '/view',
      name: 'viewon',
      component: viewOn
    },
    {
      path: '/aprogen',
      name: 'aprogen',
      component: Aprogen
    }
  ]
})
