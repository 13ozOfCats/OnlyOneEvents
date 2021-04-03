<template>
	<main class="aboutUs">
		<mobile1 v-if="!desktop"></mobile1>
		<section1 v-if="desktop" @next="down1" @lastWheel="newWheel" :lastWheel="lastWheel" :hide="hideSection1"></section1>
		<section class="aboutUs__video" @wheel.prevent="videoWheel">
			<div class="aboutUs__wrapper">
				<div class="container aboutUs__videoContainer">
					<h2 class="aboutUs__supatitle aboutUs__supatitle-white">Шоурил</h2>
					<div class="aboutUs__player">
						<iframe
							src="https://player.vimeo.com/video/313998647"
							width="100%"
							height="100%"
							allow="autoplay; fullscreen"
							allowfullscreen
							scrolling="no"
							@wheel.prevent="videoWheel"
						></iframe>
						<div class="aboutUs__overlay"></div>
					</div>
				</div>
				<div class="aboutUs__ooe">
					<svg width="222" height="718" viewBox="0 0 222 718" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M60.2392 459.7C63.1834 455.069 62.2581 448.548 58.1362 445.24C33.405 425.393 18.5999 393.164 18.5999 359.046C18.5999 323.604 34.2462 290.715 60.4915 270.962C63.1834 268.977 64.6134 265.669 64.6134 262.361C64.6134 260.377 64.1087 258.392 63.0151 256.596C60.1551 251.871 54.4349 250.547 50.229 253.761C18.8523 277.294 0.177734 316.705 0.177734 359.046C0.177734 399.875 17.8429 438.341 47.3689 462.157C51.5749 465.465 57.295 464.331 60.2392 459.7Z"
							fill="white"
						></path>
						<path
							d="M32.1432 37.0486C11.5339 60.8654 0.177734 92.6212 0.177734 126.456C0.177734 192.33 45.35 244.406 109.954 253.006C165.893 260.473 203.495 303.097 203.495 358.953C203.495 414.714 165.978 456.488 110.122 462.82C46.4436 470.098 0.177734 524.158 0.177734 591.45C0.177734 648.44 34.2462 698.625 83.1197 713.558C92.1205 716.299 101.458 717.811 110.879 718C110.963 718 110.963 718 111.047 718C111.132 718 111.132 718 111.216 718C172.287 716.771 221.917 660.065 221.917 591.45C221.917 549.203 203.327 509.981 172.118 486.354C167.912 483.14 162.192 484.463 159.332 489.189C156.472 493.915 157.65 500.341 161.856 503.555C187.933 523.307 203.579 556.197 203.579 591.45C203.579 648.818 162.192 696.262 111.216 697.302C103.393 697.113 95.6536 695.884 88.1669 693.616C47.2848 681.046 18.7682 639.083 18.7682 591.45C18.7682 534.082 57.1267 489.662 112.141 483.424C176.829 476.052 222.085 424.922 222.085 358.953C222.085 293.079 176.913 241.003 112.309 232.403C56.3697 224.936 18.7682 182.312 18.7682 126.456C18.7682 70.6001 54.6032 26.1799 101.963 21.0763L101.963 172.766C101.963 178.437 106.084 183.163 111.132 183.163C116.179 183.163 120.301 178.532 120.301 172.766L120.301 10.3021C120.301 4.63141 116.179 0.000427246 111.132 0.000427246C81.0167 -0.0941162 53.0049 13.1374 32.1432 37.0486Z"
							fill="white"
						></path>
						<path
							d="M147.135 17.296C144.864 22.3996 146.714 28.6373 151.341 31.1891C183.475 49.0517 203.411 85.4384 203.411 126.173C203.411 161.803 187.849 194.693 161.856 214.351C157.65 217.565 156.472 223.991 159.332 228.717C162.192 233.443 167.912 234.766 172.118 231.552C203.243 208.114 221.833 168.703 221.833 126.173C221.833 77.4995 197.943 33.9299 159.5 12.5705C154.874 10.1132 149.322 12.1924 147.135 17.296Z"
							fill="white"
						></path>
					</svg>
				</div>
			</div>
			<div class="aboutUs__bigRedContainer">
				<div class="aboutUs__bigRedCircle"></div>
			</div>
		</section>
		<mobile2 v-if="!desktop"></mobile2>
		<section3 v-if="desktop" @prev="up2" @lastWheel="newWheel" :lastWheel="lastWheel"></section3>
		<section class="about__clients">
			<div class="container">
				<h2 class="aboutUs__supatitle">Наши клиенты</h2>
			</div>
			<div class="about__slider">
				<div class="about__slide">
					<img src="./images/about_client1.svg" alt="" class="about__img" />
				</div>
				<div class="about__slide">
					<img src="./images/about_client2.svg" alt="" class="about__img" />
				</div>
				<div class="about__slide">
					<img src="./images/about_client3.svg" alt="" class="about__img" />
				</div>
				<div class="about__slide">
					<img src="./images/about_client4.svg" alt="" class="about__img" />
				</div>
				<div class="about__slide">
					<img src="./images/about_client5.svg" alt="" class="about__img" />
				</div>
				<div class="about__slide">
					<img src="./images/about_client6.svg" alt="" class="about__img" />
				</div>
				<div class="about__slide">
					<img src="./images/about_client7.svg" alt="" class="about__img" />
				</div>
				<div class="about__slide">
					<img src="./images/about_client1.svg" alt="" class="about__img" />
				</div>
				<div class="about__slide">
					<img src="./images/about_client2.svg" alt="" class="about__img" />
				</div>
				<div class="about__slide">
					<img src="./images/about_client3.svg" alt="" class="about__img" />
				</div>
				<div class="about__slide">
					<img src="./images/about_client4.svg" alt="" class="about__img" />
				</div>
				<div class="about__slide">
					<img src="./images/about_client5.svg" alt="" class="about__img" />
				</div>
				<div class="about__slide">
					<img src="./images/about_client6.svg" alt="" class="about__img" />
				</div>
				<div class="about__slide">
					<img src="./images/about_client7.svg" alt="" class="about__img" />
				</div>
			</div>
		</section>
		<section class="about__contacts" id="contacts">
			<myContacts></myContacts>
		</section>
	</main>
