import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from "../components/About";
import Tree from "../components/Tree";
import FormTable from "../components/FormTable";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      component: About
    }, {
      path: '/tree',
      component: Tree
    }, {
      path: '/formTable',
      component: FormTable
    },
  ]
})
