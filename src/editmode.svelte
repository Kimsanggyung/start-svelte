<script>

    import { name, idPicture, birth, pictureAlt } from "./store.js";
    
    let	inputName = ''
	let inputBirth = ''
	let	inputPicture = ''
	let inputAlt =''
	
	let editMode = {editModeIn: false}

	const change = () => {
		if(inputName == '', inputBirth == '', inputPicture == '', inputAlt == ''){
			alert('변경할 정보을 입력해 주세요.')
		}
		else if(inputName == '', inputBirth !== '', inputPicture !== '', inputAlt !== ''){
			alert('변경할 이름을 입략해 주세요.')
		}
		else if(inputName !== '', inputBirth == '', inputPicture !== '', inputAlt !== ''){
			alert('변경할 생년월일을 입략해 주세요.')
		}
		else if(inputName !== '', inputBirth !== '', inputPicture == '', inputAlt !== ''){
			alert('변경할 사진주소을 입략해 주세요.')
		}
		else if(inputName !== '', inputBirth !== '', inputPicture !== '', inputAlt == ''){
			alert('변경할 사진 정보를 입력해 주세요')
		}
		else if(inputName !== '', inputBirth !== '', inputPicture !== '', inputAlt !== ''){
		name.set(inputName)
		birth.set(inputBrith)
		idPicture.set(inputPicture)
		pictureAlt.set(inputAlt)
		console.log(name)
		localStorage.setItem('name', (inputName))
		localStorage.setItem('birth', (inputBrith))
		localStorage.setItem('img', (inputPicture))
		localStorage.setItem('alt', (inputAlt))
        editMode.editModeIn = !editMode.editModeIn
		}
	}

	const reflash = () => localStorage.clear();
</script>

{#if !editMode.editModeIn}
    
    <input bind:value={inputName} type="text" placeholder='이름을 입력해 주세요.'> 
    <input bind:value={inputBirth} type="text" placeholder='생년월일을 입력해 주세요'>
    <input bind:value={inputPicture} type="text" placeholder='시진주소를 입력해 주세요.'>
    <input bind:value={inputAlt} type="text" placeholder="사진소개를 써주세요.">
    <button on:click={change}>등록</button>
    <button on:click={reflash}>초기화</button>

{/if}