<template>
	<div class="container-fluid">
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