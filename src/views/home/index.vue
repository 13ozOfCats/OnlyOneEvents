<template>
	<div>
		<mainscroll v-if="desktop" />
		<tablet v-if="tablet" />
		<tabletSlider v-if="tablet" />
		<div v-if="tablet" class="tablet__contacts">
			<contacts />
		</div>
		<div class="main__mobile" v-if="mobile">
			<section class="mobile__main">
				<div class="container">
					<div class="mobile__title">
						Привет! <br />
						Мы маркетинговое агентство
					</div>
					<div class="mobile__subtitle">
						Продюссируем ивенты, разрабатываем креатив, <br />
						проектируем стенды и декор
					</div>
					<router-link to="/works" class="mobile__btn btn goto">
						<span class="btn__text"> Наши проекты </span>
						<svg width="64" height="72" viewBox="0 0 72 72" class="btn__svg">
							<path
								class="btn__bg"
								d="M4.35321 9.14134C9.7484 4.71538 16.317 1.95847 23.2549 1.2081C30.1927 0.457718 37.1989 1.74643 43.4156 4.91647C49.6324 8.08652 54.79 13.0003 58.2571 19.0564C61.7242 25.1125 63.3504 32.0481 62.9366 39.0142C62.5228 45.9802 60.0869 52.6745 55.9272 58.2775C51.7674 63.8805 46.0643 68.1492 39.516 70.5609C32.9677 72.9726 25.8582 73.4228 19.058 71.8563C12.2577 70.2898 6.06176 66.7746 1.22852 61.7411"
								stroke-width="1.13924"
							></path>
							<path
								class="btn__arrow"
								d="M15.0854 24.8951C14.8629 25.1175 14.5023 25.1175 14.2798 24.8951L10.6548 21.27C10.4323 21.0476 10.4323 20.6869 10.6548 20.4645C10.8772 20.242 11.2379 20.242 11.4604 20.4645L14.6826 23.6867L17.9049 20.4645C18.1273 20.242 18.488 20.242 18.7104 20.4645C18.9329 20.6869 18.9329 21.0476 18.7104 21.27L15.0854 24.8951ZM15.2522 18.1431L15.2522 24.4923L14.113 24.4923L14.113 18.1431L15.2522 18.1431Z"
							></path>
							<path
								class="btn__circle"
								d="M4.35321 9.14134C9.7484 4.71538 16.317 1.95847 23.2549 1.2081C30.1927 0.457718 37.1989 1.74643 43.4156 4.91647C49.6324 8.08652 54.79 13.0003 58.2571 19.0564C61.7242 25.1125 63.3504 32.0481 62.9366 39.0142C62.5228 45.9802 60.0869 52.6745 55.9272 58.2775C51.7674 63.8805 46.0643 68.1492 39.516 70.5609C32.9677 72.9726 25.8582 73.4228 19.058 71.8563C12.2577 70.2898 6.06176 66.7746 1.22852 61.7411"
								stroke-width="1.13924"
							></path>
						</svg>
						<svg width="40" height="46" viewBox="0 0 40 46" fill="none" class="btn__mobile">
							<path
								class="btn__bg"
								d="M3.04667 5.99106C6.35419 3.27772 10.3811 1.58759 14.6343 1.12757C18.8876 0.667553 23.1827 1.4576 26.9939 3.401C30.8051 5.3444 33.967 8.35683 36.0925 12.0695C38.218 15.7822 39.215 20.0341 38.9613 24.3046C38.7076 28.5752 37.2143 32.6791 34.6641 36.114C32.114 39.549 28.6177 42.1659 24.6033 43.6444C20.5888 45.1229 16.2303 45.3989 12.0614 44.4385C7.89255 43.4782 4.0941 41.3232 1.13107 38.2374"
								stroke-width="0.698413"
							></path>
							<path
								class="btn__arrow"
								d="M17.2469 27.2469C17.1106 27.3833 16.8894 27.3833 16.7531 27.2469L14.5307 25.0246C14.3944 24.8882 14.3944 24.6671 14.5307 24.5307C14.6671 24.3944 14.8882 24.3944 15.0246 24.5307L17 26.5061L18.9754 24.5307C19.1118 24.3944 19.3329 24.3944 19.4693 24.5307C19.6056 24.6671 19.6056 24.8882 19.4693 25.0246L17.2469 27.2469ZM17.3492 19L17.3492 27L16.6508 27L16.6508 19L17.3492 19Z"
							></path>
							<path
								class="btn__circle"
								d="M3.04667 5.99106C6.35419 3.27772 10.3811 1.58759 14.6343 1.12757C18.8876 0.667553 23.1827 1.4576 26.9939 3.401C30.8051 5.3444 33.967 8.35683 36.0925 12.0695C38.218 15.7822 39.215 20.0341 38.9613 24.3046C38.7076 28.5752 37.2143 32.6791 34.6641 36.114C32.114 39.549 28.6177 42.1659 24.6033 43.6444C20.5888 45.1229 16.2303 45.3989 12.0614 44.4385C7.89255 43.4782 4.0941 41.3232 1.13107 38.2374"
								stroke-width="0.698413"
							></path>
						</svg>
					</router-link>
				</div>
				<div class="mobile__bg"></div>
			</section>
			<mobileWorks />
			<div class="mobile__contacts">
				<contacts />
			</div>
		</div>
	</div>
