<script>
	export let x = 0;
	export let y = 0;
	export let height = 0;
	export let width = 0;
	export let url = '';
	export let color;
	export let z;
</script>

<img
	src={url}
	style="position: absolute; left: {x}%; top:{y}%;background:{color} ;z-index: {z}; width:{width}%;height:{height}%;"
/>
