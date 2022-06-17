<script lang="ts">
	import { mdOwner, smdOwner } from './owner';

	// import icon
	import { mdiHomeCircleOutline, mdiAccountCash } from '@mdi/js';
	import IconButton, { Icon } from '@smui/icon-button';
	import { Svg } from '@smui/common/elements';
</script>

<div class="btn-owner" on:click={mdOwner.open}>
	<div class="out-frame">
		<div class="in-frame">
			<Icon component={Svg} viewBox="0 0 24 24">
				<path fill="currentColor" d={mdiHomeCircleOutline} />
			</Icon>
		</div>
	</div>
</div>

<style>
	.btn-owner {
		position: absolute;
		right: 10%;
		bottom: 10%;

		height: 36px;
		width: 36px;

		z-index: 2;
		cursor: pointer;
	}
	.out-frame {
		position: absolute;
		left: 0px;

		height: 100%;
		width: 100%;
		border-radius: 12px;
		border: 1px solid white;
		box-shadow: 0px 2px 0px 1px rgba(0, 0, 0, 0.4);
	}
	.in-frame {
		position: absolute;
		width: 96%;
		height: 96%;

		background-color: rgba(249, 83, 12, 0.849);
		border-radius: 12px;
		border: 1px solid rgba(201, 57, 4, 0.498);
		text-align: center;
	}

	.btn-owner:active {
		height: 34px;
		width: 34px;
	}
</style>
