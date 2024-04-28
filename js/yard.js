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