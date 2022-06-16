<script lang="ts">
	import Machine from './tab/Machine.svelte';
	import { writable } from 'svelte/store';
	export let items = [];
	export let activeTabValue = 1;

	const handleClick = (tabValue) => () => (activeTabValue = tabValue);
	// import icon
	import { mdiCloseThick, mdiAccountCash } from '@mdi/js';
	import IconButton, { Icon } from '@smui/icon-button';
	import { Svg } from '@smui/common/elements';

	// store woner
	import { Modal, subModal, Tab } from './owner';
	import Tab2 from './tab/Tab2.svelte';
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
		top: 12%;
		left: 1%;

		height: 87%;
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
		height: 10%;
		width: 14%;

		border-radius: 12px;
		background-color: #6eb061;
		box-shadow: 0px 2px 0px 1px rgba(0, 0, 0, 0.4);

		cursor: pointer;
	}
	.btn-frame-out {
		position: absolute;

		width: 99%;
		height: 99%;
		border-radius: 12px;
		border: 1px solid #c0e1bd;
	}

	.btn-tab-top {
		position: absolute;
		top: 1%;
		left: 1%;

		width: 98%;
		height: 6%;
		border-radius: 6px;
		background-color: rgba(255, 255, 255, 0.364);
	}
	.btn-tab:active {
		height: 9%;
		width: 13%;
	}
	.btn-tab-top {
		position: absolute;
		top: 2%;
		left: 2%;

		width: 96%;
		height: 50%;
		border-radius: 12px;
		background-color: rgba(255, 255, 255, 0.487);
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
