import { Parents } from "./Parents";

export class Chevalier extends Parents {
  constructor() {
    super(
      document.getElementById("chevalier-happiness-bar-fill")!,
      document.getElementById("chevalier-health-bar-fill")!,
      document.getElementById("chevalier-hunger-bar-fill")!
    );
  }
}
