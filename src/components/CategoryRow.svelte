<script>
    import Card from './Card.svelte';

    export let category;
    export let items;
</script>

<style>
    .category-row {
        width: 100%;
        margin: 1em 0 3em 0;
    }
    
    .content {
        margin: 1em 0;
        display: flex;
        flex-direction: column;
    }

    a {
        font-family: JetBrains Mono;
        font-weight: 700;
        font-size: 2rem;
		padding: 0.4em 0;
    }
    
    @media (min-width: 480px) {
        .content {
            flex-direction: row;
            justify-content: space-between;
            align-items: baseline; 
        }
	}
</style>

<div class='category-row'>
    <a rel=prefetch href={category}>{category}</a>
    <div class='content'>
        {#each items as item}
            <Card {...item} />
        {/each}
    </div>
</div>
