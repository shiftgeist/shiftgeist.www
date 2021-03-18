import { writable } from "svelte/store";

export const themes = {
  light: "light",
  dark: "dark",
};

export const loaded = writable(false);

export const theme = writable(themes.dark);

export const dark = writable(theme);

theme.subscribe((val) => dark.set(val === themes.dark));
