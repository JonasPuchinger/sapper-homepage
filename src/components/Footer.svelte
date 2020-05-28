<script>
    const originalDate = new Date('2020-04-20').getFullYear();
    let today = new Date().getFullYear();
</script>

<style>
    .footer {
        text-align: center;
        font-family: JetBrains Mono;
        margin: 4em 0;
    }
</style>

<div class='footer'> 
    © Jonas Puchinger {originalDate}
    {#if today > originalDate}
         - {today}
    {/if}
</div>