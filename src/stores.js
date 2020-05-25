import { writable } from 'svelte/store';

export const projects = writable([]);

export const theme = writable(localStorage.getItem('theme') || 'light');
theme.subscribe(val => localStorage.setItem('theme', val));
