<template>
	<header class="header" :class="{'header-hidden': headerHidden}" :style="{position: position}">
		<div class="header__container container">
			<div class="header__left">
				<router-link to="/">
					<img src="./images/contacts_logo.svg" alt="ooe logo" class="header__logo" />
				</router-link>
			</div>
			<div class="header__right">
				<nav class="menu">
					<ul class="menu__ul">
						<li class="menu__li" :class="{'menu__li-active': aboutActive}">
							<router-link to="/about" class="menu__link" :style="{color: color}">
								О нас
							</router-link>
						</li>
						<li class="menu__li" :class="{'menu__li-active': worksActive}">
							<router-link to="/works" class="menu__link" :style="{color: color}">
								Работы
							</router-link>
						</li>
						<li class="menu__li" :class="{'menu__li-active': contactsActive}">
							<router-link to="/contacts" class="menu__link" :style="{color: color}">
								Контакты
							</router-link>
						</li>
						<li v-if="desktop" class="menu__li menu__video">
							<span class="showreal__play" @click="openShowreel">
								<img src="./images/header__video.png" alt="" />
							</span>
						</li>
					</ul>
				</nav>
			</div>
			<div class="header__burger" :class="{'header__burger-black': aboutActive}" @click="burger">
				<svg width="24" height="21" viewBox="0 0 24 21" fill="none">
					<path
						class="burger__line-1"
						d="M0 1.5C0 0.671573 0.671573 0 1.5 0H22.5C23.3284 0 24 0.671573 24 1.5C24 2.32843 23.3284 3 22.5 3H1.5C0.671573 3 0 2.32843 0 1.5Z"
						fill="white"
					></path>
					<path
						class="burger__line-2"
						d="M0 10.5C0 9.67157 0.671573 9 1.5 9H22.5C23.3284 9 24 9.67157 24 10.5C24 11.3284 23.3284 12 22.5 12H1.5C0.671573 12 0 11.3284 0 10.5Z"
						fill="white"
					></path>
					<path
						class="burger__line-3"
						d="M8 19.5C8 18.6716 8.67157 18 9.5 18H22.5C23.3284 18 24 18.6716 24 19.5C24 20.3284 23.3284 21 22.5 21H9.5C8.67157 21 8 20.3284 8 19.5Z"
						fill="white"
					></path>
				</svg>
			</div>
		</div>
	</header>
</template>
<script lang="js">
	import Vue from 'vue';
	import anime from 'animejs/lib/anime.es.js';

	export default Vue.extend({
		props: {
			desktop: Boolean
		},
		data: function() {
			return {
				position: 'fixed',
				color: '#212121',
				aboutActive: false,
				worksActive: false,
				contactsActive: false,
				headerHidden: false,
			};
		},
		methods: {
			openShowreel: function() {
				this.$eventBus.$emit('showreel');
			},
			headerOn: function () {
				anime
					.timeline({
						autoplay: true,
					})
					.add({
						targets: '.header__right',
						translateY: [{value: ['-100%', '0%']}],
						duration: 300,
						easing: 'easeInOutCubic',
					})
					.add({
						targets: '.menu',
						opacity: [{value: [0, 1]}],
						duration: 300,
						easing: 'easeInOutCubic',
					});
			},
			headerOff: function () {
				anime
					.timeline({
						autoplay: true,
					})
					.add({
						targets: '.menu',
						opacity: [{value: [1, 0]}],
						duration: 300,
						easing: 'easeInOutCubic',
					})
					.add({
						targets: '.header__right',
						translateY: [{value: ['0%', '-100%']}],
						duration: 300,
						easing: 'easeInOutCubic',
					});
			},
			burger: function () {
				const burger = document.querySelector('.header__burger');
				document.querySelector('.header').classList.toggle('header-active');
				if (burger.classList.contains('header__burger-active')) {
					burger.classList.remove('header__burger-active');
					this.headerOff();
				} else {
					burger.classList.add('header__burger-active');
					this.headerOn();
				}
			},
			headerHide: function (bool) {
				this.headerHidden = bool;
			},
			headerColor: function (color) {
				this.color = color;
			},
		},
		created() {
			this.$eventBus.$on('headerHide', this.headerHide);
			this.$eventBus.$on('headerColor', this.headerColor);
		},
		beforeDestroy() {
			this.$eventBus.$off('headerHide');
			this.$eventBus.$on('headerColor');
		},
		watch: {
			$route: function() {
				if (document.querySelector('.header__burger').classList.contains('header__burger-active')) {
					document.querySelector('.header__burger').classList.remove('header__burger-active');
					this.headerOff();
				}
				if (this.$route.path === '/about' || this.$route.path === '/') {
					if (document.documentElement.clientWidth > 967) {
						this.color = '#212121';
					} else {
						this.color = '#FFFFFF';
					}
				} else {
					this.color = '#FFFFFF';
				}
				if ((this.$route.path === '/') && this.desktop) {
					this.position = 'fixed';
				} else {
					this.position = 'absolute';
				}
				if (this.$route.path === '/about') {
					this.aboutActive = true;
					this.contactsActive = false;
					this.worksActive = false;
				} else if (this.$route.path === '/contacts') {
					this.aboutActive = false;
					this.contactsActive = true;
					this.worksActive = false;
				} else if (this.$route.path.includes('/works')) {
					this.aboutActive = false;
					this.contactsActive = false;
					this.worksActive = true;
				} else {
					this.aboutActive = false;
					this.contactsActive = false;
					this.worksActive = false;
				}
			},
		},
	});
