<template>
	<section class="aboutMobile__main">
		<div class="container">
			<div class="aboutMobile__title">Мы one only events</div>
			<div class="aboutMobile__items">
				<div class="aboutMobile__item">
					<div class="aboutMobile__left">
						<img src="../images/about_main-1-small.svg" alt="" />
					</div>
					<div class="aboutMobile__right">
						<div class="aboutMobile__subtitle">
							C 2015 года создающая яркие зрелищные проекты в сфере event - маркетинга.
						</div>
						<div class="aboutMobile__text">
							Все сотрудники имеют общирный предопыт работы в индустрии,в ведущих коммуникационных агентствах Москвы и
							Петербурга.
						</div>
					</div>
				</div>
				<div class="aboutMobile__item">
					<div class="aboutMobile__left">
						<img src="../images/about_main-2-small.svg" alt="" />
					</div>
					<div class="aboutMobile__right">
						<div class="aboutMobile__subtitle">
							Цель каждого нашего проекта - создать особый новый опыт, позволяющий усилить связь с брендом.
						</div>
						<div class="aboutMobile__text">
							Мы проживаем проект глазами участника. Используем нестандартные решения для формирования уникального
							характера каждого события. Каждый проект является по-настоящему интересным творческим продуктом,
							приносящим целевой результат.
						</div>
					</div>
				</div>
				<div class="aboutMobile__item">
					<div class="aboutMobile__left">
						<img src="../images/about_main-3-small.svg" alt="" />
					</div>
					<div class="aboutMobile__right">
						<div class="aboutMobile__subtitle">Мы любим мероприятия.</div>
						<div class="aboutMobile__text">
							Деловые, музыкальные, спортивные, развлекательные. Мы посещаем их сами и интересуемся всем, что происходит
							в этой сфере, ежедневно обновляя представления о возможном.
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script lang="js"></script>
<style scoped lang="scss">
	.aboutMobile {
		&__main {
			padding-top: 84px;
		}
		&__items {
			width: 100%;
			display: flex;
			flex-direction: column;
		}
		&__item {
			margin-top: 20px;
			width: 100%;
			display: flex;
			align-items: center;
		}
		&__subtitle {
			font-size: 10px;
			line-height: 100%;
			color: #363636;
		}
		&__text {
			margin-top: 10px;
			font-family: 'Circe', sans-serif;
			font-weight: 300;
			font-size: 10px;
			line-height: 120%;
			color: #363636;
		}
		&__left {
			flex-basis: 170px;
			min-width: 170px;
			margin-left: -10px;
		}
		&__right {
			flex-basis: auto;
		}
	}
	@media all and(min-width: 540px) {
		.aboutMobile {
			&__title {
				font-size: 64px;
				line-height: 130%;
			}
			&__text {
				font-size: 24px;
			}
			&__subtitle {
				font-size: 28px;
			}
		}
	}
	@media all and(min-width: 1281px) {
		.aboutMobile {
			&__main {
				display: none;
			}
		}
	}
</style>
