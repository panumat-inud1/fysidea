<script lang="ts">
	const yuta = 9999999999; //1000 ล้าน
</script>

<div class="container">
    <img src="/images/coins/yuta.png" alt=""  />
	<div class="frame-out">
		<div class="frame-in"/>
		<div class="yuta-coin">
			<span>{yuta}</span>
		</div>
	</div>
</div>

<style>
	.container {
		position: relative;
		height: 24px;
		width: 116px;
		
	}
	.frame-out {
        position: absolute;
        top: 4.2%;
		width: 100%;
		height: 90%;
		background-color: rgba(0, 0, 0, 0.134);
        border-radius: 12px;
        border: 0.3px solid black;
	}
    .frame-in{
        position: absolute;
        top: 3%;
        left: 5%;

        width: 90%;
        height: 20%;
        border-radius: 12px;
        background-color: rgba(255, 255, 255, 0.487);
    }
	img {
        position: absolute;
		width: 24px;
		height: 24px;
        z-index: 2;
	}
	.yuta-coin {
		position: absolute;
		top: 9%;
		left: 24%;
	}
    span{
        text-shadow: 1px 1px 1px rgba(3, 3, 3, 0.63);
    }
</style>
