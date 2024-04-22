// alert("Hello World!")
// a class for my pet
class Pet {
    constructor(name){
        name = this.name
    }
    
    health = [10, 10]

    hunger = [5, 10]

    sleepiness = [5, 10]

    boredom = [5, 10]

    age = [0]
// this is my first function that feeds the pet
    feed() {
        // if the tamagotchi's hunger is 0
        if(tamagotchi.hunger[0] === 0){
            // alert "your pet is full"
            alert("your pet is full!")
            // else if tamagotchi's hunger is 10
        }else if(tamagotchi.hunger[0] === tamagotchi.hunger[1]){
            // your pet died :(
            alert("Your pet Died :(")
        }else{
            hungerElement.innerHTML = tamagotchi.hunger[0]--
        }
    }

    play() { 
        if(tamagotchi.boredom[0] === 0) {
            alert("your pet is done playing for now.")
        }else if(tamagotchi.boredom[0] === tamagotchi.boredom[1]){
            alert("Your Tamagotchi died of boredom :(")
        }else{
            boredomElement.innerHTML = tamagotchi.boredom[0]--
        }
    }

    lights() {
        if(tamagotchi.sleepiness[0] === 0){
            alert("your pet isn't sleepy")
        }else if(tamagotchi.sleepiness[0] === tamagotchi.sleepiness[1]){
            alert("Your Tamagotchi died of sleep deprivation")
        }else{
            sleepinessElement.innerHTML = tamagotchi.sleepiness[0]--
        }
    }

}

// instantiating my new tamagotchi
const tamagotchi = new Pet("")

// this is where the user can change the pet's name
petName = prompt("What would you like to name your pet?")

// assigning the document element to display the variables
const nameElement = document.getElementById("name")

// changing the HTML to display the petname
nameElement.innerHTML =  petName

// below displays the metrics of your pet
const hungerElement = document.getElementById("hunger")
hungerElement.innerHTML = tamagotchi.hunger[0]

const sleepinessElement = document.getElementById("sleepiness")
sleepinessElement.innerHTML = tamagotchi.sleepiness[0]

const boredomElement = document.getElementById("boredom")
boredomElement.innerHTML = tamagotchi.boredom[0]

const ageElement = document.getElementById("age")
ageElement.innerHTML = tamagotchi.age

const healthElement = document.getElementById("health")
healthElement.innerHTML = tamagotchi.health[0]

// assigning functions to the buttons in my HTML file
const feedElement = document.getElementById("feed")
feedElement.addEventListener("click", tamagotchi.feed)

const playElement = document.getElementById("play")
playElement.addEventListener("click", tamagotchi.play)

const lightsElement = document.getElementById("lights")
lightsElement.addEventListener("click", tamagotchi.lights)


// my code graveyard

// I thought I would use separate functions for the pet class that i would establish in the constructor, but decided against it
// health = 10
        // hunger = 0
        // sleepiness = 0
        // boredom = 0 
        // age = 0
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