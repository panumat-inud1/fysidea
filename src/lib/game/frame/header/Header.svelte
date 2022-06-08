<script lang="ts">
	$: now = new Date();
</script>

<header>
	<p>Header &copy; {now.getFullYear()} <a href="http://www.fysidea.com">Fysidea Team.</a></p>
</header>

<style>
	header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-left: 15px;
		padding-right: 15px;
		top: 0px;
        left: 0px;
        right: 0px;
		width: 100%;
		position: fixed;
		background-color: aliceblue;
	}
</style>
