<template>
	<div class="home">
		<div class="main__wrapper desktop" v-if="desktop">
			<div class="main__inner">
				<div class="hover__bg hover__bg-spb" :class="{'hover__bg-active': dots.spb}">
					<div class="hover__cities">
						<svg width="110" height="163" viewBox="0 0 110 163" fill="none" xmlns="http://www.w3.org/2000/svg">
							<ellipse cx="55" cy="153" rx="38" ry="10" fill="black" fill-opacity="0.25"></ellipse>
							<path
								d="M55 0C24.6728 0 0 24.6728 0 54.9997C0 92.6363 49.2196 147.889 51.3152 150.223C53.2835 152.415 56.7201 152.411 58.6848 150.223C60.7804 147.889 110 92.6363 110 54.9997C109.999 24.6728 85.3269 0 55 0ZM55 82.6716C39.7416 82.6716 27.3284 70.258 27.3284 54.9997C27.3284 39.7414 39.7419 27.3281 55 27.3281C70.2581 27.3281 82.6713 39.7416 82.6713 55C82.6713 70.2583 70.2581 82.6716 55 82.6716Z"
								fill="white"
							></path>
						</svg>
						<div class="main__text">
							С опытом работы в Москве, Сочи, Перми, Екатеринбурге, Новосибирске, Краснодаре, а также в Финляндии.
						</div>
					</div>
				</div>
				<div class="hover__bg hover__bg-agency" :class="{'hover__bg-active': dots.agency}">
					<div class="hover__chutes">
						<div class="main__aboutBg"></div>
						<div class="main__aboutBg"></div>
						<div class="main__aboutBg"></div>
						<div class="main__aboutBg"></div>
						<div class="main__aboutBg"></div>
						<div class="main__aboutBg"></div>
						<div class="main__aboutBg"></div>
						<div class="main__aboutBg"></div>
						<div class="main__aboutBg"></div>
						<div class="main__aboutBg"></div>
						<div class="main__aboutBg"></div>
						<div class="main__aboutBg"></div>
						<div class="main__aboutBg"></div>
						<div class="main__aboutBg"></div>
						<div class="main__aboutBg"></div>
						<div class="main__aboutBg"></div>
						<div class="main__aboutBg"></div>
						<div class="main__aboutBg"></div>
						<div class="main__aboutBg"></div>
						<div class="main__aboutBg"></div>
					</div>
				</div>
				<div class="hover__logo" :class="{'hover__logo-active': dots.we}">
					<img src="./images/main_megalogo.svg" loading="lazy" alt="ooe logo" />
				</div>
				<section class="main__section" id="welcome">
					<div class="container">
						<div
							class="main__string"
							:class="{
								'main__string-white':
									dots.events || dots.creative || dots.decor || dots.philosophy || dots.agency || dots.spb,
							}"
							id="string-1"
						>
							<span class="main__word" id="word-1">Привет!{{ '\xa0' }}</span>
							<span class="main__word" id="word-2" @mouseover="we(true)" @mouseout="we(false)"
								><span class="hover__we" :class="{'hover__we-active': dots.ooe}">Мы</span>
								<span
									class="main__dot"
									:class="{
										'main__dot-active': dots.we,
										'main__dot-hidden':
											dots.agency ||
											dots.spb ||
											dots.events ||
											dots.creative ||
											dots.decor ||
											dots.philosophy ||
											dots.ooe,
									}"
									style="opacity: 0"
								></span
							></span>
							<span class="main__word" id="word-3">{{ '\xa0' }}маркетинговое{{ '\xa0' }}</span>
							<span id="string-1-2-3">
								<span class="hover__string" :class="{'hover__string-hidden': dots.ooe}">
									<span
										class="main__word hover__word"
										id="word-4"
										:class="{pointer: dots.agency}"
										@mouseover="agency(true)"
										@mouseout="agency(false)"
										@click="agencyClick"
										>агентство
										<span class="hover__descr" :class="{'hover__descr-active': dots.agency}">
											нажмите, чтобы узнать больше о нас
										</span>
										<span
											class="main__dot"
											:class="{
												'main__dot-hidden':
													dots.we ||
													dots.agency ||
													dots.spb ||
													dots.events ||
													dots.creative ||
													dots.decor ||
													dots.philosophy ||
													dots.ooe,
											}"
											style="opacity: 0"
										></span>
									</span>
									<span class="main__word hover__word" id="word-5">{{ '\xa0' }}из{{ '\xa0' }}</span>
									<span class="main__word hover__word" id="word-6">Санкт-</span>
									<span class="main__word hover__word" id="word-7" @mouseover="spb(true)" @mouseout="spb(false)"
										>Петербурга
										<span
											class="main__dot"
											:class="{
												'main__dot-active': dots.spb,
												'main__dot-hidden':
													dots.we ||
													dots.agency ||
													dots.events ||
													dots.creative ||
													dots.decor ||
													dots.philosophy ||
													dots.ooe,
											}"
											style="opacity: 0"
										></span
									></span>
								</span>
								<span class="main__word hover__ooe" :class="{'hover__ooe-active': dots.ooe}">
									one only events
								</span>
							</span>
						</div>
						<div
							class="main__string"
							:class="{
								'main__string-white': dots.events || dots.creative || dots.decor || dots.philosophy,
							}"
							v-show="!dots.agency"
							id="string-2"
						>
							<div v-show="dots.philosophy" class="hover__filosophy">
								<span
									>Мы всегда в поиске новых идей для создания эффективных и оригинальных маркетинговых
									коммуникаций</span
								>
							</div>
							<span class="main__word" id="word-11">Продюссируем{{ '\xa0' }}</span>
							<span v-show="!dots.philosophy" class="main__word" id="word-12" @mouseover="events(true)" @mouseout="events(false)"
								>ивенты<span
									class="main__dot"
									:class="{
										'main__dot-active': dots.events,
										'main__dot-hidden':
											dots.we || dots.agency || dots.spb || dots.creative || dots.decor || dots.philosophy || dots.ooe,
									}"
									style="opacity: 0"
								></span
							></span>
							<span class="main__word" id="word-13">{{ '\xa0' }}разрабатываем{{ '\xa0' }}</span>
							<span v-show="!dots.philosophy" id="string-2-2">
								<span class="main__word" id="word-14" @mouseover="creative(true)" @mouseout="creative(false)"
									>креатив<span
										class="main__dot"
										:class="{
											'main__dot-active': dots.creative,
											'main__dot-hidden':
												dots.we || dots.agency || dots.spb || dots.events || dots.decor || dots.philosophy || dots.ooe,
										}"
										style="opacity: 0"
									></span
								></span>
								<span class="main__word" id="word-15">{{ '\xa0' }}проектируем{{ '\xa0' }}стенды</span>
								<span class="inline-block" id="string-2-3">
									<span class="main__word" id="word-16">{{ '\xa0' }}и{{ '\xa0' }}</span>
									<span class="main__word" @mouseover="decor(true)" @mouseout="decor(false)"
										>декор<span
											class="main__dot"
											:class="{
												'main__dot-active': dots.decor,
												'main__dot-hidden':
													dots.we ||
													dots.agency ||
													dots.spb ||
													dots.events ||
													dots.creative ||
													dots.philosophy ||
													dots.ooe,
											}"
											style="opacity: 0"
										></span></span
									><span class="main__word" id="word-18">ации c 2015 года.</span>
								</span>
							</span>
						</div>
						<div
							class="main__string"
							:class="{
								'main__string-white': dots.events || dots.creative || dots.decor || dots.philosophy,
							}"
							v-show="!dots.agency"
							id="string-3"
						>
							<span class="main__word" id="word-21">Наша{{ '\xa0' }}</span>
							<span class="main__word" id="word-22" @mouseover="philosophy(true)" @mouseout="philosophy(false)">
								философия
								<span
									class="main__dot"
									:class="{
										'main__dot-active': dots.philosophy,
										'main__dot-hidden':
											dots.we || dots.agency || dots.spb || dots.events || dots.creative || dots.decor || dots.ooe,
									}"
									style="opacity: 0"
								></span>
							</span>
							<span>
								<span class="main__word" id="word-23">{{ '\xa0' }}-{{ '\xa0' }}f</span>
								<span class="main__word">o</span>
								<span class="main__word" id="word-25">cus{{ '\xa0' }}</span>
								<span class="main__word" id="word-26" @mouseover="ooe(true)" @mouseout="ooe(false)"
									>o<span
										class="main__dot"
										:class="{
											'main__dot-active': dots.ooe,
											'main__dot-hidden':
												dots.we ||
												dots.agency ||
												dots.spb ||
												dots.events ||
												dots.creative ||
												dots.decor ||
												dots.philosophy,
										}"
										style="opacity: 0"
									></span
								></span>
								<span class="main__word" id="word-27">n{{ '\xa0' }}id</span>
								<span class="main__word" id="word-28" @mouseover="ooe(true)" @mouseout="ooe(false)">e</span>
								<span class="main__word" id="word-29">as</span>
							</span>
						</div>
						<div class="main__scroll">scroll</div>
						<div class="main__logo">
							<img src="./images/main_megalogo.svg" loading="lazy" alt="ooe logo" />
						</div>
						<div class="main__aboutBgs">
							<div class="main__aboutBg main__aboutBg-1"></div>
							<div class="main__aboutBg main__aboutBg-2"></div>
							<div class="main__aboutBg main__aboutBg-3"></div>
							<div class="main__aboutBg main__aboutBg-4"></div>
							<div class="main__aboutBg main__aboutBg-5"></div>
							<div class="main__aboutBg main__aboutBg-6"></div>
							<div class="main__aboutBg main__aboutBg-7"></div>
							<div class="main__aboutBg main__aboutBg-8"></div>
							<div class="main__aboutBg main__aboutBg-9"></div>
							<div class="main__aboutBg main__aboutBg-10"></div>
							<div class="main__aboutBg main__aboutBg-11"></div>
							<div class="main__aboutBg main__aboutBg-12"></div>
							<div class="main__aboutBg main__aboutBg-13"></div>
							<div class="main__aboutBg main__aboutBg-14"></div>
							<div class="main__aboutBg main__aboutBg-15"></div>
							<div class="main__aboutBg main__aboutBg-16"></div>
							<div class="main__aboutBg main__aboutBg-17"></div>
							<div class="main__aboutBg main__aboutBg-18"></div>
							<div class="main__aboutBg main__aboutBg-19"></div>
							<div class="main__aboutBg main__aboutBg-20"></div>
							<div class="main__aboutBg main__aboutBg-21"></div>
							<div class="main__aboutBg main__aboutBg-22"></div>
							<div class="main__aboutBg main__aboutBg-23"></div>
							<div class="main__aboutBg main__aboutBg-24"></div>
							<div class="main__aboutBg main__aboutBg-25"></div>
							<div class="main__aboutBg main__aboutBg-26"></div>
							<div class="main__aboutBg main__aboutBg-27"></div>
							<div class="main__aboutBg main__aboutBg-28"></div>
							<div class="main__aboutBg main__aboutBg-29"></div>
							<div class="main__aboutBg main__aboutBg-30"></div>
						</div>
						<span class="main__about" :class="{'main__about-active': dots.agency}">
							”Мы - команда увлеченных профессионалов, с 2015 года создающая яркие зрелищные проекты в сфере
							event-маркетинга.”
						</span>
						<div class="main__cities">
							<svg width="110" height="163" viewBox="0 0 110 163" fill="none" xmlns="http://www.w3.org/2000/svg">
								<ellipse cx="55" cy="153" rx="38" ry="10" fill="black" fill-opacity="0.25"></ellipse>
								<path
									d="M55 0C24.6728 0 0 24.6728 0 54.9997C0 92.6363 49.2196 147.889 51.3152 150.223C53.2835 152.415 56.7201 152.411 58.6848 150.223C60.7804 147.889 110 92.6363 110 54.9997C109.999 24.6728 85.3269 0 55 0ZM55 82.6716C39.7416 82.6716 27.3284 70.258 27.3284 54.9997C27.3284 39.7414 39.7419 27.3281 55 27.3281C70.2581 27.3281 82.6713 39.7416 82.6713 55C82.6713 70.2583 70.2581 82.6716 55 82.6716Z"
									fill="white"
								></path>
							</svg>
							<div class="main__text">
								С опытом работы в Москве, Сочи, Екатеринбурге, Геленджике, Перми, а также в Финляндии.
							</div>
						</div>
						<div class="main__videocircle">
							<span class="main__playcircle" @click="openShowreel">
								<svg width="48" height="53" viewBox="0 0 48 53" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M45.0882 23.0868C47.7157 24.6038 47.7157 28.3962 45.0882 29.9132L6.66176 52.0987C4.03431 53.6156 0.749997 51.7194 0.749998 48.6855L0.75 4.31447C0.75 1.28055 4.03431 -0.615653 6.66177 0.901307L45.0882 23.0868Z"
										fill="white"
									></path>
								</svg>
							</span>
							<div class="main__videodescr">
								<span class="main__name"> Видео о нас </span>
								<span class="main__time"> 2:12 </span>
							</div>
						</div>
						<div
							class="main__end"
							:class="{
								'main__end-hide':
									dots.we || dots.agency || dots.events || dots.creative || dots.decor || dots.philosophy || dots.ooe,
							}"
						>
							<div class="container main__flex">
								<div class="main__scroll2">scroll</div>
								<div class="main__links">
									<a target="_blank" href="https://www.facebook.com/ooevents" class="main__link link">
										<svg width="73" height="73" viewBox="0 0 73 73">
											<circle
												class="link__bg link__bg-gray"
												transform="rotate(125, 36, 36)"
												cx="36"
												cy="36"
												r="35"
												stroke-width="1.13924"
											></circle>
											<path
												class="link__content link__content-gray"
												d="M39.5361 28.5829H41.5443V25.1519C41.1978 25.1052 40.0063 25 38.6186 25C35.723 25 33.7395 26.7865 33.7395 30.07V33.0918H30.5443V36.9273H33.7395V46.5781H37.6571V36.9282H40.723L41.2098 33.0927H37.6561V30.4503C37.6571 29.3417 37.9614 28.5829 39.5361 28.5829Z"
												fill="#C8C8C8"
											></path>
											<circle
												class="link__circle"
												transform="rotate(125, 36, 36)"
												cx="36"
												cy="36"
												r="35"
												stroke-width="1.13924"
											></circle>
										</svg>
									</a>
									<a target="_blank" href="https://www.instagram.com/oneonlyevents" class="main__link link">
										<svg width="73" height="73" viewBox="0 0 73 73">
											<circle
												class="link__bg link__bg-gray"
												transform="rotate(125, 36, 36)"
												cx="36"
												cy="36"
												r="35"
												stroke-width="1.13924"
											></circle>
											<path
												class="link__content link__content-gray"
												d="M47.2949 31.4681C47.2433 30.2991 47.0543 29.4955 46.7835 28.7991C46.5041 28.0599 46.0744 27.3982 45.5113 26.848C44.9612 26.2893 44.295 25.8552 43.5644 25.5802C42.864 25.3094 42.0646 25.1204 40.8956 25.0688C39.718 25.0129 39.3441 25 36.3572 25C33.3703 25 32.9964 25.0129 31.8231 25.0645C30.6542 25.116 29.8505 25.3052 29.1543 25.5758C28.415 25.8552 27.7532 26.2849 27.2031 26.848C26.6444 27.3982 26.2104 28.0643 25.9352 28.7949C25.6644 29.4955 25.4754 30.2948 25.4239 31.4637C25.368 32.6414 25.355 33.0152 25.355 36.0021C25.355 38.9891 25.368 39.3629 25.4195 40.5362C25.471 41.7052 25.6602 42.5088 25.931 43.2052C26.2104 43.9444 26.6444 44.6061 27.2031 45.1563C27.7532 45.715 28.4193 46.1491 29.15 46.4241C29.8505 46.6949 30.6498 46.8839 31.8189 46.9355C32.992 46.9872 33.3661 46.9999 36.353 46.9999C39.3399 46.9999 39.7138 46.9872 40.8871 46.9355C42.056 46.8839 42.8597 46.6949 43.5558 46.4241C45.0344 45.8525 46.2033 44.6835 46.7749 43.2052C47.0456 42.5046 47.2348 41.7052 47.2863 40.5362C47.3378 39.3629 47.3508 38.9891 47.3508 36.0021C47.3508 33.0152 47.3464 32.6414 47.2949 31.4681ZM45.3137 40.4503C45.2664 41.5247 45.0859 42.1049 44.9355 42.4917C44.5658 43.4501 43.8051 44.2108 42.8467 44.5805C42.4599 44.7309 41.8755 44.9113 40.8053 44.9585C39.6449 45.0102 39.2969 45.023 36.3615 45.023C33.4262 45.023 33.0738 45.0102 31.9176 44.9585C30.8432 44.9113 30.263 44.7309 29.8762 44.5805C29.3993 44.4042 28.9651 44.1248 28.6127 43.7595C28.2474 43.4028 27.9681 42.973 27.7918 42.4961C27.6414 42.1093 27.4609 41.5247 27.4137 40.4546C27.362 39.2943 27.3493 38.9461 27.3493 36.0107C27.3493 33.0753 27.362 32.723 27.4137 31.5669C27.4609 30.4925 27.6414 29.9123 27.7918 29.5255C27.9681 29.0484 28.2474 28.6144 28.6171 28.2619C28.9737 27.8966 29.4035 27.6172 29.8806 27.4411C30.2674 27.2907 30.8519 27.1102 31.922 27.0629C33.0824 27.0114 33.4305 26.9984 36.3657 26.9984C39.3055 26.9984 39.6535 27.0114 40.8097 27.0629C41.8841 27.1102 42.4643 27.2907 42.8511 27.4411C43.328 27.6172 43.7622 27.8966 44.1145 28.2619C44.4799 28.6186 44.7592 29.0484 44.9355 29.5255C45.0859 29.9123 45.2664 30.4967 45.3137 31.5669C45.3653 32.7273 45.3782 33.0753 45.3782 36.0107C45.3782 38.9461 45.3653 39.2899 45.3137 40.4503Z"
												fill="#C8C8C8"
											></path>
											<path
												class="link__content link__content-gray"
												d="M36.3572 30.3506C33.2372 30.3506 30.7057 32.8819 30.7057 36.0021C30.7057 39.1223 33.2372 41.6536 36.3572 41.6536C39.4775 41.6536 42.0087 39.1223 42.0087 36.0021C42.0087 32.8819 39.4775 30.3506 36.3572 30.3506ZM36.3572 39.6681C34.3331 39.6681 32.6913 38.0264 32.6913 36.0021C32.6913 33.9779 34.3331 32.3362 36.3572 32.3362C38.3815 32.3362 40.0232 33.9779 40.0232 36.0021C40.0232 38.0264 38.3815 39.6681 36.3572 39.6681Z"
												fill="#C8C8C8"
											></path>
											<path
												class="link__content link__content-gray"
												d="M43.5517 30.1272C43.5517 30.8558 42.9609 31.4465 42.2321 31.4465C41.5035 31.4465 40.9128 30.8558 40.9128 30.1272C40.9128 29.3984 41.5035 28.8078 42.2321 28.8078C42.9609 28.8078 43.5517 29.3984 43.5517 30.1272Z"
												fill="#C8C8C8"
											></path>
											<circle
												class="link__circle"
												transform="rotate(125, 36, 36)"
												cx="36"
												cy="36"
												r="35"
												stroke-width="1.13924"
											></circle>
										</svg>
									</a>
									<a target="_blank" href="https://vimeo.com/ooe" class="main__link link">
										<svg width="73" height="73" viewBox="0 0 73 73">
											<circle
												class="link__bg link__bg-gray"
												transform="rotate(125, 36, 36)"
												cx="36"
												cy="36"
												r="35"
												stroke-width="1.13924"
											></circle>
											<path
												class="link__content link__content-gray"
												d="M44.3506 25.0056C40.884 24.8812 38.5424 26.8417 37.307 30.8562C37.9424 30.5757 38.5601 30.4503 39.158 30.4503C40.4278 30.4503 40.9893 31.1665 40.8393 32.5896C40.7643 33.4517 40.2059 34.7053 39.1601 36.3544C38.1091 38.0036 37.3237 38.8297 36.8008 38.8297C35.2154 38.8297 34.2623 31.3453 33.9394 29.3016C33.4904 26.4605 32.2936 25.1319 30.3488 25.3179C28.5634 25.4854 25.4479 28.6563 23 30.8059L24.176 32.3183C25.2958 31.5354 25.9489 31.1429 26.1354 31.1429C28.0843 31.1429 29.028 37.685 30.5415 42.5503C31.5571 45.2352 32.7748 46.5781 34.2425 46.5781C36.6008 46.5781 39.4737 44.3751 42.8778 39.9671C46.1642 35.7471 47.8662 32.4211 47.9756 29.9951L47.9891 29.9849C48.1287 26.7328 46.9256 25.0682 44.3506 25.0056Z"
												fill="#C8C8C8"
											></path>
											<circle
												class="link__circle"
												transform="rotate(125, 36, 36)"
												cx="36"
												cy="36"
												r="35"
												stroke-width="1.13924"
											></circle>
										</svg>
									</a>
									<a target="_blank" href="https://vk.com/oneonlyevents" class="main__link link">
										<svg width="73" height="73" viewBox="0 0 73 73">
											<circle
												class="link__bg link__bg-gray"
												transform="rotate(125, 36, 36)"
												cx="36"
												cy="36"
												r="35"
												stroke-width="1.13924"
											></circle>
											<path
												class="link__content link__content-gray"
												d="M49.8462 45.0579C49.8111 44.9816 49.7783 44.9183 49.7479 44.8677C49.2448 43.9545 48.2833 42.8336 46.864 41.5048L46.834 41.4743L46.819 41.4594L46.8038 41.4441H46.7886C46.1445 40.8253 45.7366 40.4093 45.5657 40.1963C45.2532 39.7905 45.1832 39.3798 45.354 38.9636C45.4747 38.6492 45.928 37.9852 46.7129 36.9706C47.1258 36.433 47.4528 36.002 47.6943 35.6774C49.4358 33.3442 50.1909 31.8533 49.9592 31.204L49.8693 31.0523C49.8088 30.961 49.6528 30.8774 49.4014 30.8012C49.1495 30.7251 48.8275 30.7126 48.4348 30.7632L44.0864 30.7935C44.0159 30.7684 43.9154 30.7707 43.7843 30.8012C43.6534 30.8317 43.5879 30.847 43.5879 30.847L43.5123 30.8851L43.4522 30.9308C43.4018 30.9611 43.3465 31.0144 43.286 31.0905C43.2259 31.1663 43.1756 31.2553 43.1354 31.3567C42.662 32.5841 42.1237 33.7253 41.5196 34.7801C41.1471 35.4091 40.8051 35.9543 40.4927 36.4158C40.1807 36.8773 39.919 37.2172 39.7078 37.4351C39.4962 37.6532 39.3053 37.828 39.1339 37.96C38.9627 38.0921 38.832 38.1479 38.7415 38.1274C38.6508 38.107 38.5654 38.0868 38.4845 38.0665C38.3437 37.9752 38.2304 37.851 38.145 37.6938C38.0592 37.5365 38.0015 37.3387 37.9713 37.1003C37.9412 36.8617 37.9235 36.6566 37.9184 36.4841C37.9137 36.3118 37.9159 36.0681 37.9261 35.7536C37.9365 35.439 37.9412 35.2262 37.9412 35.1146C37.9412 34.7291 37.9487 34.3107 37.9637 33.8593C37.9789 33.4079 37.9912 33.0502 38.0015 32.7868C38.0118 32.523 38.0166 32.244 38.0166 31.9498C38.0166 31.6556 37.9988 31.4249 37.9637 31.2575C37.929 31.0902 37.8757 30.9279 37.8055 30.7705C37.7349 30.6133 37.6316 30.4917 37.496 30.4054C37.3601 30.3192 37.1912 30.2507 36.9902 30.1999C36.4567 30.0782 35.7772 30.0124 34.9517 30.0022C33.0795 29.9819 31.8765 30.1037 31.343 30.3675C31.1316 30.4789 30.9403 30.6312 30.7693 30.8238C30.5881 31.047 30.5628 31.1689 30.6936 31.1889C31.2977 31.2801 31.7253 31.4982 31.977 31.8431L32.0677 32.0258C32.1382 32.1576 32.2087 32.3911 32.2792 32.7257C32.3496 33.0604 32.395 33.4306 32.415 33.8362C32.4652 34.5768 32.4652 35.2108 32.415 35.7382C32.3646 36.2658 32.317 36.6765 32.2715 36.9707C32.2261 37.2649 32.1582 37.5032 32.0677 37.6858C31.977 37.8683 31.9166 37.9799 31.8864 38.0204C31.8562 38.0609 31.831 38.0865 31.811 38.0965C31.6802 38.147 31.5441 38.1727 31.4033 38.1727C31.2622 38.1727 31.0912 38.1017 30.8899 37.9596C30.6887 37.8175 30.4799 37.6223 30.2634 37.3738C30.0469 37.1252 29.8028 36.7778 29.5309 36.3315C29.2593 35.8852 28.9774 35.3578 28.6855 34.7492L28.4439 34.3078C28.293 34.0239 28.0867 33.6104 27.825 33.0678C27.5631 32.525 27.3316 32 27.1304 31.4928C27.0499 31.2798 26.9291 31.1176 26.7681 31.006L26.6925 30.9603C26.6423 30.9198 26.5616 30.8768 26.451 30.8309C26.3402 30.7851 26.2246 30.7523 26.1037 30.7321L21.9665 30.7624C21.5438 30.7624 21.2569 30.8589 21.1059 31.0517L21.0454 31.1428C21.0152 31.1936 21 31.2747 21 31.3864C21 31.498 21.0302 31.6349 21.0906 31.7971C21.6946 33.2275 22.3514 34.607 23.061 35.9358C23.7706 37.2646 24.3872 38.335 24.9105 39.146C25.4339 39.9576 25.9674 40.7236 26.511 41.4435C27.0547 42.1638 27.4145 42.6254 27.5905 42.8281C27.7668 43.0313 27.9053 43.1832 28.0059 43.2846L28.3834 43.6497C28.625 43.8932 28.9798 44.1848 29.4479 44.5246C29.916 44.8645 30.4344 45.1992 31.0031 45.5291C31.5719 45.8585 32.2337 46.1273 32.9887 46.3352C33.7437 46.5433 34.4784 46.6268 35.1932 46.5866H36.9296C37.2818 46.5559 37.5486 46.4443 37.7299 46.2517L37.79 46.1755C37.8304 46.1149 37.8682 46.0209 37.9031 45.8943C37.9384 45.7675 37.956 45.6278 37.956 45.4759C37.9457 45.0398 37.9786 44.6468 38.0539 44.2968C38.1292 43.947 38.215 43.6833 38.3109 43.5057C38.4068 43.3282 38.515 43.1784 38.6354 43.057C38.7561 42.9354 38.8421 42.8617 38.8925 42.8363C38.9427 42.8108 38.9827 42.7934 39.0129 42.7831C39.2545 42.7019 39.5388 42.7805 39.8663 43.0191C40.1935 43.2575 40.5004 43.5518 40.7874 43.9016C41.0743 44.2517 41.419 44.6446 41.8216 45.0807C42.2244 45.5169 42.5766 45.8412 42.8785 46.0545L43.1804 46.2371C43.382 46.3589 43.6437 46.4705 43.9659 46.572C44.2875 46.6733 44.5692 46.6987 44.8112 46.648L48.6764 46.5873C49.0587 46.5873 49.3562 46.5235 49.5672 46.3969C49.7786 46.2701 49.9042 46.1304 49.9447 45.9785C49.9851 45.8264 49.9873 45.6538 49.9524 45.4609C49.9166 45.2685 49.8813 45.1339 49.8462 45.0579Z"
												fill="#C8C8C8"
											></path>
											<circle
												class="link__circle"
												transform="rotate(125, 36, 36)"
												cx="36"
												cy="36"
												r="35"
												stroke-width="1.13924"
											></circle>
										</svg>
									</a>
								</div>
							</div>
						</div>
						<div class="main__svgbg" :class="{'main__svgbg-active': dots.philosophy}">
							<svg width="1800" height="1800" viewBox="0 0 1800 1800" fill="none" class="main__foi">
								<g id="about__gray" style="opacity: 0">
									<circle
										class="about__gray line"
										transform="rotate(90 900 900)"
										cx="900"
										cy="900"
										r="110"
										stroke="#323232"
										stroke-width="2"
									></circle>
									<circle
										class="about__gray line"
										transform="rotate(90 900 900)"
										cx="900"
										cy="900"
										r="165"
										stroke="#323232"
										stroke-width="2"
										style="opacity: 0.95"
									></circle>
									<circle
										class="about__gray line"
										transform="rotate(90 900 900)"
										cx="900"
										cy="900"
										r="220"
										stroke="#323232"
										stroke-width="2"
										style="opacity: 0.9"
									></circle>
									<circle
										class="about__gray line"
										transform="rotate(90 900 900)"
										cx="900"
										cy="900"
										r="275"
										stroke="#323232"
										stroke-width="2"
										style="opacity: 0.8"
									></circle>
									<circle
										class="about__gray line"
										transform="rotate(90 900 900)"
										cx="900"
										cy="900"
										r="330"
										stroke="#323232"
										stroke-width="2"
										style="opacity: 0.7"
									></circle>
									<circle
										class="about__gray line"
										transform="rotate(90 900 900)"
										cx="900"
										cy="900"
										r="385"
										stroke="#323232"
										stroke-width="2"
										style="opacity: 0.6"
									></circle>
									<circle
										class="about__gray line"
										transform="rotate(90 900 900)"
										cx="900"
										cy="900"
										r="440"
										stroke="#323232"
										stroke-width="2"
										style="opacity: 0.5"
									></circle>
									<circle
										class="about__gray line"
										transform="rotate(90 900 900)"
										cx="900"
										cy="900"
										r="495"
										stroke="#323232"
										stroke-width="2"
										style="opacity: 0.45"
									></circle>
									<circle
										class="about__gray line"
										transform="rotate(90 900 900)"
										cx="900"
										cy="900"
										r="550"
										stroke="#323232"
										stroke-width="2"
										style="opacity: 0.4"
									></circle>
									<circle
										class="about__gray line"
										transform="rotate(90 900 900)"
										cx="900"
										cy="900"
										r="605"
										stroke="#323232"
										stroke-width="2"
										style="opacity: 0.35"
									></circle>
									<circle
										class="about__gray line"
										transform="rotate(90 900 900)"
										cx="900"
										cy="900"
										r="660"
										stroke="#323232"
										stroke-width="2"
										style="opacity: 0.3"
									></circle>
									<circle
										class="about__gray line"
										transform="rotate(90 900 900)"
										cx="900"
										cy="900"
										r="715"
										stroke="#323232"
										stroke-width="2"
										style="opacity: 0.25"
									></circle>
									<circle
										class="about__gray line"
										transform="rotate(90 900 900)"
										cx="900"
										cy="900"
										r="770"
										stroke="#323232"
										stroke-width="2"
										style="opacity: 0.2"
									></circle>
									<circle
										class="about__gray line"
										transform="rotate(90 900 900)"
										cx="900"
										cy="900"
										r="825"
										stroke="#323232"
										stroke-width="2"
										style="opacity: 0.15"
									></circle>
									<circle
										class="about__gray line"
										transform="rotate(90 900 900)"
										cx="900"
										cy="900"
										r="880"
										stroke="#323232"
										stroke-width="2"
										style="opacity: 0.1"
									></circle>
								</g>
								<g id="about__on" style="opacity: 0">
									<circle
										class="about__on line"
										cx="900"
										cy="900"
										r="220"
										transform="rotate(-200 900 900)"
										stroke="url(#linear2)"
										stroke-width="2"
										style="opacity: 0.9"
									></circle>
									<circle
										class="about__on line"
										cx="900"
										cy="900"
										r="275"
										transform="rotate(-125 900 900)"
										stroke="url(#linear3)"
										stroke-width="2"
										style="opacity: 0.8"
									></circle>
									<circle
										class="about__on line"
										cx="900"
										cy="900"
										r="330"
										transform="rotate(145 900 900)"
										stroke="url(#linear4)"
										stroke-width="2"
										style="opacity: 0.7"
									></circle>
									<circle
										class="about__on line"
										cx="900"
										cy="900"
										r="385"
										transform="rotate(115 900 900)"
										stroke="url(#linear5)"
										stroke-width="2"
										style="opacity: 0.6"
									></circle>
									<text x="900" y="910" class="foi__text about__on">on</text>
								</g>
								<g id="about__focus" style="opacity: 0">
									<circle
										class="about__focus line"
										cx="900"
										cy="900"
										r="110"
										transform="rotate(-65 900 900)"
										stroke="url(#linear0)"
										stroke-width="2"
									></circle>
									<circle
										class="about__focus line"
										cx="900"
										cy="900"
										r="165"
										transform="rotate(-145 900 900)"
										stroke="url(#linear1)"
										stroke-width="2"
										style="opacity: 0.95"
									></circle>
									<text x="900" y="910" class="foi__text about__focus">focus</text>
								</g>
								<g id="about__ideas" style="opacity: 0">
									<circle
										class="about__ideas line"
										cx="900"
										cy="900"
										r="440"
										transform="rotate(75 900 900)"
										stroke="url(#linear6)"
										stroke-width="2"
										style="opacity: 0.5"
									></circle>
									<circle
										class="about__ideas line"
										cx="900"
										cy="900"
										r="495"
										transform="rotate(190 900 900)"
										stroke="url(#linear7)"
										stroke-width="2"
										style="opacity: 0.45"
									></circle>
									<circle
										class="about__ideas line"
										cx="900"
										cy="900"
										r="550"
										transform="rotate(75 900 900)"
										stroke="url(#linear8)"
										stroke-width="2"
										style="opacity: 0.4"
									></circle>
									<circle
										class="about__ideas line"
										cx="900"
										cy="900"
										r="605"
										transform="rotate(115 900 900)"
										stroke="url(#linear9)"
										stroke-width="2"
										style="opacity: 0.35"
									></circle>
									<circle
										class="about__ideas line"
										cx="900"
										cy="900"
										r="660"
										transform="rotate(95 900 900)"
										stroke="url(#linear10)"
										stroke-width="2"
										style="opacity: 0.3"
									></circle>
									<circle
										class="about__ideas line"
										cx="900"
										cy="900"
										r="715"
										transform="rotate(115 900 900)"
										stroke="url(#linear11)"
										stroke-width="2"
										style="opacity: 0.25"
									></circle>
									<circle
										class="about__ideas line"
										cx="900"
										cy="900"
										r="770"
										transform="rotate(145 900 900)"
										stroke="url(#linear12)"
										stroke-width="2"
										style="opacity: 0.2"
									></circle>
									<circle
										class="about__ideas line"
										cx="900"
										cy="900"
										r="825"
										transform="rotate(105 900 900)"
										stroke="url(#linear13)"
										stroke-width="2"
										style="opacity: 0.15"
									></circle>
									<circle
										class="about__ideas line"
										cx="900"
										cy="900"
										r="880"
										transform="rotate(-160 900 900)"
										stroke="url(#linear14)"
										stroke-width="2"
										style="opacity: 0.1"
									></circle>
									<text x="900" y="910" class="foi__text about__ideas">ideas</text>
								</g>
								<defs>
									<linearGradient
										id="linear0"
										x1="900"
										y1="800"
										x2="900"
										y2="1010"
										gradientUnits="userSpaceOnUse"
										gradientTransform="rotate(-50, 900, 900)"
									>
										<stop stop-color="#FF0000"></stop>
										<stop offset="0.520833" stop-color="#323232"></stop>
									</linearGradient>
									<linearGradient
										id="linear1"
										x1="900"
										y1="800"
										x2="900"
										y2="1065"
										gradientUnits="userSpaceOnUse"
										gradientTransform="rotate(-50, 900, 900)"
									>
										<stop stop-color="#FF0000"></stop>
										<stop offset="0.520833" stop-color="#323232"></stop>
									</linearGradient>
									<linearGradient
										id="linear2"
										x1="900"
										y1="800"
										x2="900"
										y2="1120"
										gradientUnits="userSpaceOnUse"
										gradientTransform="rotate(-50, 900, 900)"
									>
										<stop stop-color="#FF0000"></stop>
										<stop offset="0.520833" stop-color="#323232"></stop>
									</linearGradient>
									<linearGradient
										id="linear3"
										x1="900"
										y1="700"
										x2="900"
										y2="1175"
										gradientUnits="userSpaceOnUse"
										gradientTransform="rotate(-50, 900, 900)"
									>
										<stop stop-color="#FF0000"></stop>
										<stop offset="0.520833" stop-color="#323232"></stop>
									</linearGradient>
									<linearGradient
										id="linear4"
										x1="900"
										y1="600"
										x2="900"
										y2="1230"
										gradientUnits="userSpaceOnUse"
										gradientTransform="rotate(-50, 900, 900)"
									>
										<stop stop-color="#FF0000"></stop>
										<stop offset="0.520833" stop-color="#323232"></stop>
									</linearGradient>
									<linearGradient
										id="linear5"
										x1="900"
										y1="550"
										x2="900"
										y2="1285"
										gradientUnits="userSpaceOnUse"
										gradientTransform="rotate(-50, 900, 900)"
									>
										<stop stop-color="#FF0000"></stop>
										<stop offset="0.520833" stop-color="#323232"></stop>
									</linearGradient>
									<linearGradient
										id="linear6"
										x1="900"
										y1="500"
										x2="900"
										y2="1340"
										gradientUnits="userSpaceOnUse"
										gradientTransform="rotate(-50, 900, 900)"
									>
										<stop stop-color="#FF0000"></stop>
										<stop offset="0.520833" stop-color="#323232"></stop>
									</linearGradient>
									<linearGradient
										id="linear7"
										x1="900"
										y1="450"
										x2="900"
										y2="1395"
										gradientUnits="userSpaceOnUse"
										gradientTransform="rotate(-50, 900, 900)"
									>
										<stop stop-color="#FF0000"></stop>
										<stop offset="0.520833" stop-color="#323232"></stop>
									</linearGradient>
									<linearGradient
										id="linear8"
										x1="900"
										y1="420"
										x2="900"
										y2="1450"
										gradientUnits="userSpaceOnUse"
										gradientTransform="rotate(-50, 900, 900)"
									>
										<stop stop-color="#FF0000"></stop>
										<stop offset="0.520833" stop-color="#323232"></stop>
									</linearGradient>
									<linearGradient
										id="linear9"
										x1="900"
										y1="400"
										x2="900"
										y2="1505"
										gradientUnits="userSpaceOnUse"
										gradientTransform="rotate(-50, 900, 900)"
									>
										<stop stop-color="#FF0000"></stop>
										<stop offset="0.520833" stop-color="#323232"></stop>
									</linearGradient>
									<linearGradient
										id="linear10"
										x1="900"
										y1="380"
										x2="900"
										y2="1560"
										gradientUnits="userSpaceOnUse"
										gradientTransform="rotate(-50, 900, 900)"
									>
										<stop stop-color="#FF0000"></stop>
										<stop offset="0.520833" stop-color="#323232"></stop>
									</linearGradient>
								</defs>
							</svg>
						</div>
						<pluhs></pluhs>
					</div>
				</section>
			</div>
			<div id="main"></div>
			<div class="main__bg main__bg-black"></div>
			<div class="main__bg main__bg-red"></div>
			<div
				class="main__bg main__bg-blue"
				:class="{'main__bg-active': dots.events || dots.creative || dots.decor}"
			></div>
		</div>
		<section v-if="desktop" class="works desktop" @wheel="goToMeet">
			<div class="container container-h100">
				<div class="works__items">
					<div class="works__first">
						<div class="works__title">Работы</div>
					</div>
					<div v-for="post in posts" :key="post.id" class="works__item">
						<router-link :to="/works/ + post.slug" class="works__link">
							<div class="works__imge">
								<img :src="post.mainImg" class="works__img" :alt="post.title" />
							</div>
							<div class="works__subtitle" v-html="post.menuTitle"></div>
						</router-link>
					</div>
				</div>
			</div>
		</section>
		<section
			v-if="desktop"
			class="meet desktop"
			@wheel="backFromMeet"
			style="transform: translate3d(0.00001px, 0.00001px, 0.00001px);"
		>
			<div class="meet__box">
				<div class="meet__title">
					Обсудим проект?
				</div>
				<div class="meet__btn btn" @click="goToForm">
					<span class="btn__text"> Окей </span>
					<svg width="64" height="72" viewBox="0 0 72 72" class="btn__svg">
						<path
							class="btn__bg"
							d="M4.35321 9.14134C9.7484 4.71538 16.317 1.95847 23.2549 1.2081C30.1927 0.457718 37.1989 1.74643 43.4156 4.91647C49.6324 8.08652 54.79 13.0003 58.2571 19.0564C61.7242 25.1125 63.3504 32.0481 62.9366 39.0142C62.5228 45.9802 60.0869 52.6745 55.9272 58.2775C51.7674 63.8805 46.0643 68.1492 39.516 70.5609C32.9677 72.9726 25.8582 73.4228 19.058 71.8563C12.2577 70.2898 6.06176 66.7746 1.22852 61.7411"
							stroke-width="1.13924"
						></path>
						<path
							class="btn__arrow"
							d="M26.9467 43.5547C26.7243 43.7772 26.3636 43.7772 26.1412 43.5547L22.5161 39.9297C22.2937 39.7072 22.2937 39.3466 22.5161 39.1241C22.7386 38.9017 23.0992 38.9017 23.3217 39.1241L26.5439 42.3464L29.7662 39.1241C29.9887 38.9017 30.3493 38.9017 30.5718 39.1241C30.7942 39.3466 30.7942 39.7072 30.5718 39.9297L26.9467 43.5547ZM27.1136 31.7595L27.1136 43.1519L25.9743 43.1519L25.9743 31.7595L27.1136 31.7595Z"
						></path>
						<path
							class="btn__circle"
							d="M4.35321 9.14134C9.7484 4.71538 16.317 1.95847 23.2549 1.2081C30.1927 0.457718 37.1989 1.74643 43.4156 4.91647C49.6324 8.08652 54.79 13.0003 58.2571 19.0564C61.7242 25.1125 63.3504 32.0481 62.9366 39.0142C62.5228 45.9802 60.0869 52.6745 55.9272 58.2775C51.7674 63.8805 46.0643 68.1492 39.516 70.5609C32.9677 72.9726 25.8582 73.4228 19.058 71.8563C12.2577 70.2898 6.06176 66.7746 1.22852 61.7411"
							stroke-width="1.13924"
						></path>
					</svg>
				</div>
			</div>
			<div class="meet__inner">
				<div class="meet__bgs" :class="{'meet__bgs-active': this.meetBg}">
					<div class="meet__bg"></div>
					<div class="meet__bg"></div>
					<div class="meet__bg"></div>
					<div class="meet__bg"></div>
					<div class="meet__bg"></div>
					<div class="meet__bg"></div>
					<div class="meet__bg"></div>
					<div class="meet__bg"></div>
					<div class="meet__bg"></div>
					<div class="meet__bg"></div>
					<div class="meet__bg"></div>
					<div class="meet__bg"></div>
					<div class="meet__bg"></div>
					<div class="meet__bg"></div>
					<div class="meet__bg"></div>
					<div class="meet__bg"></div>
					<div class="meet__bg"></div>
					<div class="meet__bg"></div>
				</div>
			</div>
		</section>
		<div class="main__mobile" v-if="!desktop">
			<section class="mobile__main">
				<div class="container">
					<div class="mobile__title">
						Привет! <br />
						Мы маркетинговое агентство
					</div>
					<div class="mobile__subtitle">
						Продюссируем ивенты, разрабатываем креатив, <br />
						проектируем стенды и декор
					</div>
					<router-link to="/works" class="mobile__btn btn goto">
						<span class="btn__text"> Наши проекты </span>
						<svg width="64" height="72" viewBox="0 0 72 72" class="btn__svg">
							<path
								class="btn__bg"
								d="M4.35321 9.14134C9.7484 4.71538 16.317 1.95847 23.2549 1.2081C30.1927 0.457718 37.1989 1.74643 43.4156 4.91647C49.6324 8.08652 54.79 13.0003 58.2571 19.0564C61.7242 25.1125 63.3504 32.0481 62.9366 39.0142C62.5228 45.9802 60.0869 52.6745 55.9272 58.2775C51.7674 63.8805 46.0643 68.1492 39.516 70.5609C32.9677 72.9726 25.8582 73.4228 19.058 71.8563C12.2577 70.2898 6.06176 66.7746 1.22852 61.7411"
								stroke-width="1.13924"
							></path>
							<path
								class="btn__arrow"
								d="M26.9467 43.5547C26.7243 43.7772 26.3636 43.7772 26.1412 43.5547L22.5161 39.9297C22.2937 39.7072 22.2937 39.3466 22.5161 39.1241C22.7386 38.9017 23.0992 38.9017 23.3217 39.1241L26.5439 42.3464L29.7662 39.1241C29.9887 38.9017 30.3493 38.9017 30.5718 39.1241C30.7942 39.3466 30.7942 39.7072 30.5718 39.9297L26.9467 43.5547ZM27.1136 31.7595L27.1136 43.1519L25.9743 43.1519L25.9743 31.7595L27.1136 31.7595Z"
							></path>
							<path
								class="btn__circle"
								d="M4.35321 9.14134C9.7484 4.71538 16.317 1.95847 23.2549 1.2081C30.1927 0.457718 37.1989 1.74643 43.4156 4.91647C49.6324 8.08652 54.79 13.0003 58.2571 19.0564C61.7242 25.1125 63.3504 32.0481 62.9366 39.0142C62.5228 45.9802 60.0869 52.6745 55.9272 58.2775C51.7674 63.8805 46.0643 68.1492 39.516 70.5609C32.9677 72.9726 25.8582 73.4228 19.058 71.8563C12.2577 70.2898 6.06176 66.7746 1.22852 61.7411"
								stroke-width="1.13924"
							></path>
						</svg>
						<svg width="40" height="46" viewBox="0 0 40 46" fill="none" class="btn__mobile">
							<path
								class="btn__bg"
								d="M3.04667 5.99106C6.35419 3.27772 10.3811 1.58759 14.6343 1.12757C18.8876 0.667553 23.1827 1.4576 26.9939 3.401C30.8051 5.3444 33.967 8.35683 36.0925 12.0695C38.218 15.7822 39.215 20.0341 38.9613 24.3046C38.7076 28.5752 37.2143 32.6791 34.6641 36.114C32.114 39.549 28.6177 42.1659 24.6033 43.6444C20.5888 45.1229 16.2303 45.3989 12.0614 44.4385C7.89255 43.4782 4.0941 41.3232 1.13107 38.2374"
								stroke-width="0.698413"
							></path>
							<path
								class="btn__arrow"
								d="M17.2469 27.2469C17.1106 27.3833 16.8894 27.3833 16.7531 27.2469L14.5307 25.0246C14.3944 24.8882 14.3944 24.6671 14.5307 24.5307C14.6671 24.3944 14.8882 24.3944 15.0246 24.5307L17 26.5061L18.9754 24.5307C19.1118 24.3944 19.3329 24.3944 19.4693 24.5307C19.6056 24.6671 19.6056 24.8882 19.4693 25.0246L17.2469 27.2469ZM17.3492 19L17.3492 27L16.6508 27L16.6508 19L17.3492 19Z"
							></path>
							<path
								class="btn__circle"
								d="M3.04667 5.99106C6.35419 3.27772 10.3811 1.58759 14.6343 1.12757C18.8876 0.667553 23.1827 1.4576 26.9939 3.401C30.8051 5.3444 33.967 8.35683 36.0925 12.0695C38.218 15.7822 39.215 20.0341 38.9613 24.3046C38.7076 28.5752 37.2143 32.6791 34.6641 36.114C32.114 39.549 28.6177 42.1659 24.6033 43.6444C20.5888 45.1229 16.2303 45.3989 12.0614 44.4385C7.89255 43.4782 4.0941 41.3232 1.13107 38.2374"
								stroke-width="0.698413"
							></path>
						</svg>
					</router-link>
				</div>
				<div class="mobile__bg"></div>
			</section>
			<mobileWorks />
			<div class="mobile__contacts">
				<contacts />
			</div>
		</div>
	</div>
