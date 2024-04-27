// alert("Hello World!")
// a class for my pet
class Pet {
    constructor(name){
        name = this.name
    }

    health = [5, 0, "dead"]

    hunger = [5, 10, "dead"]

    sleepiness = [5, 10, "dead"]

    boredom = [5, 10, "dead"]

    age = [0, 10, 20, "dead"]

    alive = ["true", "false"]

// this is my first function that feeds the pet
    feed() {
        // these first conditionals are only to keep the page from displaying negative numbers or numbers greater than 10
        // if the tamagotchi's hunger is 0
        if(hungerElement === tamagotchi.hunger[0]){
            // alert "your pet is full"
            alert(petName + " is full!")
            // else if tamagotchi's hunger is 10
        }else if(hungerElement === tamagotchi.hunger[1]){
            // your pet died :(
            alert(petName + " died :(")
        }else{
            // this second part of the conditional for each of the buttons changes the image displayed on the browser page
             // if the image displayed is the same as the one referenced in the HTML
            if(document.getElementById("regular").src === regularImage){
                // then subract from the hunger
                hungerElement.innerHTML = tamagotchi.hunger[0]--
                // change the source to a different gif
                document.getElementById("regular").src = feedImage
                // and after 15 seconds, revert to normal settings
                setTimeout(changeImageBack, 15000)
                // if the image displayed is the evolved image
            }else if(document.getElementById("regular").src === evolvedImage){
                // then do the same thing as before
                hungerElement.innerHTML = tamagotchi.hunger[0]--
                document.getElementById("regular").src = feedImage
                // but change the image back to evolved
                setTimeout(changeImageToEvolved, 15000)
                // making sure the button can be pressed multiple times after the pet reaches adulthood
            }else if(document.getElementById("regular").src === unAlivedImage){
                alert(petName + " can't eat anymore!" + petName + " is gone!")
                deathScreen()
            }else if(tamagotchi.age[0] >= tamagotchi.age[1]){
                // these are 2 callbacks to functions i declared in this JS file
                changeImageToEvolved()
            }else{
                // this is a toggle for the button, so you can switch between modes
                changeImageBack()
            }
        }
    }

