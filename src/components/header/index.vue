<template>
	<div>
		<header class="header header-active" :style="{position: position}">
			<div class="header__container container">
				<div class="header__left">
					<router-link to="/">
						<img src="./images/contacts_logo.svg" alt="ooe logo" class="header__logo" />
					</router-link>
				</div>
				<div class="header__right">
					<nav class="menu">
						<ul class="menu__ul">
							<!--
							<li class="menu__li" :class="{'menu__li-active': aboutActive}">
								<router-link to="/about" class="menu__link" :style="{color: color}">
									О нас
								</router-link>
							</li>
							-->
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
							<li class="menu__li menu__video" v-if="this.$route.path === '/'">
								<span class="showreal__play" @click="goVideo">
									<img src="./images/header__video.png" alt="" />
								</span>
							</li>
						</ul>
					</nav>
				</div>
				<div class="header__burger">
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
		<div class="showreal showreal3 desktop" :style="{display: displayShowreel}">
			<video
				muted="muted"
				preload="auto"
				src="http://ooe.borodadigital.com/video/showreel2.mp4"
				class="showreal__video"
				ref="showrealvideo3"
			></video>
			<svg
				width="72"
				height="72"
				viewBox="0 0 72 72"
				fill="none"
				class="showreal__sound showreal__sound-off"
				@click="muteVideo"
			>
				<rect class="showreal__svg" x="24" y="27" width="5" height="18" fill="white" />
				<path
					class="showreal__svg"
					d="M13.1673 8.16716C18.5796 3.72715 25.169 0.961493 32.1289 0.208733C39.0888 -0.544028 46.1172 0.748774 52.3537 3.92888C58.5902 7.10899 63.7642 12.0384 67.2423 18.1137C70.7204 24.1891 72.3518 31.1467 71.9366 38.1348C71.5215 45.123 69.0779 51.8385 64.905 57.4593C60.732 63.0801 55.0108 67.3623 48.4417 69.7817C41.8726 72.2011 34.7406 72.6527 27.9187 71.0812C21.0969 69.5098 14.8813 65.9834 10.0327 60.9339L10.5443 60.4426C15.2974 65.3926 21.3906 68.8495 28.078 70.39C34.7654 71.9305 41.7569 71.4878 48.1966 69.1161C54.6362 66.7444 60.2447 62.5465 64.3354 57.0365C68.4262 51.5264 70.8216 44.9432 71.2286 38.0928C71.6355 31.2423 70.0363 24.4218 66.6267 18.4662C63.2171 12.5106 58.1451 7.67825 52.0315 4.5608C45.9179 1.44336 39.028 0.176027 32.2052 0.913955C25.3824 1.65188 18.9228 4.36305 13.6172 8.71557L13.1673 8.16716Z"
					stroke="white"
					stroke-width="1"
				/>
				<path
					class="showreal__svg"
					d="M29.3976 44.9632L29.25 44.8657V27.1343L29.3976 27.0368C29.563 26.9275 29.8 26.7714 30.0859 26.5841C30.6577 26.2094 31.4249 25.71 32.2066 25.2107C32.9888 24.7111 33.7837 24.2129 34.4118 23.84C34.7262 23.6533 34.9959 23.4998 35.1999 23.3936C35.25 23.3675 35.2953 23.3448 35.3357 23.3253C35.3357 23.3255 35.3357 23.3256 35.3357 23.3258C35.3604 23.5069 35.3841 23.7788 35.4062 24.1328C35.4504 24.8389 35.4874 25.8507 35.517 27.0686C35.5763 29.5033 35.6059 32.7511 35.6059 36C35.6059 39.2489 35.5763 42.4967 35.517 44.9314C35.4874 46.1493 35.4504 47.1611 35.4062 47.8672C35.3841 48.2212 35.3604 48.4931 35.3357 48.6742C35.3357 48.6744 35.3357 48.6745 35.3357 48.6747C35.2953 48.6552 35.25 48.6325 35.1999 48.6064C34.9959 48.5002 34.7262 48.3467 34.4118 48.16C33.7837 47.7871 32.9888 47.2889 32.2066 46.7893C31.4249 46.29 30.6577 45.7906 30.0859 45.4159C29.8 45.2286 29.563 45.0725 29.3976 44.9632Z"
					stroke="#EE3D43"
					stroke-width="0.5"
					stroke-linecap="round"
				/>
				<g class="showreal__muteOn">
					<path
						d="M41 40C42.6 39.4 43 37.8 43 36C43 34.2 42.6 32.6 41 32"
						stroke="white"
						stroke-width="0.5"
						stroke-linecap="round"
					/>
					<path
						d="M43 42C45.4 41.1 46 38.7 46 36C46 33.3 45.4 30.9 43 30"
						stroke="white"
						stroke-width="0.5"
						stroke-linecap="round"
					/>
					<path
						d="M45 44C48.2 42.8 49 39.6 49 36C49 32.4 48.2 29.2 45 28"
						stroke="white"
						stroke-width="0.5"
						stroke-linecap="round"
					/>
				</g>
				<g class="showreal__muteOff">
					<rect
						x="51.6116"
						y="41.8596"
						width="15.7783"
						height="0.35063"
						rx="0.175315"
						transform="rotate(-135 51.6116 41.8596)"
						fill="#EE3D43"
					/>
					<rect
						x="40.4548"
						y="41.6121"
						width="15.7783"
						height="0.35063"
						rx="0.175315"
						transform="rotate(-45 40.4548 41.6121)"
						fill="#EE3D43"
					/>
				</g>
			</svg>
			<span class="showreal__btn btn" @click="hideVideo">
				<span class="btn__text">Пропустить</span>
				<svg width="56" height="65" viewBox="0 0 56 65" fill="none" class="btn__svg">
					<path
						class="btn__bg"
						d="M3.52136 8.14629C8.25714 4.26128 14.0229 1.84133 20.1128 1.18266C26.2027 0.523996 32.3525 1.6552 37.8095 4.43779C43.2664 7.22039 47.7936 11.5336 50.837 16.8495C53.8804 22.1654 55.3078 28.2533 54.9446 34.368C54.5813 40.4826 52.4432 46.3587 48.7918 51.2769C45.1405 56.1951 40.1345 59.9421 34.3865 62.059C28.6385 64.176 22.398 64.5711 16.4289 63.1961C10.4598 61.8211 5.02109 58.7355 0.778572 54.3172"
						stroke="white"
					/>
					<path
						class="btn__arrow"
						d="M28.3536 32.6464C28.5488 32.8417 28.5488 33.1583 28.3536 33.3536L25.1716 36.5355C24.9763 36.7308 24.6597 36.7308 24.4645 36.5355C24.2692 36.3403 24.2692 36.0237 24.4645 35.8284L27.2929 33L24.4645 30.1716C24.2692 29.9763 24.2692 29.6597 24.4645 29.4645C24.6597 29.2692 24.9763 29.2692 25.1716 29.4645L28.3536 32.6464ZM18 32.5L28 32.5L28 33.5L18 33.5L18 32.5Z"
						fill="white"
					/>
					<path
						class="btn__circle"
						d="M3.52136 8.14629C8.25714 4.26128 14.0229 1.84133 20.1128 1.18266C26.2027 0.523996 32.3525 1.6552 37.8095 4.43779C43.2664 7.22039 47.7936 11.5336 50.837 16.8495C53.8804 22.1654 55.3078 28.2533 54.9446 34.368C54.5813 40.4826 52.4432 46.3587 48.7918 51.2769C45.1405 56.1951 40.1345 59.9421 34.3865 62.059C28.6385 64.176 22.398 64.5711 16.4289 63.1961C10.4598 61.8211 5.02109 58.7355 0.778572 54.3172"
						stroke="white"
					/>
				</svg>
			</span>
		</div>
	</div>
