import { Magicien } from "./Magicien";
import { Chevalier } from "./Chevalier";

export class Parents {
  bonheur: number;
  faim: number;
  vie: number;
  barreBonheur: HTMLElement;
  barrevie: HTMLElement;
  barreFaim: HTMLElement;
  intervalID: number;

  constructor(
    barreBonheur: HTMLElement,
    barreSoif: HTMLElement,
    barreFaim: HTMLElement
  ) {
    this.bonheur = 100;
    this.faim = 100;
    this.vie = 100;
    this.barreBonheur = barreBonheur;
    this.barreFaim = barreFaim;
    this.barrevie = barreSoif;

    this.intervalID = setInterval(() => this.decreaseNeeds(), 1000); // Diminue les niveaux toutes les 1.7 secondes

    // Ajout des écouteurs d'événements pour les boutons de santé, faim et bonheur
    const boutonvie = document.getElementById("barre-vie");
    const boutonfaim = document.getElementById("barre-faim");
    const boutonjoie = document.getElementById("barre-joie");

    const boutonVieMagicien = document.getElementById("magicien-barre-vie"); // Correction : nom de variable modifié pour respecter la casse
    const boutonFaimMagicien = document.getElementById("magicien-barre-faim"); // Correction : nom de variable modifié pour respecter la casse
    const boutonJoieMagicien = document.getElementById("magicien-barre-joie"); // Correction : nom de variable modifié pour respecter la casse

    if (boutonvie) {
      boutonvie.addEventListener("click", () => this.incrementsante());
    }
    if (boutonfaim) {
      boutonfaim.addEventListener("click", () => this.incrementfaim());
    }
    if (boutonjoie) {
      boutonjoie.addEventListener("click", () => this.incrementJoie());
    }
    // Ajout des écouteurs d'événements pour les boutons de santé, faim et bonheur du magicien

    if (boutonVieMagicien) {
      boutonVieMagicien.addEventListener("click", () => this.incrementsante());
    }
    if (boutonFaimMagicien) {
      boutonFaimMagicien.addEventListener("click", () => this.incrementfaim());
    }
    if (boutonJoieMagicien) {
      boutonJoieMagicien.addEventListener("click", () => this.incrementJoie());
    }
  }

  decreaseNeeds() {
    if (this.bonheur >= 10) {
      this.bonheur -= 6;
    } else {
      this.bonheur -= 2;
    }

    if (this.vie >= 10) {
      this.vie -= 6;
    } else {
      this.vie -= 2;
    }

    if (this.faim >= 10) {
      this.faim -= 6;
    } else {
      this.faim -= 2;
    }

    if (this.bonheur <= 0 || this.faim <= 0 || this.vie <= 0) {
      clearInterval(this.intervalID);
     alert("Game Over!");
    

      // Création d'un bouton "Rejouer"
      const rejouerBtn = document.createElement("bouton");
      rejouerBtn.innerText = "Rejouer";
      document.body.appendChild(rejouerBtn);
    
      // Ajout d'un écouteur d'événements sur le bouton "Rejouer"
      rejouerBtn.addEventListener("click", () => {
        // Recharge la page pour recommencer le jeu
        location.reload();
        
      });
      console.log(rejouerBtn);
      
  
    }
   
    
    
   


    this.barreBonheur.style.width = this.bonheur + "%";
    this.barreFaim.style.width = this.faim + "%";
    this.barrevie.style.width = this.vie + "%";

    console.log(
      `Bonheur: ${this.bonheur}%, Soif: ${this.vie}%, Faim: ${this.faim}%`
    );
  }

  incrementsante() {
    this.vie += 5;
    if (this.vie > 100) {
      this.vie = 100;
    }
    this.barrevie.style.width = this.vie + "%";
  }

  incrementfaim() {
    this.faim += 5;
    if (this.faim > 100) {
      this.faim = 100;
    }
    this.barreFaim.style.width = this.faim + "%";
  }

  incrementJoie() {
    this.bonheur += 5;
    if (this.bonheur > 100) {
      this.bonheur = 100;
    }
    this.barreBonheur.style.width = this.bonheur + "%";
  }
}


