<script lang="ts">
	let rootElement: any;
	$: rootElement && rootElement.style.setProperty('--viewport-height', innerHeight + 'px');

	$: rootElement && rootElement.style.setProperty('--game-top', (100 - (hMap / h) * 100) / 2 + '%');
	$: rootElement &&
		rootElement.style.setProperty('--game-left', (100 - (wMap / w) * 100) / 2 + '%');

	$: wMap = 1024;
	$: hMap = 1024;
	$: w = 0;
	$: h = 0;
	$: innerHeight = 0;
	$: innerWidth = 0;
	$: outerHeight = 0;
	$: outerWidth = 0;
</script>

<svelte:window bind:innerWidth bind:outerWidth bind:innerHeight bind:outerHeight />

<main>
	<!-- Screen Game ขนาดของหน้าจอเกมส์-->
	<div
		id="viewport"
		name="viewport"
		class="viewport"
		bind:clientWidth={w}
		bind:clientHeight={h}
		bind:this={rootElement}
	>
		<!-- Content-IN-MAP-GAME -->

		<div
			id="map-game"
			name="map-game"
			class="map-game"
			bind:clientWidth={wMap}
			bind:clientHeight={hMap}
		>
			<slot name="content">
				<!-- Component Content/content -->
			</slot>
		</div>

		<!-- MENU GAME -->
		<slot name="menu-fixed">
			<!-- Component Menu-fixed ใช้สำหรับเมนูที่สร้างเอง -->
		</slot>
		<!-- MENU GAME IMAGE -->
		<slot name="menu-image">
			<!-- Component Menu-fixed-image ใช้สำหรับใส่เมนูที่เป้นรูปภาพ -->
		</slot>
	</div>
</main>

<style>
	:root {
		--viewport-height: inherit;
		--game-top: inherit;
		--game-left: inherit;
	}

	.viewport {
		position: relative;
		max-width: 834px;
		min-height: var(--viewport-height);
		max-height: var(--viewport-height);
		margin: 0 auto;
		overflow: auto;

		background-color: orange;
	}
	.map-game {
		position: absolute;
		/*	top: var(--game-top);
		left: var(--game-left);
		*/
		background-image: url(https://images.squarespace-cdn.com/content/v1/5bfd4ea8da02bc9d0eeb4fa0/1544986285085-NVDZYK5X54B48XF6EPD0/CoolMap.png?format=1000w);
		min-zoom: 50%;
		background-size: 100% 100%;
		width: 1666px;
		height: 1128px;

		background-color: white;
	}
</style>
