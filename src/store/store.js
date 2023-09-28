import Vuex from 'vuex';
import Vue from 'vue';
import projects from '../data/projects';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		projects: projects,
	},

	getters: {},

	mutations: {},
});

export default store;
