<script>
    import Logo from "../components/header_logo.svelte";
    import { Link } from "svelte-navigator";
</script>

<Logo />

<p class="m-2 text-center">Je ne travaille pas, je shwork !</p>

<form class="mt-10">
    <div class="mb-4">
        <label class="block text-md font-light mb-2 hidden" for="email"
            >Email</label
        >
        <input
            class="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            id=""
            placeholder="email"
        />
    </div>
    <div class="mb-4">
        <label class="text-md font-light mb-2 hidden" for="password"
            >Mot de passe</label
        >
        <input
            class="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            id=""
            placeholder="Password"
        />
    </div>

    <div class=" mb-5 text-center">
        <a
            class="block text-right align-baseline font-light text-sm text-indigo-600 hover:text-indigo-500"
            href="#"
        >
            Mot de passe oublié?
        </a>
        <Link
            to="/onboarding"
            class="inline-block my-4 py-2 w-60 bg-mainRed text-white rounded-xl border-none"
            >Connexion</Link
        >
    </div>
</form>

<p class="text-center text-md">
    Vous n'avez pas de compte ? <a class="font-light text-md text-indigo-600"
        >Créer</a
    >
</p>