</template>
<script lang="js">
	import Vue from 'vue';

	export default Vue.extend({
		//eslint-disable-next-line
		data: function() {
			return {
				displayShowreel: 'none',
				position: 'fixed',
				color: '#212121',
				aboutActive: false,
				worksActive: false,
				contactsActive: false,
			};
		},
		methods: {
			showVideo: function() {
				this.$refs.showrealvideo3.currentTime = 0;
				this.displayShowreel = 'block';
				this.$refs.showrealvideo3.play();
			},
			hideVideo: function() {
				this.$refs.showrealvideo3.pause();
				this.displayShowreel = 'none';
			},
			muteVideo: function() {
				let sound = document.querySelector('.showreal3 .showreal__sound');
				this.$refs.showrealvideo3.muted = !this.$refs.showrealvideo3.muted;
				if (this.$refs.showrealvideo3.muted) {
					sound.classList.add('showreal__sound-off');
				} else {
					sound.classList.remove('showreal__sound-off');
				}
			},
			goVideo: function() {
				this.showVideo();
			},
			openShowreel: function() {
				//console.log(1);
			},
		},
		watch: {
			$route: function() {
				if (this.$route.path === '/about' || this.$route.path === '/') {
					this.color = '#212121';
				} else {
					this.color = '#FFFFFF';
				}
				if (this.$route.path === '/') {
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
			&-active {
				.burger__line-1 {
					transform: rotate(45deg) translate(5px, -4px);
				}
				.burger__line-2 {
					transform: rotate(-45deg) translate(-9px, 7px);
				}
				.burger__line-3 {
					opacity: 0;
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
				width: min(25vw, 375px);
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
