<script lang="ts">
	$: now = new Date();
</script>

<footer>
	<p>Copyright &copy; {now.getFullYear()} <a href="http://www.fysidea.com">Fysidea Team.</a></p>
</footer>

<style>
    footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-left: 15px;
        padding-right: 15px;
		bottom: 0px;
		width: 100%;
		position: fixed;
        background-color: aliceblue;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding-left: 15px;
            padding-right: 15px;
		}
	}
</style>
