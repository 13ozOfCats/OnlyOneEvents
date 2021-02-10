<template>
	<slick ref="slick" class="project__slider" :options="settings">
		<div v-for="pic in gallery" :key="pic" class="project__slide">
			<img :src="pic" class="project__photo" />
		</div>
	</slick>
</template>
<script lang="js">
	import Vue from 'vue';
	import Slick from 'vue-slick';
	import 'slick-carousel/slick/slick.css';

	export default Vue.extend({
		props: {
			gallery: Array,
		},
		data() {
			return {
				settings: {
					slidesToScroll: 1,
					focusOnSelect: true,
					variableWidth: true,
					dots: false,
					infinite: true,
					arrows: false,
					responsive: [
						{
							breakpoint: 1280,
							settings: {
								arrows: false,
								focusOnSelect:false,
							}
						},
					]
				},
			}
		},
		components: {
			Slick
		},
		beforeUpdate() {
			if (this.$refs.slick) {
				this.$refs.slick.destroy();
			}
		},
		updated() {
			this.$nextTick(function () {
				if (this.$refs.slick) {
					this.$refs.slick.create(this.slickOptions);
				}
			});
		},
	});
</script>
<style lang="scss">
	.slick-slide {
		outline: none;
	}
	.project {
		&__slider {
			width: 100%;
			margin-top: 20px;
			.slick-track {
				margin-left: 15px;
			}
			&:hover {
				.project__arrow {
					display: block;
					opacity: 1;
				}
			}
		}
		&__slide {
			width: fit-content;
			height: 176px;
			border-radius: 6px;
			overflow: hidden;
			outline: none;
			margin-right: 15px;
		}
		&__photo {
			height: 100%;
			object-fit: contain;
		}
	}
	@media all and(min-width: 968px) {
		.project {
			&__slider {
				margin-top: 50px;
				.slick-track {
					margin-left: calc((100vw - 1200px) / 2 + 15px);
				}
			}
			&__slide {
				height: 487px;
				margin-left: 0;
				margin-right: 67px;
			}
		}
	}
</style>
