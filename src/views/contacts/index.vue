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
		padding-top: 140px;
		&__bg {
			position: fixed;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			z-index: -1;
			background: var(--bg) url('./images/contacts_bg.svg');
		}
	}

	@media all and(min-width: 968px) {
		.contacts {
			&__box {
				& + & {
					margin-top: 30px;
				}
			}
			&__mobile {
				display: none;
			}
			&__btn {
				display: none;
			}
			&__right {
				padding-top: 40px;
				width: 50%;
			}
			&__normal {
				margin-top: 30px;
				display: flex;
			}
			&__title {
				font-size: 44px;
				line-height: 130%;
			}
			&__subtitle {
				font-size: 30px;
				line-height: 188.1%;
			}
			&__text {
				font-size: 24px;
				line-height: 188%;
				& + & {
					margin-top: 0;
				}
			}
			&__address {
				margin-top: 0;
			}
		}
	}

	@media all and(min-width: 1281px) {
		.contacts {
			&__section {
				height: calc(100vh - 140px);
				padding-top: 135px;
				padding-bottom: 120px;
			}
			&__title {
				font-size: 48px;
				line-height: 71px;
				display: flex;
				flex-direction: column;
			}
			&__text {
				line-height: 161.1%;
				& + & {
					margin-left: 0;
				}
			}
			&__right {
				padding-top: 0;
				width: 420px;
			}
			&__hover {
				transition: 0.4s;
				&:hover {
					color: var(--red);
				}
			}
			&__box {
				& + & {
					margin-top: 72px;
				}
			}
			&__normal {
				margin-top: 0;
			}
			&__btn {
				display: flex;
			}
		}
	}

	@media all and(min-width: 1300px) and (max-height: 768px) {
		.contacts {
			&__section {
				height: calc(100vh - 140px);
				padding-top: 25px;
				padding-bottom: 40px;
			}
			&__box + &__box {
				margin-top: 32px;
			}
		}
	}
</style>
