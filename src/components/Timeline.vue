<template lang="">
	<div id="timeline-content" class="grid" style="padding-top: 50px">
		<vs-row justify="center" style="font-size: 20px; padding-bottom: 20px">Timeline</vs-row>
		<vs-row justify="center">
			<Timeline
				:timeline-items="dataTimeline"
				:message-when-no-items="messageWhenNoItems"
				:unique-year="true"
				:show-day-and-month="true"
				order="desc"
			/>
		</vs-row>
	</div>
</template>
<script>
	import Timeline from 'timeline-vuejs';
	export default {
		name: 'v-timeline',
		components: {
			Timeline,
		},
		data: () => ({
			messageWhenNoItems: 'There arent items',
			dataTimeline: [
				{
					from: new Date(2023, 5),
					title: 'Software engineer / YFY Inc. (Taiwan)',
					description: '',
				},
				{
					from: new Date(2021, 8),
					title: 'Front-end Developer / Longchen Paper & Packaging Co., Ltd. (Taiwan)',
					description:
						'1.Assisted company to implement new Electronic signature system and built overtime form, purchase order form, etc. with web and mobile app version. 2.Using Selenium to scrape commodities price data. 3.Automate daily covid-19 report work using Selenium, panda, gspread, python.ppt.',
				},
				{
					from: new Date(2019, 2),
					title: 'Administrative Assistant / Shinwa Co.,Ltd. (Japan)',
					description:
						'1.Supported the printing operation and fixed common printer error. 2.Calculated daily processing profit and time cost to increase labour productivity. 3.Used Excel VBA to automate repetitive tasks and optimize workflow.',
				},
			],
		}),
	};
</script>
<style lang=""></style>
