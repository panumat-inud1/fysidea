<script lang="ts">
	import { Modal, subModal, Tab } from './owner';

	// import icon
	import { mdiCloseThick, mdiAccountCash } from '@mdi/js';
	import IconButton, { Icon } from '@smui/icon-button';
	import { Svg } from '@smui/common/elements';
	// import animation
	let open = true;
	import { slide, fade } from 'svelte/transition';

	// List of tab items with labels, values and assigned components
	import Tabs from './Tabs.svelte';

	// Menu
	let menu = 'Owners';
</script>

{#if $Modal}
	<div class="bg-shadown-owners" transition:fade={{ delay: 50, duration: 200 }}>
		<div class="modal">
			<div class="frame-out-modal">
				<div class="frame-top-modal" />
				<div class="menu-modal"><span>{menu}</span></div>
				<!--Botton Clode-->
				<div class="close-modal" on:click={Modal.coles}>
					<div class="close-top-modal" />
					<Icon component={Svg} viewBox="0 0 24 24">
						<path fill="currentColor" d={mdiCloseThick} />
					</Icon>
				</div>
				<div class="content">
					<Tabs />
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	/*Background modal*/
	.bg-shadown-owners {
		position: absolute;
		height: 100%;
		width: 100%;

		background-color: rgba(0, 0, 0, 0.303);
		z-index: 3;
	}
	/* Modal */
	.modal {
		position: absolute;
		top: 1%;
		left: 1%;
		width: 98%;
		height: 98%;
		border-radius: 12px;
		border: 1px solid rgba(10, 10, 10, 0.785);
		background-image: linear-gradient(0deg, rgba(70, 70, 70, 1) 39%, rgba(107, 107, 107, 1) 100%);
		box-shadow: 0px 2px 0px 1px rgba(0, 0, 0, 0.4);
		z-index: 3;
	}
	.frame-out-modal {
		position: absolute;

		width: 99.7%;
		height: 99.7%;
		border-radius: 12px;
		border: 1px solid #a0a0a0;
	}
	/*.frame-top-modal {
		position: absolute;
		top: 1%;
		left: 1%;

		width: 98%;
		height: 6%;
		border-radius: 12px;
		background-color: rgba(255, 255, 255, 0.364);
	} */
	/* Clode botton*/
	.close-modal {
		position: absolute;
		top: 1%;
		right: 1%;

		height: 36px;
		width: 36px;

		border-radius: 6px;
		background-color: red;
		box-shadow: 0px 2px 0px 1px rgba(0, 0, 0, 0.4);
		z-index: 2;
		cursor: pointer;
	}
	.close-modal:active {
		height: 34px;
		width: 34px;
	}
	.close-top-modal {
		position: absolute;
		top: 2%;
		left: 2%;

		width: 96%;
		height: 50%;
		border-radius: 6px;
		background-color: rgba(255, 255, 255, 0.487);
	}
	/* Menu Modal*/
	.menu-modal {
		position: absolute;
		top: 1%;

		width: 100%;
		text-align: center;
	}
	/* fonte */
	span {
		font-size: 100%;
		text-shadow: 1px 1px 0px rgba(10, 10, 10, 1);
	}
	.content {
		position: absolute;
		top: 5%;
		left: 0.5%;

		width: 99%;
		height: 95%;
	}
</style>
