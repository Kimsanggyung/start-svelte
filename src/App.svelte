<script>

	import { time } from './main.js';
	
	import { name, idPicture, birth, pictureAlt } from "./store.js";

	import Login from "./LogIn.svelte";
	
	const formatter = new Intl.DateTimeFormat('ko', {
		hour24: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	});
	
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
	
</script>

<body>

	<h1>현재시간: {formatter.format($time)}</h1>

	<main>

		{#if !logged.loggedIn}
			<div class="loggedIn">
				<Login/>
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