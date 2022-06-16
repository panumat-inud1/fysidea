import { writable } from 'svelte/store';

function modalSelect() {
	const { subscribe, set, update } = writable(false);

	return {
		subscribe,
		open: () => set(true),
		coles: () => set(false),

		subOpen: () => set(true),
		subColes: () => set(false),
		
	
	};
}

export const Modal = modalSelect();
export const subModal = modalSelect();