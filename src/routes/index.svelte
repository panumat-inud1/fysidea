<script lang="ts">
	import MenuFixed from '$lib/game/frame/menu/MenuFixed.svelte';
	import MenuFixedR from '$lib/game/frame/menu/MenuFixedR.svelte';
	import Game from '$lib/game/Game.svelte';
	//profile
	import Profile from '$lib/game/component/profile/Profile.svelte';
	//coin
	import YutaCoin from '$lib/game/component/coins/YutaCoin.svelte';
	import HaruCoin from '$lib/game/component/coins/HaruCoin.svelte';
	import HoshiCoin from '$lib/game/component/coins/HoshiCoin.svelte';
	//setting
	import Setting from '$lib/game/component/setting/Setting.svelte';
	//saefood
	import Saefood from '$lib/game/component/market/saefood/Saefood.svelte';
	import BtnSaefood from '$lib/game/component/market/saefood/BtnSaefood.svelte';
	//owner
	import BtnOwner from '$lib/game/component/market/owner/BtnOwner.svelte';
</script>

<Game ww={1200} hh={1200}>
	<!-- Conten in Map Game-->
	<div slot="content">
		<MenuFixed x={10} y={20}>
			<div slot="item">
				<BtnOwner />
			</div>
		</MenuFixed>

		<MenuFixed x={28} y={30}>
			<div slot="item">
				<BtnSaefood />
			</div>
		</MenuFixed>
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

		<Saefood />
	</div>
</Game>
