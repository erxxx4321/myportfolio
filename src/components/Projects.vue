<template lang="">
	<div id="project-content" style="padding-top: 50px">
		<vs-row justify="center" style="font-size: 20px; padding-bottom: 20px">Projects</vs-row>
		<vs-card-group>
			<vs-card v-for="p in projects" :key="p.pid">
				<template #title>
					<h3>{{ p.name }}</h3>
				</template>
				<template #img>
					<img :src="`${p.img}`" alt="" />
				</template>
				<template #text>
					<p>{{ p.desc }}</p>
				</template>
				<template #interactions>
					<!-- <vs-button danger icon>
						<i class="bx bx-heart"></i>
					</vs-button>
					<vs-button class="btn-chat" shadow primary>
						<i class="bx bx-chat"></i>
						<span class="span"> 54 </span>
					</vs-button> -->
				</template>
			</vs-card>
		</vs-card-group>
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