</template>
<script lang="js">
	import Vue from 'vue';
	import {mapGetters} from 'vuex';
	import lax from 'lax.js';
	import pluhs from './components/pluhi';
	import mobileWorks from './components/mobile_works';
	import contacts from '../../components/contacts/index.vue';
	import anime from "animejs/lib/anime.es.js";

	export default Vue.extend({
		name: 'Home',
		data: function() {
			return {
				goMeet: null,
				goForm: null,
				foi: null,
				canPlay: true,
				meetBg: false,
				meetBgTop: false,
				desktop: true,
				dots: {
					we: false,
					agency: false,
					spb: false,
					events: false,
					creative: false,
					decor: false,
					philosophy: false,
					ooe: false,
				},
			};
		},
		components: {
			pluhs,
			mobileWorks,
			contacts,
		},
		methods: {
			openShowreel: function() {
				this.$eventBus.$emit('showreel');
			},
			goToMeet: function(e) {
				if (e.deltaY > 0) {
					if ((window.innerHeight + window.scrollY) === document.body.scrollHeight) {
						e.preventDefault();
						if (this.canPlay) {
							this.$eventBus.$emit('overflowHidden', true);
							this.canPlay = false;
							this.goMeet.play();
							this.goMeet.finished.then(() => {
								this.meetBg = true;
								this.canPlay = true;
							});
						}
					}
				}
			},
			backFromMeet: function(e) {
				e.preventDefault();
				if (e.deltaY < 0) {
					if (this.canPlay) {
						this.canPlay = false;
						this.meetBg = false;
						this.goMeet.reverse();
						this.goMeet.play();
						this.goMeet.finished.then(() => {
							this.goMeet.reverse();
							this.canPlay = true;
							this.$eventBus.$emit('overflowHidden', false);
						});
					}
				}
			},
			goToForm: function() {
				this.canPlay = false;
				this.$eventBus.$emit('footerMeet', true);
				this.meetBg = false;
				this.meetBgTop = true;
				this.goForm.play();
				this.goForm.finished.then(() => {
					this.canPlay = true;
					this.meetBgTop = false;
				});
			},
			scrollFromMeet: function() {
				window.scrollTo({
					top: document.getElementById('main').offsetTop,
				});
			},
			we: function(bool) {
				if (bool) {
					if (window.scrollY > 7200) {
						this.dots.we = true;
					}
				} else {
					if (this.dots.we === true) {
						this.dots.we = false;
					}
				}
			},
			agency: function(bool) {
				if (bool) {
					if (window.scrollY > 7200) {
						this.dots.agency = true;
						this.$eventBus.$emit('headerColor', '#ffffff');
					}
				} else {
					if (this.dots.agency === true) {
						this.dots.agency = false;
						this.$eventBus.$emit('headerColor', '#212121');
					}
				}
			},
			agencyClick: function() {
				if (this.dots.agency === true) {
					this.$router.push({path: '/about'});
				}
			},
			spb: function(bool) {
				if (bool) {
					if (window.scrollY > 7200) {
						this.dots.spb = true;
						this.$eventBus.$emit('headerColor', '#ffffff');
					}
				} else {
					if (this.dots.spb === true) {
						this.dots.spb = false;
						this.$eventBus.$emit('headerColor', '#212121');
					}
				}
			},
			events: function(bool) {
				if (bool) {
					if (window.scrollY > 7200) {
						this.$eventBus.$emit('event', true);
						this.dots.events = true;
						this.$eventBus.$emit('headerColor', '#ffffff');
					}
				} else {
					if (this.dots.events === true) {
						this.$eventBus.$emit('event', false);
						this.dots.events = false;
						this.$eventBus.$emit('headerColor', '#212121');
					}
				}
			},
			creative: function(bool) {
				if (bool) {
					if (window.scrollY > 7200) {
						this.$eventBus.$emit('creative', true);
						this.dots.creative = true;
						this.$eventBus.$emit('headerColor', '#ffffff');
					}
				} else {
					if (this.dots.creative === true) {
						this.$eventBus.$emit('creative', false);
						this.dots.creative = false;
						this.$eventBus.$emit('headerColor', '#212121');
					}
				}
			},
			decor: function(bool) {
				if (bool) {
					if (window.scrollY > 7200) {
						this.$eventBus.$emit('decor', true);
						this.dots.decor = true;
						this.$eventBus.$emit('headerColor', '#ffffff');
					}
				} else {
					if (this.dots.decor === true) {
						this.$eventBus.$emit('decor', false);
						this.dots.decor = false;
						this.$eventBus.$emit('headerColor', '#212121');
					}
				}
			},
			philosophy: function(bool) {
				if (bool) {
					if (window.scrollY > 7200) {
						this.foi.play();
						this.dots.philosophy = true;
						this.$eventBus.$emit('headerColor', '#ffffff');
					}
				} else {
					if (this.dots.philosophy === true) {
						this.foi.pause();
						this.dots.philosophy = false;
						this.$eventBus.$emit('headerColor', '#212121');
					}
				}
			},
			ooe: function(bool) {
				if (bool) {
					if (window.scrollY > 7200) {
						this.dots.ooe = true;
					}
				} else {
					if (this.dots.ooe === true) {
						this.dots.ooe = false;
					}
				}
			},
			onResize: function() {
				this.desktop = window.innerWidth > 1300;
			},
			slowScrollToMain: function () {
				window.scrollTo({
					top: document.getElementById('main').offsetTop,
				});
				if (this.meetBg) {
					if (this.canPlay) {
						this.canPlay = false;
						this.meetBg = false;
						this.goMeet.reverse();
						this.goMeet.play();
						this.goMeet.finished.then(() => {
							this.goMeet.reverse();
							this.canPlay = true;
							this.$eventBus.$emit('overflowHidden', false);
						});
					}
				}
			}
		},
		computed: {
			...mapGetters(['posts', 'showPreloader']),
		},
		created() {
			this.onResize();
			this.$eventBus.$on('scrollFromMeet', this.scrollFromMeet);

		},
		mounted() {
			if (this.desktop) {
				this.foi = anime.timeline({
					autoplay: true,
					loop: true,
				})
					.add({
						targets: '#about__gray',
						opacity: 1,
						duration: 100,
					})
					.add({
						targets: '.about__gray.line',
						strokeDashoffset: [anime.setDashoffset, 0],
						easing: 'easeInOutSine',
						duration: function(el, i) {
							return i * 20 + 50
						},
						delay: function(el, i) {
							return i * 50
						},
						direction: 'alternate-reverse',
					})
					.add({
						targets: '#about__focus',
						opacity: 1,
						delay: 100,
						duration: 100,
					})
					.add({
						targets: '.about__focus.line',
						strokeDashoffset: [anime.setDashoffset, 0],
						easing: 'easeInOutSine',
						duration: 500,
						delay: function(el, i) {
							return i * 500
						},
						direction: 'alternate-reverse',
					}, "-=100")
					.add({
						targets: '#about__focus .foi__text',
						opacity: 0,
						delay: 100,
						duration: 100,
					}, )
					.add({
						targets: '#about__on',
						opacity: 1,
						delay: 100,
						duration: 100,
					})
					.add({
						targets: '.about__on.line',
						strokeDashoffset: [anime.setDashoffset, 0],
						easing: 'easeInOutSine',
						duration: 250,
						delay: function(el, i) {
							return i * 250
						},
						direction: 'alternate-reverse',
					}, "-=100")
					.add({
						targets: '#about__on .foi__text',
						opacity: 0,
						delay: 100,
						duration: 100,
					}, )
					.add({
						targets: '#about__ideas',
						opacity: 1,
						delay: 100,
						duration: 100,
					})
					.add({
						targets: '.about__ideas.line',
						strokeDashoffset: [anime.setDashoffset, 0],
						easing: 'easeInOutSine',
						duration: 250,
						delay: function(el, i) {
							return i * 250
						},
						direction: 'alternate-reverse',
					}, "-=100")
					.add({
						targets: '#about__ideas, #about__on,  #about__focus, #about__gray',
						opacity: 0,
						delay: 100,
						duration: 300,
					});
				this.goForm = anime.timeline({
					loop: false,
					autoplay: false,
				}).add({
					targets: '.meet__bg',
					easing: 'easeInOutCirc',
					translateY: [0, function (el, i) {
						const top = 70 * i + 70
						return -top;
					}],
					duration: 1000,
				}).add({
					targets: '.meet',
					easing: 'easeInOutCirc',
					translateX: [0, 0],
					translateY: [0, '-100%'],
					translateZ: [0, 0],
					duration: 1000,
				}, '-=300');
				this.goMeet = anime.timeline({
					loop: false,
					autoplay: false,
				}).add({
					targets: '.meet',
					easing: 'easeInOutCirc',
					translateX: ['100%', 0],
					translateY: [0, 0],
					translateZ: [0, 0],
					duration: 1000,
				}).add({
					targets: '.meet__bg',
					easing: 'easeInOutCirc',
					translateY: [function (el, i) {
						const top = window.innerHeight - (70 * i);
						if(top > 0) {
							return top;
						} else {
							return 0;
						}
					}, 0],
					duration: 1000,
				});
			}
			if (!this.showPreloader) {
				window.scrollTo({
					top: document.getElementById('main').offsetTop,
				});
			}
			if (document.documentElement.clientWidth > 1300) {
				this.$eventBus.$on('slowScrollToMain', this.slowScrollToMain);
				lax.init();
				lax.addDriver('scrollY', function () {
					return window.scrollY;
				});
				// TEXT
				lax.addElements('#string-1', {
					scrollY: {
						translateX: [
							[100, 1800],
							['screenWidth/3', -200],
						],
						brightness: [
							[1400, 1600, 3500, 3600],
							[1, 2, 2, 1],
						],
					},
				});
				lax.addElements('#word-1', {
					scrollY: {
						opacity: [
							[400, 1000],
							[1, 0],
						],
					},
				});
				lax.addElements('#word-2', {
					scrollY: {
						brightness: [
							[1400, 1600, 3640, 3690],
							[1, 10, 10, 1],
						],
						translateX: [
							[1800, 2200],
							[0, 110],
						],
					},
				});
				lax.addElements('#word-3', {
					scrollY: {
						opacity: [
							[700, 1300],
							[1, 0],
						],
					},
				});
				lax.addElements('#word-4', {
					scrollY: {
						brightness: [
							[1400, 1600, 3570, 3640],
							[1, 10, 10, 1],
						],
					},
				});
				lax.addElements('#string-1-2-3', {
					scrollY: {
						translateX: [
							[1200, 2000],
							[0, -320],
						],
					},
				});
				lax.addElements('#word-5', {
					scrollY: {
						brightness: [
							[2500, 2800, 3500, 3600],
							[1, 10, 10, 1],
						],
					},
				});
				lax.addElements('#word-6', {
					scrollY: {
						opacity: [
							[2000, 2400],
							[1, 0],
						],
					},
				});
				lax.addElements('#word-7', {
					scrollY: {
						translateX: [
							[2300, 2800],
							[0, -195],
						],
						brightness: [
							[2500, 2800, 3450, 3580],
							[1, 10, 10, 1],
						],
					},
				});
				lax.addElements('#string-2', {
					scrollY: {
						translateX: [
							[3500, 3900, 4300, 5000, 5700, 6000],
							['screenWidth', 0, 0, -420, -420, -240],
						],
					},
				});
				lax.addElements('#word-11', {
					scrollY: {
						opacity: [
							[4100, 4400],
							[1, 0],
						],
					},
				});
				lax.addElements('#word-13', {
					scrollY: {
						opacity: [
							[4400, 4800],
							[1, 0],
						],
					},
				});
				lax.addElements('#string-2-2', {
					scrollY: {
						translateX: [
							[4900, 5300],
							[0, -420],
						],
					},
				});
				lax.addElements('#word-15', {
					scrollY: {
						opacity: [
							[5200, 5400],
							[1, 0],
						],
					},
				});
				lax.addElements('#string-2-3', {
					scrollY: {
						translateX: [
							[5300, 5600],
							[0, -620],
						],
					},
				});
				lax.addElements('#word-16, #word-18', {
					scrollY: {
						opacity: [
							[5500, 5700],
							[1, 0],
						],
					},
				});
				lax.addElements('#string-3', {
					scrollY: {
						translateX: [
							[5800, 6300],
							['screenWidth', 140],
						],
					},
				});
				lax.addElements('#word-21', {
					scrollY: {
						opacity: [
							[6300, 6700],
							[1, 0],
						],
					},
				});
				lax.addElements('#word-23, #word-25, #word-27, #word-29', {
					scrollY: {
						opacity: [
							[6400, 6800],
							[1, 0],
						],
					},
				});
				lax.addElements('#word-26', {
					scrollY: {
						translateX: [
							[6750, 7050],
							[0, -102],
						],
					},
				});
				lax.addElements('#word-28', {
					scrollY: {
						translateX: [
							[6750, 7050],
							[0, -200],
						],
					},
				});
				// BGs
				lax.addElements('.main__bg-black', {
					scrollY: {
						opacity: [
							[1300, 1600, 3400, 3401],
							[0, 1, 1, 0],
						],
					},
				});
				lax.addElements('.main__bg-red', {
					scrollY: {
						translateY: [
							[2400, 2800],
							['-screenHeight', 0]
						],
						translateX: [
							[3400, 3800],
							[0, '-screenWidth'],
						],
					},
				});

				// SOME SHIT

				lax.addElements('.main__scroll', {
					scrollY: {
						translateY: [
							[100, 400],
							[0, 'screenHeight/10'],
						],
					},
				});
				lax.addElements('.main__logo', {
					scrollY: {
						opacity: [
							[200, 600, 800, 1100],
							[0, 1, 1, 0],
						],
					},
				});
				lax.addElements('.menu__link', {
					scrollY: {
						brightness: [
							[1000, 1500, 3400, 3750, 8100, 8300],
							[1, 10, 10, 1, 1, 10],
						],
					},
				});
				lax.addElements('.main__aboutBgs', {
					scrollY: {
						translateY: [
							[1600, 1800, 2200, 2400],
							['screenHeight', -500, -500, -100],
						],
					},
				});

				lax.addElements('.main__aboutBg-1', {
					scrollY: {
						translateY: [
							[1800, 2400],
							[0, -70],
						],
					},
				});
				lax.addElements('.main__aboutBg-2', {
					scrollY: {
						translateY: [
							[1800, 2400],
							[0, -140],
						],
					},
				});
				lax.addElements('.main__aboutBg-3', {
					scrollY: {
						translateY: [
							[1800, 2400],
							[0, -210],
						],
					},
				});
				lax.addElements('.main__aboutBg-4', {
					scrollY: {
						translateY: [
							[1800, 2400],
							[0, -280],
						],
					},
				});
				lax.addElements('.main__aboutBg-5', {
					scrollY: {
						translateY: [
							[1800, 2400],
							[0, -350],
						],
					},
				});
				lax.addElements('.main__aboutBg-6', {
					scrollY: {
						translateY: [
							[1800, 2400],
							[0, -420],
						],
					},
				});
				lax.addElements('.main__aboutBg-7', {
					scrollY: {
						translateY: [
							[1800, 2400],
							[0, -490],
						],
					},
				});
				lax.addElements('.main__aboutBg-8', {
					scrollY: {
						translateY: [
							[1800, 2400],
							[0, -560],
						],
					},
				});
				lax.addElements('.main__aboutBg-9', {
					scrollY: {
						translateY: [
							[1800, 2400],
							[0, -630],
						],
					},
				});
				lax.addElements('.main__aboutBg-10', {
					scrollY: {
						translateY: [
							[1800, 2400],
							[0, -700],
						],
					},
				});
				lax.addElements('.main__aboutBg-11', {
					scrollY: {
						translateY: [
							[1800, 2400],
							[0, -770],
						],
					},
				});
				lax.addElements('.main__aboutBg-12', {
					scrollY: {
						translateY: [
							[1800, 2400],
							[0, -840],
						],
					},
				});
				lax.addElements('.main__aboutBg-13', {
					scrollY: {
						translateY: [
							[1800, 2400],
							[0, -910],
						],
					},
				});
				lax.addElements('.main__aboutBg-14', {
					scrollY: {
						translateY: [
							[1800, 2400],
							[0, -980],
						],
					},
				});
				lax.addElements('.main__aboutBg-15', {
					scrollY: {
						translateY: [
							[1800, 2400],
							[0, -1050],
						],
					},
				});
				lax.addElements('.main__aboutBg-16', {
					scrollY: {
						translateY: [
							[1800, 2400],
							[0, -1120],
						],
					},
				});
				lax.addElements('.main__aboutBg-17', {
					scrollY: {
						translateY: [
							[1800, 2400],
							[0, -1190],
						],
					},
				});
				lax.addElements('.main__aboutBg-18', {
					scrollY: {
						translateY: [
							[1800, 2400],
							[0, -1260],
						],
					},
				});
				lax.addElements('.main__aboutBg-19', {
					scrollY: {
						translateY: [
							[1800, 2400],
							[0, -1330],
						],
					},
				});
				lax.addElements('.main__aboutBg-20', {
					scrollY: {
						translateY: [
							[1800, 2400],
							[0, -1400],
						],
					},
				});
				lax.addElements('.main__aboutBg-21', {
					scrollY: {
						translateY: [
							[1800, 2400],
							[0, -1470],
						],
					},
				});
				lax.addElements('.main__aboutBg-22', {
					scrollY: {
						translateY: [
							[1800, 2400],
							[0, -1540],
						],
					},
				});
				lax.addElements('.main__aboutBg-23', {
					scrollY: {
						translateY: [
							[1800, 2400],
							[0, -1610],
						],
					},
				});
				lax.addElements('.main__aboutBg-24', {
					scrollY: {
						translateY: [
							[1800, 2400],
							[0, -1680],
						],
					},
				});
				lax.addElements('.main__aboutBg-25', {
					scrollY: {
						translateY: [
							[1800, 2400],
							[0, -1750],
						],
					},
				});
				lax.addElements('.main__aboutBg-26', {
					scrollY: {
						translateY: [
							[1800, 2400],
							[0, -1820],
						],
					},
				});
				lax.addElements('.main__aboutBg-27', {
					scrollY: {
						translateY: [
							[1800, 2400],
							[0, -1890],
						],
					},
				});
				lax.addElements('.main__aboutBg-28', {
					scrollY: {
						translateY: [
							[1800, 2400],
							[0, -1960],
						],
					},
				});
				lax.addElements('.main__aboutBg-29', {
					scrollY: {
						translateY: [
							[1800, 2400],
							[0, -2030],
						],
					},
				});
				lax.addElements('.main__aboutBg-30', {
					scrollY: {
						translateY: [
							[1800, 2400],
							[0, -2100],
						],
					},
				});


				lax.addElements('.main__cities', {
					scrollY: {
						translateY: [
							[2700, 3100],
							[50, 0],
						],
						opacity: [
							[2700, 3100],
							[0, 1],
						],
						translateX: [
							[3300, 3800],
							[0, '-screenWidth'],
						],
					},
				});
				lax.addElements('.main__playcircle', {
					scrollY: {
						scale: [
							[5700, 6000, 6100, 6300],
							[0, 1, 1, 0],
						],
					},
				});
				lax.addElements('.main__videodescr', {
					scrollY: {
						opacity: [
							[5700, 6000, 6100, 6300],
							[0, 1, 1, 0],
						],
					},
				});
				lax.addElements('.main__end', {
					scrollY: {
						translateY: [
							[7100, 7400],
							[300, 0],
						],
						opacity: [
							[7000, 7200],
							[0, 1],
						],
					},
				});
				lax.addElements('.main__dot', {
					scrollY: {
						opacity: [
							[7100, 7400],
							[0, 1],
						],
					},
				});
				lax.addElements('.works', {
					scrollY: {
						translateY: [
							[7600, 8300],
							['screenHeight + 100', 0],
						],
					},
				});
				lax.addElements('.works__items', {
					scrollY: {
						translateX: [
							[8500, 10500],
							[0, '-elWidth + 600'],
						],
					},
				});
			}
		},
		beforeDestroy() {
			this.$eventBus.$off('scrollFromMeet');
			this.$eventBus.$off('slowScrollToMain');
			this.$eventBus.$emit('footerMeet', false);
			this.$eventBus.$emit('overflowHidden', false);
		},
	});