</template>
<script lang="js">
	import Vue from 'vue';
	import mobileWorks from './components/mobile_works';
	import contacts from '../../components/contacts/index.vue';
	import tablet from './components/tablet_head';
	import tabletSlider from './components/tablet_slider';
	import mainscroll from './components/mainscroll';

	export default Vue.extend({
		name: 'Home',
		data: function() {
			return {
				width: window.innerWidth,
			};
		},
		components: {
			mainscroll,
			mobileWorks,
			contacts,
			tablet,
			tabletSlider,
		},
		computed: {
			desktop () {
				return this.width > 1280;
			},
			tablet () {
				return this.width < 1281 && this.width >= 768;
			},
			mobile () {
				return this.width < 767;
			}
		},
		mounted() {
			window.addEventListener('resize',() => {
				this.width = window.innerWidth
			})
		},
		beforeDestroy() {
			window.removeEventListener('resize')
		},
	});
</script>
<style lang="scss">
	#main {
		position: absolute;
		top: 7500px;
	}
	#word-2 {
		z-index: 1;
	}
	#string-1 {
		z-index: 12;
	}
	#word-26 {
		&:before {
			content: '';
			position: absolute;
			width: 350%;
			height: 100%;
			top: 0;
			left: -125%;
			z-index: 41;
			transform: translate3d(0.00001px, 0.00001px, 0.00001px);
		}
	}
	.works {
		height: 100vh;
		width: 100%;
		background: #040924;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 101;
		padding-bottom: 100px;
		padding-top: 180px;
		box-shadow: 0px -10px 50px 10px rgb(0, 0, 0, 0.5);
		&__first {
			padding-top: 30px;
			padding-right: 300px;
			height: 100%;
		}
		&__title {
			flex-grow: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 64px;
			line-height: 94px;
			color: #ffffff;
			text-align: center;
		}
		&__items {
			display: flex;
			justify-content: flex-end;
			width: fit-content;
		}
		&__item {
			width: 20vw;
			min-width: 375px;
			display: flex;
			flex-direction: column;
			& + & {
				margin-left: 65px;
			}
		}
		&__link {
			display: flex;
			flex-direction: column;
		}
		&__imge {
			border-radius: 6px;
			overflow: hidden;
			background: rgba(255, 255, 255, 0.1);
			width: 100%;
			flex-grow: 1;
			height: calc(100vh - 240px - 165px);
		}
		&__img {
			object-fit: cover;
			width: 100%;
			min-height: 100%;
		}
		&__subtitle {
			margin-top: 30px;
			font-size: 31px;
			line-height: 45px;
			text-align: center;
			text-transform: uppercase;
			color: #ffffff;
		}
	}
	.foi__text {
		font-family: 'Circe', sans-serif;
		font-style: normal;
		font-weight: normal;
		font-size: 24px;
		line-height: 160%;
		fill: #ffffff;
		text-transform: uppercase;
		text-anchor: middle;
	}
	.preloader__text {
		font-family: 'Circe', sans-serif;
		font-style: normal;
		font-weight: normal;
		font-size: 24px;
		line-height: 160%;
		fill: #ffffff;
		text-transform: uppercase;
		text-anchor: middle;
	}
	.main {
		z-index: 0;
		&__wrapper {
			height: 10500px;
			position: relative;
			z-index: 0;
		}
		&__inner {
			position: fixed;
			width: 100%;
			height: 100%;
			transform: translate3d(0.0001px, 0.0001px, 0.0001px);
		}
		&__string {
			display: flex;
			white-space: nowrap;
			font-size: 64px;
			line-height: 94px;
			color: var(--bg);
			z-index: 10;
			position: relative;
			& + & {
				margin-top: 20px;
			}
			&-white {
				color: var(--white);
			}
		}
		&__section {
			padding-top: 270px;
		}
		&__word {
			position: relative;
			font-size: 64px;
			line-height: 94px;
			display: inline-block;
			cursor: default;
		}
		&__dot {
			position: absolute;
			bottom: 0;
			left: calc(50% - 5px);
			transform: translateX(-50%);
			border-radius: 100%;
			width: 10px;
			height: 10px;
			background: #acacac;
			&-active {
				background: #ee3d43;
			}
			&-hidden {
				opacity: 0 !important;
			}
		}
		&__logo {
			position: absolute;
			left: 0;
			bottom: 0;
			opacity: 0;
		}
		&__bg {
			position: fixed;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			&-black {
				background: var(--bg);
				z-index: -10;
			}
			&-red {
				background: var(--red);
				z-index: -9;
			}
			&-blue {
				background: #030818;
				z-index: -11;
				opacity: 0;
				transition: 0.3s;
			}
			&-active {
				opacity: 1 !important;
			}
		}
		&__about {
			display: none;
			position: absolute;
			top: 50%;
			left: calc(50% - 355px);
			width: 710px;
			font-size: 24px;
			line-height: 35px;
			text-align: center;
			color: var(--white);
			z-index: 1;
			transform: translate3d(0.00001px, 0.00001px, 0.00001px);
			&-active {
				display: block;
			}
		}
		&__aboutBgs {
			position: absolute;
			padding-top: 20px;
			top: 0;
			left: 0;
			z-index: 0;
			width: 100%;
			height: auto;
		}
		&__aboutBg {
			width: 100%;
			height: 90px;
			background: url('./images/main__bg-2.svg') repeat-x left top;
			margin-top: -20px;
			&:nth-child(odd) {
				background: url('./images/main__bg-2.svg') repeat-x -180px top;
			}
		}
		&__ball {
			position: absolute;
			left: -5%;
			bottom: -5%;
		}
		&__cities {
			width: fit-content;
			margin: -50px auto 0;
			display: flex;
			align-items: center;
			position: relative;
		}
		&__text {
			margin-left: 45px;
			width: 390px;
			font-size: 24px;
			line-height: 188%;
			color: #ffffff;
		}
		&__bgpic {
			position: absolute;
			top: 20%;
			mix-blend-mode: screen;
			filter: blur(0.5px) contrast(0.9) brightness(0.9);
			&-right {
				right: 15%;
			}
			&-left {
				left: 15%;
			}
		}
		&__playcircle {
			background: #ee3d43;
			border-radius: 100%;
			width: 450px;
			height: 450px;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
		}
		&__videocircle {
			position: absolute;
			bottom: -100px;
			left: -100px;
			display: flex;
			align-items: center;
		}
		&__videodescr {
			display: flex;
			flex-direction: column;
			margin-left: 37px;
		}
		&__name {
			font-size: 24px;
			line-height: 35px;
			color: #000000;
		}
		&__time {
			margin-top: 10px;
			font-size: 20px;
			line-height: 29px;
			color: #6f6f6f;
		}
		&__textfoi {
			text-align: center;
			max-width: 680px;
			color: #ffffff;
			font-size: 24px;
			line-height: 35px;
		}
		&__end {
			z-index: 10;
			position: fixed;
			bottom: 90px;
			left: 0;
			width: 100%;
			transition: 0.3s;
			&-hide {
				visibility: hidden;
				opacity: 0 !important;
				transform: translate3d(0.00001px, 50px, 0.00001px) !important;
			}
		}
		&__links {
			margin-left: 180px;
		}
		&__link {
			& + & {
				margin-left: 24px;
			}
		}
		&__flex {
			display: flex;
			justify-content: flex-end;
		}
		&__mobile {
			padding-top: 104px;
			background: var(--bg);
		}
		&__svgbg {
			position: fixed;
			z-index: -1;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			background: var(--bg);
			opacity: 0;
			transition: 0.4s;
			visibility: hidden;
			&-active {
				visibility: visible;
				opacity: 1 !important;
			}
		}
		&__scroll {
			position: absolute;
			top: 90%;
			left: 50%;
			margin-left: -25px;
			font-family: 'Circe', sans-serif;
			font-style: normal;
			font-weight: normal;
			font-size: 27.3418px;
			line-height: 188%;
			color: rgba(0, 0, 0, 0.42);
		}
		&__scroll2 {
			font-family: 'Circe', sans-serif;
			font-style: normal;
			font-weight: normal;
			font-size: 27.3418px;
			line-height: 100%;
			color: #c8c8c8;
			cursor: default;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		&__foi {
			position: absolute;
			z-index: -1;
			top: 75%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
	.hover {
		&__bg {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			visibility: hidden;
			transition: 0.4s;
			&-spb {
				z-index: 11;
				background: var(--red);
				display: flex;
				justify-content: center;
				align-items: center;
				transform: translate3d(100%, 0.00001px, 0.00001px);
			}
			&-agency {
				opacity: 0;
				z-index: -11;
				background: var(--bg);
			}
			&-active {
				opacity: 1 !important;
				visibility: visible !important;
				transform: translate3d(0.00001px, 0.00001px, 0.00001px) !important;
			}
		}
		&__string {
			opacity: 1;
			transition: 0.2s;
			&-hidden {
				opacity: 0;
			}
		}
		&__we {
			display: block;
			transition: 0.3s;
			&-active {
				transition-delay: 0.2s;
				transform: translateX(130px);
			}
		}
		&__logo {
			position: absolute;
			left: 0;
			bottom: 0;
			transition: 0.4s;
			transform: translateX(-100%);
			visibility: hidden;
			&-active {
				visibility: visible;
				transform: translateX(0);
			}
		}
		&__chutes {
			padding-top: 20px;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: auto;
			animation: meet 5s linear infinite;
		}
		&__cities {
			margin-top: 180px;
			width: fit-content;
			display: flex;
			align-items: center;
			position: relative;
		}
		&__descr {
			position: absolute;
			bottom: -5px;
			left: 50%;
			transform: translateX(-50%);
			font-size: 14px;
			line-height: 21px;
			text-align: center;
			text-decoration-line: underline;
			color: #ffffff;
			visibility: hidden;
			&-active {
				visibility: visible;
			}
		}
		&__ooe {
			color: var(--red);
			visibility: hidden;
			opacity: 0;
			transition: 0.3s;
			position: absolute;
			left: 0;
			&-active {
				transform: translateX(130px);
				transition-delay: 0.2s;
				visibility: visible;
				opacity: 1;
			}
		}
		&__filosophy {
			font-size: 24px;
			line-height: 35px;
			text-align: center;
			color: #ffffff;
			position: absolute;
			max-width: 850px;
			top: 0;
			left: calc(50% + 230px);
			transform: translateX(-50%);
			white-space: normal;
			width: 100%;
		}
	}
	.mobile {
		&__main {
			padding-bottom: 188px;
			position: relative;
			overflow: hidden;
		}
		&__title {
			font-size: 36px;
			line-height: 120%;
			text-align: center;
			color: #ffffff;
		}
		&__title2 {
			font-size: 28px;
			line-height: 120%;
		}
		&__subtitle {
			margin-top: 60px;
			font-size: 16px;
			line-height: 150%;
			text-align: center;
			color: #ffffff;
		}
		&__btn {
			margin: 40px auto 0;
		}
		&__bg {
			position: absolute;
			top: 66%;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 0;
			background: url('../../assets/images/main__bg-2.svg') no-repeat center top / cover;
		}
		&__works {
			background: #ffffff;
			padding-top: 48px;
			padding-bottom: 48px;
			color: var(--bg);
			position: relative;
		}
		&__name {
			font-size: 18px;
			line-height: 120%;
			color: #ffffff;
			text-transform: uppercase;
			width: 70%;
		}
		&__slide {
			width: 256px !important;
			height: 176px;
			border-radius: 6px;
			padding: 16px;
			overflow: hidden;
			outline: none;
			margin-left: 15px;
			position: relative;
			display: flex !important;
			align-items: flex-end;
		}
		&__imgs {
			z-index: -1;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
		&__img {
			min-width: 100%;
			height: 100%;
			object-fit: cover;
		}
		&__contacts {
			width: 100%;
			height: 480px;
			padding-top: 48px;
			padding-bottom: 44px;
			background: var(--bg) url('../../assets/images/contacts_bg.svg');
			background-size: 100%;
		}
	}
	.meet {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #ff4e54;
		transform: translate3d(100%, 0.00001px, 0.00001px);
		z-index: 110;
		display: flex;
		align-items: center;
		justify-content: center;
		&__box {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		&__title {
			font-family: 'Circe', sans-serif;
			font-size: 64px;
			line-height: 94px;
			text-align: center;
			color: var(--white);
		}
		&__btn {
			margin-top: 50px;
		}
		&__inner {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: -1;
			overflow: hidden;
		}
		&__bgs {
			padding-top: 20px;
			width: 100%;
			height: auto;
			&-active {
				animation: meet 5s linear infinite;
			}
		}
		&__bg {
			width: 100%;
			height: 90px;
			background: url('./images/meet__bg-1.svg') repeat-x left top;
			opacity: 0.5;
			margin-top: -20px;
			&:nth-child(odd) {
				background: url('./images/meet__bg-1.svg') repeat-x -180px top;
			}
		}
	}
	@media all and(min-width: 768px) {
		.main {
			&__mobile {
				padding-top: 130px;
			}
		}
		.mobile {
			&__main {
				padding-bottom: 222px;
			}
			&__title {
				font-size: 48px;
				line-height: 130%;
			}
			&__subtitle {
				font-size: 18px;
				line-height: 160%;
			}
			&__btn {
				margin: 48px auto 0;
			}
			&__works {
				padding-top: 72px;
				padding-bottom: 72px;
			}
			&__name {
				font-size: 64px;
				line-height: 80px;
			}
			&__slide {
				padding: 40px;
				width: 759px !important;
				height: 487px;
				margin-left: 40px;
			}
			&__contacts {
				height: 600px;
			}
		}
	}
	@media all and(min-width: 768px) and(max-width: 1280.9px) {
		.mobile {
			&__contacts {
				padding-top: 72px;
				padding-bottom: 66px;
				height: 560px;
			}
		}
	}
	@media all and(min-width: 1281px) and (max-height: 768px) {
		.main {
			&__section {
				padding-top: 185px;
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
			&__about {
				top: 50%;
			}
		}
		.works {
			padding-bottom: 50px;
			padding-top: 150px;
			&__item {
				height: calc(100vh - 200px);
			}
			&__subtitle {
				margin-top: 20px;
				font-size: 26px;
				line-height: 120%;
				height: 95px;
			}
			&__imge {
				height: calc(100vh - 200px - 120px);
			}
		}
	}
	.tablet__contacts {
		width: 100%;
		height: 564px;
		padding-top: 72px;
		padding-bottom: 66px;
		background: var(--bg) url('../../assets/images/contacts_bg.svg');
		background-size: 100%;
	}
	@media all and(min-width: 1281px) and (max-height: 600px) {
		.main {
			&__about {
				top: 60%;
			}
		}
	}
	@media all and(min-width: 1281px) and (max-height: 600px) {
		.main {
			&__about {
				top: 60%;
			}
		}
	}
	@media all and(min-width: 540px) {
		.mobile {
			&__title2 {
				font-size: 44px;
				line-height: 130%;
				margin-bottom: 30px;
			}
		}
	}
	@media all and(min-width: 1281px) {
		.main {
			&__mobile {
				display: none;
			}
			&__wrapper {
				display: block;
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
