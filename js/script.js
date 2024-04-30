// alert("Hello World!")
// a class for my pet
class Pet {
    constructor(name){
        name = this.name
    }
// arrays for the conditionals
    health = [5, 1, "dead"]

    hunger = [5, 9, "dead"]

    sleepiness = [5, 9, "dead"]

    boredom = [5, 9, "dead"]

    age = [0, 9, 20, "dead"]
// declaring the variables for the images
// all of the gifs came directly from GIPHY
// i did not make them, and i do not own any of the properties associated with any of them
    regularImage = "https://i.giphy.com/nrY3TgN3JNbUs.webp"
    feedImage = "https://i.giphy.com/1iqhMAmOgfQRd9M5Va.webp"
    evolvedImage = "https://i.giphy.com/dtBleLxGbWhKfzySB7.webp"
    playImage = "https://i.giphy.com/nPu9aQYq1dQbu.webp"
    sleepImage = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWp4aW1xNjU0YnJ4MGxkeHY0Y3RuaWQ2ajhxOGpidzEwOHd0aG82ciZlcD12MV9naWZzX3NlYXJjaCZjdD1z/oaCM98FQcTl5qbs4kb/giphy.webp"
    workoutImage = "https://media4.giphy.com/media/xOcAp5kMjBlHvp53gw/giphy.webp?cid=ecf05e477wku79zdx2x9pe1en5vausp72yx5sgwigmhywlso&ep=v1_gifs_search&rid=giphy.webp&ct=s"
    unAlivedImage = "https://media0.giphy.com/media/tfnfQi1gFonKZWmt2c/giphy.webp?cid=ecf05e4739iv3hb392bcm4fc7xzh3z8ibnbayswak70t8766&ep=v1_gifs_search&rid=giphy.webp&ct=s"
    loadImage = "https://i.giphy.com/BY8egIHeBq4Tu.webp"
// a function that feeds the pet
    feed() {
        // if the hunger is greater than 1, and if the image displayed is either regular or evolved
        if(tamagotchi.hunger[0] > 1 && document.getElementById("regular").src === tamagotchi.regularImage || tamagotchi.hunger[0] > 1 && document.getElementById("regular").src === tamagotchi.evolvedImage){
        // then subract from the hunger
            tamagotchi.hunger[0] -= 1
        // display it in the HTML
            hungerElement.innerHTML = tamagotchi.hunger[0]
        // change the source to the feed image
            document.getElementById("regular").src = tamagotchi.feedImage
        // if the image displayed is the deceased image
        }else if(document.getElementById("regular").src === tamagotchi.unAlivedImage){
        // alert the user
            alert(petName + " can't eat anymore!" + petName + " is gone!")
        // if the hunger is 1 and the image is either the evolved or regular image
        }else if(tamagotchi.hunger[0] === 1 && document.getElementById("regular").src === tamagotchi.regularImage || tamagotchi.hunger[0] === 1 && document.getElementById("regular").src === tamagotchi.evolvedImage){
        // alert the user
            alert("You have overfed " + petName + "! How awful!")
        // and initiate the deathscreen
            tamagotchi.deathScreen()
        // if the tamagotchi is older than 9 and no other conditionals have been met
        }else if(tamagotchi.age[0] > tamagotchi.age[1]){
        // change image back
            tamagotchi.changeImageToEvolved()
        // else
        }else{
        // change image back
            tamagotchi.changeImageBack()
        }
    }
// a function to modify the boredom element
    play() { 
        // if the boredom is greater than 1 and if the image is either regular or evolved
        if(tamagotchi.boredom[0] > 1 && document.getElementById("regular").src === tamagotchi.regularImage || tamagotchi.boredom[0] > 1 && document.getElementById("regular").src === tamagotchi.evolvedImage){
        // subtract one form boredom
            tamagotchi.boredom[0] -= 1
        // display it in the HTML
            boredomElement.innerHTML = tamagotchi.boredom[0]
        // and change the image to the play image
            document.getElementById("regular").src = tamagotchi.playImage
        // if the health is equal to 1 and the source image is the regular image or the evolved image
        }else if(tamagotchi.boredom[0] === 1 && document.getElementById("regular").src === tamagotchi.regularImage || tamagotchi.boredom[0] === 1 && document.getElementById("regular").src === tamagotchi.evolvedImage){
            //invoke deathscreen
            tamagotchi.deathScreen()
            // alert the user
            alert("You played too much with " + petName + "! how awful!")
        }else if(document.getElementById("regular").src === tamagotchi.unAlivedImage){
        // alert the user
            alert(petName + " can't play anymore!" + petName + " is gone!")
        // if the pet is older than 9
        }else if(tamagotchi.age[0] > tamagotchi.age[1]){
        // change image to evolved
            tamagotchi.changeImageToEvolved()
        }else{
        // change image back
            tamagotchi.changeImageBack()
        }
    }
// a function to put the pet to sleep
    lights() {
        // if the sleepiness is more than 1 and the image is either regular or evolved
        if(tamagotchi.sleepiness[0] > 1 && document.getElementById("regular").src === tamagotchi.regularImage || tamagotchi.sleepiness[0] > 1 && document.getElementById("regular").src === tamagotchi.evolvedImage) {
        //subtract 1 from sleepiness
            tamagotchi.sleepiness[0] -= 1
        // display it in the HTML
            sleepinessElement.innerHTML = tamagotchi.sleepiness[0]
        // change the image to the sleep image
            document.getElementById("regular").src = tamagotchi.sleepImage
        // if the sleep is 1 and the image is either the regular or evolved image
        }else if(tamagotchi.sleepiness[0] === 1 && document.getElementById("regular").src === tamagotchi.regularImage || tamagotchi.sleepiness[0] === 1 && document.getElementById("regular").src === tamagotchi.evolvedImage){
            // initiate deathscreen
            tamagotchi.deathScreen()
            // alert the user
            alert(petName + " has slept to death! Tragic!")
            // if the image is the deceased image
        }else if(document.getElementById("regular").src === tamagotchi.unAlivedImage){
        // then alert the user
            alert(petName + " can't sleep anymore!" + petName + " is gone!")
        // otherwise if the tamagotchi is older than 9
        }else if(tamagotchi.age[0] > tamagotchi.age[1]){
        // change image back to evolved
            tamagotchi.changeImageToEvolved()
        }else{
            tamagotchi.changeImageBack()
        }        
    }
// adding a new function that will make the pet workout
    workout() {
        // if the health is less than 9 and the image is either regular or evolved
        if(tamagotchi.health[0] < 9 && document.getElementById("regular").src === tamagotchi.regularImage || tamagotchi.health[0] < 9 && document.getElementById("regular").src === tamagotchi.evolvedImage){
        // then add 1 to health
            tamagotchi.health[0] += 1
        // display it in the HMTL
            healthElement.innerHTML = tamagotchi.health[0]
        // and change the image to workout image
            document.getElementById("regular").src = tamagotchi.workoutImage
        // else if the image displayed is the evolved image
        }else if(tamagotchi.health[0] === 9 && document.getElementById("regular").src === tamagotchi.regularImage || tamagotchi.health[0] === 9 && document.getElementById("regular").src === tamagotchi.evolvedImage){
            // invoke deathscreen
            tamagotchi.deathScreen()
            // alert the user
            alert("You have overworked " + petName + "! How terrible!")
        }else if(document.getElementById("regular").src === tamagotchi.unAlivedImage){
        // alert the user
            alert(petName + " can't workout anymore!" + petName + " is gone!")
        // if the tamagotchi is older than 9
        }else if(tamagotchi.age[0] > tamagotchi.age[1]){
        // then change to evolved image
            tamagotchi.changeImageToEvolved()
        }else{
        // or change the image back if no other conditionals are met
            tamagotchi.changeImageBack()
        }
    }
// a function that ages the pet up
    ageUp() {
        // if the age is less than 9, and the image displayed is not the deceased image
        if(tamagotchi.age[0] < tamagotchi.age[1]  && document.getElementById("regular").src !== tamagotchi.unAlivedImage || 
        // or if the age is more than 9, less than 20, and the image displayed is the not the deceased image
        tamagotchi.age[0] > tamagotchi.age[1] && tamagotchi.age[0] < tamagotchi.age[2] && document.getElementById("regular").src !== tamagotchi.unAlivedImage){
            // add 1 to the age
            tamagotchi.age[0] += 1
            ageElement.innerHTML = tamagotchi.age[0]
            // if the pet is 10
        }else if(tamagotchi.age[0] === tamagotchi.age[1] && document.getElementById("regular").src !== tamagotchi.unAlivedImage){
            // add 1
            tamagotchi.age[0] += 1
            // display it in the HTML
            ageElement.innerHTML = tamagotchi.age[0]
            // alert the user
            alert(petName + " has become an adult!")
            // and change the image to evolved
            document.getElementById("regular").src = tamagotchi.evolvedImage
            // if the age is less than 20 and the image is the deceased image
        }else if(document.getElementById("regular").src === tamagotchi.unAlivedImage){
            // console log
            console.log(petName + " is no more")
            // if the age is 20
        }else if(tamagotchi.age[0] === tamagotchi.age[2]){
            // deathscreen
            tamagotchi.deathScreen()
            // old age alert
            alert(petName + " has died of old age! you were a good parent!")
            // else
        }else{
            console.log(petName + " is busy!")
    }
}
// a function that increases the pet's hunger
    hungerUp() {
        // a conditional statement that says when the hunger is less than 10 and the image is not the unalived image or the feed image
        if(tamagotchi.hunger[0] < tamagotchi.hunger[1] && document.getElementById("regular").src !== tamagotchi.unAlivedImage && document.getElementById("regular").src !== tamagotchi.feedImage){
            // add 1 to the hunger
            tamagotchi.hunger[0] += 1
            // and display it in the HTML
            hungerElement.innerHTML = tamagotchi.hunger[0]
            // if the image is the unalived image
        }else if(document.getElementById("regular").src === tamagotchi.unAlivedImage){
            // console.log
            console.log(petName + " is no more")
            // if the hunger is equal to the maximum hunger set
        }else if(tamagotchi.hunger[0] === tamagotchi.hunger[1]){
            // alert the user
            alert(petName + " has died of hunger!")
            // and display the death screen
            tamagotchi.deathScreen()
            // if the hunger is less than 10, and if the image displayed is the feed image
        }else if(tamagotchi.hunger[0] < tamagotchi.hunger[1] && document.getElementById("regular").src === tamagotchi.feedImage){
            // subtract 1 from the hunger function
            tamagotchi.hunger[0] -= 1
            //display the element in the HTML 
            hungerElement.innerHTML = tamagotchi.hunger[0]        
        }else{
           console.log(petName + " is busy!")
        }
    }
    // a function that increases the pet's boredom
    boredomUp() {
        // a conditional statement that says if the boredom is less than 10, and the image is not the deceased image or the play image
        if(tamagotchi.boredom[0] < tamagotchi.boredom[1] && document.getElementById("regular").src !== tamagotchi.unAlivedImage && document.getElementById("regular").src !== tamagotchi.playImage){
            // add 1 to boredom
            tamagotchi.boredom[0] += 1
            // and display it in the HTML
            boredomElement.innerHTML = tamagotchi.boredom[0]
            // if the image is the unalived image
        }else if(document.getElementById("regular").src ===tamagotchi. unAlivedImage){
            // console.log
            console.log(petName + " is no more")
            // if the boredom is maxed out
        }else if(tamagotchi.boredom[0] === tamagotchi.boredom[1]){
            // alert the user
            alert(petName + " has died of boredom! Congratulations, this is the secret ending!")
            // invoke deathscreen function
            tamagotchi.deathScreen()
            // if the image is the play image
        }else if(tamagotchi.boredom[0] < tamagotchi.boredom[1] && document.getElementById("regular").src === tamagotchi.playImage){
            // subtract 1 from the boredom
            tamagotchi.boredom[0] -= 1
          // display it in the HTML
            boredomElement.innerHTML = tamagotchi.boredom[0]
        }else{
            console.log(petName + " is busy!")
        }
    }
// a function that increases the pet's sleep
    sleepUp() {
        // a conditional that says that if the sleep is less than 10, and the image is not the deceased one or the sleep image
        if(tamagotchi.sleepiness[0] < tamagotchi.sleepiness[1] && document.getElementById("regular").src !== tamagotchi.unAlivedImage && document.getElementById("regular").src !== tamagotchi.sleepImage){
            // add 1 to sleepiness
            tamagotchi.sleepiness[0] += 1
            // and display it in the HTML
            sleepinessElement.innerHTML = tamagotchi.sleepiness[0]
            // if the image displayed is the deceased image
        }else if(document.getElementById("regular").src === tamagotchi.unAlivedImage){
            // console.log
            console.log(petName + " is no more")
            // if the sleepiness is maxed out
        }else if(sleepinessElement === tamagotchi.sleepiness[1]){
            // alert the user
            alert(petName + " has died of sleepiness!")
            // invoke deathscreen
            tamagotchi.deathScreen()
            // if the image is the sleep image
        }else if(tamagotchi.sleepiness[0] < tamagotchi.sleepiness[1] && document.getElementById("regular").src === tamagotchi.sleepImage){
            // subtract 1
            tamagotchi.sleepiness[0] -= 1
            // display it in the HTML
            sleepinessElement.innerHTML = tamagotchi.sleepiness[0]
        }else{
            console.log(petName + " is busy")
        }
    }
// a function that decreases the pet's health (just to make it more fun!)
    healthDown() {
        // if the health is greater than 5, and the image is not the deceased one or the workout image, and the age is less than or equal to 9
        if(tamagotchi.health[0] > tamagotchi.health[1] && document.getElementById("regular").src !== tamagotchi.
        unAlivedImage && tamagotchi.age[0] <= tamagotchi.age[1] && document.getElementById("regular").src !== tamagotchi.workoutImage){
            // subtract 1 from health
            tamagotchi.health[0] -= 1
            // and display it in the HTML
            healthElement.innerHTML = tamagotchi.health[0]
            // and alert the user about pollution
            alert("Pollution makes " + petName + "'s health get lower! Make sure he works out to keep him healthy!")
            // if the same as above applies, but the tamagotchi age is greater than 9
        }else if(tamagotchi.health[0] > tamagotchi.health[1] && document.getElementById("regular").src !== tamagotchi.unAlivedImage && tamagotchi.age[0] > tamagotchi.age[1] && document.getElementById("regular").src !== tamagotchi.workoutImage){
            // subtract 2 from health
            tamagotchi.health[0] -= 2
            // display it in the HTML
            healthElement.innerHTML = tamagotchi.health[0]
            // and alert the user
            alert("Oh no! In " + petName + "'s age, pollution is getting worse! He'll need to work out twice as hard to stay fit!")
            // if the image source is the unalived image
        }else if(document.getElementById("regular").src === tamagotchi.unAlivedImage){
            // console.log
            console.log(petName + " is no more")
            // if the health is zereoed out
        }else if(tamagotchi.health[0] === tamagotchi.health[1]){
            // invoke death screen
            tamagotchi.deathScreen()
            // and alert the user about climate change
            alert(petName + " has died from overpollution! Dedicate yourself to climate change since his sad face has you so moved!")
            // if the image is the workout image
        }else if(tamagotchi.health[0] > tamagotchi.health[1] && document.getElementById("regular").src === tamagotchi.workoutImage){
            // add 1 to the health element
            tamagotchi.health[0] += 1
            // display it in the HTML
            healthElement.innerHTML = tamagotchi.health[0]
        }else{
            console.log(petName + " is busy")
        }
    }
// a function to animate the pet
    animate() {
        // if the pet is either regular or evolved image
        if(document.getElementById("regular").src === tamagotchi.regularImage || document.getElementById("regular").src === tamagotchi.evolvedImage){
            // using jquery, go up 5%
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
// a function to change the screen properties to the death screen
    deathScreen() {
        ageElement.innerHTML = tamagotchi.age[3]
        boredomElement.innerHTML = tamagotchi.boredom[2]
        sleepinessElement.innerHTML = tamagotchi.sleepiness[2]
        hungerElement.innerHTML = tamagotchi.hunger[2]
        healthElement.innerHTML = tamagotchi.health[2]
        document.getElementById("regular").src = tamagotchi.unAlivedImage
    }
// a function to change the image back
    changeImageBack() {
        document.getElementById("regular").src = tamagotchi.regularImage
    }
// a function to change the image back after the pet has become an adult
    changeImageToEvolved() {
        document.getElementById("regular").src = tamagotchi.evolvedImage
    }
// a function to change the screen properties back to the initialization screen
    startScreen() {
        // a conditional stating that if the image is the unalived image
        if(document.getElementById("regular").src === tamagotchi.unAlivedImage){
        // reset the properties
        tamagotchi.health[0] = 5
        tamagotchi.hunger[0] = 5
        tamagotchi.sleepiness[0] = 5
        tamagotchi.boredom[0] = 5
        tamagotchi.age[0] = 0
        tamagotchi.age[1] = 9
        // display them in the HTML
        healthElement.innerHTML = tamagotchi.health[0]
        hungerElement.innerHTML = tamagotchi.hunger[0]
        sleepinessElement.innerHTML = tamagotchi.sleepiness[0]
        boredomElement.innerHTML = tamagotchi.boredom[0]
        ageElement.innerHTML = tamagotchi.age[0]
        // and change the photo back to the load screen photo
        document.getElementById("regular").src = tamagotchi.loadImage
        }else{
            alert("Let's give " + petName + " a shot before we reset!")
        }
    }
}

// instantiating my new tamagotchi
const tamagotchi = new Pet("")

// prompting the user with a petname
// declaring that prompted name as a variable
// displaying it in the HTML
const petName = prompt("What would you like to name your pet?")
const nameElement = document.getElementById("name")
nameElement.innerHTML =  petName

// assigning where in the HTML the metrics will be displayed
const hungerElement = document.getElementById("hunger")
hungerElement.innerHTML = tamagotchi.hunger[0]

// assign the sleep element to a variable and displaying it
const sleepinessElement = document.getElementById("sleepiness")
sleepinessElement.innerHTML = tamagotchi.sleepiness[0]

// assign the boredom variable to an HTML element and displaying it
const boredomElement = document.getElementById("boredom")
boredomElement.innerHTML = tamagotchi.boredom[0]

// assign the age variable to a HTML element and display it in the HTML
const ageElement = document.getElementById("age")
ageElement.innerHTML = tamagotchi.age[0]

// assign the age health variable to an HTML element and display it in the HTML
const healthElement = document.getElementById("health")
healthElement.innerHTML = tamagotchi.health[0]

// assign the feed button to a  variable
const feedElement = document.getElementById("feed")

// assign the function to the feed button
feedElement.addEventListener("click", tamagotchi.feed)

// assign the play button to a variable
const playElement = document.getElementById("play")

// assign the function to the play button
playElement.addEventListener("click", tamagotchi.play)

// assign the lights button to a variable
const lightsElement = document.getElementById("lights")

// assign the function to the lightsbutton
lightsElement.addEventListener("click", tamagotchi.lights)

// assign the workout button to a variable
const workoutElement = document.getElementById("workout")

// assign the function to the workout button
workoutElement.addEventListener("click", tamagotchi.workout)

// assign the reset button to a variable
const resetElement = document.getElementById("restart")

// assign the function to the restart button
resetElement.addEventListener("click", tamagotchi.startScreen)

// invoking my functions with setIntervals
// I can edit any of them to change the game time
// for my animate function, it goes off every 4 seconds
setInterval(tamagotchi.animate, 4000)
// my ageUp function is every 20 seconds
setInterval(tamagotchi.ageUp, 20000)
// hungerUp function is also every 15 seconds
setInterval(tamagotchi.hungerUp, 15000)
// boredom goes up every 1.5 minutes (i wanted it to be very difficult to die of boredon)
setInterval(tamagotchi.boredomUp, 90000)
// health goes down 30 seconds
setInterval(tamagotchi.healthDown, 30000)
// sleep goes up every 45 seconds
setInterval(tamagotchi.sleepUp, 45000)

// an alert to let the user know what's up
alert("Press any button to begin!")