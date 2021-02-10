<template>
	<main class="work">
		<section class="work__main">
			<div class="work__subtitle">Наши работы</div>
			<div class="work__container" :style="{'background-image': 'url(' + background + ')'}">
				<div class="work__left">
					<div class="work__logo">
						<svg width="144" height="50" viewBox="0 0 144 50" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M51.7997 13.5327C52.7284 14.196 54.0362 13.9876 54.6996 13.0588C58.6798 7.48656 65.1429 4.15078 71.985 4.15078C79.0925 4.15078 85.6883 7.6761 89.6495 13.5895C90.0475 14.196 90.7109 14.5182 91.3743 14.5182C91.7723 14.5182 92.1703 14.4045 92.5304 14.1581C93.4781 13.5137 93.7434 12.2249 93.099 11.2772C88.3796 4.20764 80.4761 0 71.985 0C63.7972 0 56.0832 3.9802 51.3069 10.6328C50.6436 11.5805 50.871 12.8693 51.7997 13.5327Z"
								fill="white"
							/>
							<path
								d="M136.559 7.20227C131.782 2.5587 125.414 0 118.629 0C105.418 0 94.9751 10.1779 93.2504 24.7341C91.7531 37.3381 83.2051 45.8102 72.0037 45.8102C60.8212 45.8102 52.4439 37.357 51.174 24.772C49.7146 10.4243 38.8733 0 25.3785 0C13.9496 0 3.88543 7.6761 0.890807 18.688C0.34116 20.716 0.0379067 22.8198 0 24.9426C0 24.9615 0 24.9615 0 24.9805C0 24.9994 0 24.9994 0 25.0184C0.246393 38.7785 11.6184 49.961 25.3785 49.961C33.8506 49.961 41.7163 45.7723 46.4546 38.7406C47.099 37.7929 46.8337 36.5041 45.886 35.8597C44.9383 35.2153 43.6495 35.4806 43.0051 36.4283C39.0439 42.3038 32.4481 45.8291 25.3785 45.8291C13.8738 45.8291 4.35926 36.5041 4.15078 25.0184C4.18868 23.2557 4.43508 21.512 4.88996 19.8252C7.41075 10.6139 15.826 4.18869 25.3785 4.18869C36.8832 4.18869 45.7912 12.8314 47.0422 25.2269C48.5205 39.802 58.7743 49.9989 72.0037 49.9989C85.2142 49.9989 95.6574 39.8209 97.3822 25.2648C98.8795 12.6608 107.427 4.18869 118.629 4.18869C129.83 4.18869 138.738 12.2628 139.762 22.9335H109.342C108.205 22.9335 107.257 23.8622 107.257 24.9994C107.257 26.1366 108.186 27.0654 109.342 27.0654H141.923C143.06 27.0654 143.988 26.1366 143.988 24.9994C144.007 18.2141 141.354 11.9027 136.559 7.20227Z"
								fill="white"
							/>
							<path
								d="M140.52 33.1109C139.496 32.5991 138.245 33.0161 137.734 34.0585C134.152 41.2987 126.854 45.7907 118.686 45.7907C111.54 45.7907 104.944 42.2843 101.002 36.4277C100.358 35.48 99.0689 35.2147 98.1212 35.8591C97.1736 36.5035 96.9082 37.7923 97.5526 38.74C102.253 45.7527 110.157 49.9414 118.686 49.9414C128.447 49.9414 137.184 44.5587 141.468 35.897C141.96 34.8546 141.543 33.6037 140.52 33.1109Z"
								fill="white"
							/>
						</svg>
					</div>
					<a href="OOE.pdf" target="_blank" class="contacts__btn btn goto">
						<span class="btn__text"> Портфолио </span>
						<svg width="64" height="72" viewBox="0 0 72 72" class="btn__svg">
							<path
								class="btn__bg"
								d="M4.35321 9.14134C9.7484 4.71538 16.317 1.95847 23.2549 1.2081C30.1927 0.457718 37.1989 1.74643 43.4156 4.91647C49.6324 8.08652 54.79 13.0003 58.2571 19.0564C61.7242 25.1125 63.3504 32.0481 62.9366 39.0142C62.5228 45.9802 60.0869 52.6745 55.9272 58.2775C51.7674 63.8805 46.0643 68.1492 39.516 70.5609C32.9677 72.9726 25.8582 73.4228 19.058 71.8563C12.2577 70.2898 6.06176 66.7746 1.22852 61.7411"
								stroke-width="1.13924"
							/>
							<path
								class="btn__arrow"
								d="M26.9467 43.5547C26.7243 43.7772 26.3636 43.7772 26.1412 43.5547L22.5161 39.9297C22.2937 39.7072 22.2937 39.3466 22.5161 39.1241C22.7386 38.9017 23.0992 38.9017 23.3217 39.1241L26.5439 42.3464L29.7662 39.1241C29.9887 38.9017 30.3493 38.9017 30.5718 39.1241C30.7942 39.3466 30.7942 39.7072 30.5718 39.9297L26.9467 43.5547ZM27.1136 31.7595L27.1136 43.1519L25.9743 43.1519L25.9743 31.7595L27.1136 31.7595Z"
							/>
							<path
								class="btn__circle"
								d="M4.35321 9.14134C9.7484 4.71538 16.317 1.95847 23.2549 1.2081C30.1927 0.457718 37.1989 1.74643 43.4156 4.91647C49.6324 8.08652 54.79 13.0003 58.2571 19.0564C61.7242 25.1125 63.3504 32.0481 62.9366 39.0142C62.5228 45.9802 60.0869 52.6745 55.9272 58.2775C51.7674 63.8805 46.0643 68.1492 39.516 70.5609C32.9677 72.9726 25.8582 73.4228 19.058 71.8563C12.2577 70.2898 6.06176 66.7746 1.22852 61.7411"
								stroke-width="1.13924"
							/>
						</svg>
					</a>
				</div>
				<div class="work__items" id="work__items">
					<div
						v-for="post in posts"
						:key="post.id"
						class="work__item"
						:class="{'work__item-active': post.id === active}"
						@mouseenter="changeBg(post.id)"
						@click="goToWork(post.slug, $event)"
					>
						<span class="work__title" v-html="post.menuTitle"> </span>
						<span class="work__imgs">
							<img :src="post.mainImg" class="work__img" alt="" />
							<span class="work__overlay"></span>
						</span>
					</div>
				</div>
			</div>
		</section>
		<section class="work__contacts">
			<myContacts></myContacts>
		</section>
	</main>
