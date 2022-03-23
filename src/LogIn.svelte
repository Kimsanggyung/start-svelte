<script>

	import { name, idPicture, birth, pictureAlt } from "./store.js";

	import Editmode from "./Editmode.svelte";
	
	const userId = 'a';
	const passWord = 123;

	const userNo2 = 'b';
	const passNo2 = 345;

	let inputId = ''
	let inputPass = ''

	let logged = {loggedIn: false}
	
	let editMode = {editModeIn: false}

	const editToggle = () => editMode.editModeIn = !editMode.editModeIn

	const logoutButton = () =>{
		logged.loggedIn = !logged.loggedIn;
		editMode.editModeIn = !editMode.editModeIn;
	}

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

	<main>

		{#if !logged.loggedIn}
			<div class="loggedIn">
				<input bind:value={inputId} type="text" placeholder='아이디'> 
				<input bind:value={inputPass} type="password" placeholder='비밀번호'> 
				<button on:click={logIn}>로그인</button>
				<br/>
				<label><input type="checkbox">아이디 저장</label>
				<span id=error></span>
			</div>
		{/if}

		{#if logged.loggedIn}
			<div class="loggedIn">
				<h1>환영합니다 {$name} 회원님</h1>
				<h2>생년월일: {$birth} </h2>
				<img id="Lee" src = {$idPicture} alt = {$pictureAlt}>
				<button on:click={editToggle}>수정</button>
				<button  on:click={logoutButton}>로그아웃</button>
			</div>
		{/if}

		{#if editMode.editModeIn}
			<Editmode/>
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
