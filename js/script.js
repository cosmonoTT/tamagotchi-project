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
            if(document.getElementById("regular").src === "https://i.giphy.com/nrY3TgN3JNbUs.webp"){
                hungerElement.innerHTML = tamagotchi.hunger[0]--
                document.getElementById("regular").src = "https://i.giphy.com/1iqhMAmOgfQRd9M5Va.webp"
            }else{
                changeImageBack()
            }
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
            if(document.getElementById("regular").src === "https://i.giphy.com/nrY3TgN3JNbUs.webp"){
                boredomElement.innerHTML = tamagotchi.boredom[0]--
                document.getElementById("regular").src = "https://i.giphy.com/nPu9aQYq1dQbu.webp"
            }else{
                changeImageBack()
            }
        }
    }

    lights() {
        if(tamagotchi.sleepiness[0] === 0){
            alert(petName + " isn't tired right now.")
            changeImageBack()
        }else{
            if(document.getElementById("regular").src === "https://i.giphy.com/nrY3TgN3JNbUs.webp") {
            sleepinessElement.innerHTML = tamagotchi.sleepiness[0]--
            document.getElementById("regular").src = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWp4aW1xNjU0YnJ4MGxkeHY0Y3RuaWQ2ajhxOGpidzEwOHd0aG82ciZlcD12MV9naWZzX3NlYXJjaCZjdD1z/oaCM98FQcTl5qbs4kb/giphy.webp"
            }else{
                changeImageBack()
            }
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

// in this area i can control how long the game is!
// invoking my hunger function every 30 seconds
setInterval(tamagotchi.hungerUp, 30000)

const sleepinessElement = document.getElementById("sleepiness")
sleepinessElement.innerHTML = tamagotchi.sleepiness[0]
// this is the function that will make the pet sleepy as time goes on
setInterval(tamagotchi.sleepUp, 90000)

const boredomElement = document.getElementById("boredom")
boredomElement.innerHTML = tamagotchi.boredom[0]
// this will make the pet more bored every 15 minutes or so (it should be hard to die of boredom)
setInterval(tamagotchi.boredomUp, 300000)

const ageElement = document.getElementById("age")
ageElement.innerHTML = tamagotchi.age[0]
// this is the function that will age up the pet every few minutes
setInterval(tamagotchi.ageUp, 120000)

const healthElement = document.getElementById("health")
healthElement.innerHTML = tamagotchi.health[0]

// assigning functions to the buttons in my HTML file
const feedElement = document.getElementById("feed")
feedElement.addEventListener("click", tamagotchi.feed)

const playElement = document.getElementById("play")
playElement.addEventListener("click", tamagotchi.play)

const lightsElement = document.getElementById("lights")
lightsElement.addEventListener("click", tamagotchi.lights)

function changeImageBack() {
    document.getElementById("regular").src = "https://i.giphy.com/nrY3TgN3JNbUs.webp"
}


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

// a conditional statement that will change the image displayed on screen
// const displayImage = document.getElementById("regular")
// if(document.getElementbyID("feed").clicked == true){
//     alert("feed button was clicked!")
// }

// // const imageElement = document.getElementById("regular")
// function changeImageToFeed() {
//     document.getElementById("regular").style.display = "hide"
//     document.getElementById("eating").style.display = "contents"
// }

// if(document.querySelector("img") === document.getElementById("regular")) {
//     document.getElementById.apply("eating").style.display = "hide"
// }

// if(document.querySelector("img" === document.getElementById("")))