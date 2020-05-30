import { writable } from "svelte/store";

export const projects = writable([]);

export const darkTheme = writable(false);
export const theme = writable(localStorage.getItem("theme") || "light");
theme.subscribe((val) => {
  localStorage.setItem("theme", val);
  darkTheme.set(val === "dark");
});
