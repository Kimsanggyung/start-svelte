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