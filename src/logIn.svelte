<script>

 	const userId = 'acbcdc';
    export let inputId = '';  
	const passWord = 135792468;
    export let inputPass = ''; 

	export function login() {
		if(
			userId == inputId,
			passWord == inputPass
		){
		 document.write("<h1>환영 합니다 회원님</h1>")
		}
		
		 else{
			 alert('아이디나 비번이 틀렸습니다.')
		 }

	};

</script>