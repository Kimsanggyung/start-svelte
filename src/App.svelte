<script>

	import { time } from './main.js';
	
	import Login from "./LogIn.svelte";
	
	import Editmode from "./Editmode.svelte";
	const formatter = new Intl.DateTimeFormat('ko', {
		hour24: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	});
 	
</script>

<body>

	<h1>현재시간: {formatter.format($time)}</h1>

	<main>

		<Login/>
		<Editmode/>

	</main>
</body>
