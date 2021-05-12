<template>
	<div
		class="upload__container"
		id="upload__container"
		:class="{'upload__container-active': active}"
		@dragover.prevent="dragover"
		@dragleave.prevent="dragleave"
		@drop.prevent="drop($event)"
	>
		<span class="upload__title" id="upload__top">Переместите файлы сюда</span>
		<span class="upload__text" id="upload__mid">или</span>
		<label class="upload__clickbox" id="upload__bot">
			<input type="file" class="upload__input" @change="fileInput" />
			<span class="upload__text upload__link">
				Загрузите
				<span class="desktop">{{ '\xa0' }}c компьютера</span>
				<span class="mobile">{{ '\xa0' }}c телефона</span>
			</span>
			<span class="upload__notice">
				Максимальный размер файлов 15 МБ
			</span>
		</label>
		<!--
		<ul v-if="files !== []">
			<li v-for="(file, index) in files" :key="file">
				{{ file.name }} ({{ file.size }} b)
				<button @click="removeFile(index)">X</button>
			</li>
		</ul>
		-->
	</div>
</template>
<script lang="js">
	import Vue from 'vue';
	import $ from 'jquery';

	export default Vue.extend({
		data: function() {
			return {
				file: '',
				active: false,
			};
		},
		methods: {
			dragover: function() {
				if (!this.active) {
					this.active = true;
				}
			},
			dragleave: function() {
				this.active = false;
			},
			drop: function(e){
				this.active = false;
				const droppedFiles = e.dataTransfer.files;
				if (!droppedFiles) return;
				//[...droppedFiles].forEach((f) => {
				//	this.files.push(f);
				//});
				this.upload(droppedFiles[0]);
			},
			fileInput: function(e) {
				const inputFiles = e.target.files;
				if (!inputFiles) return;
				//[...inputFiles].forEach((f) => {
				//	this.files.push(f);
				//});
				this.upload(inputFiles[0]);
			},
			removeFile(fileKey) {
				this.files.splice(fileKey, 1);
			},
			upload: function(file) {
				const xhr = new XMLHttpRequest();
				const formdata = new FormData();
				formdata.append("file", file);
				//console.log(file['size']);
				if(file['size'] > 15728640){
					alert('Превышен максимальный размер файла');
					return false;
				}

				// обработчик для отправки
				xhr.upload.addEventListener("progress", function(e){
					$('#upload__top').text('Файл загружается');
					const percent = 125 - (e.loaded / e.total * 125);
					$('#upload__mid').html(
						'<svg width="42" height="42" viewBox="0 0 42 42" fill="none">' +
							'<circle cx="21" cy="21" r="20" stroke="#FFFFFF"/>' +
							'<circle cx="21" cy="21" r="20" transform="rotate(-90 21 21)" stroke="#EE3D43" stroke-width="1.5" stroke-dasharray="125" stroke-dashoffset="'+ percent +'"/>' +
							'</svg>'
					);
					$('#upload__bot').hide();
				});
				xhr.addEventListener("load", function(){
					$('#upload__top').text('Файл успешно загружен');
					$('#upload__mid').html(
						'<svg width="42" height="42" viewBox="0 0 42 42" fill="none">' +
							'<circle cx="21" cy="21" r="20" stroke="#FEFEFD"/>' +
							'<path d="M13 19.1538L19 29L29 13" stroke="white" stroke-linecap="round"/>' +
							'</svg>'
					);
					$('#upload__bot').hide();
				});
				xhr.addEventListener("error", function(){
					$('#upload__top').text('Не удалось загрузить файл');
					$('#upload__mid').html(
						'<svg width="42" height="42" viewBox="0 0 42 42" fill="none">' +
							'<circle cx="21" cy="21" r="20" stroke="#FEFEFD"/>' +
							'<line x1="13.7071" y1="13" x2="29" y2="28.2929" stroke="#EE3D43" stroke-linecap="round"/>' +
							'<line x1="13" y1="28.2929" x2="28.2929" y2="13" stroke="#EE3D43" stroke-linecap="round"/>' +
							'</svg>');
					$('.upload__link').text('Попробуйте повторить загрузку');
					console.log("error " + this.status);
				});
				xhr.addEventListener("abort", function(){
					console.log("abort");
				});
				xhr.open("POST", "./php/upload.php", );
				xhr.send(formdata);
				xhr.onreadystatechange = () => {
					if (xhr.readyState == XMLHttpRequest.DONE) {
						this.file = xhr.responseText;
						this.$eventBus.$emit('dropfile', this.file);
					}
				}
			},
		},
	});
</script>
<style lang="scss">
	.upload {
		&__container {
			position: relative;
			margin-top: 20px;
			width: 100%;
			height: 156px;
			border: 1px dashed rgba(255, 255, 255, 0.14);
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
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
			font-size: 16px;
			line-height: 188%;
			color: #ffffff;
		}
		&__clickbox {
			text-align: center;
			display: flex;
			flex-direction: column;
		}
		&__notice {
			color: var(--white);
			font-family: 'Circe', sans-serif;
			font-style: normal;
			font-weight: 300;
			font-size: 14px;
			line-height: 188%;
			text-align: center;
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
		.upload {
			&__container {
				height: 230px;
				margin: 0 auto;
			}
		}
	}
	@media all and(min-width: 1281px) {
		.upload {
			&__container {
				margin-top: 0;
				padding: 30px 0;
				height: 300px;
			}
			&__title {
				font-size: 36px;
			}
			&__text {
				text-align: center;
				font-size: 24px;
				color: #ffffff;
			}
		}
	}
</style>
