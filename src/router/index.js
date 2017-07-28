import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const createListView  =() => import('../page/home/index.vue')
const ItemView = () => import('../page/item/index.vue')
const UserView = () => import('../page/score/index.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/home', component: createListView },
      { path: '/item', component: ItemView },
      { path: '/score', component: UserView },
      { path: '/', redirect: '/home' }
    ]
  })
}
