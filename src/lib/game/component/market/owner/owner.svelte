<script lang="ts">
	import { oModal, osubModal } from './Owner';
	// import icon
	import { mdiHomeCircleOutline, mdiCloseThick } from '@mdi/js';
	import IconButton, { Icon } from '@smui/icon-button';
	import { Svg } from '@smui/common/elements';
	// import animation
	let open = true;
	import { slide, fade } from 'svelte/transition';

	// Menu
	let menu = 'Owner';
</script>

{#if $oModal}
	<div class="background-shadown" transition:fade={{ delay: 50, duration: 200 }}>
		<div class="modal">
			<div class="frame-out-modal">
				<div class="frame-top-modal" />
				<div class="menu-modal"><span>{menu}</span></div>
				<!--Botton Clode-->
				<div class="close-modal" on:click={oModal.coles}>
					<div class="close-top-modal" />
					<Icon component={Svg} viewBox="0 0 24 24">
						<path fill="currentColor" d={mdiCloseThick} />
					</Icon>
				</div>
				<div class="content">
					Content Test
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	/*Background modal*/
	.background-shadown {
		position: absolute;
		height: 100%;
		width: 100%;

		background-color: rgba(0, 0, 0, 0.303);
		z-index: 3;
	}
	/* Modal */
	.modal {
		position: absolute;
		top: 5%;
		left: 5%;
		width: 90%;
		height: 90%;
		border-radius: 12px;
		border: 1px solid rgba(10, 10, 10, 0.785);
		background-color: #6b6b6b;
		box-shadow: 0px 2px 0px 1px rgba(0, 0, 0, 0.4);
		z-index: 3;
	}

	.frame-out-modal {
		position: absolute;

		width: 99.3%;
		height: 99.3%;
		border-radius: 12px;
		border: 1px solid #a0a0a0;
	}
	.frame-top-modal {
		position: absolute;
		top: 1%;
		left: 1%;

		width: 98%;
		height: 6%;
		border-radius: 12px;
		background-color: rgba(255, 255, 255, 0.364);
	}
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
		top: 3%;
		left: 0%;

		width: 100%;
		text-align: center;
	}
	span {
		text-shadow: 1px 1px 0px rgba(10, 10, 10, 1);
	}
</style>