</script>
<style lang="scss">
	#main {
		position: absolute;
		top: 7500px;
	}
	#word-2 {
		z-index: 1;
	}
	#string-1 {
		z-index: 12;
	}
	#word-26 {
		&:before {
			content: '';
			position: absolute;
			width: 350%;
			height: 100%;
			top: 0;
			left: -125%;
			z-index: 41;
			transform: translate3d(0.00001px, 0.00001px, 0.00001px);
		}
	}
	.works {
		height: 100vh;
		width: 100%;
		background: #040924;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 101;
		padding-bottom: 100px;
		padding-top: 180px;
		box-shadow: 0px -10px 50px 10px rgb(0, 0, 0, 0.5);
		&__first {
			padding-top: 30px;
			padding-right: 300px;
			height: 100%;
		}
		&__title {
			flex-grow: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 64px;
			line-height: 94px;
			color: #ffffff;
			text-align: center;
		}
		&__items {
			display: flex;
			justify-content: flex-end;
			width: fit-content;
		}
		&__item {
			width: 20vw;
			min-width: 375px;
			display: flex;
			flex-direction: column;
			& + & {
				margin-left: 65px;
			}
		}
		&__link {
			display: flex;
			flex-direction: column;
		}
		&__imge {
			border-radius: 6px;
			overflow: hidden;
			background: rgba(255, 255, 255, 0.1);
			width: 100%;
			flex-grow: 1;
			height: calc(100vh - 240px - 165px);
		}
		&__img {
			object-fit: cover;
			width: 100%;
			min-height: 100%;
		}
		&__subtitle {
			margin-top: 30px;
			font-size: 31px;
			line-height: 45px;
			text-align: center;
			text-transform: uppercase;
			color: #ffffff;
		}
	}
	.foi__text {
		font-family: 'Circe', sans-serif;
		font-style: normal;
		font-weight: normal;
		font-size: 24px;
		line-height: 160%;
		fill: #ffffff;
		text-transform: uppercase;
		text-anchor: middle;
	}
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
	.main {
		z-index: 0;
		&__wrapper {
			height: 10500px;
			position: relative;
			z-index: 0;
		}
		&__inner {
			position: fixed;
			width: 100%;
			height: 100%;
			transform: translate3d(0.0001px, 0.0001px, 0.0001px);
		}
		&__string {
			display: flex;
			white-space: nowrap;
			font-size: 64px;
			line-height: 94px;
			color: var(--bg);
			z-index: 10;
			position: relative;
			& + & {
				margin-top: 20px;
			}
			&-white {
				color: var(--white);
			}
		}
		&__section {
			padding-top: 270px;
		}
		&__word {
			position: relative;
			font-size: 64px;
			line-height: 94px;
			display: inline-block;
			cursor: default;
		}
		&__dot {
			position: absolute;
			bottom: 0;
			left: calc(50% - 5px);
			transform: translateX(-50%);
			border-radius: 100%;
			width: 10px;
			height: 10px;
			background: #acacac;
			&-active {
				background: #ee3d43;
			}
			&-hidden {
				opacity: 0 !important;
			}
		}
		&__logo {
			position: absolute;
			left: 0;
			bottom: 0;
			opacity: 0;
		}
		&__bg {
			position: fixed;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			&-black {
				background: var(--bg);
				z-index: -10;
			}
			&-red {
				background: var(--red);
				z-index: -9;
			}
			&-blue {
				background: #030818;
				z-index: -11;
				opacity: 0;
				transition: 0.3s;
			}
			&-active {
				opacity: 1 !important;
			}
		}
		&__about {
			display: none;
			position: absolute;
			top: 45%;
			left: calc(50% - 355px);
			width: 710px;
			font-size: 24px;
			line-height: 35px;
			text-align: center;
			color: var(--white);
			z-index: 1;
			transform: translate3d(0.00001px, 0.00001px, 0.00001px);
			&-active {
				display: block;
			}
		}
		&__aboutBgs {
			position: absolute;
			padding-top: 20px;
			top: 0;
			left: 0;
			z-index: 0;
			width: 100%;
			height: auto;
		}
		&__aboutBg {
			width: 100%;
			height: 90px;
			background: url('./images/main__bg-2.svg') repeat-x left top;
			margin-top: -20px;
			&:nth-child(odd) {
				background: url('./images/main__bg-2.svg') repeat-x -180px top;
			}
		}
		&__ball {
			position: absolute;
			left: -5%;
			bottom: -5%;
		}
		&__cities {
			width: fit-content;
			margin: -50px auto 0;
			display: flex;
			align-items: center;
			position: relative;
		}
		&__text {
			margin-left: 45px;
			width: 390px;
			font-size: 24px;
			line-height: 188%;
			color: #ffffff;
		}
		&__bgpic {
			position: absolute;
			top: 20%;
			mix-blend-mode: screen;
			filter: blur(0.5px) contrast(0.9) brightness(0.9);
			&-right {
				right: 15%;
			}
			&-left {
				left: 15%;
			}
		}
		&__playcircle {
			background: #ee3d43;
			border-radius: 100%;
			width: 450px;
			height: 450px;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
		}
		&__videocircle {
			position: absolute;
			bottom: -100px;
			left: -100px;
			display: flex;
			align-items: center;
		}
		&__videodescr {
			display: flex;
			flex-direction: column;
			margin-left: 37px;
		}
		&__name {
			font-size: 24px;
			line-height: 35px;
			color: #000000;
		}
		&__time {
			margin-top: 10px;
			font-size: 20px;
			line-height: 29px;
			color: #6f6f6f;
		}
		&__textfoi {
			text-align: center;
			max-width: 680px;
			color: #ffffff;
			font-size: 24px;
			line-height: 35px;
		}
		&__end {
			z-index: 10;
			position: fixed;
			bottom: 90px;
			left: 0;
			width: 100%;
			transition: 0.3s;
			&-hide {
				visibility: hidden;
				opacity: 0 !important;
				transform: translate3d(0.00001px, 50px, 0.00001px) !important;
			}
		}
		&__links {
			margin-left: 180px;
		}
		&__link {
			& + & {
				margin-left: 24px;
			}
		}
		&__flex {
			display: flex;
			justify-content: flex-end;
		}
		&__mobile {
			padding-top: 104px;
			background: var(--bg);
		}
		&__svgbg {
			position: fixed;
			z-index: -1;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			background: var(--bg);
			opacity: 0;
			transition: 0.4s;
			visibility: hidden;
			&-active {
				visibility: visible;
				opacity: 1 !important;
			}
		}
		&__scroll {
			position: absolute;
			top: 90%;
			left: 50%;
			margin-left: -25px;
			font-family: 'Circe', sans-serif;
			font-style: normal;
			font-weight: normal;
			font-size: 27.3418px;
			line-height: 188%;
			color: rgba(0, 0, 0, 0.42);
		}
		&__scroll2 {
			font-family: 'Circe', sans-serif;
			font-style: normal;
			font-weight: normal;
			font-size: 27.3418px;
			line-height: 100%;
			color: #c8c8c8;
			cursor: default;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		&__foi {
			position: absolute;
			z-index: -1;
			top: 75%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
	.hover {
		&__bg {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			visibility: hidden;
			transition: 0.4s;
			&-spb {
				z-index: 11;
				background: var(--red);
				display: flex;
				justify-content: center;
				align-items: center;
				transform: translate3d(100%, 0.00001px, 0.00001px);
			}
			&-agency {
				opacity: 0;
				z-index: -11;
				background: var(--bg);
			}
			&-active {
				opacity: 1 !important;
				visibility: visible !important;
				transform: translate3d(0.00001px, 0.00001px, 0.00001px) !important;
			}
		}
		&__string {
			opacity: 1;
			transition: 0.2s;
			&-hidden {
				opacity: 0;
			}
		}
		&__we {
			display: block;
			transition: 0.3s;
			&-active {
				transition-delay: 0.2s;
				transform: translateX(130px);
			}
		}
		&__logo {
			position: absolute;
			left: 0;
			bottom: 0;
			transition: 0.4s;
			transform: translateX(-100%);
			visibility: hidden;
			&-active {
				visibility: visible;
				transform: translateX(0);
			}
		}
		&__chutes {
			padding-top: 20px;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: auto;
			animation: meet 5s linear infinite;
		}
		&__cities {
			margin-top: 180px;
			width: fit-content;
			display: flex;
			align-items: center;
			position: relative;
		}
		&__descr {
			position: absolute;
			bottom: -5px;
			left: 50%;
			transform: translateX(-50%);
			font-size: 14px;
			line-height: 21px;
			text-align: center;
			text-decoration-line: underline;
			color: #ffffff;
			visibility: hidden;
			&-active {
				visibility: visible;
			}
		}
		&__ooe {
			color: var(--red);
			visibility: hidden;
			opacity: 0;
			transition: 0.3s;
			position: absolute;
			left: 0;
			&-active {
				transform: translateX(130px);
				transition-delay: 0.2s;
				visibility: visible;
				opacity: 1;
			}
		}
		&__filosophy {
			font-size: 24px;
			line-height: 35px;
			text-align: center;
			text-transform: lowercase;
			color: #ffffff;
			position: absolute;
			max-width: 850px;
			top: 0;
			left: calc(50% + 230px);
			transform: translateX(-50%);
			white-space: normal;
			width: 100%;
		}
	}
	.mobile {
		&__main {
			padding-bottom: 188px;
			position: relative;
			overflow: hidden;
		}
		&__title {
			font-size: 36px;
			line-height: 120%;
			text-align: center;
			color: #ffffff;
		}
		&__title2 {
			font-size: 28px;
			line-height: 120%;
		}
		&__subtitle {
			margin-top: 60px;
			font-size: 16px;
			line-height: 150%;
			text-align: center;
			color: #ffffff;
		}
		&__btn {
			margin: 40px auto 0;
		}
		&__bg {
			position: absolute;
			top: 66%;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 0;
			background: url('../../assets/images/main__bg-2.svg') no-repeat center top / cover;
		}
		&__works {
			background: #ffffff;
			padding-top: 48px;
			padding-bottom: 48px;
			color: var(--bg);
			position: relative;
		}
		&__name {
			font-size: 18px;
			line-height: 120%;
			color: #ffffff;
			text-transform: uppercase;
			width: 70%;
		}
		&__slide {
			width: 256px !important;
			height: 176px;
			border-radius: 6px;
			padding: 16px;
			overflow: hidden;
			outline: none;
			margin-left: 15px;
			position: relative;
			display: flex !important;
			align-items: flex-end;
		}
		&__imgs {
			z-index: -1;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
		&__img {
			min-width: 100%;
			height: 100%;
			object-fit: cover;
		}
		&__contacts {
			width: 100%;
			height: 480px;
			background: var(--bg);
			padding-top: 48px;
			padding-bottom: 44px;
		}
	}
	.meet {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #ff4e54;
		transform: translate3d(100%, 0.00001px, 0.00001px);
		z-index: 110;
		display: flex;
		align-items: center;
		justify-content: center;
		&__box {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		&__title {
			font-family: 'Circe', sans-serif;
			font-size: 64px;
			line-height: 94px;
			text-align: center;
			color: var(--white);
		}
		&__btn {
			margin-top: 50px;
		}
		&__inner {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: -1;
			overflow: hidden;
		}
		&__bgs {
			padding-top: 20px;
			width: 100%;
			height: auto;
			&-active {
				animation: meet 5s linear infinite;
			}
		}
		&__bg {
			width: 100%;
			height: 90px;
			background: url('./images/meet__bg-1.svg') repeat-x left top;
			opacity: 0.5;
			margin-top: -20px;
			&:nth-child(odd) {
				background: url('./images/meet__bg-1.svg') repeat-x -180px top;
			}
		}
	}
	@media all and(min-width: 760px) {
		.main {
			&__mobile {
				padding-top: 130px;
			}
		}

		.mobile {
			&__main {
				padding-bottom: 222px;
			}
			&__title {
				font-size: 48px;
				line-height: 130%;
			}
			&__subtitle {
				font-size: 18px;
				line-height: 160%;
			}
			&__btn {
				margin: 48px auto 0;
			}
			&__works {
				padding-top: 72px;
				padding-bottom: 72px;
			}
			&__name {
				font-size: 64px;
				line-height: 80px;
			}
			&__slide {
				padding: 40px;
				width: 759px !important;
				height: 487px;
				margin-left: 40px;
			}
			&__contacts {
				height: 600px;
			}
		}
	}
	@media all and(min-width: 1300px) and (max-height: 768px) {
		.main {
			&__section {
				padding-top: 185px;
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
			&__about {
				top: 50%;
			}
		}
		.works {
			padding-bottom: 50px;
			padding-top: 150px;
			&__item {
				height: calc(100vh - 200px);
			}
			&__subtitle {
				margin-top: 20px;
				font-size: 26px;
				line-height: 120%;
				height: 95px;
			}
			&__imge {
				height: calc(100vh - 200px - 120px);
			}
		}
	}
	@media all and(min-width: 540px) {
		.mobile {
			&__title2 {
				font-size: 44px;
				line-height: 130%;
				margin-bottom: 30px;
			}
		}
	}
	@media all and(min-width: 1281px) {
		.main {
			&__mobile {
				display: none;
			}
			&__wrapper {
				display: block;
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
