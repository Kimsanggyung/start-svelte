<script>
    let	inputName = ''
	let inputBrith = ''
	let	inputPicture = ''
	let inputAlt =''
	
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

<input bind:value={inputName} type="text" placeholder='이름을 입력해 주세요.'> 
<input bind:value={inputBrith} type="text" placeholder='생년월일을 입력해 주세요'>
<input bind:value={inputPicture} type="text" placeholder='시진주소를 입력해 주세요.'>
<input bind:value={inputAlt} type="text" placeholder="사진소개를 써주세요.">
<button on:click={change} on:click={editToggle}>등록</button>
<button on:click={reflash}></button>