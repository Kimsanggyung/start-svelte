<script>
	import { time } from './main.js';

	import { name } from "./store.js";
	
	import { idPicture } from "./store";

	const formatter = new Intl.DateTimeFormat('ko', {
		hour24: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	});

	const userId = 'a';
 	const passWord = 123;
 
	let inputId = ''
	let inputPass = ''

	let logged = {loggedIn: false}

	let toggle = () => logged.loggedIn = !logged.loggedIn;

	let userName;

	name.subscribe(value => {
		userName = value
	})

	let src;

	idPicture.subscribe(value =>{
		scr = value
	})



 	function logIn(){
		 if(
			 userId == inputId,
			 passWord == inputPass
		 ){
			console.log('로그인 성공')
		 }
		 else{
			 document.getElementById('error').innerHTML = "아이디 또는 비밀번호가 옳지않습니다."
		 }
	 }


</script>


<body>

	<h1>현재시간: {formatter.format($time)}</h1>

	<main>
		{#if !logged.loggedIn}
			<div class="loggedIn">
				<input bind:value={inputId} type="text" placeholder='아이디'>
				<input bind:value={inputPass} type="password" placeholder='비밀번호'> 
				<button on:click={logIn} on:click={toggle}>로그인</button>
				<br>
				<span id=error></span>
			</div>
		{/if}

		{#if logged.loggedIn}
			<div class="loggedIn">
				<h1>환영합니다 {userName} 회원님</h1>
				<img {src} alt=" Lee Jae-yong">
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