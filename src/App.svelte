<script>
	import { time } from './main.js';

	const formatter = new Intl.DateTimeFormat('ko', {
		hour24: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	});

	const userId = 'a';
 	const passWord = 135;
 
	let inputId = ''
	let inputPass = ''

	let logged = {loggedIn: false}

	let toggle = () => logged.loggedIn = !logged.loggedIn;

 	function logIn(){
		 if(
			 userId == inputId,
			 passWord == inputPass
		 ){
			location.href='loged.svelte'
		 }
		 else{
			 document.getElementById('error').innerHTML = "아이디 또는 비밀번호가 옳지않습니다."
		 }
	 }


</script>


<body>

	<h1>현재시간: {formatter.format($time)}</h1>

	<main>
		<div>
			<input bind:value={inputId} type="text" placeholder='아이디'>
			<input bind:value={inputPass} type="password" placeholder='비밀번호'> 
			<button on:click={logIn}>로그인</button>
			<br>
			<span id=error></span>
		</div>
		{#if logged.loggedIn}
		<div>
			<button on:click={toggle}>LogOut</button>
		</div>
		{/if}
	</main>

</body>

<style>
	#error{
		color: red;
	}
</style>