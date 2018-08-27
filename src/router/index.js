import Vue from 'vue';
import Router from 'vue-router';
import List from '@/components/List';
import Add from '../pages/add.vue';
import Edit from '../pages/edit.vue';
import Detail from '../pages/detail.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'List',
			component: List
		},
		{
			path: '/List',
			component: List
		},
		{
			path: '/Add',
			//name: 'Add',
			component: Add
		},
		{
			//path: '/Edit/:index',
			path: '/Edit',
			name: 'Edit',
			component: Edit
		},
		{
			//path: '/Edit/:index',
			path: '/Detail',
			name: 'Detail',
			component: Detail
		}
	]
});
