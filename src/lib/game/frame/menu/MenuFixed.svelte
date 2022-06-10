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
	style="position: absolute;
				top: {y}%;
				left:{x}%;
				width: auto;
				height: auto;z-index: 2;"
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
	@media (max-width: 834px) {
		
	}
</style>
