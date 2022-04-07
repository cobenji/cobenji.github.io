<script>
	import { Router, Route, Link } from "svelte-navigator";

	import Login from "./routes/Login.svelte";
	import Onboarding from "./routes/Onboarding.svelte";
</script>

<main>
	<Router>
		<main class="container bg-white">
			<Route path="/">
				<Login />
			</Route>

			<Route path="/onboarding">
				<Onboarding />
			</Route>

			<!-- <Route path="/">
				<h3>Home</h3>
				<Link to="/login">Login</Link>
				<Link to="/onboarding">Onboarding</Link>
			</Route> -->
		</main>
	</Router>
</main>

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	main {
		padding: 1em;
		margin: 0 auto;
		background: #eaeaea;
	}

	p {
		@apply text-text;
	}

	a:visited {
		color: inherit;
	}

	.container {
		margin: auto;
		width: 375px;
		height: 667px;
	}

	@media (max-width: 640px) {
		.container {
			width: initial;
		}
	}
</style>
