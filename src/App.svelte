<script>
	import { time } from './main.js';

	const formatter = new Intl.DateTimeFormat('ko', {
		hour24: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	});

	const userId = 'acbcdc';
	let inputId = ''

	const passWord = 135792468;
	let inputPass = ''

	function login() {
		if(
			userId == inputId,
			passWord == inputPass
		){
		 alert('로그인 성공')
		}
		
		 else{
			 inputPass = ''
			 alert('아이디나 비번이 틀렸습니다.')
		 }

	};


</script>


<body>

	<h1>현재시간: {formatter.format($time)}</h1>

	<main>
		<input bind:value={inputId} type="text" placeholder='아이디'>
		<input bind:value={inputPass} type="password" placeholder='비밀번호'> 
		<button on:click={login}>로그인</button>
	</main>

</body>