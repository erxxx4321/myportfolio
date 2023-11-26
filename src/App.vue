<template>
	<div id="app">
		<Navbar />
		<About />
		<Project />
		<Timeline />
		<Footer />
	</div>
</template>

<script>
	import Navbar from './components/Navbar.vue';
	import About from './components/About.vue';
	import Project from './components/Projects.vue';
	import Timeline from './components/Timeline.vue';
	import Footer from './components/Footer.vue';

	export default {
		name: 'App',
		components: {
			Navbar,
			About,
			Project,
			Timeline,
			Footer,
		},
	};
</script>
