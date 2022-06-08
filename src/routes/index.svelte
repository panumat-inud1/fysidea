<script lang="ts">
	import Content from '$lib/game/frame/content/Content.svelte';
	import MenuFixed from '$lib/game/frame/menu-fixed/MenuFixed.svelte';
	import Game from '$lib/game/Game.svelte';
</script>

<Game>
	<div slot="content">
		<Content
			x={10}
			y={10}
			z
			width={50}
			height={50}
			color={'green'}
			url={'https://img.pikbest.com/png-images/20190919/national-day-red-cartoon-car-travel-dynamic-gif-element_2676556.png!c1024wm0'}
		/>
	</div>
	<div slot="menu-fixed">
		<MenuFixed x={0} y={95}>
			<div slot="item">
                <div class="progress" />
            </div>
            
		</MenuFixed>
	</div>
</Game>

<style>
	.progress {
        height: 10px;
        width: 10px;
        background-color: aqua;
	}
</style>
