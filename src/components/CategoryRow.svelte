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
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        align-content: stretch;
    }

    a {
        font-family: JetBrains Mono;
        font-weight: 700;
        font-size: 2rem;
		padding: 0.4em 0;
    }
</style>

<div class='category-row'>
    <a rel=prefetch href={category}>{category}</a>
    <div class='content'>
        {#if items}
            {#each items as item}
                <Card {...item} />
            {/each}
        {:else}
            Loading...
        {/if}
    </div>
</div>
