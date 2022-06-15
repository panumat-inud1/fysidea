<script lang="ts">
	export let ww = 0;
	export let hh = 0;

	let rootElement: any;
	$: rootElement && rootElement.style.setProperty('--viewport-height', innerHeight + 'px');

	//  scal screen on game
	$: rootElement && rootElement.style.setProperty('--game-height', hh + 'px');
	$: rootElement && rootElement.style.setProperty('--game-width', ww + 'px');

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

	$: scrollY = 0;

	function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	}
</script>

<svelte:window bind:scrollY bind:innerWidth bind:outerWidth bind:innerHeight bind:outerHeight />

<main>
	<div
		id="viewport"
		name="viewport"
		class="viewport"
		bind:clientWidth={w}
		bind:clientHeight={h}
		bind:this={rootElement}
	>


		<!-- MENU GAME -->
		<div class="click-goto" hidden>
			<button href="#goto" on:click|preventDefault={scrollIntoView}>GotoCenter</button>
		</div>

		<slot name="menu-custom">
			<!-- Component Menu-fixed ใช้สำหรับเมนูที่สร้างเอง -->
		</slot>
		<!-- MENU GAME IMAGE -->
		<slot name="menu-image">
			<!-- Component Menu-fixed-image ใช้สำหรับใส่เมนูที่เป้นรูปภาพ -->
		</slot>

		<!-- Screen Game ขนาดของหน้าจอเกมส์-->
		<div class="display-game">
			<div class="map-game">
				<slot name="content">
					<!-- Component Content-Game -->
				</slot>
				<div class="test" id="goto" />
			</div>
		</div>
	</div>
</main>

<style>
	.click-goto {
		position: absolute;
		top: 10%;
		left: 2%;
		z-index: 2;
	}

	.test {
		position: absolute;
		top: 10%;
		left: 80%;
	}
	:root {
		--viewport-height: inherit;
		--game-top: inherit;
		--game-left: inherit;
		--game-height: inherit;
		--game-width: inherit;
	}

	.viewport {
		position: relative;
		max-width: 834px;
		min-height: var(--viewport-height);
		max-height: var(--viewport-height);
		margin: 0 auto;
		background-color: orange;
	}

	.display-game {
		position: absolute;
		top: 0%;
		left: 0%;

		width: 100%;
		height: 100%;
		overflow: auto;

		background-color: aqua;
		z-index: 1;
	}

	.map-game {
		position: absolute;
		background-image: url(https://images.squarespace-cdn.com/content/v1/5bfd4ea8da02bc9d0eeb4fa0/1544986285085-NVDZYK5X54B48XF6EPD0/CoolMap.png?format=1000w);

		background-size: 100% 100%;
		background-color: aliceblue;
		width: var(--game-width);
		height: var(--game-height);
	}
</style>