</template>
<script lang="js">
	import Vue from 'vue';
	import myContacts from '../../components/contacts/index.vue';
	import section1 from './components/section-1.vue';
	import section3 from './components/section-3.vue';
	import mobile1 from './components/mobile-1.vue';
	import mobile2 from './components/mobile-2.vue';
	import anime from 'animejs/lib/anime.es.js';

	export default Vue.extend({
		data () {
			return {
				scrollAnimationUp: null,
				scrollAnimationDown: null,
				activeSection: 1,
				hideSection1: false,
				lastWheel: Date.now(),
				canPlay: true,
				desktop: true,
			};
		},
		methods: {
			onArrowDown: function(e) {
				if(this.activeSection === 1) {
					e.preventDefault();
					this.down1();
				} else if(this.activeSection === 2) {
					e.preventDefault();
					this.down2();
				}
			},
			onArrowUp: function (e) {
				if (this.activeSection === 2) {
					e.preventDefault();
					this.up1();
				} else if (this.activeSection === 3) {
					if (window.scrollY === 0) {
						e.preventDefault();
						this.up2();
					}
				}
			},
			videoWheel: function (e) {
				if(window.innerWidth > 1300) {
					const now = Date.now();
					if (now - this.lastWheel > 150) {
						if (e.deltaY > 0) {
							this.down2();
						} else {
							this.up1();
						}
					}
					this.lastWheel = now;
				}
			},
			down1: function () {
				if (this.canPlay) {
					this.activeSection = 2;
					this.canPlay = false;
					this.scrollAnimationUp.play();
					this.scrollAnimationUp.finished.then(() => {
						this.hideSection1 = true;
						this.$eventBus.$emit('headerHide', true);
						this.canPlay = true;
					});
				}
			},
			down2: function () {
				if (this.canPlay) {
					this.activeSection = 3;
					this.canPlay = false;
					this.scrollAnimationDown.play();
					this.scrollAnimationDown.finished.then(() => {
						this.$eventBus.$emit('overflowHidden', false);
						this.canPlay = true;
					});
				}
			},
			up1: function () {
				if (this.canPlay) {
					this.activeSection = 1;
					this.hideSection1 = false;
					this.$eventBus.$emit('headerHide', false);
					this.canPlay = false;
					this.scrollAnimationUp.reverse();
					this.scrollAnimationUp.play();
					this.scrollAnimationUp.finished.then(() => {
						this.scrollAnimationUp.reverse();
						this.canPlay = true;
					});
				}
			},
			up2: function () {
				if (this.canPlay) {
					this.activeSection = 2;
					this.canPlay = false;
					this.scrollAnimationDown.reverse();
					this.scrollAnimationDown.play();
					this.scrollAnimationDown.finished.then(() => {
						this.scrollAnimationDown.reverse();
						this.$eventBus.$emit('overflowHidden', true);
						this.canPlay = true;
					});
				}
			},
			newWheel: function(now) {
				this.lastWheel = now;
			},
			onResize: function() {
				if(window.innerWidth > 1300) {
					this.desktop = true;
				} else {
					this.desktop = false;
				}
			},
		},
		created () {
			this.onResize();
			window.addEventListener('resize', this.onResize);
			this.$eventBus.$on('onArrowup', this.onArrowUp);
			this.$eventBus.$on('onArrowdown', this.onArrowDown);
		},
		mounted () {

			this.$eventBus.$emit('overflow', true);
			if(window.innerWidth > 1300) {
				this.scrollAnimationDown = anime.timeline({
					loop: false,
					autoplay: false,
					duration: 1000,
				})
					.add({
						targets: '.aboutUs__video',
						easing: 'easeInCubic',
						translateY: [0, '-100%'],
					})
					.add({
						targets: '.aboutUs__bigRedCircle',
						easing: 'linear',
						scale: [5, 1]
					}, '-=300');
				this.scrollAnimationUp = anime.timeline({
					loop: false,
					autoplay: false,
					duration: 1000,
				})
					.add({
						targets: '.aboutUs__bigRedCircle',
						easing: 'linear',
						scale: [1, 5]
					})
					.add({
						targets: '.aboutUs__video',
						easing: 'easeInCubic',
						translateY: ['100%', 0],
					}, 0);
			}
		},
		beforeDestroy() {
			this.$eventBus.$emit('overflowHidden', false);
			this.$eventBus.$emit('headerHide', false);
			this.$eventBus.$off('onArrowup');
			this.$eventBus.$off('onArrowdown');
		},
		components: {
			myContacts,
			section1,
			section3,
			mobile1,
			mobile2
		},
	});
