import { writable } from "svelte/store";

const themes = {
  light: "light",
  dark: "dark",
};

const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

export const theme = writable(
  prefersDarkMode.matches ? themes.dark : themes.light
);

// Update the store if OS preference changes
const updateThemeOnChange = (e) =>
  theme.set(e.matches ? themes.dark : themes.light);
prefersDarkMode.addEventListener("change", updateThemeOnChange);

// Export a function to clean up the listener if needed
export const cleanUp = () =>
  prefersDarkMode.removeEventListener(updateThemeOnChange);

export const dark = writable(true);

theme.subscribe((val) => dark.set(val === themes.dark));
