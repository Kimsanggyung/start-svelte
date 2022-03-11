import App from './App.svelte';
import { readable } from 'svelte/store';

export const time = readable(new Date(), function start(set) {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return function stop() {
		clearInterval(interval);
	};
});

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;