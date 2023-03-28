// Get the animal info container and buttons
const animalInfo = document.getElementById("animal-info");
const catBtn = document.getElementById("cat-btn");
const dogBtn = document.getElementById("dog-btn");

// Define the Animal, Cat, and Dog classes
class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log(`The ${this.species} makes a sound`);
    return `The ${this.species} makes a sound`;
  }
}

class Cat extends Animal {
  purr() {
    console.log("purr");
    return "purr";
  }
}

class Dog extends Animal {
  bark() {
    console.log("woof");
    return "woof";
  }
}

// Handle button clicks
catBtn.addEventListener("click", () => {
  const cat = new Cat("cat");
  animalInfo.innerHTML = cat.makeSound() + "<br>" + cat.purr();
});

dogBtn.addEventListener("click", () => {
  const dog = new Dog("dog");
  animalInfo.innerHTML = dog.makeSound() + "<br>" + dog.bark();
});
