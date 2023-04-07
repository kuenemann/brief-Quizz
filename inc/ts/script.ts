import { Parents } from "./Parents";
import { Chevalier } from "./Chevalier";
import { Magicien } from "./Magicien";

const section1 = document.querySelector(".section1") as HTMLElement | null;
const section2 = document.querySelector(".section2") as HTMLElement | null;
const section3 = document.querySelector(".section3") as HTMLElement | null;

const barre1 = document.querySelector(".barreBonheur") as HTMLElement;
const barre2 = document.querySelector(".barreSoif") as HTMLElement;
const barre3 = document.querySelector(".barreFaim") as HTMLElement;


export const personnage1 = document.querySelector(
  ".personnage1"
) as HTMLImageElement;
export const personnage2 = document.querySelector(
  ".personnage2"
) as HTMLImageElement;
export const inputPseudo = document.querySelector(
  "#input_pseudo"
) as HTMLInputElement;

personnage1.addEventListener("click", (event) => {
  if (!inputPseudo.value) {
    event.preventDefault();
    alert("Veuillez entrer votre nom avant de choisir un personnage.");
  } else {
    document.querySelector(".section1")?.classList.add("hide");
    document.querySelector(".section2")?.classList.remove("hide");
    document.querySelector(".section2")?.scrollIntoView({ behavior: "smooth" });
    const newschevalier = new Chevalier();
  }
});

personnage2.addEventListener("click", (event) => {
  if (!inputPseudo.value) {
    event.preventDefault();
    alert("Veuillez entrer votre nom avant de choisir un personnage.");
  } else {
    document.querySelector(".section1")?.classList.add("hide");
    document.querySelector(".section3")?.classList.remove("hide");
    document.querySelector(".section3")?.scrollIntoView({ behavior: "smooth" });
    const newsmagicien = new Magicien();
  }
});





