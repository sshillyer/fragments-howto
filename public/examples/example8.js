function Creature(name, strength, health) {   //  Note capital letter - convention for a constructor method
  // Define "name" property and give it a default value
  Object.defineProperty(this, "name", {
    get: function() {
      return name;
    },
    set: function(newName) {
      name = newName;
    },
    enumerable: true,
    configurable: true
  });
  
  this.name = name || "Unnamed";  // does this work still??

  // Repeat for strength
  Object.defineProperty(this, "strength", {
    get: function() {
      return strength;
    },
    set: function(newStrength) {
      strength = newStrength;
    },
    enumerable: true,
    configurable: true
  });
    
  this.strength = strength || 10; // does this work still??

Object.defineProperty(this, "hitpoints", {
    get: function() {
      return hitpoints;
    },
    set: function(newHitpoints) {
      hitpoints = newHitpoints;
    },
    enumerable: true,
    configurable: true
  });
 
  // Uh oh... every time we call new Creature(), another instance of this function is created!
  this.printInfo = function() {
    console.log("Name: " + this.name + "\n"
               +"Strength: " + this.strength + "\n"
               +"Hitpoints: " + this.hitpoints);
  } 
}


var goblin1 = new Creature;   // if not passing arguments, () not needed
var goblin2 = new Creature(); // same as agove
var goblin3 = new Creature("Dobby", 15); 
goblin3.printInfo();
