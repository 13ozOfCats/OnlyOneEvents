<template>
	<section class="aboutMobile__services">
		<div class="container">
			<div class="aboutMobile__title">Наши услуги</div>
			<div class="aboutMobile__descr">
				Мы предлагаем решения, которые будут актуальны не только сегодня, с трепетом относимся к вещам, которые создаем,
				находим вдохновение во вне. В фокусе агентства:
			</div>
			<div class="aboutMobile__service">
				<div class="aboutMobile__name">Event Marketing</div>
				<div class="aboutMobile__bot aboutMobile__bot-red">
					<p class="aboutMobile__p">
						Креативная разработка и реализация имиджевых маркетинговых событий: launch-мероприятий, автомобильных
						презентаций, организация конференций, mice-выездов, спонсорских интеграций в фестивальные события. Офлайн и
						онлайн форматы мероприятий.
					</p>
				</div>
			</div>
			<div class="aboutMobile__service">
				<div class="aboutMobile__name">Décor Production</div>
				<div class="aboutMobile__bot aboutMobile__bot-shit">
					<p class="aboutMobile__p">
						Разработка и производство декораций для мероприятий, выставочных стендов, спонсорских зон, презентационного
						и торгового оборудования.
					</p>
					<p class="aboutMobile__p">
						Внедрение современных и креативных решений, учитывающих уникальные особенности бренда, для достижения
						WOM-эффекта.
					</p>
				</div>
			</div>
			<div class="aboutMobile__service">
				<div class="aboutMobile__name">Сreative & Design</div>
				<div class="aboutMobile__bot aboutMobile__bot-blue">
					<p class="aboutMobile__p">
						Разработка креативных концепций, сценариев, идей для мероприятий и инсталляций, режиссура проектов.
					</p>
					<p class="aboutMobile__p">
						Дизайн для мероприятий: создание айдентики, 3D-дизайн объектов, верстка макетов полиграфии и сувенирной
						продукции. Проектирование декораций и инсталляций.
					</p>
				</div>
			</div>
		</div>
	</section>
</template>
<script lang="js"></script>
<style scoped lang="scss">
	.aboutMobile {
		&__service {
			width: 100%;
			display: flex;
			flex-direction: column;
			& + & {
				padding-top: 20px;
			}
		}
		&__descr {
			margin-top: 15px;
			margin-bottom: 15px;
			font-size: 14px;
			line-height: 140%;
			color: #363636;
		}
		&__name {
			font-weight: bold;
			font-size: 20px;
			line-height: 140%;
			color: #363636;
		}
		&__bot {
			margin-left: -15px;
			margin-right: -15px;
			padding: 15px;
			font-size: 13px;
			line-height: 140%;
			color: #ffffff;
			&-red {
				background: url('../images/about_main-bg-red.png') center center / cover;
			}
			&-shit {
				background: url('../images/about_main-bg-shit.png') center center / cover;
			}
			&-blue {
				background: url('../images/about_main-bg-blue.png') center center / cover;
			}
		}
		&__p {
			& + & {
				margin-top: 10px;
			}
		}
	}
	@media all and(min-width: 968px) {
		.aboutMobile {
			&__services {
				display: none;
			}
		}
	}
</style>
