<script>
    import Logo from "../components/header_logo.svelte";
</script>

<Logo />

<p class="m-2 text-center">Je ne travaille pas, je shwork !</p>

<form class="mt-10">
    <div class="mb-4">
        <label class="block text-md font-light mb-2 hidden" for="email"
            >email</label
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
            >Password</label
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
            Forgot Password?
        </a>
        <button
            class="m-auto bg-blue-700 hover:bg-blue-700 text-white font-light mt-5 py-2 px-6 rounded focus:outline-none focus:shadow-outline"
            type="button"
        >
            LOGIN
        </button>
    </div>
</form>

<div>
    <p class="text-center">Ou continuer avec</p>
</div>

<p class="text-center text-md">
    Don't have an account? <a class="font-light text-md text-indigo-600"
        >Create</a
    >
</p>
