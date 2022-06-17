<script lang="ts">
	import { mdSaefood } from './saefood';
	// import icon
	import { mdiHomeCircleOutline, mdiCloseThick } from '@mdi/js';
	import IconButton, { Icon } from '@smui/icon-button';
	import { Svg } from '@smui/common/elements';
	// import animation
	let open = false;
	import { slide, fade } from 'svelte/transition';

	// Menu
	let menu = 'การตั้งค่า';
	let language = 'ภาษาไทย';
	let exit = 'ออกระบบ';
	let support = 'ความช่วยเหลือ';
	let credit = 'เครดิต';
	let guidebook = 'คู่มือแนะนำ';
	let policy = 'นโยบายส่วนตัว';
</script>

{#if $mdSaefood}
	<div class="background-shadown" transition:fade={{ delay: 50, duration: 200 }}>
		<div class="modal">
			<div class="frame-out-modal">
				<div class="frame-top-modal" />
				<div class="menu-modal"><span>{menu}</span></div>
				<!--Botton Clode-->
				<div class="close-modal" on:click={mdSaefood.coles}>
					<div class="close-top-modal" />
					<Icon component={Svg} viewBox="0 0 24 24">
						<path fill="currentColor" d={mdiCloseThick} />
					</Icon>
				</div>

				<!-- Content Modal-->
				<div class="content">
					<!-- Contet header -->
					<div class="header-content">
						<div class="col-2">
							<div />
							<div />
						</div>
					</div>
					<!-- Contet main -->
					<div class="main-content">
						<div class="col-2">
							<div class="grid-item">
								<!-- language botton -->
								<div class="language-modal">
									<div class="language-top-modal" />
									<div class="language-fonte">
										{language}
									</div>
								</div>
							</div>
							<div class="grid-item">
								<!-- exit botton -->
								<div class="exit-modal">
									<div class="exit-top-modal" />
									<div class="exit-fonte">
										{exit}
									</div>
								</div>
							</div>
						</div>
						<div class="col-2">
							<div class="grid-item">
								<!-- support botton -->
								<div class="support-modal">
									<div class="support-top-modal" />
									<div class="support-fonte">
										{support}
									</div>
								</div>
							</div>
							<div class="grid-item">
								<!-- policy botton -->
								<div class="policy-modal">
									<div class="policy-top-modal" />
									<div class="policy-fonte">
										{policy}
									</div>
								</div>
							</div>
						</div>

						<div class="col-2">
							<div class="grid-item">
								<!-- guidebook botton -->
								<div class="guidebook-modal">
									<div class="guidebook-top-modal" />
									<div class="guidebook-fonte">
										{guidebook}
									</div>
								</div>
							</div>
							<div class="grid-item">
								<!-- credit botton -->
								<div class="credit-modal">
									<div class="credit-top-modal" />
									<div class="credit-fonte">
										{credit}
									</div>
								</div>
							</div>
						</div>

						<div class="line-center" />
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	/* Modal */
	.modal {
		position: absolute;
		top: 18%;
		left: 5%;

		width: 90%;
		height: 80%;
		border-radius: 12px;
		border: 1px solid rgba(10, 10, 10, 0.785);
		background-color: #6b6b6b;
		box-shadow: 0px 2px 0px 1px rgba(0, 0, 0, 0.4);
		z-index: 3;
	}

	.frame-out-modal {
		position: absolute;

		width: 99.3%;
		height: 99.3%;
		border-radius: 12px;
		border: 1px solid #a0a0a0;
	}
	.frame-top-modal {
		position: absolute;
		top: 1%;
		left: 1%;

		width: 98%;
		height: 6%;
		border-radius: 12px;
		background-color: rgba(255, 255, 255, 0.364);
	}
	/* Clode botton*/
	.close-modal {
		position: absolute;
		top: 1%;
		right: 1%;

		height: 36px;
		width: 36px;

		border-radius: 6px;
		background-color: red;
		box-shadow: 0px 2px 0px 1px rgba(0, 0, 0, 0.4);
		z-index: 2;
	}
	.close-modal:active {
		height: 34px;
		width: 34px;
	}

	.close-top-modal {
		position: absolute;
		top: 2%;
		left: 2%;

		width: 96%;
		height: 50%;
		border-radius: 6px;
		background-color: rgba(255, 255, 255, 0.487);
	}
	/*Content-Modal*/
	.content {
		position: absolute;
		top: 14%;
		left: 2%;

		height: 84%;
		width: 96%;
		border-radius: 6px;
		background-color: #d3d3d3;
	}
	.menu-modal {
		position: absolute;
		top: 3%;
		left: 0%;

		width: 100%;
		text-align: center;
	}
	span {
		text-shadow: 1px 1px 0px rgba(10, 10, 10, 1);
	}
	.header-content {
		position: absolute;
		top: 0%;

		height: 15%;
		width: 100%;

		border-radius: 6px 6px 0px 0px;
		background-image: linear-gradient(45deg, rgba(79, 153, 227, 1) 0%, rgba(0, 25, 153, 1) 81%);
	}
	.main-content {
		position: absolute;
		top: 15%;

		height: 85%;
		width: 100%;
		background-color: transparent;
	}
	.line-center {
		position: absolute;
		top: 50%;
		left: 1%;

		height: 0.3%;
		width: 98%;
		border-radius: 6px;
		background-color: #aaa8a8;
		box-shadow: 0px 0px 0px 1px rgba(255, 255, 255, 0.52);
	}

	/* Grid Display */
	.col-2 {
		position: absolute;
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
	.grid-item {
		display: flex;
		justify-content: center;
	}

	/* language Botton green */
	.language-modal {
		position: absolute;
		top: 20%;
		height: 24px;
		width: 128px;
		border-radius: 6px;
		background-color: rgb(3, 246, 3);
		box-shadow: 0px 2px 0px 1px rgba(0, 0, 0, 0.4);
		z-index: 2;
	}
	.language-modal:active {
		height: 22px;
		width: 126px;
	}

	.language-top-modal {
		position: absolute;
		top: 2%;
		left: 2%;
		width: 96%;
		height: 50%;
		border-radius: 6px;
		background-color: rgba(255, 255, 255, 0.487);
	}
	.language-fonte {
		position: absolute;
		width: 100%;
		height: 100%;
		text-align: center;
		text-shadow: 1px 1px 0px rgba(10, 10, 10, 1);
	}

	/* exit Botton green  */
	.exit-modal {
		position: absolute;
		top: 20%;
		height: 24px;
		width: 128px;

		border-radius: 6px;
		background-color: rgb(3, 246, 3);
		box-shadow: 0px 2px 0px 1px rgba(0, 0, 0, 0.4);
		z-index: 2;
	}
	.exit-modal:active {
		height: 22px;
		width: 126px;
	}

	.exit-top-modal {
		position: absolute;
		top: 2%;
		left: 2%;

		width: 96%;
		height: 50%;
		border-radius: 6px;
		background-color: rgba(255, 255, 255, 0.487);
	}
	.exit-fonte {
		position: absolute;
		width: 100%;
		height: 100%;
		text-align: center;
		text-shadow: 1px 1px 0px rgba(10, 10, 10, 1);
	}

	/* policy Botton green  */
	.policy-modal {
		position: absolute;
		top: 60%;
		height: 24px;
		width: 128px;

		border-radius: 6px;
		background-color: rgb(3, 246, 3);
		box-shadow: 0px 2px 0px 1px rgba(0, 0, 0, 0.4);
		z-index: 2;
	}
	.policy-modal:active {
		height: 22px;
		width: 126px;
	}

	.policy-top-modal {
		position: absolute;
		top: 2%;
		left: 2%;

		width: 96%;
		height: 50%;
		border-radius: 6px;
		background-color: rgba(255, 255, 255, 0.487);
	}
	.policy-fonte {
		position: absolute;
		width: 100%;
		height: 100%;
		text-align: center;
		text-shadow: 1px 1px 0px rgba(10, 10, 10, 1);
	}
	/* guidebook Botton green  */
	.guidebook-modal {
		position: absolute;
		top: 60%;
		height: 24px;
		width: 128px;

		border-radius: 6px;
		background-color: rgb(3, 246, 3);
		box-shadow: 0px 2px 0px 1px rgba(0, 0, 0, 0.4);
		z-index: 2;
	}
	.guidebook-modal:active {
		height: 22px;
		width: 126px;
	}

	.guidebook-top-modal {
		position: absolute;
		top: 2%;
		left: 2%;

		width: 96%;
		height: 50%;
		border-radius: 6px;
		background-color: rgba(255, 255, 255, 0.487);
	}
	.guidebook-fonte {
		position: absolute;
		width: 100%;
		height: 100%;
		text-align: center;
		text-shadow: 1px 1px 0px rgba(10, 10, 10, 1);
	}

	/* support Botton green  */
	.support-modal {
		position: absolute;
		top: 80%;
		height: 24px;
		width: 128px;

		border-radius: 6px;
		background-color: rgb(3, 246, 3);
		box-shadow: 0px 2px 0px 1px rgba(0, 0, 0, 0.4);
		z-index: 2;
	}
	.support-modal:active {
		height: 22px;
		width: 126px;
	}

	.support-top-modal {
		position: absolute;
		top: 2%;
		left: 2%;

		width: 96%;
		height: 50%;
		border-radius: 6px;
		background-color: rgba(255, 255, 255, 0.487);
	}
	.support-fonte {
		position: absolute;
		width: 100%;
		height: 100%;
		text-align: center;
		text-shadow: 1px 1px 0px rgba(10, 10, 10, 1);
	}
	/* credit Botton green  */
	.credit-modal {
		position: absolute;
		top: 80%;
		height: 24px;
		width: 128px;

		border-radius: 6px;
		background-color: rgb(3, 246, 3);
		box-shadow: 0px 2px 0px 1px rgba(0, 0, 0, 0.4);
		z-index: 2;
	}
	.credit-modal:active {
		height: 22px;
		width: 126px;
	}

	.credit-top-modal {
		position: absolute;
		top: 2%;
		left: 2%;

		width: 96%;
		height: 50%;
		border-radius: 6px;
		background-color: rgba(255, 255, 255, 0.487);
	}
	.credit-fonte {
		position: absolute;
		width: 100%;
		height: 100%;
		text-align: center;
		text-shadow: 1px 1px 0px rgba(10, 10, 10, 1);
	}
</style>
