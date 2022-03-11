<script>
	import { time } from './main.js';

	const formatter = new Intl.DateTimeFormat('ko', {
		hour24: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	});

	const userId = acbcdc;

	const passWord = 135792468;



	function login() {
		 alert('로그인 성공')
	};


</script>



<h1>현재시간: {formatter.format($time)}</h1>

<input> 

<button on:click={login}></button>
