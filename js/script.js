// alert("Hello World!")
// a class for my pet
class Pet {
    constructor(name){
        name = this.name
        // health = 10
        // hunger = 0
        // sleepiness = 0
        // boredom = 0 
        // age = 0
    }
    
    health = [0, " - " , 10]

    hunger = [0, " - ", 10]

    sleepiness = [0, " - ", 10]

    boredom = [0, " - ", 10]

    age = [0]
}
// instantiating my new tamagotchi
const tamagotchi = new Pet("")
// letting the user choose their pet's name
// const petName = prompt("What would you like to name your Tamagotchi?")
// assigning variables to my class instantiation
// petName = tamagotchi.name
// petHealth = tamagotchi.health[0] + tamagotchi.health[1] + tamagotchi.health[2]
// petBoredom = tamagotchi.boredom[0] + tamagotchi.boredom[1] + tamagotchi.boredom[2]
// petAge = tamagotchi.Age
// this is where the user can change the pet's name
petName = prompt("What would you like to name your pet?")

// assigning the document element to display the variables
const nameElement = document.getElementById("name")
// changing the HTML to display the petname
nameElement.innerHTML = petName

petHunger = tamagotchi.hunger[0] + tamagotchi.hunger[1] + tamagotchi.hunger[2]
const hungerElement = document.getElementById("hunger")
hungerElement.innerHTML = "Hunger = " + petHunger

petSleepiness = tamagotchi.sleepiness[0] + tamagotchi.sleepiness[1] + tamagotchi.sleepiness[2]
const sleepinessElement = document.getElementById("sleepiness")
sleepinessElement.innerHTML = "Sleepiness = " + petSleepiness

petBoredom = tamagotchi.boredom[0] + tamagotchi.boredom[1] + tamagotchi.boredom[2]
const boredomElement = document.getElementById("boredom")
boredomElement.innerHTML = "Boredom = " + petBoredom

petAge = tamagotchi.age
const ageElement = document.getElementById("age")
ageElement.innerHTML = "Age = " + petAge



// my code graveyard
// I thought I would use separate functions, but decided against it
    // announceHunger() {
    //     alert(this.hunger)
    // }

    // announceSleepiness() {
    //     alert(this.sleepiness)
    // }

    // announceBoredom() {
    //     alert(this.boredom)
    // }

    // announceAge() { 
    //     alert(this.age)
    // }