<template>
	<main class="project" :style="{background: background}">
		<div class="project__red"></div>
		<div class="project__wrapper">
			<aside class="project__aside project__aside-l" @mouseenter="prev" @mouseleave="current" @click="current">
				<router-link :to="/works/ + post[2].slug" class="project__link">
					<span class="project__prev"></span>
					<span class="project__side project__side-l"> Prev </span>
				</router-link>
			</aside>
			<div class="project__inner">
				<section class="project__head">
					<div class="container container-mobileOff">
						<div class="project__main">
							<h1 class="project__title" v-if="post[0].title" v-html="post[0].title"></h1>
							<div class="project__imgs" v-if="post[0].mainImg">
								<img :src="post[0].mainImg" class="project__img" :alt="post[0].title" />
							</div>
						</div>
					</div>
				</section>
				<section class="project__block">
					<div class="container project__container">
						<div class="project__left">
							<div class="project__box" v-if="post[0].client">
								<span class="project__big"> Клиент </span>
								<span class="project__small" v-html="post[0].client"></span>
							</div>
							<div class="project__box" v-if="post[0].data">
								<span class="project__big"> Дата </span>
								<span class="project__small" :key="data" v-for="data in post[0].data">
									{{ data }}
								</span>
							</div>
						</div>
						<div class="project__right">
							<div class="project__subtitle1" v-if="post[0].subtitle" v-html="post[0].subtitle"></div>
							<div class="project__descr" v-if="post[0].text" v-html="post[0].text"></div>
						</div>
					</div>
				</section>
				<section class="project__block" v-if="post[0].video">
					<div class="container container-mobileOff">
						<div class="project__video">
							<iframe
								:src="post[0].video"
								width="100%"
								height="100%"
								allow="autoplay; fullscreen"
								allowfullscreen
							></iframe>
						</div>
					</div>
				</section>
			</div>
			<aside class="project__aside project__aside-r" @mouseover="next" @mouseout="current" @click="current">
				<router-link :to="/works/ + post[1].slug" class="project__link">
					<span class="project__side project__side-r"> Next </span>
					<span class="project__next"></span>
				</router-link>
			</aside>
		</div>
		<section class="project__block" v-if="post[0].gallery">
			<div class="container">
				<div class="project__subtitle2">Галерея</div>
			</div>
			<mySlider :gallery="post[0].gallery"></mySlider>
		</section>
	</main>
</template>
<script lang="js">
	import Vue from 'vue';
	import {mapGetters} from 'vuex';
	import anime from 'animejs/lib/anime.es.js';
	import mySlider from '@/components/slider/index.vue'

	export default Vue.extend({
		data: function() {
			return {
				background: '',
			};
		},
		components: {
			mySlider
		},
		methods: {
			next: function () {
				this.background = this.post[1].color;
				document.querySelector('.project__wrapper').classList.add('project__wrapper-next');
			},
			prev: function () {
				this.background = this.post[2].color;
				document.querySelector('.project__wrapper').classList.add('project__wrapper-prev');
			},
			current: function () {
				this.background = this.post[0].color;
				document
					.querySelector('.project__wrapper')
					.classList.remove('project__wrapper-next', 'project__wrapper-prev');
			},
		},
		computed: {
			...mapGetters(['posts']),
			post: function () {
				const currentPost = this.posts.filter((item) => {
					return item.slug.includes(this.$route.params.slug);
				})[0];
				if (currentPost !== []) {
					let prevPost;
					let nextPost;
					const id = parseInt(currentPost.id);
					if (id !== 1) {
						prevPost = this.posts[id - 2];
					} else {
						prevPost = this.posts[this.posts.length - 1];
					}
					if (id !== this.posts.length) {
						nextPost = this.posts[id];
					} else {
						nextPost = this.posts[0];
					}
					return [currentPost, nextPost, prevPost];
				} else {
					return [];
				}
			},
		},
		watch: {
			$route: function () {
				window.scrollTo({
					top: 0,
					behavior: 'smooth',
				});
			},
		},
		mounted() {
			window.scrollTo({
				top: 0,
			});
			this.current();
			anime
				.timeline({
					autoplay: true,
				})
				.add({
					targets: '.project__title',
					opacity: [0, 1],
					delay: 10,
					duration: 200,
					easing: 'easeInOutCubic',
				})
				.add({
					targets: '.project__red',
					translateX: [0, '-100%'],
					delay: 200,
					duration: 400,
					easing: 'easeInOutCubic',
				});
		},
	});
