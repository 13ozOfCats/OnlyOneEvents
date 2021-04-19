<template>
	<div class="head" id='head__slider'>
		<slick ref="slick" class="head__slider" :options="settings">
			<div class="head__title">
				Работы
			</div>
			<router-link :to="/works/ + post.slug" v-for="post in posts" :key="post.id" class="head__slide">
				<div class="head__imgs">
					<img :src="post.mainImg" :alt="post.title" class="head__img" />
				</div>
				<div class="head__name" v-html="post.menuTitle"></div>
			</router-link>
		</slick>
	</div>
</template>
<script lang="ts">
	import Vue from 'vue';
	import {mapGetters} from 'vuex';
	import Slick from 'vue-slick';
	import 'slick-carousel/slick/slick.css';

	export default Vue.extend({
		data() {
			return {
				settings: {
					slidesToScroll: 1,
					slidesToShow: 3,
					focusOnSelect: true,
					variableWidth: true,
					dots: false,
					infinite: false,
					arrows: false,
					responsive: [],
				},
			};
		},
		components: {
			Slick,
		},
		computed: {
			...mapGetters(['posts']),
		},
	});
</script>
<style scoped lang="scss">
	.head {
		padding-top: 65px;
		padding-bottom: 55px;
		background: #040924;
		&__title {
			padding-left: 75px;
			padding-right: 12px;
			margin-top: 30px;
			font-size: 64px;
			line-height: 94px;
			text-align: center;
			color: #ffffff;
		}
		&__name {
			margin-top: 47px;
			font-size: 31px;
			line-height: 45px;
			text-align: center;
			color: #ffffff;
		}
		&__slide {
			margin-left: 66px;
			width: 375px !important;
			height: 100%;
			display: flex;
			justify-content: space-between;
		}
		&__imgs {
			height: 423px;
			overflow: hidden;
		}
		&__img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	@media all and(min-width: 768px) and (max-width: 1279px) {
		.head {
			display: block;
		}
	}
	@media all and(min-width: 1280px) {
		.head {
			display: none;
		}
	}
</style>
