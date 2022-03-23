<script>

    let check = {checked: false}

    const CLICKCHECK =  check.checked = !check.checked

</script>

<label><input type="checkbox" id="id" on:click={CLICKCHECK}>아이디 저장</label>