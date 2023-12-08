/* Fighter class definition */
const MAX_LIFE = 100;

class Fighter {
  constructor(name, strength, dexterity) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
  }

  setDefender(defender) {
    this.defender = defender;
  }

  // Méthode pour recevoir des dégâts
  receiveDamage(damage) {
    this.life = Math.max(0, this.life - damage);
  }

  fight() {
    const damage = Math.floor(Math.random() * (this.strength - 1) + 1);

    // Utilisez la méthode receiveDamage pour modifier la vie du défenseur
    this.defender.receiveDamage(damage);

    return { damage };
  }
}
module.exports = Fighter;
