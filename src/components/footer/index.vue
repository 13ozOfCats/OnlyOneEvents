<template>
	<footer
		class="footer"
		:class="{'footer-active': footerActive, 'footer-main': mainPage, 'footer-meet': footerMeet}"
		id="footer"
	>
		<div class="footer__wrapper" :style="{transform: 'translateX(' + -slide * 20 + '%)'}">
			<div class="footer__slide">
				<div class="container footer__container">
					<div v-if="mainPage" class="footer__start  footer__desktop">
						<span class="btn" @click="hideMeet">
							<svg class="btn__svg" width="56" height="65" viewBox="0 0 56 65" fill="none">
								<path
									class="btn__bg"
									d="M52.4786 8.14629C47.7429 4.26128 41.9771 1.84133 35.8872 1.18266C29.7973 0.523996 23.6475 1.6552 18.1905 4.43779C12.7336 7.22039 8.20636 11.5336 5.163 16.8495C2.11963 22.1654 0.692206 28.2533 1.05545 34.368C1.41869 40.4826 3.55684 46.3587 7.20816 51.2769C10.8595 56.1951 15.8655 59.9421 21.6135 62.059C27.3615 64.176 33.602 64.5711 39.5711 63.1961C45.5402 61.8211 50.9789 58.7355 55.2214 54.3172"
									stroke-width="1.13924"
								/>
								<path
									class="btn__arrow"
									d="M27.6464 32.6464C27.4512 32.8417 27.4512 33.1583 27.6464 33.3536L30.8284 36.5355C31.0237 36.7308 31.3403 36.7308 31.5355 36.5355C31.7308 36.3403 31.7308 36.0237 31.5355 35.8284L28.7071 33L31.5355 30.1716C31.7308 29.9763 31.7308 29.6597 31.5355 29.4645C31.3403 29.2692 31.0237 29.2692 30.8284 29.4645L27.6464 32.6464ZM38 32.5L28 32.5L28 33.5L38 33.5L38 32.5Z"
									fill="white"
								/>
								<path
									class="btn__circle"
									d="M52.4786 8.14629C47.7429 4.26128 41.9771 1.84133 35.8872 1.18266C29.7973 0.523996 23.6475 1.6552 18.1905 4.43779C12.7336 7.22039 8.20636 11.5336 5.163 16.8495C2.11963 22.1654 0.692206 28.2533 1.05545 34.368C1.41869 40.4826 3.55684 46.3587 7.20816 51.2769C10.8595 56.1951 15.8655 59.9421 21.6135 62.059C27.3615 64.176 33.602 64.5711 39.5711 63.1961C45.5402 61.8211 50.9789 58.7355 55.2214 54.3172"
									stroke-width="1.13924"
								/>
							</svg>
							<svg class="btn__mobile" width="40" height="46" viewBox="0 0 40 46" fill="none">
								<path
									class="btn__bg"
									d="M36.9533 5.99106C33.6458 3.27772 29.6189 1.58759 25.3657 1.12757C21.1124 0.667553 16.8173 1.4576 13.0061 3.401C9.1949 5.3444 6.03301 8.35683 3.90749 12.0695C1.78197 15.7822 0.785032 20.0341 1.03872 24.3046C1.29242 28.5752 2.78573 32.6791 5.33586 36.114C7.88599 39.549 11.3823 42.1659 15.3967 43.6444C19.4112 45.1229 23.7697 45.3989 27.9386 44.4385C32.1075 43.4782 35.9059 41.3232 38.8689 38.2374"
									stroke="white"
								/>
								<path
									class="btn__arrow"
									d="M18.7531 23.2469C18.6167 23.1106 18.6167 22.8894 18.7531 22.7531L20.9754 20.5307C21.1118 20.3944 21.3329 20.3944 21.4693 20.5307C21.6056 20.6671 21.6056 20.8882 21.4693 21.0246L19.4939 23L21.4693 24.9754C21.6056 25.1118 21.6056 25.3329 21.4693 25.4693C21.3329 25.6056 21.1118 25.6056 20.9754 25.4693L18.7531 23.2469ZM27 23.3492L19 23.3492L19 22.6508L27 22.6508L27 23.3492Z"
									fill="white"
								/>
								<path
									class="btn__circle"
									d="M36.9533 5.99106C33.6458 3.27772 29.6189 1.58759 25.3657 1.12757C21.1124 0.667553 16.8173 1.4576 13.0061 3.401C9.1949 5.3444 6.03301 8.35683 3.90749 12.0695C1.78197 15.7822 0.785032 20.0341 1.03872 24.3046C1.29242 28.5752 2.78573 32.6791 5.33586 36.114C7.88599 39.549 11.3823 42.1659 15.3967 43.6444C19.4112 45.1229 23.7697 45.3989 27.9386 44.4385C32.1075 43.4782 35.9059 41.3232 38.8689 38.2374"
									stroke="white"
								/>
							</svg>
							<span class="btn__text">
								Назад
							</span>
						</span>
						<router-link to="/about" class="btn">
							<span class="btn__text">
								О нас
							</span>
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
						</router-link>
					</div>
					<div class="footer__flex">
						<div class="footer__left">
							<label class="footer__label">
								<input
									placeholder="Имя"
									class="footer__input"
									:value="message.name"
									@input="message.name = $event.target.value"
									@focus="
										errors.name = false;
										errorsText.name = '\xa0';
									"
									@blur="validateName"
									:class="{'footer__input-error': errors.name}"
								/>
								<span class="footer__error">{{ errorsText.name }}</span>
							</label>
							<label class="footer__label">
								<input
									placeholder="E-mail"
									class="footer__input"
									:value="message.email"
									@input="message.email = $event.target.value"
									@focus="
										errors.email = false;
										errorsText.email = '\xa0';
									"
									@blur="validateEmail"
									:class="{'footer__input-error': errors.email}"
								/>
								<span class="footer__error">{{ errorsText.email }}</span>
							</label>
						</div>
						<div class="footer__right">
							<div class="footer__btn footer__control" id="step-1" @click="goToSlide(2)">
								<span>Далее</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="footer__slide">
				<div class="container footer__container">
					<prevBtn @click="goToSlide(1)"></prevBtn>
					<div class="footer__flex">
						<div class="footer__left">
							<label class="footer__label">
								<input
									v-imask="phoneMask"
									placeholder="Телефон"
									class="footer__input"
									@input="message.phone = $event.target.value"
									:value="message.phone"
									@focus="(errors.phone = false), (errorsText.phone = '\xa0')"
									@blur="validatePhone"
									:class="{'footer__input-error': errors.phone}"
								/>
								<span class="footer__error">{{ errorsText.phone }}</span>
							</label>
							<label class="footer__label">
								<input
									placeholder="Тема обращения"
									class="footer__input"
									@input="message.theme = $event.target.value"
									:value="message.theme"
									@focus="
										errors.theme = false;
										errorsText.theme = '\xa0';
									"
									@blur="validateTheme"
									:class="{'footer__input-error': errors.theme}"
								/>
								<span class="footer__error">{{ errorsText.theme }}</span>
							</label>
							<ul class="footer__ul">
								<li class="footer__li">
									<span class="footer__theme" @click="changeTheme('Предложить бриф')">Предложить бриф</span>
								</li>
								<li class="footer__li">
									<span class="footer__theme" @click="changeTheme('Запросить портфолио')">Запросить портфолио</span>
								</li>
								<li class="footer__li">
									<span class="footer__theme" @click="changeTheme('Предложить свои услуги')">
										Предложить свои услуги
									</span>
								</li>
								<li class="footer__li">
									<span class="footer__theme" @click="changeTheme('Устроиться на работу')">Устроиться на работу</span>
								</li>
							</ul>
						</div>
						<div class="footer__right">
							<div class="footer__btn footer__control" @click="goToSlide(3)">
								<span>Далее</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="footer__slide">
				<div class="container footer__container">
					<prevBtn @click="goToSlide(2)"></prevBtn>
					<div class="footer__flex">
						<div class="footer__left">
							<label class="footer__label">
								<textarea
									cols="30"
									rows="10"
									class="footer__textarea"
									placeholder="Сообщение"
									@input="message.text = $event.target.value"
									:value="message.text"
								></textarea>
							</label>
						</div>
						<div class="footer__right">
							<div class="footer__btn footer__control" @click="goToSlide(4)">
								<span>Далее</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="footer__slide">
				<div class="container footer__container">
					<prevBtn @click="goToSlide(3)"></prevBtn>
					<div class="footer__flex">
						<div class="footer__left">
							<dropfile></dropfile>
						</div>
						<div class="footer__right">
							<div class="footer__btn footer__control" @click="sendMessage">
								<span>Отправить</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="footer__slide">
				<div class="container  footer__container">
					<span v-show="$route.path !== '/'" class="btn" @click="toMainPage">
						<svg width="56" height="65" viewBox="0 0 56 65" fill="none" class="btn__svg">
							<path
								class="btn__bg"
								d="M52.4786 8.14629C47.7429 4.26128 41.9771 1.84133 35.8872 1.18266C29.7973 0.523996 23.6475 1.6552 18.1905 4.43779C12.7336 7.22039 8.20636 11.5336 5.163 16.8495C2.11963 22.1654 0.692206 28.2533 1.05545 34.368C1.41869 40.4826 3.55684 46.3587 7.20816 51.2769C10.8595 56.1951 15.8655 59.9421 21.6135 62.059C27.3615 64.176 33.602 64.5711 39.5711 63.1961C45.5402 61.8211 50.9789 58.7355 55.2214 54.3172"
								stroke-width="1.13924"
							></path>
							<path
								class="btn__arrow"
								d="M27.6464 32.6464C27.4512 32.8417 27.4512 33.1583 27.6464 33.3536L30.8284 36.5355C31.0237 36.7308 31.3403 36.7308 31.5355 36.5355C31.7308 36.3403 31.7308 36.0237 31.5355 35.8284L28.7071 33L31.5355 30.1716C31.7308 29.9763 31.7308 29.6597 31.5355 29.4645C31.3403 29.2692 31.0237 29.2692 30.8284 29.4645L27.6464 32.6464ZM38 32.5L28 32.5L28 33.5L38 33.5L38 32.5Z"
								fill="white"
							></path>
							<path
								class="btn__circle"
								d="M52.4786 8.14629C47.7429 4.26128 41.9771 1.84133 35.8872 1.18266C29.7973 0.523996 23.6475 1.6552 18.1905 4.43779C12.7336 7.22039 8.20636 11.5336 5.163 16.8495C2.11963 22.1654 0.692206 28.2533 1.05545 34.368C1.41869 40.4826 3.55684 46.3587 7.20816 51.2769C10.8595 56.1951 15.8655 59.9421 21.6135 62.059C27.3615 64.176 33.602 64.5711 39.5711 63.1961C45.5402 61.8211 50.9789 58.7355 55.2214 54.3172"
								stroke-width="1.13924"
							></path>
						</svg>
						<svg width="40" height="46" viewBox="0 0 40 46" fill="none" class="btn__mobile">
							<path
								class="btn__bg"
								d="M36.9533 5.99106C33.6458 3.27772 29.6189 1.58759 25.3657 1.12757C21.1124 0.667553 16.8173 1.4576 13.0061 3.401C9.1949 5.3444 6.03301 8.35683 3.90749 12.0695C1.78197 15.7822 0.785032 20.0341 1.03872 24.3046C1.29242 28.5752 2.78573 32.6791 5.33586 36.114C7.88599 39.549 11.3823 42.1659 15.3967 43.6444C19.4112 45.1229 23.7697 45.3989 27.9386 44.4385C32.1075 43.4782 35.9059 41.3232 38.8689 38.2374"
								stroke="white"
							></path>
							<path
								class="btn__arrow"
								d="M18.7531 23.2469C18.6167 23.1106 18.6167 22.8894 18.7531 22.7531L20.9754 20.5307C21.1118 20.3944 21.3329 20.3944 21.4693 20.5307C21.6056 20.6671 21.6056 20.8882 21.4693 21.0246L19.4939 23L21.4693 24.9754C21.6056 25.1118 21.6056 25.3329 21.4693 25.4693C21.3329 25.6056 21.1118 25.6056 20.9754 25.4693L18.7531 23.2469ZM27 23.3492L19 23.3492L19 22.6508L27 22.6508L27 23.3492Z"
								fill="white"
							></path>
							<path
								class="btn__circle"
								d="M36.9533 5.99106C33.6458 3.27772 29.6189 1.58759 25.3657 1.12757C21.1124 0.667553 16.8173 1.4576 13.0061 3.401C9.1949 5.3444 6.03301 8.35683 3.90749 12.0695C1.78197 15.7822 0.785032 20.0341 1.03872 24.3046C1.29242 28.5752 2.78573 32.6791 5.33586 36.114C7.88599 39.549 11.3823 42.1659 15.3967 43.6444C19.4112 45.1229 23.7697 45.3989 27.9386 44.4385C32.1075 43.4782 35.9059 41.3232 38.8689 38.2374"
								stroke="white"
							></path>
						</svg>
						<span class="btn__text"> На главную </span>
					</span>
					<div class="footer__complete">
						<h3 class="footer__title">Сообщение отправлено</h3>
						<span class="footer__done" @click="goTop">
							{{ goTopText }}
						</span>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>