</script>
<style lang="scss">
	.project {
		transition: 0.3s;
		&__title {
			font-size: 36px;
			line-height: 120%;
			width: 100%;
			text-align: center;
			position: sticky;
			top: 100px;
			left: 0;
			color: #ffffff;
			text-transform: uppercase;
			z-index: 1002;
		}
		&__subtitle1 {
			font-size: 28px;
			line-height: 120%;
			width: 95%;
		}
		&__subtitle2 {
			font-size: 28px;
			line-height: 120%;
		}
		&__main {
			margin-top: 20px;
			position: relative;
			height: 275px;
			margin-bottom: 5px;
		}
		&__imgs {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			left: 0;
			height: calc(100% - 50px);
			width: 100%;
			overflow: hidden;
		}
		&__img {
			min-width: 100%;
			height: 100%;
			object-fit: cover;
		}
		&__head {
			margin-top: 75px;
			padding-bottom: 10px;
			position: relative;
		}
		&__block {
			padding-bottom: 48px;
		}
		&__arrow {
			display: none;
			opacity: 0;
			transition: 1s;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			z-index: 10;
			&-prev {
				left: calc((100vw - 1200px) / 2 + 5%);
			}
			&-next {
				right: calc((100vw - 1200px) / 2 + 5%);
			}
		}
		&__descr {
			margin-top: 16px;
			font-size: 14px;
			line-height: 160%;
			font-weight: 300;
			font-family: 'Circe', sans-serif;
			p {
				& + & {
					margin-top: 12px;
				}
			}
		}
		&__container {
			display: flex;
			flex-direction: column;
		}
		&__box {
			display: flex;
			flex-direction: column;
			flex-basis: 50%;
		}
		&__big {
			font-size: 20px;
			line-height: 100%;
		}
		&__small {
			font-size: 14px;
			line-height: 100%;
			margin-top: 14px;
			font-weight: 300;
			font-family: 'Circe', sans-serif;
		}
		&__left {
			margin-top: 10px;
			display: flex;
		}
		&__right {
			margin-top: 48px;
		}
		&__video {
			width: 100%;
			position: relative;
		}
		&__palyer {
			width: 100%;
		}
		&__wrapper {
			position: relative;
			display: flex;
			justify-content: space-between;
			width: 100%;
			transition: 0.3s;
			&-next {
				transform: translateX(-70px);
				.project__next {
					width: 70px;
				}
			}
			&-prev {
				transform: translateX(70px);
				.project__prev {
					width: 70px;
				}
			}
		}
		&__prev {
			transform: translate(-100%, 0%);
			right: 0;
		}
		&__next {
			transform: translate(100%, 0%);
			left: 0;
		}
		&__next,
		&__prev {
			display: none;
			box-shadow: -30px 30px 50px 0 rgba(0, 0, 0, 0.2);
			background: rgba(255, 255, 255, 0.07);
			position: absolute;
			top: 0;
			width: 0;
			height: 100%;
		}
		&__aside {
			display: none;
			position: relative;
			width: 70px;
			min-height: 100%;
			padding-bottom: 50vh;
		}
		&__link {
			display: block;
			font-size: 24px;
			line-height: 188%;
			width: 70px;
			height: 100%;
		}
		&__side {
			color: #ffffff;
			display: block;
			position: sticky;
			top: 50%;
			&-l {
				transform: rotate(-90deg);
				padding: 40px 0 0 0;
			}
			&-r {
				transform: rotate(90deg);
				padding: 40px 0 0 0;
			}
		}
		&__red {
			position: fixed;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			background: var(--red);
			z-index: 1001;
		}
	}

	@media all and(min-width: 968px) {
		.project {
			padding-top: 140px;
			&__head {
				margin-top: 200px;
			}
			&__main {
				margin-top: 0;
				height: 680px;
			}
			&__imgs {
				height: calc(100% - 95px);
			}
			&__right {
				margin-top: 56px;
			}
			&__descr {
				font-size: 24px;
				line-height: 160%;
				p {
					& + & {
						margin-top: 24px;
					}
				}
			}
			&__title {
				top: 200px;
				font-size: 64px;
				line-height: 94px;
			}
			&__big {
				font-size: 36px;
				line-height: 160%;
			}
			&__small {
				font-size: 24px;
				line-height: 188%;
			}
			&__subtitle1 {
				font-size: 50px;
				line-height: 140%;
			}
			&__subtitle2 {
				font-size: 44px;
				line-height: 130%;
			}
			&__block {
				padding-bottom: 72px;
			}
		}
	}

	@media all and(min-width: 1281px) {
		.project {
			&__container {
				flex-direction: row;
			}
			&__aside {
				display: block;
			}
			&__left {
				margin-top: 0;
				display: block;
				flex-basis: 40%;
			}
			&__right {
				margin-top: 0;
				flex-basis: 60%;
			}
			&__box {
				flex-basis: 100%;
				& + & {
					margin-top: 50px;
				}
			}
			&__conrainer {
				flex-direction: row;
				justify-content: space-between;
			}
			&__head {
				margin-top: 150px;
				padding-bottom: 30px;
			}
			&__title {
				font-size: 112px;
				line-height: 165px;
				top: 150px;
			}
			&__subtitle2 {
				font-size: 57.5238px;
				line-height: 144.7%;
			}
			&__imgs {
				height: calc(100% - 165px);
				margin-left: 0;
				margin-right: 0;
			}
			&__main {
				height: 985px;
			}
			&__video {
				height: 700px;
			}
			&__next,
			&__prev {
				display: block;
			}
			&__descr {
				margin-top: 40px;
				p {
					& + & {
						margin-top: 32px;
					}
				}
			}
			&__block {
				padding-bottom: 112px;
			}
		}
	}
	@media all and(min-width: 1300px) and (max-height: 768px) {
		.project__side-r,
		.project__side-l {
			padding: 20px 0 0 0;
		}
	}
</style>
