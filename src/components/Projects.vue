<template lang="">
	<div id="project-content" class="grid" style="padding-top: 50px">
		<vs-row justify="center" style="font-size: 20px; padding-bottom: 20px">Projects</vs-row>
		<vs-row justify="center">
			<vs-card-group>
				<vs-card v-for="p in projects" :key="p.pid">
					<template #title>
						<h3 style="height: 50px">{{ p.name }}</h3>
					</template>
					<template #img>
						<a :href="`${p.link}`" target="_blank" style="height: 180px">
							<img :src="`${p.img}`" alt="" style="box-shadow: 12px 12px 7px rgba(0, 0, 0, 0.7)" />
						</a>
					</template>
					<template #text>
						<p style="height: 80px">{{ p.desc }}</p>
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
