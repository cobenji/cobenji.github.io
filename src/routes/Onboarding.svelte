<script>
    import Logo from "../components/header_logo.svelte";
    import { db } from "../firebase_config";

    import { collection, getDocs, query, where } from "firebase/firestore";

    (async () => {
        const q = query(collection(db, "tags"), where("page", "==", 1));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            //console.log(`${doc.id} => ${doc.data()}`);
            console.dir(doc.data());
        });
    })();

    let tags = {};

    let page = 1;
</script>

<Logo />

<h1>YEs</h1>

<div>
    <input type="checkbox" class="tag" id="CDD" />
    <label for="CDD" class="tag-wrapper">
        <span class="">CDD</span>
    </label>
</div>

<style lang="postcss">
    .tag {
        display: none;
    }

    .tag-wrapper {
        display: inline-block;
    }

    .tag + .tag-wrapper {
        background-color: red;
    }
    .tag:checked + .tag-wrapper {
        background-color: blue;
    }
</style>