</script>
<style lang="scss">
	.header {
		width: 100%;
		padding-top: 20px;
		padding-bottom: 20px;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1000;
		&-hidden {
			display: none;
		}
		&-black {
			&.header-active {
				.menu__link {
					color: #ffffff;
				}
			}
			.menu__link {
				color: var(--bg);
			}
			.burger__line-1,
			.burger__line-2,
			.burger__line-3 {
				fill: var(--bg);
			}
			.header__burger-active {
				.burger__line-1,
				.burger__line-2,
				.burger__line-3 {
					fill: #ffffff;
				}
			}
		}
		&__container {
			height: 44px;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
		}
		&__logo {
			height: 44px;
		}
		&__left,
		&__right {
			display: flex;
			align-items: center;
		}
		&__right,
		&__rght {
			width: 100%;
			background: var(--bg);
			position: absolute;
			top: 0;
			left: 0;
			padding-top: 104px;
			padding-bottom: 30px;
			z-index: -1;
			transform: translateY(-100%);
		}
		&__burger {
			height: 100%;
			display: flex;
			align-items: center;
			&-black {
				.burger__line-1,
				.burger__line-2,
				.burger__line-3 {
					fill: var(--bg);
				}
			}
			&-active {
				.burger__line-1 {
					transform: rotate(45deg) translate(5px, -4px);
					fill: #ffffff;
				}
				.burger__line-2 {
					transform: rotate(-45deg) translate(-9px, 7px);
					fill: #ffffff;
				}
				.burger__line-3 {
					opacity: 0;
					fill: #ffffff;
				}
			}
		}
	}
	.burger {
		&__line-1,
		&__line-2 {
			transition: 0.4s;
		}
		&__line-3 {
			transition: 0.3s;
		}
	}
	.menu {
		width: 100%;
		opacity: 0;
		&__ul {
			display: flex;
			flex-direction: column;
			list-style: none;
		}
		&__li {
			font-size: 16px;
			line-height: 24px;
			letter-spacing: 0.04em;
			text-transform: uppercase;
			position: relative;
			transform: matrix(1, 0, 0, 1, 0, 0);
			transition: 0.5s;
			height: 42px;
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
			&-active {
				background: var(--red);
			}
		}
		&__link {
			transition: 0.3s;
		}
		&__video {
			display: block;
			cursor: pointer;
		}
	}

	@media all and(min-width: 968px) {
		.header {
			&__container {
				height: 56px;
			}
			&__right {
				padding-top: 130px;
			}
			&__logo {
				height: 56px;
			}
		}

		.menu {
			&__li {
				font-size: 36px;
				line-height: 130%;
				height: 87px;
			}
		}
	}

	@media all and(min-width: 1281px) {
		.header {
			padding-top: 40px;
			padding-bottom: 12px;
			height: 140px;
			position: absolute;
			&__container {
				height: 88px;
			}
			&__burger {
				display: none;
			}
			&__logo {
				height: 100%;
			}
			&__right,
			&__rght {
				width: auto;
				background: none;
				position: relative;
				padding-top: 0;
				padding-bottom: 0;
				z-index: 0;
				transform: none;
			}
			&__rght {
				display: flex;
				align-items: center;
			}
		}

		.menu {
			opacity: 1;
			&__ul {
				flex-direction: row;
			}
			&__li {
				height: auto;
				display: flex;
				font-size: 24px;
				line-height: 35px;
				text-transform: none;
				& + & {
					margin-left: 79px;
				}
				&:hover {
					.menu__link {
						color: var(--red) !important;
					}
				}
				&-active {
					background: none;
					&:after {
						content: '';
						position: absolute;
						width: 6px;
						height: 6px;
						background: var(--red);
						border-radius: 100%;
						left: 50%;
						transform: translateX(-50%);
						top: calc(100% + 5px);
					}
				}
			}
			&__link,
			&__video {
				display: block;
			}
		}
	}

	@media all and(min-width: 1300px) and (max-height: 768px) {
		.main {
			&__section {
				padding-top: 180px;
			}
			&__chutes {
				top: 60%;
			}
			&__ball {
				left: -12%;
				bottom: -28%;
			}
			&__cities {
				margin: -120px auto 0;
			}
			&__bgpic {
				top: 10%;
				&-right {
					right: 2%;
				}
				&-left {
					left: 11%;
				}
			}
			&__foi {
				top: -37%;
			}
			&__foibox {
				top: 66%;
			}
			&__string + &__string {
				margin-top: 0;
			}
			&__end {
				bottom: 30px;
			}
			&__word,
			&__string {
				line-height: 75px;
			}
		}
		.works {
			padding-bottom: 50px;
			&__items {
				margin-top: 10px;
			}
			&__item {
				width: 375px;
				max-width: 25vw;
				height: calc(100vh - 190px);
			}
			&__subtitle {
				margin-top: 20px;
				font-size: 26px;
				line-height: 120%;
				height: 95px;
			}
			&__imge {
				height: calc(100vh - 190px - 115px);
			}
		}
	}

	@media all and(max-width: 1440px) {
		.main__string + .main__string {
			margin-top: 15px;
		}
		.main__string,
		.main__word {
			line-height: 120%;
		}
	}
</style>
