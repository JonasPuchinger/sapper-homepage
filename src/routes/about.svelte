<script>
	import IndexHeader from '../components/IndexHeader.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<style>
	figure {
		width: auto;
		width: 20vw;
		min-width: 250px;
		margin: auto;
	}

	img {
		width: 20vw;
		min-width: 250px;
		height: auto;
		border-radius: 0.5em;
		box-shadow: 20px 0px 60px 0px #000000;
	}

	figcaption, .description {
		font-family: JetBrains Mono;
		text-align: center;
		margin: 1em 0;
	}

	.description {
		margin: 4em 0;
	}

	.description ul {
		list-style: none;
		padding-left: 0;
	}
</style>

<svelte:head>
	<title>About - Jonas Puchinger</title>
</svelte:head>

<IndexHeader />
<figure>
	<img src='jp_photo.png' alt='Photo of Jonas'>
	<figcaption>that's me.</figcaption>
</figure>
<div class='description'>
	<p>i'm a</p>
	<b><p>developer, designer, and researcher</p></b>
	<p>interested in</p>
	<b>
		<ul>
			<li>app developement</li>
			<li>data science</li>
			<li>graphic design</li>
			<li>usability research</li>
			<li>art history</li>
		</ul>
	</b>
</div>
<div class='socials'>

</div>
<Footer />