<template lang="">
	<div id="project-content" class="grid" style="padding-top: 50px">
		<vs-row justify="center" style="font-size: 20px; padding-bottom: 20px">Projects</vs-row>
		<vs-row justify="center">
			<vs-card-group>
				<vs-card v-for="p in projects" :key="p.pid">
					<template #title>
						<h3>{{ p.name }}</h3>
					</template>
					<template #img>
						<a :href="`${p.link}`" target="_blank">
							<img :src="`${p.img}`" alt="" />
						</a>
					</template>
					<template #text>
						<p>{{ p.desc }}</p>
					</template>
					<template #interactions> </template>
				</vs-card>
			</vs-card-group>
		</vs-row>
	</div>
</template>
<script>
	export default {
		name: 'v-project',
		data: function () {
			const store = this.$store;
			return {
				projects: store.state.projects,
			};
		},
	};
</script>
<style lang=""></style>
