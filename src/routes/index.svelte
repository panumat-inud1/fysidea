<script lang="ts">
	import Content from '$lib/game/frame/content/Content.svelte';
import Header from '$lib/game/frame/header/Header.svelte';
import MenuImag from '$lib/game/frame/menu-imag/MenuImag.svelte';
	import MenuFixed from '$lib/game/frame/menu/MenuFixed.svelte';
	import Game from '$lib/game/Game.svelte';
</script>


<Game>
	<div slot="content">
		<Content
			x={7}
			y={5}
			z
			width={10}
			height={15}
			color
			url={'https://img.pikbest.com/png-images/20190919/national-day-red-cartoon-car-travel-dynamic-gif-element_2676556.png!c1024wm0'}
		/>
	</div>

	<div slot="menu-custom">
		<MenuFixed x={0} y={50}>
			<div slot="item">
				<div class="progress" />
			</div>
		</MenuFixed>
	</div>

	<div slot="menu-image">
		<MenuImag x={10} y={90} height={10} width={10} url={'https://img.pikbest.com/png-images/20190919/national-day-red-cartoon-car-travel-dynamic-gif-element_2676556.png!c1024wm0'} />
	</div>

</Game>

<style>
	.progress {
		height: 30px;
		width: 100px;
		background-color: rgb(238, 17, 5);
	}
</style>
