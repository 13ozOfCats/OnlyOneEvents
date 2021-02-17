<template>
	<section class="aboutUs__we">
		<div class="container">
			<div class="aboutUs__row">
				<div class="aboutUs__left">
					<h2 class="aboutUs__supatitle">Мы можем</h2>
					<div class="aboutUs__text2">
						<p>
							Мы предлагаем решения, которые будут актуальны не только сегодня, с трепетом относимся к вещам, которые
							создаем, находим вдохновение во вне. В фокусе агентства:
						</p>
					</div>
					<h3
						v-for="word in wordActive"
						:key="word.id"
						class="aboutUs__weCan"
						:class="{'aboutUs__weCan-active': word.active}"
						@mouseover="changeWord(word.id)"
					>
						{{ word.text }}
					</h3>
				</div>
				<div class="aboutUs__right">
					<div
						v-for="word in wordActive"
						:key="word.id"
						class="aboutUs__circle"
						:class="{'aboutUs__circle-hidden': !word.active}"
					>
						<img :src="word.src" alt="" />
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script lang="ts">
	import Vue from 'vue';

	export default Vue.extend({
		data: function() {
			return {
				wordActive: [
					{id: 1, active: true, text: 'Event Marketing', src: 'http://ooe.borodadigital.com/svg/about_we-2.svg'},
					{id: 2, active: false, text: 'Décor Production', src: 'http://ooe.borodadigital.com/svg/about_we-3.svg'},
					{id: 3, active: false, text: 'Creative & Design', src: 'http://ooe.borodadigital.com/svg/about_we-4.svg'},
				],
			};
		},
		methods: {
			changeWord: function(word: number) {
				for (const item of this.wordActive) {
					item.active = item.id === word;
				}
			},
		},
	});
</script>
<style scoped lang="scss"></style>
