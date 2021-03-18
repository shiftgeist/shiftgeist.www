import { writable } from "svelte/store";

const colors = ["#E53935", "#1E92E6"];

export const color = writable(colors[0]);

export const next = () => {
  const temp = colors.indexOf(color);

  // console.log(temp);
};

color.subscribe((val) => {
  // console.log(val);
});
