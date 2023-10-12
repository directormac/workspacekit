export function get_data() {
	return fetch('https://mkra.dev/todos/1').then((res) => res.json());
}
