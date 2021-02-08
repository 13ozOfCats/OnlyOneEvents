<template>
	<div class="showreal showreal1 desktop" :style="{display: this.showRealDisplay}">
		<video
			muted="muted"
			preload="auto"
			src="http://ooe.borodadigital.com/video/showreel.mp4"
			class="showreal__video"
			ref="showrealvideo"
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
</template>
<script lang="js">
	   import Vue from "vue";

	   export default Vue.extend({
		data: function() {
			return {
				showRealDisplay: 'block',
			};
		},
		methods: {
			playVideo: function () {
				this.showRealDisplay = 'block';
				this.$refs.showrealvideo.currentTime = 0;
				//document.querySelector('.main').style.overflow = 'hidden';
				this.$refs.showrealvideo.play();
			},
			hideVideo: function () {
				this.$refs.showrealvideo.pause();
				this.showRealDisplay = 'none';
				//document.querySelector('.main').style.overflow = '';
			},
			muteVideo: function () {
				let sound = document.querySelector('.showreal1 .showreal__sound');
				this.$refs.showrealvideo.muted = !this.$refs.showrealvideo.muted;
				if (this.$refs.showrealvideo.muted) {
					sound.classList.add('showreal__sound-off');
				} else {
					sound.classList.remove('showreal__sound-off');
				}
			},
		},
		mounted() {
			setTimeout(this.playVideo(), 3500);
		},
	});
</script>
<style lang="scss">
	.showreal {
		position: fixed;
		background: #000;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 8800;
		transform: translate3d(0.00001px, 0.00001px, 0.00001px);
		&__video {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		&__btn {
			position: absolute;
			bottom: 100px;
			right: 100px;
		}
		&__sound {
			cursor: pointer;
			position: absolute;
			top: 100px;
			right: 100px;
			.showreal__muteOff {
				display: none;
			}
			.showreal__muteOn {
				display: block;
			}
			.showreal__svg {
				stroke: var(--white);
				fill: var(--white);
			}
			&-off {
				.showreal__svg {
					stroke: var(--red);
					fill: var(--red);
				}
				.showreal__muteOff {
					display: block;
				}
				.showreal__muteOn {
					display: none;
				}
			}
		}
		&__play {
			cursor: pointer;
		}
	}
</style>
