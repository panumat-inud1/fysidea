<script lang="ts">
	import MenuFixed from '$lib/game/frame/menu/MenuFixed.svelte';
	import Game from '$lib/game/Game.svelte';

	import Profile from '$lib/game/component/profile/Profile.svelte';
	import YutaCoin from '$lib/game/component/coins/YutaCoin.svelte';
	import HaruCoin from '$lib/game/component/coins/HaruCoin.svelte';
	import HoshiCoin from '$lib/game/component/coins/HoshiCoin.svelte';
	import Setting from '$lib/game/component/setting/Setting.svelte';
	import MenuFixedR from '$lib/game/frame/menu/MenuFixedR.svelte';
</script>

<Game ww={1200} hh={1200}>
	<!-- Conten in Map Game-->
	<div slot="content">
		<!-- 	{#each images as image}
			<Content
				x={image.x}
				y={image.y}
				z
				width={image.width}
				height={image.height}
				color
				url={image.src}
			/>
		{/each}
	-->
	</div>
	<!-- Menu Game -->
	<div slot="menu-custom">
		<!-- Profile-->
		<MenuFixed x={2} y={2}>
			<div slot="item">
				<Profile />
			</div>
		</MenuFixed>

		<!-- Coins -->
		<MenuFixedR xr={2} y={2}>
			<div slot="item">
				<YutaCoin />
			</div>
		</MenuFixedR>
		<MenuFixedR xr={2} y={8}>
			<div slot="item">
				<HaruCoin />
			</div>
		</MenuFixedR>

		<MenuFixedR xr={2} y={14}>
			<div slot="item">
				<HoshiCoin />
			</div>
		</MenuFixedR>

		<Setting />
		
	</div>

	
</Game>

