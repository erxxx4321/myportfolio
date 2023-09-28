import Vue from 'vue';
import App from './App.vue';
import Vuesax from 'vuesax';
import 'vuesax/dist/vuesax.css';
import './assets/css/theme.css';
import store from './store/store';
import 'timeline-vuejs/dist/timeline-vuejs.css';
import 'material-icons/iconfont/material-icons.css';
import Typewriter from 'vue-typewriter';

Vue.config.productionTip = false;

Vue.use(Vuesax);
Vue.use(Typewriter);

new Vue({
	store,
	render: (h) => h(App),
}).$mount('#app');
