import App from './App.vue';
import Vue from 'vue';
import Plugin from '../src/index';

Vue.use(Plugin);

new Vue({
	el: '#app',
	render: h => h(App)
})
