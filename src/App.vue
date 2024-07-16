<script>
	import { onMounted } from 'vue';
	import { useFetchData } from './composables/useFetchData';
	import Home from './view/Home.vue';

	export default {
		setup() {
			const { apiStore, getData } = useFetchData();

			onMounted(() => {
				getData('historyData', 'https://api.spacexdata.com/v3/history');
				getData('launchesData', 'https://api.spacexdata.com/v3/launches');
			});

			return {
				historyData: apiStore.data.historyData,
				launchesData: apiStore.data.launchesData,
				loading: apiStore.loading,
				error: apiStore.error,
			};
		},
	};
</script>

<template>
	<header class="container mx-auto">
		<div class="flex flex-row justify-between">
			<div class="w-35">
				<select class="select">
					<option value="0">zero</option>
					<option value="1">first</option>
					<option value="2">second</option>
					<option value="3">third</option>
					<option value="4">fourth</option>
				</select>
			</div>
			<div class="w-35">

			</div>
		</div>
	</header>
	<Home />
</template>

<style scoped>
	.select {
		background-color: #6fa2fb;
		width: 150px;
		height: auto;
		padding: 10px 15px 10px 15px;
		border-radius: 10px;
		color: white;
	}
</style>


