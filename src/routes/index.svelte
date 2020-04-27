<script>
	import IndexHeader from '../components/IndexHeader.svelte';
	import CategoryRow from '../components/CategoryRow.svelte';
	import Footer from '../components/Footer.svelte';

	let testItems = [
		{
			title: 'test1',
			date: new Date().toLocaleDateString('de'),
			labels: [
				'label1',
				'label2',
			]
		},
		{
			title: 'test2',
			labels: [
				'label1',
				'label2',
			]
		},
		{
			title: 'test1',
			date: new Date().toLocaleDateString('de')
		},
	]
</script>

<style>

</style>

<svelte:head>
	<title>Jonas Puchinger</title>
</svelte:head>

<IndexHeader />

<CategoryRow category='blog' items={testItems} />
<CategoryRow category='portfolio' items={testItems} />
<CategoryRow category='research' items={testItems} />

<Footer />