    play() { 
        if(boredomElement === tamagotchi.boredom[0]) {
            alert(petName + " is done playing for now.")
        }else if(tamagotchi.boredom[0] === tamagotchi.boredom[1]){
            alert(petName + " died of boredom! :(")
        }else{
            if(document.getElementById("regular").src === regularImage){
                boredomElement.innerHTML = tamagotchi.boredom[0]--
                document.getElementById("regular").src = playImage
                setTimeout(changeImageBack, 15000)
            }else if(document.getElementById("regular").src === evolvedImage){
                boredomElement.innerHTML = tamagotchi.boredom[0]--
                document.getElementById("regular").src = playImage
                setTimeout(changeImageToEvolved, 15000)
            }else if(document.getElementById("regular").src === unAlivedImage){
                alert(petName + " can't play anymore!" + petName + " is gone!")
                deathScreen()
            }else if(tamagotchi.age[0] >= tamagotchi.age[1]){
                changeImageToEvolved()
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
            if(document.getElementById("regular").src === regularImage) {
            sleepinessElement.innerHTML = tamagotchi.sleepiness[0]--
            document.getElementById("regular").src = sleepImage
            setTimeout(changeImageBack, 15000)
            }else if(document.getElementById("regular").src === evolvedImage){
                sleepinessElement.innerHTML = tamagotchi.sleepiness[0]--
            document.getElementById("regular").src = sleepImage
            setTimeout(changeImageToEvolved, 15000)
            }else if(document.getElementById("regular").src === unAlivedImage){
                alert(petName + " can't sleep anymore!" + petName + " is gone!")
                deathScreen()
            }else if(tamagotchi.age[0] > tamagotchi.age[1]){
                changeImageToEvolved()
            }else{
                changeImageBack()
            }
        }
    }
// adding a new function that will make the pet workout
    workout() {
        if(tamagotchi.health[0] <= 10){
                if(document.getElementById("regular").src === regularImage){
                healthElement.innerHTML = tamagotchi.health[0]++
                document.getElementById("regular").src = workoutImage
                setTimeout(changeImageBack, 15000)
            }else if(document.getElementById("regular").src === evolvedImage){
                healthElement.innerHTML = tamagotchi.health[0]++
                document.getElementById("regular").src = workoutImage
                setTimeout(changeImageToEvolved, 15000)
            }else if(document.getElementById("regular").src === unAlivedImage){
                alert(petName + " can't workout anymore!" + petName + " is gone!")
                deathScreen()
            }else if(tamagotchi.age[0] > tamagotchi.age[1]){
                changeImageToEvolved()
            }else{
                changeImageBack()
            }
        }else if(document.getElementById("regular").src === unAlivedImage){
            alert(petName + " can't workout anymore!" + petName + " is gone!")
            deathScreen()
        }else{
            alert("You have overworked" + petName + "! You're the worst person ever, and you should think about your actions!")
            deathScreen()
        }
    }
// a function that ages the pet up
    ageUp() {
        // giving my pet an age limit of the second array string
        // also making sure the function only runs if the pet isn't busy doing something else
        // and that the function won't run if the pet is no longer alive
        if(tamagotchi.age[0] < tamagotchi.age[1] && document.getElementById("regular").src !== unAlivedImage && document.getElementById("regular").src === regularImage || tamagotchi.age[0] < tamagotchi.age[2] && document.getElementById("regular").src !== unAlivedImage && document.getElementById("regular").src === evolvedImage){
            // this adds 1 to the age every time the function is invoked in the setInterval()
            ageElement.innerHTML = tamagotchi.age[0]++
            // this establishes the age that the pet will age up at
        }else if(tamagotchi.age[0] === tamagotchi.age[1] && tamagotchi.age[0] <= tamagotchi.age[2]){
            ageElement.innerHTML = tamagotchi.age[0]++
            alert(petName + " has become an adult!")
            document.getElementById("regular").src = evolvedImage
        }else if(document.getElementById("regular").src === unAlivedImage){
            console.log(petName + " is no more")
            deathScreen()
        }else if(ageElement === tamagotchi.age[2]){
            deathScreen()
            alert(petName + " has died of old age! you were a good parent!")
        }else{
            console.log(petName + " is busy!")
    }
}
// a function that increases the pet's hunger
    hungerUp() {
        // i wanted to use arrays so that way i could change the amount of the second array position, without needing to modify my functions in multiple places if i wanted to extend the game to be longer
        if(tamagotchi.hunger[0] < tamagotchi.hunger[1] && document.getElementById("regular").src !== unAlivedImage && document.getElementById("regular").src === regularImage || tamagotchi.hunger[0] < tamagotchi.hunger[1] && document.getElementById("regular").src !== unAlivedImage && document.getElementById("regular").src === evolvedImage){
            hungerElement.innerHTML = tamagotchi.hunger[0]++
        }else if(document.getElementById("regular").src === unAlivedImage){
            console.log(petName + " is no more")
            deathScreen()
        }else if(tamagotchi.hunger[0] !== tamagotchi.hunger[1] && document.getElementById("regular").src === unAlivedImage){
            deathScreen()
        }else if(tamagotchi.hunger[0] === tamagotchi.hunger[1]){
            alert(petName + " has died of hunger!")
            deathScreen()
        }else{
           console.log(petName + " is busy!")
        }
    }
    // a function that increases the pet's boredom
    boredomUp() {
        if(tamagotchi.boredom[0] < tamagotchi.boredom[1] && document.getElementById("regular").src !== unAlivedImage && document.getElementById("regular").src === regularImage || tamagotchi.boredom[0] < tamagotchi.boredom[1] && document.getElementById("regular").src !== unAlivedImage && document.getElementById("regular") === evolvedImage){
            boredomElement.innerHTML = tamagotchi.boredom[0]++
        }else if(document.getElementById("regular").src === unAlivedImage){
            console.log(petName + " is no more")
            deathScreen()
        }else if(boredomElement === tamagotchi.boredom[1]){
            alert(petName + " has died of boredom! Congratulations, this is the secret ending!")
            deathScreen()
        }else{
            console.log(petName + " is busy!")
        }
    }
// a function that increases the pet's sleep
    sleepUp() {
        if(tamagotchi.sleepiness[0] < tamagotchi.sleepiness[1] && document.getElementById("regular").src !== unAlivedImage && document.getElementById("regular").src === regularImage || tamagotchi.sleepiness[0] < tamagotchi.sleepiness[1] && document.getElementById("regular").src !== unAlivedImage && document.getElementById("regular").src === evolvedImage){
            sleepinessElement.innerHTML = tamagotchi.sleepiness[0]++
        }else if(document.getElementById("regular").src === unAlivedImage){
            console.log(petName + " is no more")
            deathScreen()
        }else if(tamagotchi.sleepiness[0] !== tamagotchi.sleepiness[1] && document.getElementById("").src === unAlivedImage){
            deathScreen()
        }else if(sleepinessElement === tamagotchi.sleepiness[1]){
            alert(petName + " has died of sleepiness!")
            deathScreen()
        }else{
            console.log(petName + " is busy")
        }
    }
// a function that decreases the pet's health (just to make it more fun!)
    healthDown() {
        if(tamagotchi.sleepiness[0] < tamagotchi.sleepiness[1] && document.getElementById("regular").src !== unAlivedImage && document.getElementById("regular").src === regularImage || tamagotchi.sleepiness[0] < tamagotchi.sleepiness[1] && document.getElementById("regular").src !== unAlivedImage && document.getElementById("regular").src === evolvedImage){
            healthElement.innerHTML = tamagotchi.health[0]--
            alert("Pollution makes " + petName + "'s health get lower! Make sure he works out to keep him healthy!")
        }else if(document.getElementById("regular").src === unAlivedImage){
            console.log(petName + " is no more")
            deathScreen()
        }else if(tamagotchi.sleepiness[0] !== tamagotchi.sleepiness[1] && document.getElementById("regular").src === unAlivedImage){
            deathScreen()
        }else if(healthElement === tamagotchi.health[1]){
            deathScreen()
            alert(petName + " has died from overpollution! Dedicate yourself to climate change since his sad face has you so moved!")
        }else{
            console.log(petName + " is busy")
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
setInterval(tamagotchi.sleepUp, 120000)

const boredomElement = document.getElementById("boredom")
boredomElement.innerHTML = tamagotchi.boredom[0]
// this will make the pet more bored every 15 minutes or so (it should be hard to die of boredom)
setInterval(tamagotchi.boredomUp, 600000)

const ageElement = document.getElementById("age")
ageElement.innerHTML = tamagotchi.age[0]
// this is the function that will age up the pet every few minutes
// an if statement that says if he is dead, he can't be aged
setInterval(tamagotchi.ageUp, 30000)

// an interval that checks if the tamagotchi is alive
// setInterval(tamagotchi.checkAlive, 1000)
// declaring where health will be displayed in the DOM
const healthElement = document.getElementById("health")
healthElement.innerHTML = tamagotchi.health[0]

// assigning functions to the buttons in my HTML file
const feedElement = document.getElementById("feed")
feedElement.addEventListener("click", tamagotchi.feed)

const playElement = document.getElementById("play")
playElement.addEventListener("click", tamagotchi.play)

const lightsElement = document.getElementById("lights")
lightsElement.addEventListener("click", tamagotchi.lights)

const workoutElement = document.getElementById("workout")
workoutElement.addEventListener("click", tamagotchi.workout)
// a function to change the image back to be invoked in the button function conditional statements
function changeImageBack() {
    document.getElementById("regular").src = regularImage
}
// adding another function to change the image back after the pet has become an adult
function changeImageToEvolved() {
    document.getElementById("regular").src = evolvedImage
}
// a function to change the screen properties to 
function deathScreen() {
    ageElement.innerHTML = tamagotchi.age[3]
    boredomElement.innerHTML = tamagotchi.boredom[2]
    sleepinessElement.innerHTML = tamagotchi.sleepiness[2]
    hungerElement.innerHTML = tamagotchi.hunger[2]
    healthElement.innerHTML = tamagotchi.health[2]
    aliveElement.innerHTML = tamagotchi.alive[1]
    document.getElementById("regular").src = unAlivedImage
}


// adding an interval to activate the healthdown function to simulate polution
setInterval(tamagotchi.healthDown, 60000)

// declaring the variable for the images
const regularImage = "https://i.giphy.com/nrY3TgN3JNbUs.webp"
const feedImage = "https://i.giphy.com/1iqhMAmOgfQRd9M5Va.webp"
const evolvedImage = "https://i.giphy.com/dtBleLxGbWhKfzySB7.webp"
const playImage = "https://i.giphy.com/nPu9aQYq1dQbu.webp"
const sleepImage = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWp4aW1xNjU0YnJ4MGxkeHY0Y3RuaWQ2ajhxOGpidzEwOHd0aG82ciZlcD12MV9naWZzX3NlYXJjaCZjdD1z/oaCM98FQcTl5qbs4kb/giphy.webp"
const workoutImage = "https://media4.giphy.com/media/xOcAp5kMjBlHvp53gw/giphy.webp?cid=ecf05e477wku79zdx2x9pe1en5vausp72yx5sgwigmhywlso&ep=v1_gifs_search&rid=giphy.webp&ct=s"
const unAlivedImage = "https://media0.giphy.com/media/tfnfQi1gFonKZWmt2c/giphy.webp?cid=ecf05e4739iv3hb392bcm4fc7xzh3z8ibnbayswak70t8766&ep=v1_gifs_search&rid=giphy.webp&ct=s"

// declaring a variable for the hidden alive element
const aliveElement = document.getElementById("alive")
aliveElement.innerHTML = tamagotchi.alive[0]

alert("Press any button to begin!")

// a function to animate the pet

// function animate() {
//     if(document.getElementById("regular").src === regularImage || document.getElementById("regular").src === evolvedImage){
//         $("#regular").
//     }
// }

// // animate()

// setInterval(animate, 1000)

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
// 

// this is some code i wrote that didn't end up working like i wanted it to. i believe it's because the conditionals don't make sense?
// if(tamagotchi.age[0] <= 20){
//     //     setInterval(tamagotchi.ageUp, 3000)
//     // }else if(document.getElementById("regular").src === "https://media0.giphy.com/media/tfnfQi1gFonKZWmt2c/giphy.webp?cid=ecf05e4739iv3hb392bcm4fc7xzh3z8ibnbayswak70t8766&ep=v1_gifs_search&rid=giphy.webp&ct=s"){
//     //     console.log(petName + " is no more")
//     // }else{
//     //     console.log(petName + " is no more")
//     // }
// this is some more set interval stuff that didn't work for some reason
// if(document.getElementById("regular").src !== "https://media0.giphy.com/media/tfnfQi1gFonKZWmt2c/giphy.webp?cid=ecf05e4739iv3hb392bcm4fc7xzh3z8ibnbayswak70t8766&ep=v1_gifs_search&rid=giphy.webp&ct=s"){
//     setInterval(tamagotchi.ageUp, 3000)
// }else if(document.getElementById("regular").src === "https://media0.giphy.com/media/tfnfQi1gFonKZWmt2c/giphy.webp?cid=ecf05e4739iv3hb392bcm4fc7xzh3z8ibnbayswak70t8766&ep=v1_gifs_search&rid=giphy.webp&ct=s"){
//     console.log(petName + " is done")
// }else{
//     console.log(petName + " is done for today")
// }
// 
    
// tamagotchi.hunger
// if(document.getElementById("age") === 10){
//     document.getElementById("regular").src = "https://i.giphy.com/dtBleLxGbWhKfzySB7.webp"
// }

// this didn't work
// document.getElementById("image").src = regularImage

// a function that will animate the guy
// function animatePet() {
//     if(aliveElement === true){
//         document.
//     }
// }