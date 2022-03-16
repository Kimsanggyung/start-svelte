<script>

 	const userId = 'acbcdc';
    import { inputId } from "./App.svelte";
	const passWord = 135792468;
    import { inputPass } from "./App.svelte";

	export function login() {
		if(
			userId == inputId,
			passWord == inputPass
		){
		 document.write("<h1>환영 합니다 회원님</h1>")
		}
		
		 else{
			 inputPass = ''
			 alert('아이디나 비번이 틀렸습니다.')
		 }

	};

</script>