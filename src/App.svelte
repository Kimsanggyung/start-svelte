<script>
	import { time } from './main.js';

	import { logIn } from "./logIn.svelte";

	const formatter = new Intl.DateTimeFormat('ko', {
		hour24: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	});

	let inputId = ''
	let inputPass = ''

</script>


<body>

	<h1>현재시간: {formatter.format($time)}</h1>

	<main>
		<input bind:value={inputId} type="text" placeholder='아이디'>
		<input bind:value={inputPass} type="password" placeholder='비밀번호'> 
		<button on:click={logIn}>로그인</button>
	</main>

</body>