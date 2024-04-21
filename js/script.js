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
    
    health = [10, 10]

    hunger = [5, 10]

    sleepiness = [5, 10]

    boredom = [5, 10]

    age = [0]

    feed() {
        // hungerElement.innerHTML = tamagotchi.hunger[0]--
        if(tamagotchi.hunger[0] >= 0 ){
            hungerElement.innerHTML = tamagotchi.hunger[0]--
        }else{
            alert("your pet is full!")
        }
    }

    play() { 
        boredomElement.innerHTML = tamagotchi.boredom[0]--
        sleepinessElement.innerHTMl = tamagotchi.sleepiness[0]++
        hungerElement.innerHTML = tamagotchi.hunger[0]++
    }

}

// instantiating my new tamagotchi
const tamagotchi = new Pet("")

// this is where the user can change the pet's name
petName = prompt("What would you like to name your pet?")

// assigning the document element to display the variables
const nameElement = document.getElementById("name")

// changing the HTML to display the petname
nameElement.innerHTML = "Name " + petName

// below displays the metrics of your pet
const hungerElement = document.getElementById("hunger")
hungerElement.innerHTML = "hunger " + tamagotchi.hunger[0]

const sleepinessElement = document.getElementById("sleepiness")
sleepinessElement.innerHTML = "sleepiness " + tamagotchi.sleepiness[0]

const boredomElement = document.getElementById("boredom")
boredomElement.innerHTML = "boredom " + tamagotchi.boredom[0]

const ageElement = document.getElementById("age")
ageElement.innerHTML = "age " + tamagotchi.age

// assigning functions to the buttons in my HTML file
const feedElement = document.getElementById("feed")
feedElement.addEventListener("click", tamagotchi.feed)

const playElement = document.getElementById("play")
playElement.addEventListener("click", tamagotchi.play)

const lightsElement = document.getElementById("lights")
lightsElement.addEventListener("click", tamagotchi.lights)


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