// First Labour : Heracles vs Nemean Lion
const Fighter = require("./src/Fighter.js");
// use your Figher class here
const Heracles = new Fighter("🧔‍♂️ Heracles", 20, 6);
const NemeanLion = new Fighter("🦁 Nemean Lion", 11, 13);
Heracles.setDefender(NemeanLion);

console.log(Heracles.name, Heracles.life, Heracles.fight());
console.log(NemeanLion.name, NemeanLion.life);
