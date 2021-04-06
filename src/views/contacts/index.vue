<template>
	<main class="contacts">
		<div class="contacts__bg"></div>
		<section class="contacts__section">
			<myContacts></myContacts>
		</section>
	</main>
</template>
<script lang="ts">
	import Vue from 'vue';
	import myContacts from '../../components/contacts/index.vue';

	export default Vue.extend({
		components: {
			myContacts,
		},
	});
</script>
<style lang="scss">
	.contacts {
		padding-top: 84px;
		&__section {
			height: 450px;
			padding-top: 45px;
			padding-bottom: 45px;
		}
		&__bg {
			position: fixed;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			z-index: -1;
			background: var(--bg) url('../../assets/images/contacts_bg.svg');
			background-size: 100%;
		}
	}
	@media all and(min-width: 540px) {
		.contacts {
			padding-top: 96px;
			&__section {
				min-height: 600px;
				padding-top: 70px;
				padding-bottom: 70px;
			}
		}
	}
	@media all and(min-height: 1000px) {
		.contacts {
			&__section {
				height: calc(100vh - 596px);
			}
		}
	}
	@media all and(min-width: 1281px) {
		.contacts {
			padding-top: 140px;
			&__section {
				min-height: 600px;
				max-height: 1200px;
				height: calc(100vh - 140px);
				padding-top: 40px;
				padding-bottom: 40px;
			}
		}
	}
</style>
