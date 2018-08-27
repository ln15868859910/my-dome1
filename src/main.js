// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueResource from 'vue-resource';
import 'whatwg-fetch';
import 'es6-promise';

Vue.config.productionTip = false;
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
});
