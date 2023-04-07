import { Parents } from "./Parents";

export class Magicien extends Parents {
  constructor() {
    super(
      document.getElementById("magicien-happiness-bar-fill")!,
      document.getElementById("magicien-health-bar-fill")!,
      document.getElementById("magicien-hunger-bar-fill")!
    );
  }
}
