<template>
	<div id="loader" class="loading">
		<span
			class="loading__logo"
			style="left: 50%; top: 50%; transform: translateX(-50%) translateY(-50%)"
		>
			<svg width="88" height="88" viewBox="0 0 88 88" fill="none">
				<circle cx="44" cy="44" r="44" fill="#EE3D43" />
				<path
					d="M35.9059 39.2441C36.2667 39.5019 36.7749 39.4209 37.0326 39.06C38.5791 36.8949 41.0903 35.5988 43.7488 35.5988C46.5103 35.5988 49.0731 36.9686 50.6122 39.2662C50.7668 39.5019 51.0246 39.6271 51.2823 39.6271C51.437 39.6271 51.5916 39.5829 51.7315 39.4871C52.0998 39.2368 52.2029 38.736 51.9525 38.3678C50.1188 35.6209 47.0479 33.9861 43.7488 33.9861C40.5674 33.9861 37.5702 35.5326 35.7144 38.1174C35.4567 38.4856 35.545 38.9864 35.9059 39.2441Z"
					fill="white"
				/>
				<path
					d="M68.8384 36.785C66.9826 34.9807 64.5082 33.9866 61.8718 33.9866C56.739 33.9866 52.6813 37.9412 52.0112 43.5969C51.4294 48.4941 48.1081 51.7859 43.7559 51.7859C39.411 51.7859 36.156 48.5014 35.6626 43.6116C35.0956 38.0369 30.8833 33.9866 25.64 33.9866C21.1993 33.9866 17.289 36.9691 16.1254 41.2477C15.9119 42.0356 15.794 42.8531 15.7793 43.6779C15.7793 43.6852 15.7793 43.6852 15.7793 43.6926C15.7793 43.7 15.7793 43.7 15.7793 43.7073C15.875 49.0537 20.2936 53.3986 25.64 53.3986C28.9318 53.3986 31.9879 51.7711 33.829 49.039C34.0793 48.6708 33.9762 48.17 33.608 47.9196C33.2398 47.6693 32.7391 47.7724 32.4887 48.1406C30.9496 50.4235 28.3868 51.7932 25.64 51.7932C21.1699 51.7932 17.4731 48.17 17.3921 43.7073C17.4068 43.0224 17.5025 42.3449 17.6793 41.6895C18.6587 38.1105 21.9284 35.6141 25.64 35.6141C30.11 35.6141 33.5712 38.9721 34.0572 43.7883C34.6317 49.4514 38.6157 53.4133 43.7559 53.4133C48.8888 53.4133 52.9464 49.4588 53.6166 43.8031C54.1983 38.9059 57.5196 35.6141 61.8718 35.6141C66.2241 35.6141 69.6853 38.7512 70.0829 42.8973H58.2634C57.8215 42.8973 57.4533 43.2581 57.4533 43.7C57.4533 44.1418 57.8142 44.5027 58.2634 44.5027H70.9224C71.3643 44.5027 71.7251 44.1418 71.7251 43.7C71.7325 41.0636 70.7015 38.6113 68.8384 36.785Z"
					fill="white"
				/>
				<path
					d="M70.3773 46.8512C69.9796 46.6523 69.4936 46.8144 69.2947 47.2194C67.9029 50.0325 65.0677 51.7778 61.8937 51.7778C59.1174 51.7778 56.5547 50.4154 55.0229 48.1399C54.7725 47.7717 54.2718 47.6686 53.9036 47.919C53.5354 48.1694 53.4323 48.6701 53.6826 49.0383C55.509 51.7631 58.5798 53.3906 61.8937 53.3906C65.6863 53.3906 69.0812 51.2992 70.7455 47.9337C70.937 47.5287 70.775 47.0426 70.3773 46.8512Z"
					fill="white"
				/>
			</svg>
		</span>
		<span
			class="loading__circle"
			style="left: 50%; top: 90%; transform: translateX(-50%) translateY(-50%) scale(0)"
		></span>
		<div class="loading__content">
			<svg width="1800" height="1800" viewBox="0 0 1800 1800" fill="none" class="loading__svg">
				<circle
					class="preloader__ideas line"
					cx="900"
					cy="900"
					r="110"
					transform="rotate(-65 900 900)"
					stroke="url(#paint0_linear)"
					stroke-width="2"
					stroke-dasharray="690.46118164062
					5"
					style="stroke-dashoffset: 690px"
				/>
				<circle
					class="preloader__ideas line"
					cx="900"
					cy="900"
					r="165"
					transform="rotate(-145 900 900)"
					stroke="url(#paint1_linear)"
					stroke-width="2"
					stroke-dasharray="1036.306640625"
					style="stroke-dashoffset: 1036px"
				/>
				<circle
					class="preloader__ideas line"
					cx="900"
					cy="900"
					r="220"
					transform="rotate(-200 900 900)"
					stroke="url(#paint2_linear)"
					stroke-width="2"
					stroke-dasharray="1381.7421875"
					style="stroke-dashoffset: 1381px"
				/>
				<circle
					class="preloader__ideas line"
					cx="900"
					cy="900"
					r="275"
					transform="rotate(-125 900 900)"
					stroke="url(#paint3_linear)"
					stroke-width="2"
					stroke-dasharray="1727.177490234375"
					style="stroke-dashoffset: 1727px"
				/>
				<circle
					class="preloader__ideas line"
					cx="900"
					cy="900"
					r="330"
					transform="rotate(145 900 900)"
					stroke="url(#paint4_linear)"
					stroke-width="2"
					stroke-dasharray="2072.6135253906
					25"
					style="stroke-dashoffset: 2072px"
				/>
				<circle
					class="preloader__ideas line"
					cx="900"
					cy="900"
					r="385"
					transform="rotate(115 900 900)"
					stroke="url(#paint5_linear)"
					stroke-width="2"
					stroke-dasharray="2418.048828125"
					style="stroke-dashoffset: 2418px"
				/>
				<circle
					class="preloader__ideas line"
					cx="900"
					cy="900"
					r="440"
					transform="rotate(75 900 900)"
					troke="url(#paint6_linear)"
					stroke-width="2"
					stroke-dasharray="2763.9116210937
					5"
					style="stroke-dashoffset: 2764px"
				/>
				<circle
					class="preloader__ideas line"
					cx="900"
					cy="900"
					r="495"
					transform="rotate(190 900 900)"
					stroke="url(#paint7_linear)"
					stroke-width="2"
					stroke-dasharray="3109.8627929687
					5"
					style="stroke-dashoffset: 3109px"
				/>
				<circle
					class="preloader__ideas line"
					cx="900"
					cy="900"
					r="550"
					transform="rotate(75 900 900)"
					troke="url(#paint8_linear)"
					s
					troke-width="2"
					stroke-dasharray="3455.400390625"
					style="stroke-dashoffset: 3455px"
				/>
				<circle
					class="preloader__ideas line"
					cx="900"
					cy="900"
					r="605"
					transform="rotate(115 900 900)"
					stroke="url(#paint9_linear)"
					stroke-width="2"
					stroke-dasharray="3800.943359375"
					style="stroke-dashoffset: 3800px"
				/>
				<circle
					class="preloader__ideas line"
					cx="900"
					cy="900"
					r="660"
					transform="rotate(95 900 900)"
					troke="url(#paint10_linear)"
					stroke-width="2"
					stroke-dasharray="4146.48388671875"
					style="stroke-dashoffset: 4146px"
				/>
				<circle
					class="preloader__ideas line"
					cx="900"
					cy="900"
					r="715"
					transform="rotate(115 900 900)"
					stroke="url(#paint11_linear)"
					stroke-width="2"
					stroke-dasharray="4492.0234375"
					style="stroke-dashoffset: 4492px"
				/>
				<circle
					class="preloader__ideas line"
					cx="900"
					cy="900"
					r="770"
					transform="rotate(145 900 900)"
					stroke="url(#paint12_linear)"
					stroke-width="2"
					stroke-dasharray="4837.56298828125"
					style="stroke-dashoffset: 4837px"
				/>
				<circle
					class="preloader__ideas line"
					cx="900"
					cy="900"
					r="825"
					transform="rotate(105 900 900)"
					stroke="url(#paint13_linear)"
					stroke-width="2"
					stroke-dasharray="5183.103515625"
					style="stroke-dashoffset: 5183px"
				/>
				<circle
					class="preloader__ideas line"
					cx="900"
					cy="900"
					r="880"
					transform="rotate(-160 900 900)"
					stroke="url(#paint14_linear)"
					stroke-width="2"
					stroke-dasharray="5528.642578125"
					style="stroke-dashoffset: 5528px"
				/>
				<circle
					class="preloader__on line"
					cx="900"
					cy="900"
					r="110"
					transform="rotate(-65 900 900)"
					stroke="url(#paint0_linear)"
					stroke-width="2"
					stroke-dasharray="690.461181640625"
					style="stroke-dashoffset: 690px"
				/>
				<circle
					class="preloader__on line"
					cx="900"
					cy="900"
					r="165"
					transform="rotate(-145 900 900)"
					stroke="url(#paint1_linear)"
					stroke-width="2"
					stroke-dasharray="1036.306640625"
					style="stroke-dashoffset: 1036px"
				/>
				<circle
					class="preloader__on line"
					cx="900"
					cy="900"
					r="220"
					transform="rotate(-200 900 900)"
					stroke="url(#paint2_linear)"
					stroke-width="2"
					stroke-dasharray="1381.7421875"
					style="stroke-dashoffset: 1381px"
				/>
				<circle
					class="preloader__focus line"
					cx="900"
					cy="900"
					r="110"
					transform="rotate(-65 900 900)"
					stroke="url(#paint0_linear)"
					stroke-width="2"
					stroke-dasharray="690.461181640625"
					style="stroke-dashoffset: 690px"
				/>
				<text x="900" y="910" class="preloader__text preloader__focus" style="opacity: 0">
					focus
				</text>
				<text x="900" y="910" class="preloader__text preloader__on" style="opacity: 0">on</text>
				<text x="900" y="910" class="preloader__text preloader__ideas" style="opacity: 0">
					ideas
				</text>
				<defs>
					<linearGradient
						id="paint0_linear"
						x1="900"
						y1="800"
						x2="900"
						y2="1010"
						gradientUnits="userSpaceOnUse"
						gradientTransform="rotate(-50, 900, 900)"
					>
						<stop stop-color="white" />
						<stop offset="0.55" stop-color="#EE3D43" />
					</linearGradient>
					<linearGradient
						id="paint1_linear"
						x1="900"
						y1="800"
						x2="900"
						y2="1065"
						gradientUnits="userSpaceOnUse"
						gradientTransform="rotate(-50, 900, 900)"
					>
						<stop stop-color="white" />
						<stop offset="0.52" stop-color="#EE3D43" />
					</linearGradient>
					<linearGradient
						id="paint2_linear"
						x1="900"
						y1="800"
						x2="900"
						y2="1120"
						gradientUnits="userSpaceOnUse"
						gradientTransform="rotate(-50, 900, 900)"
					>
						<stop stop-color="white" />
						<stop offset="0.47" stop-color="#EE3D43" />
					</linearGradient>
					<linearGradient
						id="paint3_linear"
						x1="900"
						y1="700"
						x2="900"
						y2="1175"
						gradientUnits="userSpaceOnUse"
						gradientTransform="rotate(-50, 900, 900)"
					>
						<stop stop-color="white" />
						<stop offset="0.42" stop-color="#EE3D43" />
					</linearGradient>
					<linearGradient
						id="paint4_linear"
						x1="900"
						y1="600"
						x2="900"
						y2="1230"
						gradientUnits="userSpaceOnUse"
						gradientTransform="rotate(-50, 900, 900)"
					>
						<stop stop-color="white" />
						<stop offset="0.40" stop-color="#EE3D43" />
					</linearGradient>
					<linearGradient
						id="paint5_linear"
						x1="900"
						y1="550"
						x2="900"
						y2="1285"
						gradientUnits="userSpaceOnUse"
						gradientTransform="rotate(-50, 900, 900)"
					>
						<stop stop-color="white" />
						<stop offset="0.36" stop-color="#EE3D43" />
					</linearGradient>
					<linearGradient
						id="paint6_linear"
						x1="900"
						y1="500"
						x2="900"
						y2="1340"
						gradientUnits="userSpaceOnUse"
						gradientTransform="rotate(-50, 900, 900)"
					>
						<stop stop-color="white" />
						<stop offset="0.32" stop-color="#EE3D43" />
					</linearGradient>
					<linearGradient
						id="paint7_linear"
						x1="900"
						y1="450"
						x2="900"
						y2="1395"
						gradientUnits="userSpaceOnUse"
						gradientTransform="rotate(-50, 900, 900)"
					>
						<stop stop-color="white" />
						<stop offset="0.29" stop-color="#EE3D43" />
					</linearGradient>
					<linearGradient
						id="paint8_linear"
						x1="900"
						y1="420"
						x2="900"
						y2="1450"
						gradientUnits="userSpaceOnUse"
						gradientTransform="rotate(-50, 900, 900)"
					>
						<stop stop-color="white" />
						<stop offset="0.25" stop-color="#EE3D43" />
					</linearGradient>
					<linearGradient
						id="paint9_linear"
						x1="900"
						y1="400"
						x2="900"
						y2="1505"
						gradientUnits="userSpaceOnUse"
						gradientTransform="rotate(-50, 900, 900)"
					>
						<stop stop-color="white" />
						<stop offset="0.21" stop-color="#EE3D43" />
					</linearGradient>
					<linearGradient
						id="paint10_linear"
						x1="900"
						y1="380"
						x2="900"
						y2="1560"
						gradientUnits="userSpaceOnUse"
						gradientTransform="rotate(-50, 900, 900)"
					>
						<stop stop-color="white" />
						<stop offset="0.18" stop-color="#EE3D43" />
					</linearGradient>
					<linearGradient
						id="paint11_linear"
						x1="900"
						y1="350"
						x2="900"
						y2="1560"
						gradientUnits="userSpaceOnUse"
						gradientTransform="rotate(-50, 900, 900)"
					>
						<stop stop-color="white" />
						<stop offset="0.15" stop-color="#EE3D43" />
					</linearGradient>
					<linearGradient
						id="paint12_linear"
						x1="900"
						y1="350"
						x2="900"
						y2="1560"
						gradientUnits="userSpaceOnUse"
						gradientTransform="rotate(-50, 900, 900)"
					>
						<stop stop-color="white" />
						<stop offset="0.09" stop-color="#EE3D43" />
					</linearGradient>
					<linearGradient
						id="paint13_linear"
						x1="900"
						y1="400"
						x2="900"
						y2="1560"
						gradientUnits="userSpaceOnUse"
						gradientTransform="rotate(-50, 900, 900)"
					>
						<stop stop-color="white" />
						<stop offset="0.07" stop-color="#EE3D43" />
					</linearGradient>
					<linearGradient
						id="paint14_linear"
						x1="900"
						y1="200"
						x2="900"
						y2="1560"
						gradientUnits="userSpaceOnUse"
						gradientTransform="rotate(-50, 900, 900)"
					>
						<stop stop-color="white" />
						<stop offset="0.05" stop-color="#EE3D43" />
					</linearGradient>
				</defs>
			</svg>
		</div>
	</div>
