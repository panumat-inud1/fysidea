<script lang="ts">
	let rootElement: any;
	$: rootElement && rootElement.style.setProperty('--viewport-height', innerHeight + 'px');

	$: rootElement && rootElement.style.setProperty('--game-top', (100 - (hMap / h) * 100) / 2 + '%');
	$: rootElement && rootElement.style.setProperty('--game-left', (100 - (wMap / w) * 100) / 2 + '%');

	$: wMap = 1024;
	$: hMap = 1024;
	$: w = 0;
	$: h = 0;
	$: innerHeight = 0;
	$: innerWidth = 0;
	$: outerHeight = 0;
	$: outerWidth = 0;
	$: percentage = 200 / 100;
</script>

<!--<div class="game" bind:this={rootElement}>
	<h1>Hello @fysidea/ui/game</h1>
	<div style="right: 0px; top:0px; width:24px;height:24px;background:red;position: absolute;">
		2
	</div>
	<div style="right: 0px; bottom:0px; width:24px;height:24px;background:red;position: absolute;">
		3
	</div>
	<div style="left: 0px; top:0px; width:24px;height:24px;background:red;position: absolute;">1</div>
	<div style="left: 0px; bottom:0px; width:24px;height:24px;background:red;position: absolute;">
		4
	</div>
</div>-->

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
		<div class="map-game" bind:clientWidth={wMap} bind:clientHeight={hMap}>
			<slot name="content">
				<!-- Component Content/content -->
			</slot>
		</div>
	</div>

	<!-- MENU GAME IMAGE -->
	<slot name="menu-image">
		<!-- Component Menu-fixed-image ใช้สำหรับใส่เมนูที่เป้นรูปภาพ -->
	</slot>
	<!-- MENU GAME -->

	<slot name="menu-fixed">
		<!-- Component Menu-fixed ใช้สำหรับเมนูที่สร้างเอง -->
	</slot>
</main>

<style>
	:root {
		--game-height: inherit;
		--game-width: inherit;
		--game-background-color: inherit;
		--login-height: inherit;
		--login-width: inherit;
		--login-top: inherit;
		--login-left: inherit;
		--viewport-height: inherit;
	}

	.viewport {
		position: relative;
		max-width: 834px;
		min-height: var(--viewport-height);
		max-height: var(--viewport-height);
		margin: 0 auto;
		background-color: orange;
		overflow: scroll;
	}
	.map-game {
		position: absolute;
		top: var(--game-top);
		

		width: 1024px;
		height: 1024px;
		background-color: aqua;
	}
</style>
