<script>
	import { time } from './main.js';

	const formatter = new Intl.DateTimeFormat('ko', {
		hour24: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	});
</script>

<h1>현제시각 {formatter.format($time)}</h1>