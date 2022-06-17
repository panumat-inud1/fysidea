import { writable } from 'svelte/store';

function modalSaefood() {
    const { subscribe, set, update } = writable(false);

    return {
        subscribe,
        open: () => set(true),
        coles: () => set(false),

        subOpen: () => set(true),
        subColes: () => set(false),

        supperOpen: () => set(true),
        supperColes: () => set(false),

    };
}


export const mdSaefood = modalSaefood();
export const smdSaefood = modalSaefood();
export const spmdSaefood = modalSaefood();