</template>
<script lang="js">
    import Vue from "vue";
	import anime from 'animejs/lib/anime.es.js';
	import $ from 'jquery';

    export default Vue.extend({
		mounted: () => {
			const preloaderTimeline = anime
				.timeline({
					autoplay: true,
				})
				.add({
					targets: '.loading__circle',
					scale: 0.025,
					delay: 150,
					duration: 300,
					easing: 'easeInOutCubic',
				})
				.add({
					targets: '.loading__logo',
					opacity: 1,
					top: '90%',
					delay: 150,
					duration: 300,
					easing: 'easeInOutCubic',
				})
				.add(
					{
						targets: '.loading__logo',
						scale: 0,
						duration: 200,
						elasticity: 400,
						easing: 'easeInOutCubic',
					},
					'-=300'
				);
			if (window.screen.width < 500) {
				preloaderTimeline.add({
					targets: '.loading__circle',
					top: '50%',
					scale: 2.5,
					delay: 200,
					duration: 500,
				});
			} else {
				preloaderTimeline.add({
					targets: '.loading__circle',
					top: '50%',
					scale: 1.5,
					delay: 200,
					duration: 500,
				});
			}
			preloaderTimeline.add({
				targets: '.loading__content',
				opacity: 1,
				delay: 0,
				duration: 100,
			});
			if (window.screen.width < 500) {
				preloaderTimeline.add({
					targets: '.loading__svg',
					scale: 5,
					delay: 0,
					duration: 0,
				});
			}
			preloaderTimeline
				.add({
					targets: '.preloader__focus',
					opacity: 1,
					delay: 200,
					duration: 200,
				})
				.add({
					targets: '.preloader__focus.line',
					strokeDashoffset: [anime.setDashoffset, 0],
					easing: 'easeInOutSine',
					duration: 150,
					delay: function (el, i) {
						return i * 150;
					},
					direction: 'alternate-reverse',
				})
				.add({
					targets: '.preloader__focus.preloader__text',
					opacity: 0,
					delay: 200,
					duration: 100,
				})
				.add({
					targets: '.preloader__on',
					opacity: 1,
					delay: 100,
					duration: 200,
				})
				.add({
					targets: '.preloader__on.line',
					strokeDashoffset: [anime.setDashoffset, 0],
					easing: 'easeInOutSine',
					duration: 150,
					delay: function (el, i) {
						return i * 100;
					},
					direction: 'alternate-reverse',
				})
				.add({
					targets: '.preloader__on.preloader__text',
					opacity: 0,
					delay: 200,
					duration: 100,
				})
				.add({
					targets: '.preloader__ideas',
					opacity: 1,
					delay: 100,
					duration: 200,
				})
				.add({
					targets: '.preloader__ideas.line',
					strokeDashoffset: [anime.setDashoffset, 0],
					easing: 'easeInOutSine',
					duration: 200,
					delay: function (el, i) {
						return i * 50;
					},
					direction: 'alternate-reverse',
				})
				.add({
					targets: '.preloader__ideas.preloader__text',
					opacity: 0,
					delay: 200,
					duration: 100,
				})
				.add({
					targets: '.loading__circle, .loading__content',
					scale: 0,
					delay: 200,
					duration: 400,
				});
			preloaderTimeline.finished.then(() => {
				$('#loader').fadeOut(400, function () {
					//	showRealVideo.play();
					window.sessionStorage.setItem('preloaderIsShown', true);
				});
			});
		},
	});
</script>
<style lang="scss">
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
	.loading {
		position: fixed;
		display: block;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 9900;
		background: #ffffff;
		transform: translate3d(0.00001px, 0.00001px, 0.00001px);
		&__content {
			opacity: 0;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		&__logo {
			display: block;
			position: absolute;
			top: 50%;
			left: 50%;
		}
		&__circle {
			display: block;
			position: absolute;
			border-radius: 50%;
			top: 90%;
			left: 50%;
			width: 100%;
			height: auto;
			padding-top: 100%;
			background-color: var(--red);
		}
	}
</style>
