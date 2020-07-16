<template>
	<div class="container-fluid">
		<div class="row d-flex flex-wrap justify-content-between align-items-center my-4">
			<div>
				Всего: {{totalCount}} записей
			</div>
			<div>
				<button role="button" v-on:click="showPrevious" v-if="page > 1" class="btn btn-primary">Назад</button>
				Страница: {{page}} из {{pageCount}}
				<button role="button" v-on:click="showNext" v-if="page < pageCount" class="btn btn-primary">Вперёд</button>
			</div>
		</div>
		<div class="table-responsive">
			<table class="table table-hover">
				<thead>
					<tr>
						<th>Id</th>
						<th>Наименование</th>
						<th>Курс</th>
					</tr>
				</thead>
				<tbody>
					<currencyRow v-for="(item, index) in currencies"
									 v-bind:currency="item"
									 v-bind:key="`item__${index}`"/>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script lang="ts" src="./currenciesTable.ts"></script>