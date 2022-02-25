function Pokemon(name, type, attack) {
  this.name = name;
  this.type = type;
  this.attack = attack;
  this.getSummary = function () {
    return `${this.name} used ${this.attack}`;
  };
}

const pokemon1 = new Pokemon("Pikachu", "electric", "thunderbolt");
const pokemon2 = new Pokemon("Aggron", "Rock", "Heavy Slam");
const pokemon3 = new Pokemon("Charizard", "Fire", "Blast Burn ");
console.log(pokemon1.getSummary());
console.log(pokemon2.getSummary());
console.log(pokemon3.getSummary());
