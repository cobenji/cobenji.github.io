<script>
    import Tag from "../components/tag.svelte";
    export let page;
    export let nameImg;
    export let topText;
    export let botText;
    export let currentPage;
    export let tags;
</script>

{#if currentPage == page}
    <div class="text-center">
        <img src="assets/icons/{nameImg}" class="inline-block m-2" alt="" />
        <p class="text-mainRed text-lg mb-5 font-normal text-center">
            {topText}
        </p>
    </div>

    <div class="text-center">
        {#each tags as tag}
            <Tag name={tag} {page} />
        {/each}
    </div>
    <div class="text-center">
        <p class="text-lg mt-6 font-normal">
            {botText}
        </p>
    </div>
{/if}
