<script>
    export let name;
</script>

<div>
    <input type="checkbox" class="tag" id={name} />
    <label for={name} class="tag-wrapper">
        <span class="">{name}</span>
    </label>
</div>

<style lang="postcss">
    .tag {
        display: none;
    }

    .tag-wrapper {
        display: inline-block;
        padding: 8px 16px;

        font-style: normal;
        font-weight: 400;
        font-size: 14px;

        border: 1px solid #434343;
        border-radius: 20px;
    }

    .tag + .tag-wrapper {
        background-color: white;
    }
    .tag:checked + .tag-wrapper {
        background-color: #ff2153;
        border: 1px solid #ff2153;
        color: white;
    }
</style>