<script lang="js">
	import Vue from 'vue';
	import {IMaskDirective} from 'vue-imask';
	import prevBtn from '../../components/btn_footer/index.vue';
	import dropfile from '../../components/dropfile/index.vue';

	export default Vue.extend({
		data: function() {
			return {
				mainPage: false,
				footerMeet: false,
				message: {
					name: '',
					email: '',
					phone: '',
					theme: '',
					text: '',
					files: [],
				},
				errors: {
					name: false,
					email: false,
					phone: false,
					theme: false,
				},
				errorsText: {
					name: '\xa0',
					email: '\xa0',
					phone: '\xa0',
					theme: '\xa0',
				},
				slide: 0,
				footerActive: false,
				phoneMask: {
					mask: '+{7} (000) 000 00 00',
					lazy: true,
				},
				formSend: false,
			};
		},
		computed: {
			goTopText () {
				if (this.mainPage) {
					return 'На главную'
				} else {
					return 'Наверх'
				}
			}
		},
		watch: {
			$route: function() {
				this.mainPage = this.$route.path === '/';
				this.message.name = '';
				this.message.email = '';
				this.message.phone = '';
				this.message.theme = '';
				this.message.text = '';
				this.message.files = [];
				this.errors.name = false;
				this.errors.email = false;
				this.errors.phone = false;
				this.errors.theme = false;
				this.errorsText.name = '\xa0';
				this.errorsText.email = '\xa0';
				this.errorsText.phone = '\xa0';
				this.errorsText.theme = '\xa0';
				this.goSlide(1);
			},
		},
		created(){
			this.$eventBus.$on('footerMeet', this.fMeet);
			this.$eventBus.$on('dropfile', this.getFile);
		},
		beforeDestroy() {
			this.$eventBus.$off('footerMeet');
			this.$eventBus.$off('dropfile');
		},
		methods: {
			validateName: function() {
				if (this.message.name === '') {
					this.errorsText.name = 'Пожалуйста введите ваше имя';
					this.errors.name = true;
				} else {
					this.errorsText.name = '\xa0';
					this.errors.name = false;
				}
			},
			validateEmail: function() {
				const mailTmp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				if (this.message.email === '') {
					this.errorsText.email = 'Пожалуйста введите ваш email';
					this.errors.email = true;
				} else if (!mailTmp.test(this.message.email)) {
					this.errorsText.email = 'Некорректный формат почты';
					this.errors.email = true;
				} else {
					this.errorsText.email = '\xa0';
					this.errors.email = false;
				}
			},
			validatePhone: function() {
				const phoneTmp = /^\+7 \(\d{3}\) \d{3} \d{2} \d{2}/;
				if (this.message.phone === '') {
					this.errorsText.phone = 'Пожалуйста введите ваш номер телефона';
					this.errors.phone = true;
				} else if (!phoneTmp.test(this.message.phone)) {
					this.errorsText.phone = 'Некорректный формат номера';
					this.errors.phone = true;
				} else {
					this.errorsText.phone = '\xa0';
					this.errors.phone = false;
				}
			},
			validateTheme: function() {
				if (this.message.theme === '') {
					this.errorsText.theme = 'Пожалуйста напишите тему обращения или выборете из предложенных ниже';
					this.errors.theme = true;
				} else {
					this.errorsText.theme = '\xa0';
					this.errors.theme = false;
				}
			},
			goToSlide: function(slide) {
				let go = false;
				if (slide > this.slide) {
					if (slide === 2) {
						this.validateName();
						this.validateEmail();
						if (!this.errors.name && !this.errors.email) {
							this.footerActive = true;
							setTimeout(function() {
								window.scrollTo({
									top: 20000,
									behavior: 'smooth',
								});
							}, 500);
							go = true;
						}
					} else if (slide === 3) {
						this.validatePhone();
						this.validateTheme();
						if (!this.errors.phone && !this.errors.theme) {
							go = true;
						}
					} else {
						go = true;
					}
				} else {
					if (slide === 1) {
						this.footerActive = false;
					}
					go = true;
				}
				if (go) {
					this.goSlide(slide);
				}
			},
			goSlide: function(slide) {
				this.slide = slide - 1;
			},
			changeTheme: function(theme){
				this.message.theme = theme;
				this.errors.theme = false;
				this.errorsText.theme = '\xa0';
			},
			sendMessage: function() {
				this.slide = 4;
				this.formSend = true;
			},
			goTop: function() {
				if (this.$route.path === '/') {
					window.scrollTo({
						top: document.getElementById('main').offsetTop,
					});
					this.$eventBus.$emit('overflowHidden', false);
					this.fMeet(false);
				} else {
					window.scrollTo({
						top: 0,
						behavior: 'smooth',
					});
				}
			},
			fMeet: function(bool) {
				this.footerMeet = bool;
			},
			hideMeet: function() {
				this.$eventBus.$emit('overflowHidden', false);
				this.$eventBus.$emit('scrollFromMeet');
				this.footerMeet = false;
			},
			toMainPage: function() {
				if (this.$route.path === '/') {
					window.scrollTo({
						top: document.getElementById('main').offsetTop,
					});
					this.$eventBus.$emit('overflowHidden', false);
					this.fMeet(false);
				} else {
					this.$router.push({path: '/'});
				}
			},
			getFile: function(files) {
				this.message.files = files;
			},
		},
		directives: {
			imask: IMaskDirective,
		},
		components: {
			prevBtn,
			dropfile,
		},
	});
