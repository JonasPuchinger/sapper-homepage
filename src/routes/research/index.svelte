<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(papers => {
			return { papers };
		});
	}
</script>

<script>
	export let papers;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Research</title>
</svelte:head>

<h1>Recent papers</h1>

<ul>
	{#each papers as paper}
		<li><a rel='prefetch' href='research/{paper.slug}'>{paper.title}</a></li>
	{/each}
</ul>