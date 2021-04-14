<template>
	<section class="aboutUs__we" @wheel="onWheel">
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
<script lang="js">
	import Vue from 'vue';

	export default Vue.extend({
		props: [ 'lastWheel' ],
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
			onWheel: function(e) {
				if(window.scrollY === 0) {
					const now = Date.now();
					if (now - this.lastWheel > 150) {
						if (e.deltaY < 0) {
							this.prev();
						}
					}
					this.$emit('lastWheel', now);
				}
			},
			prev: function() {
				this.$emit('prev');
			},
			changeWord: function(word) {
				for (const item of this.wordActive) {
					item.active = item.id === word;
				}
			},
		},
	});
</script>
<style scoped lang="scss">
	.aboutUs {
		&__we {
			display: none;
			height: 100vh;
		}
		&__text2 {
			margin-top: 20px;
			margin-bottom: 50px;
			font-size: 18px;
			line-height: 140%;
			color: #363636;
		}
		&__row {
			display: flex;
		}
		&__left {
			display: flex;
			flex-direction: column;
			flex-basis: 50%;
			padding-bottom: 50px;
		}
		&__right {
			margin-left: auto;
			flex-basis: 41.6666%;
			position: relative;
		}
		&__circle {
			position: absolute;
			right: 0;
			top: 100px;
			z-index: 1;
			opacity: 1;
			transition: 0.5s;
			&:first-child {
				z-index: -60;
			}
			&-hidden {
				transition-property: transform, opacity;
				transition-duration: 0s, 0.4s;
				transition-delay: 0.4s, 0s;
				transform: scale(0);
				opacity: 0;
			}
		}
		&__weCan {
			font-style: normal;
			font-weight: bold;
			font-size: 60px;
			line-height: 100%;
			color: #363636;
			transition: 0.4s;
			cursor: pointer;
			transform-origin: 0 50%;
			&:nth-of-type(1),
			&:nth-of-type(2) {
				text-indent: -4px;
			}
			&-active {
				transform: scale(1.2);
				color: rgba(238, 61, 67, 0.85) !important;
			}
			& + & {
				margin-top: 45px;
			}
		}
	}
	@media all and(min-width: 968px) {
		.aboutUs {
			&__we {
				display: flex;
				align-items: center;
			}
		}
	}
</style>
