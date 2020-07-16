<template>
	<tr v-on:click="showDetails(currency.id)">
		<td>{{currency.id}}</td>
		<td>{{currency.name}}</td>
		<td>{{currency.rate}}</td>
	</tr>
</template>

<script lang="ts" src="./currenciesTableRow.ts"></script>