</template>
<script lang="js">
	import Vue from 'vue';
	import {mapGetters} from 'vuex';
	import myContacts from '../../components/contacts/index.vue';

	export default Vue.extend({
		data: function() {
			return {
				active: 1,
				background: '',
			};
		},
		methods: {
			changeBg: function (id) {
				this.active = id;
				this.background = this.posts[id - 1].mainImg;
			},
			goToWork: function (slug, event) {
				this.$eventBus.$emit('work', {
					slug,
					event
				});
				//this.$root.$refs.dot.goToWork(slug, event);
			},
		},
		computed: {
			...mapGetters(['posts']),
		},
		created: function (){
			this.background = this.posts[0].mainImg;
		},
		components: {
			myContacts,
		},
		mounted(){
			window.scrollTo({
				top: document.getElementById('work__items').offsetTop,
				behavior: 'smooth',
			});
		},
	});
</script>
<style lang="scss">
	.work {
		background: var(--bg);
		&__main {
			padding-top: 104px;
		}
		&__subtitle {
			font-size: 36px;
			line-height: 120%;
			text-align: center;
			color: #ffffff;
		}
		&__left {
			display: none;
		}
		&__container {
			display: flex;
			background-repeat: no-repeat;
			background-size: cover;
		}
		&__items {
			width: 100%;
			display: flex;
			flex-wrap: wrap;
		}
		&__container {
			margin-top: 20px;
		}
		&__item {
			cursor: pointer;
			flex-basis: 100%;
			padding: 15px;
			height: 56.25vw;
			width: 100%;
			display: flex;
			align-items: flex-end;
			position: relative;
			z-index: 1;
			&-active {
				background: var(--red);
			}
			&:hover {
				.work__title {
					font-weight: 400;
				}
				.work__overlay {
					opacity: 0.1;
				}
			}
		}
		&__title {
			text-transform: uppercase;
			font-size: 18px;
			line-height: 120%;
			font-weight: 300;
			color: #ffffff;
			font-family: 'Circe', sans-serif;
		}
		&__imgs {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			overflow: hidden;
			z-index: -1;
		}
		&__img {
			min-width: 100%;
			height: 100%;
			object-fit: cover;
		}
		&__overlay {
			transition: 0.5s;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 2;
			background: rgba(33, 33, 33, 0.55);
		}
	}

	@media all and(min-width: 968px) {
		.work {
			&__main {
				padding-top: 130px;
			}
			&__subtitle {
				font-size: 48px;
				line-height: 130%;
			}
			&__item {
				padding: 40px 15px;
			}
			&__title {
				font-size: 36px;
				line-height: 120%;
			}
			&__container {
				margin-top: 48px;
			}
		}
	}

	@media all and(min-width: 1281px) {
		.work {
			padding-top: 140px;
			&__main {
				padding-top: 70px;
			}
			&__subtitle {
				font-size: 48px;
				line-height: 130%;
			}
			&__left {
				border: 1px solid rgba(255, 255, 255, 0.12);
				padding: 70px 0;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;
				flex-basis: 25%;
			}
			&__items {
				flex-basis: 75%;
			}
			&__item {
				border: 1px solid rgba(255, 255, 255, 0.12);
				flex-basis: 33.33333%;
				padding: 30px;
				height: 25vh;
				justify-content: flex-start;
				align-items: center;
			}
			&__imgs {
				display: none;
			}
			&__title {
				font-size: 20px;
				line-height: 150%;
			}
			&__contacts {
				height: 700px;
				padding-top: 100px;
				padding-bottom: 100px;
			}
		}
	}
</style>
