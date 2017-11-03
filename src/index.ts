import Hello from './components/Hello.vue';
import Vue from 'vue';

declare global {
	interface Window {
		Vue: typeof Vue;
	}
}

function install(vue: typeof Vue): void {
	vue.component('hello', Hello);
}

if ((typeof window !== 'undefined') && window.Vue) {
	install(Vue);
}

export default {
	install
}
