// alert("Hello World!")
// a class for my pet
class Pet {
    constructor(name){
        name = this.name
    }
// arrays for the conditionals
    health = [5, 0, "dead"]

    hunger = [5, 10, "dead"]

    sleepiness = [5, 10, "dead"]

    boredom = [5, 10, "dead"]

    age = [0, 10, 20, "dead"]

    alive = ["true", "false"]

// this is my first function that feeds the pet
    feed() {
        // if the hunger is equal to zero
        if(tamagotchi.hunger[0] === 0){
            // alert "your pet is full"
            alert(petName + " is full!")
            // else if tamagotchi's hunger is 10
        }else if(tamagotchi.hunger[0] === tamagotchi.hunger[1]){
            // does this work?
            console.log("does this work?")
        }else{
             // if the image displayed is the same as the regular image
            if(document.getElementById("regular").src === regularImage){
                // then subract from the hunger
                hungerElement.innerHTML = tamagotchi.hunger[0]--
                // change the source to a different gif
                document.getElementById("regular").src = feedImage
                // if the image displayed is the evolved image
            }else if(document.getElementById("regular").src === evolvedImage){
                // then do the same thing as before
                hungerElement.innerHTML = tamagotchi.hunger[0]--
                document.getElementById("regular").src = feedImage
                // but change the image back to evolved
                setTimeout(changeImageToEvolved, 15000)
                // if the image is the unalived image
            }else if(document.getElementById("regular").src === unAlivedImage){
                // alert the user
                alert(petName + " can't eat anymore!" + petName + " is gone!")
                deathScreen()
            }else if(tamagotchi.age[0] >= 9){
                // change image back
                changeImageToEvolved()
            }else{
                // this is a toggle for the button, so you can switch between modes
                changeImageBack()
            }
        }
    }
// a function to modify the boredom element
    play() { 
        // if the boredom is 0
        if(tamagotchi.boredom[0] === 0) {
            // then alert the user
            alert(petName + " is done playing for now.")
            // otherwise
        }else{
            // if the source of the image element is the regular image
            if(document.getElementById("regular").src === regularImage){
                // subtract one form boredom, and display it in the HTML
                boredomElement.innerHTML = tamagotchi.boredom[0]--
                // and change the image to the play image
                document.getElementById("regular").src = playImage
                // if the source image is the evolved image
            }else if(document.getElementById("regular").src === evolvedImage){
                // subtract one from boredom
                boredomElement.innerHTML = tamagotchi.boredom[0]--
                // and change the image to play image
                document.getElementById("regular").src = playImage
                // after 15 seconds, change back to regular
                setTimeout(changeImageToEvolved, 15000)
                // if the source image is the unalived image
            }else if(document.getElementById("regular").src === unAlivedImage){
                // then alert the user
                alert(petName + " can't play anymore!" + petName + " is gone!")
                // if the pet is older than 9
            }else if(tamagotchi.age[0] >= 9){
                // this button will change the image back
                changeImageToEvolved()
            }else{
                // if no other conditionals have been met, this button will change the image back
                changeImageBack()
            }
        }
    }
// a function to put the pet to sleep
    lights() {
        // if the sleepiness is 0
        if(tamagotchi.sleepiness[0] === 0){
            // alert the user
            alert(petName + " isn't tired right now.")
        }else{
            // if the image is the regular image
            if(document.getElementById("regular").src === regularImage) {
                //subtract 1 from sleepiness
                sleepinessElement.innerHTML = tamagotchi.sleepiness[0]--
            // change the image to the sleep image
                document.getElementById("regular").src = sleepImage
            // else if the image displayed is the evolved image
            }else if(document.getElementById("regular").src === evolvedImage){
                // subtract 1 from sleepiness  
            sleepinessElement.innerHTML = tamagotchi.sleepiness[0]--
                // and change the image
                document.getElementById("regular").src = sleepImage
                // after 15 seconds, change the image back
                setTimeout(changeImageToEvolved, 15000)
                // if the pet is not alive
            }else if(document.getElementById("regular").src === unAlivedImage){
                // then alert the user
                alert(petName + " can't sleep anymore!" + petName + " is gone!")
                // otherwise if the tamagotchi is older than 9
            }else if(tamagotchi.age[0] > 9){
                // change image back to evolved
                changeImageToEvolved()
            }else{
                changeImageBack()
            }
        }
    }
// adding a new function that will make the pet workout
    workout() {
        // if the health is less than 10
        if(tamagotchi.health[0] <= 10){
            // then run this conditional
            // if the image is the regular image
                if(document.getElementById("regular").src === regularImage){
                    // then add 1 to health
                healthElement.innerHTML = tamagotchi.health[0]++
                // and change the image to workout image
                document.getElementById("regular").src = workoutImage
                // else if the image displayed is the evolved image
            }else if(document.getElementById("regular").src === evolvedImage){
                // add 1 to health
                healthElement.innerHTML = tamagotchi.health[0]++
                // and display the workout image
                document.getElementById("regular").src = workoutImage
                // after 15 seconds, change the image back to evolved
                setTimeout(changeImageToEvolved, 15000)
                // if the image displayed is of the unalived pet
            }else if(document.getElementById("regular").src === unAlivedImage){
                // alert the user
                alert(petName + " can't workout anymore!" + petName + " is gone!")
                // if the tamagotchi is older than 9
            }else if(tamagotchi.age[0] > 9){
                // then change to evolved image
                changeImageToEvolved()
            }else{
                // or change the image back if no other conditionals are met
                changeImageBack()
            }
            // if the health is maxed out
        }else{
            // alert the user
            alert("You have overworked " + petName + "! You're the worst person ever, and you should think about your actions!")
            // and display the death screen
            deathScreen()
        }
    }
// a function that ages the pet up
    ageUp() {
        // if the age is less than 10, and the image displayed is not the deceased image
        if(tamagotchi.age[0] < tamagotchi.age[1]  && document.getElementById("regular").src !== unAlivedImage || 
        // or if the age is less than 20, and the image displayed is the not the deceased image
        tamagotchi.age[0] < tamagotchi.age[2] && document.getElementById("regular").src !== unAlivedImage){
            // add 1 to the age
            ageElement.innerHTML = tamagotchi.age[0]++
            // if the pet is 10
        }else if(tamagotchi.age[0] === tamagotchi.age[1]){
            // add 1
            ageElement.innerHTML = tamagotchi.age[0]++
            // alert the user
            alert(petName + " has become an adult!")
            // and change the image to evolved
            document.getElementById("regular").src = evolvedImage
            // if the age is less than 20 and the image is the deceased image
        }else if(document.getElementById("regular").src === unAlivedImage){
            // console log
            console.log(petName + " is no more")
            // if the age is 20
        }else if(tamagotchi.age[0] === tamagotchi.age[2]){
            // deathscreen
            deathScreen()
            // old age alert
            alert(petName + " has died of old age! you were a good parent!")
        }else{
            console.log(petName + " is busy!")
    }
}
// a function that increases the pet's hunger
    hungerUp() {
        // a conditional statement that says when the hunger is less than 10 and the image is not the unalived image
        if(tamagotchi.hunger[0] < tamagotchi.hunger[1] && document.getElementById("regular").src !== unAlivedImage){
            // add 1 to the hunger
            hungerElement.innerHTML = tamagotchi.hunger[0]++
            // if the image is the unalived image
        }else if(document.getElementById("regular").src === unAlivedImage){
            // console.log
            console.log(petName + " is no more")
            // if the hunger is equal to the maximum hunger set
        }else if(tamagotchi.hunger[0] === tamagotchi.hunger[1]){
            // alert the user
            alert(petName + " has died of hunger!")
            // and display the death screen
            deathScreen()
            //if the image displayed is the feed image
        }else if(document.getElementById("regular").src === feedImage){
            // do nothing
            console.log(petName + " is eating!")
        }else{
           console.log(petName + " is busy!")
        }
    }
    // a function that increases the pet's boredom
    boredomUp() {
        // a conditional statement that says if the boredom is less than 10, and the image is not the deceased image
        if(tamagotchi.boredom[0] < tamagotchi.boredom[1] && document.getElementById("regular").src !== unAlivedImage){
            // add 1 to boredom
            boredomElement.innerHTML = tamagotchi.boredom[0]++
            // if the image is the unalived image
        }else if(document.getElementById("regular").src === unAlivedImage){
            // console.log
            console.log(petName + " is no more")
            // if the boredom is maxed out
        }else if(boredomElement === tamagotchi.boredom[1]){
            // alert the user
            alert(petName + " has died of boredom! Congratulations, this is the secret ending!")
            // invoke deathscreen function
            deathScreen()
            // if the image is the play image
        }else if(document.getElementById("regular").src === playImage){
            // do nothing
            console.log(petName + " is playing!")
        }else{
            console.log(petName + " is busy!")
        }
    }
// a function that increases the pet's sleep
    sleepUp() {
        // a conditional that says that if the sleep is less than 10, and the image is not the deceased one
        if(tamagotchi.sleepiness[0] < tamagotchi.sleepiness[1] && document.getElementById("regular").src !== unAlivedImage){
            // add 1 to sleepiness
            sleepinessElement.innerHTML = tamagotchi.sleepiness[0]++
            // if the image displayed is the deceased image
        }else if(document.getElementById("regular").src === unAlivedImage){
            // console.log
            console.log(petName + " is no more")
            // if the sleepiness is maxed out
        }else if(sleepinessElement === tamagotchi.sleepiness[1]){
            // alert the user
            alert(petName + " has died of sleepiness!")
            // invoke deathscreen
            deathScreen()
            // if the image is the sleep image
        }else if(document.getElementById("regular").src === sleepImage){
            // do nothing
            console.log(petName + " is sleeping!")
        }else{
            console.log(petName + " is busy")
        }
    }
// a function that decreases the pet's health (just to make it more fun!)
    healthDown() {
        // if the health is greater than 5, and the image is not the deceased one
        if(tamagotchi.health[0] > tamagotchi.health[1] && document.getElementById("regular").src !== unAlivedImage){
            // subtract 1 from health
            healthElement.innerHTML = tamagotchi.health[0]--
            // and alert the user about pollution
            alert("Pollution makes " + petName + "'s health get lower! Make sure he works out to keep him healthy!")
            // if the image is the deceased image
        }else if(document.getElementById("regular").src === unAlivedImage){
            // console.log
            console.log(petName + " is no more")
            // if the health is zereoed out
        }else if(healthElement === tamagotchi.health[1]){
            // invoke death screen
            deathScreen()
            // and alert the user about climate change
            alert(petName + " has died from overpollution! Dedicate yourself to climate change since his sad face has you so moved!")
            // if the image is the workout image
        }else if(document.getElementById("regular").src === workoutImage){
            // do nothing
            console.log(petName + " is working out!")
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

// assigning where in the HTML the metrics will be displayed
const hungerElement = document.getElementById("hunger")
hungerElement.innerHTML = tamagotchi.hunger[0]

const sleepinessElement = document.getElementById("sleepiness")
sleepinessElement.innerHTML = tamagotchi.sleepiness[0]

const boredomElement = document.getElementById("boredom")
boredomElement.innerHTML = tamagotchi.boredom[0]

const ageElement = document.getElementById("age")
ageElement.innerHTML = tamagotchi.age[0]

const healthElement = document.getElementById("health")
healthElement.innerHTML = tamagotchi.health[0]

// assigning my functions to the buttons in my HTML file
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
// another function to change the image back after the pet has become an adult
function changeImageToEvolved() {
    document.getElementById("regular").src = evolvedImage
}

// a function to change the screen properties to the death screen
function deathScreen() {
    ageElement.innerHTML = tamagotchi.age[3]
    boredomElement.innerHTML = tamagotchi.boredom[2]
    sleepinessElement.innerHTML = tamagotchi.sleepiness[2]
    hungerElement.innerHTML = tamagotchi.hunger[2]
    healthElement.innerHTML = tamagotchi.health[2]
    aliveElement.innerHTML = tamagotchi.alive[1]
    document.getElementById("regular").src = unAlivedImage
}

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

// a function to animate the pet
function animate() {
    if(document.getElementById("regular").src === regularImage || document.getElementById("regular").src === evolvedImage){// using jquery, go up 5%
        $("img").animate({
            top:"-65%",
        })// then down 5%
        $("img").animate({
            top:"-60%"
        })
    }else{
        console.log(petName + " is busy")
    }
}

// invoking my animate function in a set interval
setInterval(animate, 4000)
//invoking my checkalive function in a set interval
setInterval(checkAlive, 1000)
// a function that will console.log if the pet is alive
function checkAlive() {
    if (document.getElementById("regular").src === unAlivedImage){
        console.log("i'm dead")
    }else{
        console.log("i'm alive")
    }
}
// these are the setInterval functions that control all of the game time mechanice
setInterval(tamagotchi.ageUp, 30000)
setInterval(tamagotchi.hungerUp, 30000)
setInterval(tamagotchi.boredomUp, 600000)
setInterval(tamagotchi.healthDown, 60000)
setInterval(tamagotchi.sleepUp, 120000)

// an alert to let the user know what's up
alert("Press any button to begin!")

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
// i thought i would use this in my animate function, but i did not end up needing it!, the animate function ended up  making him look like he was jumping up and down, so i was satisfied with the way it looked!
// another function to return the animation to it's place
// will be used as a callback
// function returnSprite() {
//     $("img").animate({
//         top:"-50"
//     })
// }