<template>
	<main class="aboutUs">
		<section class="aboutMobile__main">
			<div class="container">
				<div class="aboutMobile__title">Мы one only events</div>
				<div class="aboutMobile__items">
					<div class="aboutMobile__item">
						<div class="aboutMobile__left">
							<img src="./images/about_main-1-small.svg" alt="" />
						</div>
						<div class="aboutMobile__right">
							<div class="aboutMobile__subtitle">
								C 2015 года создающая яркие зрелищные проекты в сфере event - маркетинга.
							</div>
							<div class="aboutMobile__text">
								Все сотрудники имеют общирный предопыт работы в индустрии,в ведущих коммуникационных агентствах Москвы и
								Петербурга.
							</div>
						</div>
					</div>
					<div class="aboutMobile__item">
						<div class="aboutMobile__left">
							<img src="./images/about_main-2-small.svg" alt="" />
						</div>
						<div class="aboutMobile__right">
							<div class="aboutMobile__subtitle">
								Цель каждого нашего проекта - создать особый новый опыт, позволяющий усилить связь с брендом.
							</div>
							<div class="aboutMobile__text">
								Мы проживаем проект глазами участника. Используем нестандартные решения для формирования уникального
								характера каждого события. Каждый проект является по-настоящему интересным творческим продуктом,
								приносящим целевой результат.
							</div>
						</div>
					</div>
					<div class="aboutMobile__item">
						<div class="aboutMobile__left">
							<img src="./images/about_main-3-small.svg" alt="" />
						</div>
						<div class="aboutMobile__right">
							<div class="aboutMobile__subtitle">Мы любим мероприятия.</div>
							<div class="aboutMobile__text">
								Деловые, музыкальные, спортивные, развлекательные. Мы посещаем их сами и интересуемся всем, что
								происходит в этой сфере, ежедневно обновляя представления о возможном.
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section1 @next="down1" @lastWheel="newWheel" :lastWheel="lastWheel" :hide="hideSection1"></section1>
		<section class="aboutUs__video" @wheel.prevent="videoWheel">
			<div class="aboutUs__wrapper">
				<div class="container aboutUs__videoContainer" id="about__video">
					<h2 class="aboutUs__supatitle aboutUs__supatitle-white">Шоурил</h2>
					<div class="aboutUs__player">
						<iframe
							src="https://player.vimeo.com/video/313998647"
							width="100%"
							height="100%"
							allow="autoplay; fullscreen"
							allowfullscreen
							@wheel.prevent="videoWheel"
						></iframe>
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
		<section class="aboutMobile__services">
			<div class="container">
				<div class="aboutMobile__title">Наши услуги</div>
				<div class="aboutMobile__descr">
					Мы предлагаем решения, которые будут актуальны не только сегодня, с трепетом относимся к вещам, которые
					создаем, находим вдохновение во вне. В фокусе агентства:
				</div>
				<div class="aboutMobile__service">
					<div class="aboutMobile__name">Event Marketing</div>
					<div class="aboutMobile__bot aboutMobile__bot-red">
						<p class="aboutMobile__p">
							Креативная разработка и реализация имиджевых маркетинговых событий: launch-мероприятий, автомобильных
							презентаций, организация конференций, mice-выездов, спонсорских интеграций в фестивальные события. Офлайн
							и онлайн форматы мероприятий.
						</p>
					</div>
				</div>
				<div class="aboutMobile__service">
					<div class="aboutMobile__name">Décor Production</div>
					<div class="aboutMobile__bot aboutMobile__bot-shit">
						<p class="aboutMobile__p">
							Разработка и производство декораций для мероприятий, выставочных стендов, спонсорских зон,
							презентационного и торгового оборудования.
						</p>
						<p class="aboutMobile__p">
							Внедрение современных и креативных решений, учитывающих уникальные особенности бренда, для достижения
							WOM-эффекта.
						</p>
					</div>
				</div>
				<div class="aboutMobile__service">
					<div class="aboutMobile__name">Сreative & Design</div>
					<div class="aboutMobile__bot aboutMobile__bot-blue">
						<p class="aboutMobile__p">
							Разработка креативных концепций, сценариев, идей для мероприятий и инсталляций, режиссура проектов.
						</p>
						<p class="aboutMobile__p">
							Дизайн для мероприятий: создание айдентики, 3D-дизайн объектов, верстка макетов полиграфии и сувенирной
							продукции. Проектирование декораций и инсталляций.
						</p>
					</div>
				</div>
			</div>
		</section>
		<section3 @prev="up2" @lastWheel="newWheel" :lastWheel="lastWheel"></section3>
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
	import anime from 'animejs/lib/anime.es.js';

	export default Vue.extend({
		data(){
			return{
				scrollAnimationUp: null,
				scrollAnimationDown: null,
				activeSection: 1,
				hideSection1: false,
				lastWheel: Date.now(),
				canPlay: true,
			};
		},
		methods: {
			scrollPage: function (e) {
				e.preventDefault();
				const scroll = window.scrollY;
				const section1 = document.querySelector('.aboutUs__main');
				console.log(144444);
				if((scroll > 0) && (scroll < section1.clientHeight)){
					//this.scrollAnimation.play();
				}
			},

			videoWheel: function (e) {
				const now = Date.now();
				if(now - this.lastWheel > 150) {
					if (e.deltaY > 0) {
						this.down2();
					} else {
						this.up1();
					}
				}
				this.lastWheel = now;
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
			}
		},
		mounted () {

			this.$eventBus.$emit('overflow', true);

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
		},
		beforeDestroy() {
			this.$eventBus.$emit('overflowHidden', false);
			this.$eventBus.$emit('headerHide', false);
		},
		components: {
			myContacts,
			section1,
			section3,
		},
	});
