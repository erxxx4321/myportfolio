<template lang="">
	<div id="about-content" class="grid" style="padding-top: 50px">
		<vs-row justify="center">
			<vs-col style="width: 400px">
				<typewriter :full-erase="true" :words="['I am Evonne']"> Hi, </typewriter>
				<p>
					I have 2+ years of full stack development experience. Passionate about programming and learning new technologies,
					continuous learning is my career goal. So I am very willing to accept new challenges and participate in innovative
					projects.
				</p>
				<div style="margin-top: 10px">
					<a href="https://github.com/erxxx4321">
						<i class="fa-brands fa-github link" style="font-size: 30px; padding: 0 8px"></i>
					</a>
					<a href="https://www.linkedin.com/in/evonne-chinn/">
						<i class="fa-brands fa-linkedin link" style="font-size: 30px; padding: 0 8px"></i>
					</a>
					<a href="https://www.youtube.com/channel/UCwARmXLVZHJKROyJ2w85Orw">
						<i class="fa-brands fa-youtube link" style="font-size: 30px; padding: 0 8px"></i>
					</a>
					<a href="">
						<i class="fa-solid fa-link link" style="font-size: 30px; padding: 0 8px"></i>
					</a>
					<a href="https://www.tasker.com.tw/workroom/5gLym1">
						<i class="fa-solid fa-t link" style="font-size: 30px; padding: 0 8px"></i>
					</a>
				</div>
			</vs-col>
			<img src="../assets/images/about01.jpg" alt="" style="width: 400px" />
		</vs-row>
	</div>
</template>
<script>
	export default {
		name: 'v-about',
	};
</script>
<style lang=""></style>
