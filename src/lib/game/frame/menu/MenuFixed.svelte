<script lang="ts">
	export let x = 0;
	export let y = 0;

	//let rootElement: any;
	//$: rootElement && rootElement.style.setProperty('--position-left', xx + '%');
	/*
	$: xx = x;
	$: yy = 0;
	$: innerHeight = 0;
	$: innerWidth = 0;
	$: outerHeight = 0;
	$: outerWidth = 0;
	*/
</script>

<div
	class="position"
	style="	position: fixed;
				top: {y}%;
				left:{x}%;
				width: auto;
				height: auto;"
>
	<slot name="item" />
</div>

<style>
	/*:root {
		--position-left: inherit;
	}
	.position {
		left: var(--position-left);
	}*/
</style>
