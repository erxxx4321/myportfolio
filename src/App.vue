<template>
	<div id="app">
		<Navbar />
		<About />
		<Project />
		<Education />
		<Footer />
	</div>
</template>

<script>
	import Navbar from './components/Navbar.vue';
	import About from './components/About.vue';
	import Project from './components/Projects.vue';
	import Education from './components/Education.vue';
	import Footer from './components/Footer.vue';

	export default {
		name: 'App',
		components: {
			Navbar,
			About,
			Project,
			Education,
			Footer,
		},
	};
</script>
