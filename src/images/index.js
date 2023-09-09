import ntc from "./cert-ntc.webp";
import kettle from "./cert-kettle.webp";
import cycling from "./cert-cycling.webp";
import firstaid from "./cert-firstaid.webp";

import rundark from "./ach-rundark.webp";
import marathon23jun from "./ach-marathon-23-jun.webp";
import jailbreak23 from "./ach-jailbreak-2023.webp";
import ironman2023 from "./ach-ironman-2023.webp";

export { default as hero } from "./hero.webp";
export { default as hero480 } from "./hero480.webp";

export const certs = [
  { path: ntc, alt: "NTC", width: 400 },
  { path: kettle, alt: "Kettlebell Training", width: 400 },
  { path: cycling, alt: "Indoor Cycling", width: 400 },
  { path: firstaid, alt: "First Aid", width: 300 },
];

export const achievements = [
  { path: rundark, alt: "Run in the dark", width: 300 },
  { path: marathon23jun, alt: "Marathon 2023", width: 400 },
  { path: jailbreak23, alt: "Jailbreak 2023", width: 300 },
  { path: ironman2023, alt: "Ironman 2023", width: 300 },
];
