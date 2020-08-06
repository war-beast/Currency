<template>
	<div class="container-fluid" v-bind:class="{ 'modal-open': isInfoVisible }">
		<div class="row d-flex flex-wrap justify-content-between align-items-center my-4" v-if="isLogged">
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
			<table class="table table-hover" v-if="isLogged">
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
								 v-bind:key="`item__${index}`"
								 v-bind:showDetails="(id) => showDetails(id)" />
				</tbody>
			</table>
			<div v-else>
				Чтобы увидеть данные о курсах валют, надо войти со своей учётной записью.
			</div>
		</div>

		<!-- Modal -->
		<div class="modal fade" v-bind:class="{ show: isInfoVisible }" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLongTitle">Информация о выбранной валюте</h5>
						<button type="button" class="close" aria-label="Close" v-on:click="hideInfoModal">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<div class="container">
							<div class="row my-4 flex-column text-left" v-if="selectedCurrency != null">
								<h4 class="h4">Выбрано:</h4>
								<div>
									<label for="nameCaption" class="col-form-label font-weight-bold">Id:</label>
									<span id="nameCaption">{{selectedCurrency.id}}</span>
								</div>
								<div>
									<label for="nameCaption" class="col-form-label font-weight-bold">Наименование:</label>
									<span id="nameCaption">{{selectedCurrency.name}}</span>
								</div>
								<div>
									<label for="nameCaption" class="col-form-label font-weight-bold">Последнее значение курса (руб. за ед.):</label>
									<span id="nameCaption">{{selectedCurrency.rate}}</span>
								</div>
							</div>
							<div v-if="selectedCurrency != null">
								<h5 class="h5">История курсов</h5>
								<table class="table">
									<thead>
										<tr>
											<th>Дата</th>
											<th>Курс (руб. за ед.)</th>
										</tr>
									</thead>
									<tbody>
										<tr v-for="item in selectedCurrency.dayRates">
											<td>{{item.date}}</td>
											<td>{{item.rate}}</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" v-on:click="hideInfoModal">Закрыть</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" src="./currenciesTable.ts"></script>