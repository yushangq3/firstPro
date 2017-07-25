import App from '../App'

export default [{
    path: '/',
    component: App,
    children: [{
        path: '',
//       resolve => require(['../page/my/my.vue'], resolve),//懒加载
        component: r => require.ensure([], () => r(require('../page/home')), 'home')
        }
    , {
        path: '/item',
        component: r => require.ensure([], () => r(require('../page/item')), 'item')
    }, {
        path: '/score',
        component: r => require.ensure([], () => r(require('../page/score')), 'score')
    }]
}]