<script lang="ts">
	//export let items = [];
	//export let activeTabValue = 1;
	import Machine from './tab/Machine.svelte';
	import Store from './tab/Store.svelte';
	import Freezer from './tab/Freezer.svelte';
	import Stockpile from './tab/Stockpile.svelte';
	import Vegetable from './tab/Vegetable.svelte';

	// import icon
	import { mdiCloseThick, mdiAccountCash } from '@mdi/js';
	import IconButton, { Icon } from '@smui/icon-button';
	import { Svg } from '@smui/common/elements';

	// store woner
	import { Tab } from './owner';
	//Data json
	let items = [
		{ label: 'Store', value: 1, component: Store, x: 5, y: 7, t: Tab.tab1 },
		{ label: 'Machine', value: 2, component: Machine, x: 24, y: 7, t: Tab.tab2 },
		{ label: 'Freezer', value: 3, component: Freezer, x: 43, y: 7, t: Tab.tab3 },
		{ label: 'Stockpile', value: 4, component: Stockpile, x: 62, y: 7, t: Tab.tab4 },
		{ label: 'Vegetable', value: 5, component: Vegetable, x: 81, y: 7, t: Tab.tab5 }
	];
</script>

{#each items as item}
	<div class="btn-tab" on:click={item.t} style="position: absolute;top: {item.y}%;left: {item.x}%;">
		<div class="btn-tab-top" />
		<div class="btn-frame-out">
			<span>{item.label}</span>
		</div>
	</div>
{/each}

{#each items as item}
	{#if $Tab == item.value}
		<div class="box">
			<div class="frame-out">
				<svelte:component this={item.component} />
			</div>
		</div>
	{/if}
{/each}

<style>
	/* box tab */
	.box {
		position: absolute;
		top: 15%;
		left: 1%;

		height: 84%;
		width: 98%;

		border-radius: 6px;
		background-color: rgb(224, 220, 220);
		box-shadow: 0px 2px 0px 1px rgba(0, 0, 0, 0.4);
		z-index: 3;
	}
	.frame-out {
		position: absolute;

		width: 99.7%;
		height: 99.7%;
		border-radius: 6px;
		border: 1px solid #a0a0a0;
	}

	/* botton tab*/
	.btn-tab {
		height: 7%;
		width: 14%;
		border-radius: 6px;
		background-color: #6eb061;
		box-shadow: 0px 2px 0px 1px rgba(0, 0, 0, 0.4);

		cursor: pointer;
	}
	.btn-frame-out {
		position: absolute;
		top: 0%;
		left: 0%;

		width: 96.7%;
		height: 96%;
		border-radius: 6px;
		border: 0.5px solid #c0e1bd;
	}
	.btn-tab:active {
		height: 6%;
		width: 13%;
	}
	.btn-tab-top {
		position: absolute;
		top: 2%;
		left: 2%;

		width: 95%;
		height: 50%;
		border-radius: 6px;
		background-color: rgba(255, 255, 255, 0.427);
	}

	span {
		position: absolute;
		bottom: 40%;
		width: 100%;
		font-size: 60%;
		display: block;
		text-align: center;
		text-shadow: 1px 1px 0px rgba(10, 10, 10, 1);
	}
</style>
