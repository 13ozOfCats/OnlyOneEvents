<template>
	<div
		class="upload__container"
		id="upload__container"
		:class="{'upload__container-active': active}"
		@dragover.prevent="dragover"
		@dragleave.prevent="dragleave"
		@drop.prevent="drop($event)"
	>
		<span class="upload__title">Переместите файлы сюда</span>
		<span class="upload__text">или</span>
		<label class="upload__clickbox" @click="upload($event)">
			<input type="file" class="upload__input" multiple="True" @change="fileInput" />
			<span class="upload__text upload__link">
				Загрузите
				<span class="desktop">{{ '\xa0' }}c компьютера</span>
				<span class="mobile">{{ '\xa0' }}c телефона</span>
			</span>
			<span class="upload__notice">
				Максимальный размер файлов 15 МБ
			</span>
		</label>
		<ul v-if="files !== []">
			<li v-for="(file, index) in files" :key="file">
				{{ file.name }} ({{ file.size }} b)
				<button @click="removeFile(index)">X</button>
			</li>
		</ul>
	</div>
</template>
<script lang="js">
	import Vue from 'vue';

	export default Vue.extend({
		data: function() {
			return {
				files: [],
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
				[...droppedFiles].forEach((f) => {
					this.files.push(f);
				});
			},
			fileInput: function(e) {
				const inputFiles = e.target.files;
				if (!inputFiles) return;
				[...inputFiles].forEach((f) => {
					this.files.push(f);
				});
			},
			removeFile(fileKey) {
				this.files.splice(fileKey, 1);
			},
			upload: function(file) {
				const formData = new FormData();
				formData.append('file', file);
				fetch('https://httpbin.org/post', {
					method: 'POST',
					body: formData,
				})
					.then((res) => res.json())
					.then((res) => {
						console.log('done uploading', res);
					})
					.catch((e) => {
						console.error(JSON.stringify(e.message));
					});
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
