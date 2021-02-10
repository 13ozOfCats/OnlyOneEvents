<template>
	<div class="dot" :style="{top: y + 'px', left: x + 'px'}"></div>
</template>
<script lang="js">
	import Vue from 'vue';
	import anime from 'animejs/lib/anime.es.js';

	export default Vue.extend({
		data: function() {
			return {
				x: 0,
				y: 0,
				width: '10px',
				height: '10px',
			};
		},
		created() {
			this.$eventBus.$on('work', data => this.goToWork(data.slug, data.event));
		},
		beforeDestroy() {
			this.$eventBus.$off('work');
		},
		methods: {
			goToWork: function(slug, event) {
				this.x = event.clientX;
				this.y = event.clientY;
				const workLoad = anime
					.timeline({
						autoplay: true,
					})
					.add({
						targets: '.dot',
						scale: [0, 100],
						delay: 100,
						duration: 700,
						easing: 'easeInOutCubic',
					});
				workLoad.finished.then(() => {
					this.$router.push({path: '/works/' + slug});
					this.projectPage();
				});
			},
			projectPage: function() {
				this.x = 0;
				this.y = 0;
				anime({
					targets: '.dot',
					scale: 0,
					delay: 0,
					duration: 0,
					easing: 'linear',
				});
			},
		},
	});
</script>
<style lang="scss">
	.dot {
		transform: scale(0);
		background: var(--red);
		width: 100px;
		height: 100px;
		border-radius: 100%;
		position: fixed;
		z-index: 1000;
	}
</style>
