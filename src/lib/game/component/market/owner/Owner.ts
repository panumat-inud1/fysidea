import { writable } from 'svelte/store';

function modal() {
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

function selectTab() {
    const { subscribe, set, update } = writable(1);

    return {
        subscribe,
        tab1: () => set(1),
        tab2: () => set(2),
        tab3: () => set(3),
        tab4: () => set(4),
        tab5: () => set(5),
    };
}

export const Tab = selectTab();
export const Modal = modal();
export const subModal = modal();
export const supperModal = modal();