</script>
<style lang="scss">
	.about {
		background: var(--bg);
		color: var(--white);
		&__main {
			padding-top: 104px;
			padding-bottom: 215px;
			position: relative;
		}
		&__container {
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
		&__supatitle,
		&__supatitle-mobile {
			font-weight: normal;
			text-align: center;
			font-size: 36px;
			line-height: 120%;
			color: #ffffff;
			user-select: none;
		}
		&__supatitle {
			display: none;
		}
		&__textbox {
			display: none;
			font-size: 18px;
			line-height: 160%;
			user-select: none;
			&-one {
				margin: 15px auto 0;
				text-align: center;
				width: 83.333%;
			}
			&-two {
				margin-top: 40px;
				width: 58.3333%;
			}
			&-three {
				margin-top: 12px;
				margin-left: auto;
				width: 66.666%;
			}
		}
		&__bg {
			position: absolute;
			z-index: -1;
			left: 0;
			width: 100%;
			height: 200%;
			background: url('../../assets/images/main__bg-2.svg') no-repeat center top / cover;
			&-one {
				top: 60%;
			}
			&-two {
				top: 62.5%;
			}
		}
		&__video {
			background: #000000;
			width: 100%;
			height: 56vw;
			position: relative;
		}
		&__player {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		&__philosophy {
			background: var(--bg);
			position: relative;
			padding-top: 48px;
			padding-bottom: 390px;
		}
		&__services {
			display: none;
			background: var(--bg);
			position: relative;
			overflow: hidden;
		}
		&__title {
			font-size: 28px;
			line-height: 120%;
			position: relative;
			z-index: 2;
			&-left {
				color: var(--bg);
				text-align: left;
			}
			&-center {
				text-align: center;
				color: #ffffff;
			}
		}
		&__text {
			text-align: center;
			font-size: 14px;
			line-height: 150%;
			color: #ffffff;
		}
		&__subtitle {
			margin: 17px auto 0;
			position: relative;
			z-index: 2;
			&-one {
				display: none;
				width: 720px;
				max-width: 100%;
			}
			&-two {
				width: 660px;
				max-width: 100%;
			}
		}
		&__clients {
			padding-top: 48px;
			padding-bottom: 42px;
			background: #ffffff;
			color: var(--bg);
			font-size: 28px;
			line-height: 120%;
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
			background: var(--bg);
			padding-top: 48px;
			padding-bottom: 44px;
		}
		&__footer {
			padding-top: 95px;
			background: #141414;
			padding-bottom: 180px;
			position: relative;
			z-index: 100;
		}
		&__link {
			margin-right: 24px;
		}
		&__svgbg {
			overflow: hidden;
			position: absolute;
			z-index: 0;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
		&__foi {
			margin-top: 70px;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			.line {
				&:nth-child(1) {
					opacity: 1;
				}
				&:nth-child(2) {
					opacity: 0.9;
				}
				&:nth-child(3) {
					opacity: 0.8;
				}
				&:nth-child(4) {
					opacity: 0.7;
				}
				&:nth-child(5) {
					opacity: 0.6;
				}
				&:nth-child(6) {
					opacity: 0.55;
				}
				&:nth-child(7) {
					opacity: 0.5;
				}
				&:nth-child(8) {
					opacity: 0.45;
				}
				&:nth-child(9) {
					opacity: 0.4;
				}
				&:nth-child(10) {
					opacity: 0.35;
				}
				&:nth-child(11) {
					opacity: 0.3;
				}
				&:nth-child(12) {
					opacity: 0.25;
				}
				&:nth-child(13) {
					opacity: 0.2;
				}
				&:nth-child(14) {
					opacity: 0.15;
				}
				&:nth-child(15) {
					opacity: 0.1;
				}
			}
		}
		&__circles {
			display: flex;
			position: absolute;
			bottom: 100px;
			width: 100%;
			justify-content: center;
		}
		&__event {
			margin: 0 -120px;
		}
		&__service {
			position: absolute;
			top: 100px;
			left: 0;
			width: 100%;
		}
		&__mobile {
			padding-top: 48px;
			padding-bottom: 48px;
			background: #141414;
			position: relative;
		}
		&__servicebox {
			margin-top: 32px;
			display: flex;
			flex-direction: column;
			align-items: center;
			& + & {
				margin-top: 20px;
			}
		}
		&__num {
			margin-bottom: 8px;
			text-align: center;
			font-size: 20px;
			line-height: 140%;
			color: var(--red);
		}
		&__serv {
			margin-bottom: 8px;
			font-size: 20px;
			line-height: 140%;
			text-align: center;
			color: #ffffff;
		}
		&__textserv {
			font-size: 14px;
			line-height: 140%;
			text-align: center;
			color: #ffffff;
		}
		&__img {
			height: 100%;
			object-fit: contain;
		}
		&__socials {
			display: none;
			justify-content: space-between;
			align-items: center;
		}
		&__on {
			&.line {
				opacity: 0.5;
			}
		}
	}

	.aboutUs {
		&__supatitle {
			font-size: 32px;
			line-height: 130%;
			color: #363636;
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
			width: 89%;
			height: 600px;
		}
		&__video {
			height: 100%;
			width: 100%;
			position: fixed;
			top: 0;
			left: 0;
			display: flex;
			align-items: center;
			z-index: 1005;
			transform: translateY(100%);
		}
		&__bigRedContainer {
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
		&__items {
			width: 100%;
			display: flex;
			flex-direction: column;
		}
		&__item {
			margin-top: 20px;
			width: 100%;
			display: flex;
			align-items: center;
		}
		&__title {
			font-size: 32px;
			line-height: 130%;
			color: #363636;
		}
		&__subtitle {
			font-size: 10px;
			line-height: 100%;
			color: #363636;
		}
		&__text {
			margin-top: 10px;
			font-family: 'Circe', sans-serif;
			font-weight: 300;
			font-size: 10px;
			line-height: 120%;
			color: #363636;
		}
		&__left,
		&__right {
			flex-basis: 50%;
		}
		&__service {
			width: 100%;
			display: flex;
			flex-direction: column;
			& + & {
				padding-top: 20px;
			}
		}
		&__descr {
			margin-top: 15px;
			margin-bottom: 15px;
			font-size: 14px;
			line-height: 140%;
			color: #363636;
		}
		&__name {
			font-weight: bold;
			font-size: 20px;
			line-height: 140%;
			color: #363636;
		}
		&__bot {
			margin-left: -15px;
			margin-right: -15px;
			padding: 15px;
			font-size: 13px;
			line-height: 140%;
			color: #ffffff;
			&-red {
				background: url('./images/about_main-bg-red.png') center center / cover;
			}
			&-shit {
				background: url('./images/about_main-bg-shit.png') center center / cover;
			}
			&-blue {
				background: url('./images/about_main-bg-blue.png') center center / cover;
			}
		}
		&__p {
			& + & {
				margin-top: 10px;
			}
		}
	}

	@media all and(min-width: 968px) {
		.about {
			&__main {
				padding-top: 130px;
				padding-bottom: 325px;
			}
			&__supatitle {
				font-size: 48px;
				line-height: 130%;
			}
			&__title {
				font-size: 44px;
				line-height: 130%;
			}
			&__subtitle {
				&-one {
					display: block;
				}
				&-mobile {
					display: none;
				}
			}
			&__text {
				font-size: 18px;
				line-height: 160%;
				& + & {
					margin-top: 24px;
				}
			}
			&__philosophy {
				padding-top: 72px;
				padding-bottom: 232px;
			}
			&__mobile {
				padding-top: 48px;
				padding-bottom: 48px;
				background: #141414;
				position: relative;
			}
			&__servicebox {
				margin-top: 48px;
				margin-left: auto;
				margin-right: auto;
				width: 50%;
				& + & {
					margin-top: 48px;
				}
			}
			&__serv {
				font-size: 36px;
				line-height: 140%;
			}
			&__textserv {
				font-size: 16px;
				line-height: 140%;
			}
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
			&__foi {
				margin-top: 160px;
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

		.aboutMobile {
			&__main,
			&__services {
				display: none;
			}
		}

		.about__slider {
			width: 250%;
			margin-top: 60px;
		}
	}

	@media all and(min-width: 1281px) {
		.about {
			&__supatitle {
				font-size: 56px;
				line-height: 130%;
				opacity: 0;
				display: block;
				&-mobile {
					display: none;
				}
			}
			&__textbox {
				display: block;
				opacity: 0;
			}
			&__main {
				padding-top: 0;
				height: calc(100vh - 140px);
				padding-bottom: 160px;
			}
			&__video {
				height: 100vh;
			}
			&__title {
				font-size: 48px;
				line-height: 140%;
			}
			&__text {
				& + & {
					margin-top: 30px;
				}
			}
			&__philosophy,
			&__services {
				height: 100vh;
				padding-top: 100px;
			}
			&__services {
				display: block;
			}
			&__mobile {
				display: none;
			}
			&__clients {
				padding-top: 100px;
				padding-bottom: 100px;
				font-size: 48px;
				line-height: 72px;
			}
			&__socials {
				margin-top: 120px;
				display: flex;
			}
			&__contacts {
				height: 700px;
				padding-top: 100px;
				padding-bottom: 100px;
			}
			&__bg {
				&-one {
					top: 60%;
				}
				&-two {
					top: 60%;
				}
			}
			&__wrapper {
				position: fixed;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				overflow: hidden;
				z-index: 1;
			}
			&__inner {
				transition: 0.5s;
				display: flex;
				flex-direction: column;
			}
			&__first {
				overflow: hidden;
			}
			&__last {
				transition: 0.5s;
				overflow: auto;
				height: 100vh;
				overflow: -moz-scrollbars-none;
				&::-webkit-scrollbar {
					width: 0;
				}
			}
		}
	}
</style>
