<script>
    import Logo from "../components/header_logo.svelte";
    import { db } from "../firebase_config";
    import Tag from "../components/tag.svelte";

    import { collection, getDocs, query, where } from "firebase/firestore";

    export let page = 1;
    let tags = [];
    let ready = false;

    (async () => {
        const q = query(collection(db, "tags"), where("page", "==", page));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            //console.log(`${doc.id} => ${doc.data()}`);
            tags = doc.data().tags;
            console.log(tags);
        });
        ready = true;
        console.dir(tags);
    })();
</script>

<Logo />

<h1>YEs</h1>
{#if ready}
    <div class="grid place-content-center">
        {#each tags as tag}
            <Tag name={tag} />
        {/each}
    </div>
{/if}
