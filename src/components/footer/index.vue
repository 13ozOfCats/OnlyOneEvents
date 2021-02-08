<template>
	<span></span>
	<!--
	<footer class="footer" id="footer">
		<div class="container">
			<form action="php/sender.php" method="POST" id="footer__form">
				<div class="footer__slide" data-footer="1">
					<div class="footer__text">Обсудить проект</div>
					<div class="footer__flex">
						<div class="footer__left">
							<label class="footer__label">
								<input
									type="text"
									name="name"
									placeholder="Имя"
									class="footer__input"
									id="footer__name"
									@input="name = $event.target.value"
									:value="name"
								/>
							</label>
							<label class="footer__label">
								<input
									type="email"
									name="email"
									placeholder="E-mail"
									class="footer__input"
									id="footer__email"
									@input="email = $event.target.value"
									:value="email"
								/>
							</label>
						</div>
						<div class="footer__right">
							<div class="footer__btn footer__control" id="step-1">
								<span>Далее</span>
							</div>
						</div>
					</div>
				</div>
				<div class="footer__slide" data-footer="2" style="display: none">
					<span class="btn footer__control" data-control="prev">
						<svg width="56" height="65" viewBox="0 0 56 65" fill="none" class="btn__svg">
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
						<svg width="40" height="46" viewBox="0 0 40 46" fill="none" class="btn__mobile">
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
						<span class="btn__text"> Назад </span>
					</span>
					<div class="footer__flex">
						<div class="footer__left">
							<label class="footer__label">
								<input
									type="tel"
									name="phone"
									placeholder="Телефон"
									class="footer__input"
									id="footer__phone"
									@input="phone = $event.target.value"
									:value="phone"
								/>
							</label>
							<label class="footer__label">
								<input
									type="text"
									name="theme"
									placeholder="Тема обращения"
									class="footer__input"
									id="footer__theme"
									@input="theme = $event.target.value"
									:value="theme"
								/>
							</label>
							<ul class="footer__ul">
								<li class="footer__li">
									<span class="footer__theme">Предложить бриф</span>
								</li>
								<li class="footer__li">
									<span class="footer__theme">Запросить портфолио</span>
								</li>
								<li class="footer__li">
									<span class="footer__theme">Предложить свои услуги</span>
								</li>
								<li class="footer__li">
									<span class="footer__theme">Устроиться на работу</span>
								</li>
							</ul>
						</div>
						<div class="footer__right">
							<div class="footer__btn footer__control" id="step-2">
								<span>Далее</span>
							</div>
						</div>
					</div>
				</div>
				<div class="footer__slide" data-footer="3" style="display: none">
					<span class="btn footer__control" data-control="prev">
						<svg width="56" height="65" viewBox="0 0 56 65" fill="none" class="btn__svg">
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
						<svg width="40" height="46" viewBox="0 0 40 46" fill="none" class="btn__mobile">
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
						<span class="btn__text"> Назад </span>
					</span>
					<div class="footer__flex">
						<div class="footer__left">
							<label class="footer__label">
								<textarea
									name="message"
									id=""
									cols="30"
									rows="10"
									class="footer__textarea"
									placeholder="Сообщение"
									@input="textarea = $event.target.value"
									:value="textarea"
								></textarea>
							</label>
						</div>
						<div class="footer__right">
							<div class="footer__btn footer__control">
								<span>Далее</span>
							</div>
						</div>
					</div>
				</div>
				<div class="footer__slide" data-footer="4" style="display: none">
					<span class="btn footer__control" data-control="prev">
						<svg width="56" height="65" viewBox="0 0 56 65" fill="none" class="btn__svg">
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
						<svg width="40" height="46" viewBox="0 0 40 46" fill="none" class="btn__mobile">
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
						<span class="btn__text"> Назад </span>
					</span>
					<div class="footer__flex">
						<div class="footer__left">
							<div class="upload__container" id="upload__container">
								<span class="upload__title" id="upload__top">Переместите файлы сюда</span>
								<span class="upload__text" id="upload__mid">или</span>
								<label class="upload__label" id="upload__bot">
									<input type="file" class="upload__input" id="upload__input" />
									<input type="text" name="file" hidden id="upload__filePath" />
									<span class="upload__text upload__link">
										Загрузите
										<span class="desktop"> c компьютера</span>
										<span class="mobile"> c телефона</span>
									</span>
								</label>
							</div>
						</div>
						<div class="footer__right">
							<div class="footer__btn footer__control">
								<span>Отправить</span>
							</div>
						</div>
					</div>
				</div>
				<div class="footer__slide" data-footer="5" style="display: none">
					<a href="index.html" class="btn">
						<svg width="56" height="65" viewBox="0 0 56 65" fill="none" class="btn__svg">
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
							/>
						</svg>
						<span class="btn__text"> На главную </span>
					</a>
					<div class="footer__complete">
						<h3 class="footer__title">Сообщение отправлено</h3>
						<span class="footer__done"> Наверх </span>
					</div>
				</div>
			</form>
		</div>
	</footer>
	-->