</script>
<style lang="scss">
	.about {
		&__clients {
			padding-top: 50px;
			padding-bottom: 42px;
			background: #ffffff;
			color: var(--bg);
			font-size: 28px;
			line-height: 120%;
			overflow: hidden;
		}
		&__slider {
			width: 500%;
			margin-top: 20px;
			display: flex;
			align-items: center;
			justify-content: space-around;
			height: 60px;
			animation: clientsSlider 20s linear infinite;
		}
		&__slide {
			margin-right: 25px;
			outline: none;
			display: flex !important;
			justify-content: center;
			align-items: center;
			filter: grayscale(1);
			transition: 0.5s;
			height: 100%;
			&:hover {
				filter: none;
			}
		}
		&__img {
			height: 100%;
			object-fit: contain;
		}
		&__contacts {
			width: 100%;
			height: 480px;
			background: var(--bg);
			padding-top: 48px;
			padding-bottom: 44px;
			background: var(--bg) url('../../assets/images/contacts_bg.svg');
		}
	}

	.aboutUs {
		&__supatitle {
			font-size: 32px;
			line-height: 130%;
			color: #363636;
			font-weight: normal;
			&-white {
				padding-bottom: 10px;
				color: #363636;
			}
		}
		&__title {
			font-size: 30px;
			line-height: 100%;
			color: #363636;
			& + .aboutUs__text {
				margin-top: 20px;
			}
		}
		&__player {
			width: 100%;
			height: 170px;
			position: relative;
		}
		&__video {
			margin-top: 50px;
			display: flex;
			align-items: center;
		}
		&__bigRedContainer {
			display: none;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
		&__bigRedCircle {
			background: var(--red);
			border-radius: 100%;
			width: 50vh;
			height: 50vh;
		}
		&__videoContainer {
			position: relative;
		}
		&__bgWrapper {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			z-index: -5;
		}
		&__wrapper {
			width: 100%;
			position: relative;
			z-index: 1;
		}
		&__ooe {
			position: absolute;
			top: 50%;
			right: 0;
			transform: translate(0, -50%);
			z-index: 1;
		}
		&__ooe,
		&__bgWrapper {
			display: none;
		}
	}

	.aboutMobile {
		&__title {
			font-size: 32px;
			line-height: 130%;
			color: #363636;
		}
	}

	@media all and(min-width: 968px) {
		.about {
			&__clients {
				padding-top: 72px;
				padding-bottom: 72px;
				font-size: 44px;
				line-height: 130%;
			}
			&__contacts {
				padding-top: 72px;
				padding-bottom: 72px;
			}
			&__slider {
				width: 250%;
				margin-top: 60px;
			}
		}

		.aboutUs {
			&__ooe,
			&__bgWrapper {
				display: block;
			}
			&__supatitle {
				font-size: 64px;
				line-height: 130%;
				color: #363636;
				&-white {
					padding-bottom: 0;
					color: #ffffff;
				}
			}
		}
	}

	@media all and(min-width: 1281px) {
		.about {
			&__clients {
				padding-top: 100px;
				padding-bottom: 100px;
				font-size: 48px;
				line-height: 72px;
			}
			&__contacts {
				height: 700px;
				padding-top: 100px;
				padding-bottom: 100px;
			}
		}
		.aboutUs {
			&__player {
				width: 89%;
				height: 600px;
			}
			&__overlay {
				content: '';
				position: absolute;
				top: 65px;
				left: 0;
				width: calc(100% - 47px);
				height: calc(100% - 120px);
				&:active {
					visibility: hidden;
				}
			}
			&__bigRedContainer {
				display: block;
			}
			&__video {
				margin-top: 0;
				height: 100%;
				width: 100%;
				position: fixed;
				top: 0;
				left: 0;
				z-index: 1005;
				transform: translateY(100%);
			}
		}
	}
</style>
