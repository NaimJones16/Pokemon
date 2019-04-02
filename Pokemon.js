Object Pokemon = {
  name:"Charmander",
  attack:12,
  defense:8,
  health:30,
  type:"fire",
  initHealth = 30

  function takeDamage(x) {
    //var damage = prompt("Please enter damage");
    health = health - x;
    if(health < 0){
      health = 0;
    }
  }
  function attackOpponent(Object Pokemon, int x) {
    Pokemon.takeDamage(x);
  }
  function display() {
    return Pokemon.name.toUpperCase() + "(" + Pokemon.type + ")" + Pokemon.health + "/" +Pokemon.initHealth;
  }
};

var Bulbasaur = new Pokemon("Bulbasaur", 7, 9, 35, "Grass/Posion");