</template>
<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
		data: function() {
			return {
				name: '',
				email: '',
				phone: '',
				theme: '',
				file: '',
			};
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
		height: 100%;
		&-active {
			padding-top: 30px;
		}
		&-main {
			transform: translate3d(0.00001px, 0.00001px, 0.00001px);
			background: #141414;
			padding-bottom: 50px;
			padding-top: 50px;
			position: fixed;
			z-index: 200;
			width: 100%;
			top: 0;
			left: 0;
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
				width: min(400px, 100%);
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
	}
	.upload {
		&__container {
			position: relative;
			margin-top: 20px;
			width: 100%;
			height: 156px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			border: 1px dashed rgba(255, 255, 255, 0.14);
			&-active {
				background: rgba(255, 255, 255, 0.1);
			}
		}
		&__title {
			text-align: center;
			font-size: 20px;
			line-height: 114.2%;
			color: #ffffff;
		}
		&__text {
			text-align: center;
			margin-top: 5px;
			font-size: 16px;
			line-height: 188%;
			color: #ffffff;
		}
		&__label {
			position: relative;
			&:after {
				color: var(--white);
				top: 100%;
				left: 0;
				width: 100%;
				font-family: 'Circe', sans-serif;
				font-style: normal;
				font-weight: 300;
				font-size: 14px;
				line-height: 188%;
				position: absolute;
				text-align: center;
				content: 'Максимальный размер файла 15 МБ';
			}
		}
		&__link {
			display: flex;
			cursor: pointer;
			position: relative;
			&:after {
				content: '';
				position: absolute;
				left: 0;
				bottom: 0;
				width: 100%;
				height: 1px;
				background: #ffffff;
			}
		}
		&__input {
			display: none;
		}
	}
	@media all and(min-width: 968px) {
		.footer {
			padding-top: 70px;
			padding-bottom: 80px;
			&-active {
				padding-top: 70px;
			}
			&_main {
				padding-top: 70px;
				padding-bottom: 80px;
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

		.upload {
			&__container {
				height: 230px;
				margin: 0 auto;
			}
		}
	}

	@media all and(min-width: 1281px) {
		.footer {
			padding-top: 95px;
			padding-bottom: 180px;
			height: fit-content;
			&-active {
				padding-top: 95px;
				height: 100vh;
			}
			&-main {
				height: 100vh;
				padding-top: 80px;
				padding-bottom: 85px;
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
				font-size: 64px;
				line-height: 115%;
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

		.upload {
			&__container {
				margin-top: 0;
				height: 300px;
			}
			&__title {
				font-size: 36px;
			}
			&__text {
				text-align: center;
				margin-top: 30px;
				font-size: 24px;
				color: #ffffff;
			}
		}
	}
</style>
