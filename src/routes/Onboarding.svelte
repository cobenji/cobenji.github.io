<script>
    import Logo from "../components/header_logo.svelte";
    import { db } from "../firebase_config";
    import Onboarding from "../components/onboarding_main.svelte";

    import { fade } from "svelte/transition";

    import { collection, getDocs, query, where } from "firebase/firestore";

    export let page = 1;
    let tags = [];

    function nextPage() {
        page += 1;
        getTags();
    }

    async function getTags() {
        const q = query(collection(db, "tags"), where("page", "==", page));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            //console.log(`${doc.id} => ${doc.data()}`);
            tags = doc.data().tags;
        });
        console.dir(tags);
    }

    getTags();
</script>

<div class="container">
    <Logo />

    <div class="container_body">
        <Onboarding
            page="1"
            currentPage={page}
            nameImg="hat.svg"
            topText="Ton niveau d’études"
            botText="Sélectionne les ingrédients qui définissent tes compétences"
            {tags}
        />
        <Onboarding
            page="2"
            currentPage={page}
            nameImg="star.svg"
            topText="Mes années d’expérience"
            botText=" Sélectionne le nombre d’années d’expérience dans le domaine
            souhaité"
            {tags}
        />
        <Onboarding
            page="3"
            currentPage={page}
            nameImg="contract.svg"
            topText="Ton niveau d’études"
            botText="Sélectionne les ingrédients qui définissent tes compétences"
            {tags}
        />
        <Onboarding
            page="4"
            currentPage={page}
            nameImg="smile.svg"
            topText="Mes envies pour bien bosser"
            botText="Sélectionne tes exigences concernant tes futurs recruteurs"
            {tags}
        />

        {#if page == 5}
            <div class="text-center">
                <img
                    src="assets/icons/thune.svg"
                    class="inline-block m-2"
                    alt=""
                />
                <p class="text-mainRed text-lg mb-5 font-normal text-center">
                    La thune
                </p>
            </div>

            <div class="text-center">
                <input
                    type="range"
                    id="thune"
                    name="thune"
                    min="1600"
                    max="5000"
                    class="range_thune"
                />
                <div class="range_thune_label">
                    <span class="range_thune_label--right"
                        ><strong>1600</strong>
                        brut/mois</span
                    >
                    <span class="range_thune_label--left"
                        ><strong>>5000 €</strong>
                        brut/mois</span
                    >
                </div>
                <!-- <label for="volume">Volume</label> -->
            </div>
            <div class="text-center">
                <p class="text-lg mt-6 font-normal">
                    Indique le salaire souhaité
                </p>
            </div>
        {/if}
    </div>

    <div class="text-center">
        <button
            on:click={nextPage}
            class="py-2 w-60 bg-mainRed text-white rounded-xl border-none"
            >{page < 5 ? "Suivant" : "Terminer"}</button
        >
        <a href="#" class=" text-xs my-3 text-mainRed block">Passez l’étape</a>
        <div class="my-2">
            <span
                class=" h-1 w-9 inline-block {page >= 1
                    ? 'bg-mainRed'
                    : 'bg-grey'}"
            />
            <span
                class=" h-1 w-9 inline-block {page >= 2
                    ? 'bg-mainRed'
                    : 'bg-grey'}"
            />
            <span
                class=" h-1 w-9 inline-block {page >= 3
                    ? 'bg-mainRed'
                    : 'bg-grey'}"
            />
            <span
                class=" h-1 w-9 inline-block {page >= 4
                    ? 'bg-mainRed'
                    : 'bg-grey'}"
            />
            <span
                class=" h-1 w-9 inline-block {page >= 5
                    ? 'bg-mainRed'
                    : 'bg-grey'}"
            />
        </div>
    </div>
</div>

<style>
    .container {
        display: grid;
        grid-template-rows: auto 1fr 130px;
        height: 100%;
        width: 100%;
    }

    .container_body {
        place-self: center;
    }

    .range_thune {
        width: 300px;
    }

    .range_thune_label {
        width: 300px;
        display: flex;
        justify-content: space-between;
        font-weight: 600;
        font-size: 10px;
        color: #ff2153;
    }

    .range_thune_label strong {
        display: block;
    }
</style>
