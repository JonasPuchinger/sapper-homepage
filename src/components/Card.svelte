<script>
    import Chip from './Chip.svelte';

    export let title;
    export let date;
    export let labels;
</script>

<style>
    .card {
        margin: 0.5em 0;
        background-color: #3A3E40;
        box-shadow: 20px 0px 60px 0px #000000;
        border-radius: 0.5em;
        overflow: hidden;
    }

    caption {
        font-family: JetBrains Mono;
    }
    
    .content {
        padding: 1em;
    }
</style>

<div class='card'>
    <img src='https://via.placeholder.com/300x150' alt='Card Header Image' />
    <div class='content'>
        {#if date}
            <caption>{date}</caption>
        {/if}
        <h2>{title}</h2>
        {#if labels}
            {#each labels as label}
                <Chip value={label} />
            {/each}
        {/if}
    </div>
</div>