</script>
<style lang="scss">
	.footer {
		background: #141414;
		padding-bottom: 50px;
		padding-top: 50px;
		position: relative;
		z-index: 100;
		height: 650px;
		width: 100%;
		overflow: hidden;
		&-active {
			height: 100vh;
			padding-top: 30px;
		}
		&-main {
			transform: translate3d(0.00001px, 0.00001px, 0.00001px);
			height: 100vh;
			width: 100%;
		}
		&-meet {
			z-index: 1110;
		}
		&__wrapper {
			display: flex;
			width: 500%;
			height: 100%;
			transition: 0.3s;
		}
		&__slide {
			width: 20%;
		}
		&__desctop {
			display: none;
		}
		&__text {
			text-align: left;
			font-size: 28px;
			line-height: 120%;
			color: var(--white);
		}
		&__flex {
			margin-top: 8px;
			display: flex;
			justify-content: space-between;
			flex-direction: column;
		}
		&__left {
			flex-basis: 100%;
			display: flex;
			flex-direction: column;
		}
		&__right {
			margin-top: 25px;
			display: flex;
			justify-content: center;
		}
		&__label {
			width: 100%;
			position: relative;
		}
		&__input,
		&__textarea {
			font-family: 'Circe', sans-serif;
			width: 100%;
			font-size: 36px;
			line-height: 144.7%;
			border: none;
			background: transparent;
			color: var(--white);
			&::placeholder {
				color: #141414;
				-webkit-text-stroke: 0.7px #ffffff;
				text-stroke: 0.7px #ffffff;
			}
		}
		&__input {
			width: 100%;
			height: 72px;
			&:focus {
				border-left: 1px solid #ffffff;
			}
			&:-webkit-autofill {
				-webkit-box-shadow: inset 0 0 0 50px #141414 !important; /* Цвет фона */
				-webkit-text-fill-color: var(--white) !important; /* цвет текста */
				color: var(--white) !important; /* цвет текста */
				&::first-line {
					font-family: 'Circe', sans-serif;
					font-size: 36px;
					line-height: 144.7%;
				}
			}
			&-error {
				color: var(--red);
				&::placeholder {
					-webkit-text-stroke: 0.7px var(--red);
					text-stroke: 0.7px var(--red);
				}
				&:-webkit-autofill {
					-webkit-box-shadow: inset 0 0 0 50px #141414 !important; /* Цвет фона */
					-webkit-text-fill-color: var(--red) !important; /* цвет текста */
					color: var(--red) !important; /* цвет текста */
				}
			}
		}
		&__textarea {
			height: 280px;
			margin-top: 10px;
			resize: none;
			transition: 0.3s;
			&::-webkit-scrollbar {
				width: 0;
			}
			&:focus {
				border-left: 1px solid #ffffff;
				border-bottom: 1px solid #ffffff;
			}
		}
		&__btn {
			cursor: pointer;
			background: #0f0f0f;
			height: 119px;
			width: 119px;
			border-radius: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			color: var(--white);
			font-size: 16px;
			line-height: 188%;
			transition: 0.3s;
			user-select: none;
			&:hover {
				background: #212121;
			}
			&:active {
				background: var(--red);
				color: var(--white);
			}
		}
		&__end {
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
		}
		&__mid {
			margin-top: 70px;
			display: flex;
		}
		&__start {
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
		}
		&__box {
			&-adress {
				width: 400px;
				max-width: 100%;
			}
		}
		&__container {
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
		&__title {
			font-size: 36px;
			line-height: 114.2%;
			text-align: center;
			color: #ffffff;
		}
		&__done {
			margin: 25px auto 0;
			cursor: pointer;
			background: var(--red);
			width: 119px;
			height: 119px;
			border-radius: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			color: var(--white);
			font-size: 16px;
			line-height: 188%;
			transition: 0.3s;
			user-select: none;
			&:hover {
				background: #f0545a;
			}
			&:active {
				background: #e4141b;
			}
		}
		&__complete {
			margin-top: 65px;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		&__ul {
			display: none;
			margin-top: 30px;
			margin-left: 45%;
		}
		&__li {
			& + & {
				margin-top: 10px;
			}
		}
		&__theme {
			user-select: none;
			cursor: pointer;
			font-size: 24px;
			line-height: 207.2%;
			color: #141414;
			-webkit-text-stroke: 0.3px #ffffff;
			text-stroke: 0.3px #ffffff;
			transition: 0.2s;
			&:hover {
				color: #ffffff;
				text-shadow: none;
			}
		}
		&__desktop {
			display: none;
			-webkit-text-stroke: unset;
		}
		&__error {
			padding-left: 5px;
			display: block;
			font-size: 18px;
			line-height: 145%;
			color: rgba(238, 61, 67, 0.4);
		}
	}
	@media all and(min-width: 540px) {
		.footer {
			&-active {
				max-height: 500px;
			}
			&-main {
				max-height: 500px;
			}
		}
	}
	@media all and(min-width: 768px) {
		.footer {
			height: 430px;
			&-active {
				height: 500px;
			}
			&-main {
				height: 500px;
			}
		}
	}
	@media all and(min-width: 968px) {
		.footer {
			padding-top: 70px;
			padding-bottom: 80px;
			&-active {
				padding-top: 70px;
				max-height: 500px;
			}
			&-main {
				padding-top: 70px;
				padding-bottom: 80px;
				max-height: 500px;
			}
			&__slide {
				min-height: 410px;
			}
			&__text {
				text-align: left;
				font-size: 44px;
				line-height: 130%;
			}
			&__flex {
				margin-top: 48px;
				flex-direction: row;
			}
			&__label {
				& + & {
					margin-top: 30px;
				}
			}
			&__left {
				flex-basis: 80%;
			}
			&__right {
				margin-top: 0;
				display: block;
			}
			&__textarea,
			&__input {
				font-size: 56px;
				line-height: 144.7%;
				&::placeholder {
					color: #141414;
					-webkit-text-stroke: 1px #ffffff;
					text-stroke: 1px #ffffff;
				}
			}
			&__input {
				&:-webkit-autofill {
					&::first-line {
						font-size: 56px;
						line-height: 144.7%;
					}
				}
				&-error {
					&::placeholder {
						-webkit-text-stroke: 1px #ee3d43;
						text-stroke: 1px #ee3d43;
					}
				}
			}
			&__title {
				font-size: 48px;
				line-height: 71px;
			}
			&__btn,
			&__done {
				font-size: 24px;
				line-height: 188%;
				width: 140px;
				height: 140px;
			}
		}
	}

	@media all and(min-width: 1281px) {
		.footer {
			padding-top: 95px;
			padding-bottom: 180px;
			height: 650px;
			&-active {
				padding-top: 95px;
				height: 100vh;
				max-height: none;
			}
			&-main {
				height: 100vh;
				padding-top: 140px;
				padding-bottom: 85px;
				max-height: none;
			}
			&__container {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				height: 100%;
			}
			&__desktop {
				display: flex;
			}
			&__form {
				height: 100%;
			}
			&__slide {
				&-first {
					height: 100%;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
				}
			}
			&__text {
				font-size: 24px;
				line-height: 150%;
			}
			&__flex {
				margin-top: 115px;
			}
			&__left {
				flex-basis: 66.666%;
			}
			&__btn,
			&__done {
				width: 188px;
				height: 188px;
			}
			&__label {
				& + & {
					margin-top: 45px;
				}
			}
			&__complete {
				margin-top: 100px;
			}
			&__done {
				margin: 100px auto 0;
			}
			&__title {
				font-size: 64px;
				line-height: 144%;
				color: #ffffff;
			}
			&__textarea,
			&__input {
				font-size: 57px;
				line-height: 100%;
				&::placeholder {
					color: #141414;
					-webkit-text-stroke: 1.5px #ffffff;
					text-stroke: 1.5px #ffffff;
				}
			}
			&__input {
				&:-webkit-autofill {
					&::first-line {
						font-size: 64px;
						line-height: 115%;
					}
				}
				&-error {
					&::placeholder {
						-webkit-text-stroke: 1.5px #ee3d43;
						text-stroke: 1.5px #ee3d43;
					}
				}
			}
			&__textarea {
				padding-left: 30px;
				height: 450px;
				margin-top: 0;
			}
			&__ul {
				display: block;
			}
		}
	}
	@media all and(min-width: 1281px) and (max-height: 768px) {
		.footer {
			&-main {
				padding-top: 60px;
			}
			&__container {
				display: block;
			}
			&__ul {
				margin-top: 0;
			}
			&__li {
				& + & {
					margin-top: 0;
				}
			}
			&__theme {
				line-height: 150%;
			}
		}
	}
</style>
