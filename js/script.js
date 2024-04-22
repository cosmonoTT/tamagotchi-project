// alert("Hello World!")
// a class for my pet
class Pet {
    constructor(name){
        name = this.name
    }
    
    health = [10, 10, "dead"]

    hunger = [5, 10, "dead"]

    sleepiness = [5, 10, "dead"]

    boredom = [5, 10, "dead"]

    age = [0, 10, 20, "dead"]
// this is my first function that feeds the pet
    feed() {
        // if the tamagotchi's hunger is 0
        if(tamagotchi.hunger[0] === 0){
            // alert "your pet is full"
            alert(petName + " is full!")
            // else if tamagotchi's hunger is 10
        }else if(tamagotchi.hunger[0] === tamagotchi.hunger[1]){
            // your pet died :(
            alert(petName + " died :(")

        }else{
            hungerElement.innerHTML = tamagotchi.hunger[0]--
        }
    }

    play() { 
        // this establishes that the button can't be pressed if the index of 0 is equal to zero
        // i did this to keep the page from displaying negative numbers
        if(tamagotchi.boredom[0] === 0) {
            alert(petName + " is done playing for now.")
        }else if(tamagotchi.boredom[0] === tamagotchi.boredom[1]){
            alert(petName + " died of boredom! :(")
        }else{
            boredomElement.innerHTML = tamagotchi.boredom[0]--
        }
    }

    lights() {
        
        if(tamagotchi.sleepiness[0] === 0){
            alert(petName + " isn't tired right now.")
        }else{
            sleepinessElement.innerHTML = tamagotchi.sleepiness[0]--
        }
    }
// a function that ages the pet up
    ageUp() {
        //giving my pet an age limit
        if(tamagotchi.age[0] <= tamagotchi.age[2]){
            ageElement.innerHTML = tamagotchi.age[0]++
            // this establishes the age that the pet will age up at
        }else if(tamagotchi.age[0] === tamagotchi.age[1]){
            ageElement.innerHTML = tamagotchi.age[0]++
            alert(petName + " has become an adult!")
        }else{
            // this will change all the values of the metrics displayed to show the value of "dead"
            ageElement.innerHTML = tamagotchi.age[3]
            boredomElement.innerHTML = tamagotchi.boredom[2]
            sleepinessElement.innerHTML = tamagotchi.sleepiness[2]
            hungerElement.innerHTML = tamagotchi.hunger[2]
            healthElement.innerHTML = tamagotchi.health[2]
            alert(petName + " has died of old age! You were a good parent. :(")
        }
    }
// a function that increases the pet's hunger
    hungerUp() {
        // i wanted to use arrays so that way i could change the amount of the second array position, without needing to modify my functions in multiple places if i wanted to extend the game to be longer
        if(tamagotchi.hunger[0] < tamagotchi.hunger[1]){
            hungerElement.innerHTML = tamagotchi.hunger[0]++
        }else{
            ageElement.innerHTML = tamagotchi.age[3]
            boredomElement.innerHTML = tamagotchi.boredom[2]
            sleepinessElement.innerHTML = tamagotchi.sleepiness[2]
            hungerElement.innerHTML = tamagotchi.hunger[2]
            healthElement.innerHTML = tamagotchi.health[2]
            alert(petName + " has died of hunger! You're the worst person ever, and you should think about your actions!")
        }
    }
    // a function that increases the pet's boredom
    boredomUp() {
        if(tamagotchi.boredom[0] < tamagotchi.boredom[1]){
            boredomElement.innerHTML = tamagotchi.boredom[0]++
        }else{
            ageElement.innerHTML = tamagotchi.age[3]
            boredomElement.innerHTML = tamagotchi.boredom[2]
            sleepinessElement.innerHTML = tamagotchi.sleepiness[2]
            hungerElement.innerHTML = tamagotchi.hunger[2]
            healthElement.innerHTML = tamagotchi.health[2]
            alert(petName + " has died of boredom! Congratulations, you found the secret ending!")
        }
    }

    sleepUp() {
        if(tamagotchi.sleepiness[0] < tamagotchi.sleepiness[1]){
            sleepinessElement.innerHTML = tamagotchi.sleepiness[0]++
        }else{
            ageElement.innerHTML = tamagotchi.age[3]
            boredomElement.innerHTML = tamagotchi.boredom[2]
            sleepinessElement.innerHTML = tamagotchi.sleepiness[2]
            hungerElement.innerHTML = tamagotchi.hunger[2]
            healthElement.innerHTML = tamagotchi.health[2]
            alert(petName + " has died of sleep deprivation! Was it that hard to turn off the lights?")
        }
    }

}

// instantiating my new tamagotchi
const tamagotchi = new Pet("")

// this is where the user can change the pet's name
const petName = prompt("What would you like to name your pet?")

// assigning the document element to display the variables
const nameElement = document.getElementById("name")

// changing the HTML to display the petname
nameElement.innerHTML =  petName

// below displays the metrics of your pet
const hungerElement = document.getElementById("hunger")
hungerElement.innerHTML = tamagotchi.hunger[0]
// invoking my hunger function every 30 seconds
setInterval(tamagotchi.hungerUp, 6000)

const sleepinessElement = document.getElementById("sleepiness")
sleepinessElement.innerHTML = tamagotchi.sleepiness[0]
// this is the function that will make the pet sleepy as time goes on
setInterval(tamagotchi.sleepUp, 600000)

const boredomElement = document.getElementById("boredom")
boredomElement.innerHTML = tamagotchi.boredom[0]
// this will make the pet more bored every 15 minutes or so(it should be hard to die of boredom)
setInterval(tamagotchi.boredomUp, 600000)

const ageElement = document.getElementById("age")
ageElement.innerHTML = tamagotchi.age[0]
// this is the function that will age up the pet every few minutes
setInterval(tamagotchi.ageUp, 600)

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

    // i tried doing a setInterval to age up the pet
    // const ageUpElement = document.getElementById("age")
// ageUpElement.innerHTML = setInterval(tamagotchi.age[0]++, 100)

// invoking my ageup() function, with a setInterval so it can work every x seconds
// i now know this didn't work because the first argument expected is meant to be a function, so i don't need the paranthesis
// setInterval(tamagotchi.ageUp(), 5000)