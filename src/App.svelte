<script>
	import { time } from './main.js';

	const formatter = new Intl.DateTimeFormat('ko', {
		hour24: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	});

	const userId = 'acbcdc';
	let inputId = '아이디'

	const passWord = 135792468;
	let inputPass = '비밀번호'

	function login() {
		if(
			userId == inputId,
			passWord == inputPass
		)
		 alert('로그인 성공')
		 else{
			 alert('아이디나 비번이 틀렸습니다.')
		 }

	};


</script>



<h1>현재시간: {formatter.format($time)}</h1>

<input bind:value={inputId}>
<input bind:value={inputPass}> 

<button on:click={login}>로그인</button>
