<template>
	<div id="app">
		<myLoader v-if="showPreloader"></myLoader>
		<myShowreel v-if="showPreloader" :videoLink="shortcut" :displayOn="true"></myShowreel>
		<myHeader></myHeader>
		<myDot v-if="this.$route.path.includes('/works')" ref="dot"></myDot>
		<router-view />
		<myFooter></myFooter>
	</div>
</template>
<script lang="ts">
	import myFooter from './components/footer/index.vue';
	import myHeader from './components/header/index.vue';
	import myDot from './components/dot/index.vue';
	import myLoader from './components/loader/index.vue';
	import myShowreel from './components/showreel/index.vue';
	import {mapGetters} from 'vuex';

	export default {
		data: function() {
			return {
				goWork: false,
			};
		},
		components: {
			myLoader,
			myShowreel,
			myFooter,
			myHeader,
			myDot,
		},
		computed: {
			...mapGetters(['showPreloader', 'shortcut']),
		},
	};
</script>
<style lang="scss">
	/* ___________1.Сброс_CSS_____________________ */
	html,
	body,
	div,
	span,
	applet,
	object,
	iframe,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	a,
	abbr,
	acronym,
	address,
	big,
	cite,
	code,
	del,
	dfn,
	em,
	img,
	ins,
	kbd,
	q,
	s,
	samp,
	small,
	strike,
	strong,
	sub,
	sup,
	tt,
	var,
	b,
	u,
	i,
	center,
	dl,
	dt,
	dd,
	ol,
	ul,
	li,
	fieldset,
	form,
	label,
	legend,
	table,
	caption,
	tbody,
	tfoot,
	thead,
	tr,
	th,
	td,
	article,
	aside,
	canvas,
	details,
	embed,
	figure,
	figcaption,
	footer,
	header,
	hgroup,
	menu,
	nav,
	output,
	ruby,
	section,
	summary,
	time,
	mark,
	audio,
	video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		vertical-align: baseline;
	}

	/* HTML5 display-role reset for older browsers */
	article,
	aside,
	details,
	figcaption,
	figure,
	footer,
	hgroup,
	menu,
	nav,
	section {
		display: block;
	}

	body {
		font-style: normal;
		font-weight: normal;
		position: relative;
		line-height: 1;
		font-size: 0;
	}

	ul {
		list-style: none;
	}

	blockquote,
	q {
		quotes: none;
	}

	blockquote:before,
	blockquote:after,
	q:before,
	q:after {
		content: '';
	}

	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	input[type='submit'],
	input[type='reset'] {
		cursor: pointer;
	}

	* {
		box-sizing: border-box;
	}

	*::before,
	*::after {
		box-sizing: border-box;
	}

	a:focus,
	input:focus,
	textarea:focus {
		outline: 0 none;
	}

	a {
		text-decoration: none;
	}

	img {
		max-width: 100%;
		height: auto;
	}

	html {
		box-sizing: border-box;
	}

	*,
	*::before,
	*::after {
		box-sizing: inherit;
	}

	input,
	button {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		border-radius: 0;
	}

	h1 {
		font-weight: normal;
	}

	@font-face {
		font-family: 'Circe';
		src: url('assets/fonts/Circe-Regular.eot');
		src: url('assets/fonts/Circe-Regular.eot?#iefix') format('embedded-opentype'),
			url('assets/fonts/Circe-Regular.woff') format('woff'), url('assets/fonts/Circe-Regular.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
	}
	@font-face {
		font-family: 'Circe';
		src: url('assets/fonts/Circe-Light.eot');
		src: url('assets/fonts/Circe-Light.eot?#iefix') format('embedded-opentype'),
			url('assets/fonts/Circe-Light.woff') format('woff'), url('assets/fonts/Circe-Light.ttf') format('truetype');
		font-weight: 300;
		font-style: normal;
	}

	@font-face {
		font-family: 'Circe-Light';
		src: url('assets/fonts/Circe-Light.eot');
		src: url('assets/fonts/Circe-Light.eot?#iefix') format('embedded-opentype'),
			url('assets/fonts/Circe-Light.woff') format('woff'), url('assets/fonts/Circe-Light.ttf') format('truetype');
		font-weight: 300;
		font-style: normal;
	}

	body {
		font-family: 'Circe', sans-serif;
		font-style: normal;
		font-weight: normal;
	}

	.container {
		width: 100%;
		padding-right: 15px;
		padding-left: 15px;
		margin-right: auto;
		margin-left: auto;
		&-h100 {
			height: 100%;
		}
	}

	@media (min-width: 576px) {
		.container {
			max-width: 540px;
		}
	}

	@media (min-width: 768px) {
		.container {
			max-width: 720px;
		}
	}

	@media (min-width: 992px) {
		.container {
			max-width: 100%;
		}
	}

	@media (min-width: 1200px) {
		.container {
			max-width: 1200px;
		}
	}

	body {
		overflow-x: hidden;
		color: #ffffff;
	}

	html,
	body {
		width: 100%;
		height: 100%;
	}
	:root {
		--red: #ee3d43;
		--bg: #212121;
		--white: #ffffff;
	}

	.fixed {
		position: fixed;
	}

	.light {
		font-weight: 300;
		font-family: 'Circe', sans-serif;
	}

	.video {
		&__controls {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
		&__play {
			position: absolute;
			display: flex;
			align-items: center;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
		&__svg {
			cursor: pointer;
			display: none;
			&:hover {
				.video__bg {
					stroke-dashoffset: 210;
				}
			}
			&:active {
				.video__bg {
					stroke-dashoffset: 0;
				}
				.video__content {
					fill: var(--red);
				}
			}
		}
		&__bg {
			transition: 0.5s;
			stroke-dasharray: 285px;
			stroke-dashoffset: 285px;
			stroke: var(--red);
		}
		&__mobile {
			cursor: pointer;
		}
		&__info {
			white-space: nowrap;
			display: flex;
			flex-direction: column;
			font-size: 14px;
			line-height: 150%;
			color: var(--white);
			margin-left: 16px;
		}
	}

	.slick-track {
		display: flex;
		align-items: center;
	}

	.btn {
		cursor: pointer;
		width: fit-content;
		display: flex;
		align-items: center;
		user-select: none;
		&__svg,
		&__mobile {
			& + .btn__text {
				margin-left: -2px;
			}
		}
		&__svg {
			display: none;
		}
		&:hover {
			.btn__circle {
				stroke-dashoffset: 130;
			}
			.btn__bg {
				stroke-dashoffset: -36;
			}
		}
		&:active {
			.btn__circle {
				stroke-dashoffset: 0;
			}
			.btn__arrow {
				fill: var(--red);
			}
			.btn__bg {
				stroke-dashoffset: -166;
			}
		}
		&__arrow {
			stroke: none;
			fill: var(--white);
		}
		&__circle {
			transition: 0.3s;
			fill: none;
			stroke: var(--red);
			stroke-dasharray: 166;
			stroke-dashoffset: 166;
			stroke-width: 2;
		}
		&__text {
			font-size: 14px;
			line-height: 150%;
			color: var(--white);
			& + .btn__svg,
			& + .btn__mobile {
				margin-left: -5px;
			}
		}
		&__bg {
			transition: 0.3s;
			fill: none;
			z-index: -1;
			stroke: var(--white);
			stroke-dasharray: 166;
			stroke-dashoffset: 0;
			stroke-width: 1.13924;
		}
		&__gray {
			.btn__bg {
				stroke: #c8c8c8;
			}
			.btn__arrow {
				fill: #c8c8c8;
			}
			.btn__text {
				color: #212121;
			}
		}
	}

	.link {
		cursor: pointer;
		&:hover {
			.link__circle {
				stroke-dashoffset: 175;
			}
			.link__bg {
				stroke-dashoffset: -55;
			}
		}
		&:active {
			.link__circle {
				stroke-dashoffset: 0;
			}
			.link__content {
				fill: var(--red);
			}
			.link__bg {
				stroke-dashoffset: -230;
			}
		}
		&__circle {
			transition: 0.3s;
			fill: none;
			stroke: var(--red);
			stroke-dasharray: 230;
			stroke-dashoffset: 230;
			stroke-width: 1.5;
		}
		&__content {
			stroke: none;
			fill: var(--white);
			&-gray {
				fill: #c8c8c8;
			}
		}
		&__bg {
			transition: 0.3s;
			fill: none;
			stroke: var(--white);
			z-index: -1;
			stroke-dasharray: 230;
			stroke-dashoffset: 0;
			stroke-width: 1.13924;
			&-gray {
				stroke: #c8c8c8;
			}
		}
	}

	.inline-block {
		display: inline-block;
	}
	.desktop {
		display: none;
	}
	.tablet {
		display: none;
	}
	.mobile {
		display: block;
	}

	.hidden {
		display: none !important;
	}

	#project {
		transition: 1s;
	}

	@keyframes zoomzoom {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(1.25);
		}
	}
	@keyframes clientsSlider {
		100% {
			transform: translateX(-50%);
		}
	}
	@keyframes ZoomIn {
		0% {
			transform: scale(0);
		}
		100% {
			transform: scale(1);
		}
	}

	body * {
		-webkit-font-smoothing: antialiased;
	}

	@media all and(min-width: 968px) {
		.desktop {
			display: none;
		}
		.tablet {
			display: block;
		}
		.mobile {
			display: none;
		}

		.btn {
			&__text {
				font-size: 24px;
				line-height: 188%;
			}
			&__mobile {
				display: none;
			}
			&__svg {
				display: block;
			}
		}

		.video {
			&__info {
				font-size: 24px;
				line-height: 150%;
				margin-left: 24px;
			}
			&__svg {
				display: block;
			}
			&__mobile {
				display: none;
			}
		}
	}

	@media all and(min-width: 1281px) {
		.desktop {
			display: block;
		}

		.tablet {
			display: none;
		}

		.mobile {
			display: none;
		}

		.btn {
			&__text {
				font-size: 27.3418px;
				line-height: 188%;
			}
		}

		.video {
			&__info {
				font-size: 24px;
				line-height: 175%;
				margin-left: 30px;
			}
		}
	}

	@media all and (max-width: 1279px) {
		.container {
			&-mobileOff {
				padding-right: 0;
				padding-left: 0;
				max-width: 100%;
			}
		}
	}

	@media all and(min-width: 1300px) and (max-height: 768px) {
		.footer {
			&__flex,
			&__mid {
				margin-top: 50px;
			}
		}
	}
</style>
