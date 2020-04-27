<script>
    const originalDate = new Date('2020-04-20').getFullYear();
    let today = new Date().getFullYear();
</script>

<style>

</style>

<div class='footer'> 
    Copyright Jonas Puchinger {originalDate}
    {#if today > originalDate}
         - {today}
    {/if}
</div>