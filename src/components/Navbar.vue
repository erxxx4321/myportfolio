<template>
	<div class="center examplex">
		<vs-navbar v-model="active" fixed>
			<template #left>
				<h2>Evonne Chin</h2>
			</template>
			<vs-navbar-item :active="active == 'about'" id="about" href="#about-content" target="_self"> About </vs-navbar-item>
			<vs-navbar-item :active="active == 'projects'" id="projects" href="#project-content" target="_self"
				>Projects</vs-navbar-item
			>
			<vs-navbar-item :active="active == 'education'" id="education" href="#timeline-content" target="_self"
				>Timeline</vs-navbar-item
			>
			<template #right> </template>
		</vs-navbar>
		<div class="square">
			<div class="child">child 1</div>
			<div class="child">child 2</div>
			<div class="child">child 3</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'v-navbar',
		data: () => ({
			active: 'about',
		}),
	};
</script>
