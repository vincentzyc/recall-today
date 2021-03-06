import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
	routes: [{
			path: '/',
			name: 'home',
			component: () => import('./views/home.vue')
		}, {
			path: '/add',
			name: 'add',
			component: () => import('./views/add.vue')
		},
		{
			path: '/expend',
			name: 'expend',
			component: () => import('./views/expend.vue')
		}
	]
})