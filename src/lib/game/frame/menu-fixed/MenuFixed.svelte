<script>
	export let x = 0;
	export let y = 0;
</script>

<div
	style="position: fixed;
				top: {y}%;
				left: {x}%;
				width: auto;
				height: auto;"
>
	<slot name="item">
		
	</slot>
</div>
