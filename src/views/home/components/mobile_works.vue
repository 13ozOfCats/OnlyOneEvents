<template>
	<section class="mobile__works" id="projects">
		<div class="container">
			<div class="mobile__title2">
				Наши проекты
			</div>
		</div>
		<slick ref="slick" class="project__slider" :options="settings">
			<router-link :to="/works/ + post.slug" v-for="post in posts" :key="post.id" class="mobile__slide">
				<div class="mobile__imgs">
					<img :src="post.mainImg" :alt="post.title" class="mobile__img" />
				</div>
				<div class="mobile__name" v-html="post.menuTitle"></div>
			</router-link>
		</slick>
	</section>
</template>
<script lang="js">
	import Vue from 'vue';
	import {mapGetters} from 'vuex';
	import Slick from 'vue-slick';
	import 'slick-carousel/slick/slick.css';

	export default Vue.extend({
		data() {
			return {
				settings: {
					slidesToScroll: 1,
					focusOnSelect: true,
					variableWidth: true,
					dots: false,
					infinite: true,
					arrows: false,
					responsive: [
						{
							breakpoint: 1280,
							settings: {
								arrows: false,
								focusOnSelect:false,
							}
						},
					]
				},
			}
		},
		components: {
			Slick
		},
		computed: {
			...mapGetters(['posts']),
		},
	});
</script>
<style lang="scss"></style>
