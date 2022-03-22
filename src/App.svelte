<script>

	import { time } from './main.js';
	
	import { name, idPicture, birth, pictureAlt } from "./store.js";
	
	const formatter = new Intl.DateTimeFormat('ko', {
		hour24: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	});
	
	const userId = 'a';
	const passWord = 123;

	const userNo2 = 'b';
	const passNo2 = 345;

	let inputId = ''
	let inputPass = ''

	let	inputName = ''
	let inputBrith = ''
	let	inputPicture = ''
	let inputAlt =''
	
	let logged = {loggedIn: false}
	
	const toggle = () => logged.loggedIn = !logged.loggedIn;

	let editMode = {editModeIn: false}

	const editToggle = () => editMode.editModeIn = !editMode.editModeIn

	let num = [1, 2, 3, 4, 5]

	const change = () => {
		name.set(inputName)
		birth.set(inputBrith)
		idPicture.set(inputPicture)
		pictureAlt.set(inputAlt)
		console.log(name)
		localStorage.setItem('name', (inputName))
		localStorage.setItem('brith', (inputBrith))
		localStorage.setItem('img', (inputPicture))
		localStorage.setItem('alt', (inputAlt))
	}
 	
	const reflash = () => localStorage.clear();

	function logIn(){
		if(
			userId == inputId,
			passWord == inputPass
		){
			logged.loggedIn = !logged.loggedIn,
			console.log('로그인 성공')
		}

		else if(
			 userNo2 == inputId,
			 passNo2 == inputPass
		){
			name.set('정씨')
			birth.set('1968년 9월 19일')
			idPicture.set('https://w.namu.la/s/2b83516ecb2360d95faa10f85763ad59ade34ede897311db5fc3a40256d7f1dd855bbf8eddb57c9fff4d4a24d070fd5ad625181926ea33915713e2351be1486fd1d510c24e5d05bc1f220991ec051010')
			pictureAlt.set('Chung Yongjin')
			logged.loggedIn = !logged.loggedIn
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
				<button on:click={logIn}>로그인</button>
				<br/>
				<span id=error></span>
			</div>
		{/if}

		{#if logged.loggedIn}
			<div class="loggedIn">
				<h1>환영합니다 {$name} 회원님</h1>
				<h2>생년월일: {$birth} </h2>
				<img id="Lee" src = {$idPicture} alt = {$pictureAlt}>
				<button on:click={editToggle}>수정</button>
				<button  on:click={toggle}>로그아웃</button>
				<button on:click={reflash}>zz</button>		
			</div>
		{/if}

		{#if editMode.editModeIn}
			<div>
				<input bind:value={inputName} type="text" placeholder='이름을 입력해 주세요.'> 
				<input bind:value={inputBrith} type="text" placeholder='생년월일을 입력해 주세요'>
				<input bind:value={inputPicture} type="text" placeholder='시진주소를 입력해 주세요.'>
				<input bind:value={inputAlt} type="text" placeholder="사진소개를 써주세요.">
				<button on:click={change} on:click={editToggle}>등록</button>		
			</div>
		{/if}

	</main>
</body>

<style>

	#error{
		color: red;
	}

	#Lee{
		width: 175px;
		height: 269px;
	}

</style>