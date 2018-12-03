
let randomNumber1=Math.floor(Math.random()*6+1)
console.log(randomNumber1)


let randomDiceImgSrc1=`./images/dice${randomNumber1}.png`
// let imageSrc=`./images/${randomDiceImg}`
let image1=document.querySelectorAll("img")[0]
image1.setAttribute("src",randomDiceImgSrc1)


let randomNumber2=Math.floor(Math.random()*6+1)

let randomImageSrc2=`./images/dice${randomNumber2}.png`
let image2=document.querySelectorAll("img")[1]
image2.setAttribute("src",randomImageSrc2)

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML=("player 1 wins")
}else if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML=("Its a draw")
}else{
    document.querySelector("h1").innerHTML=("Player 2 wins")
}


// if(randomNumber1===1){
//     document.querySelector(".img1").setAttribute("src","./images/dice1.png")
// }
// if(randomNumber1===2){
//     document.querySelector(".img1").setAttribute("src","./images/dice2.png")
// }
// if(randomNumber1===3){
//     document.querySelector(".img1").setAttribute("src","./images/dice3.png")
// }
// if(randomNumber1===4){
//     document.querySelector(".img1").setAttribute("src","./images/dice4.png")
// }
// if(randomNumber1===5){
//     document.querySelector(".img1").setAttribute("src","./images/dice5.png")
// }
// if(randomNumber1===6){
//     document.querySelector(".img1").setAttribute("src","./images/dice6.png")
// }


// let randomNumber2=Math.floor(Math.random()*6+1)
// console.log(randomNumber2)

// if(randomNumber2===1){
//     document.querySelector(".img2").setAttribute("src","./images/dice1.png")
// }
// if(randomNumber2===2){
//     document.querySelector(".img2").setAttribute("src","./images/dice2.png")
// }
// if(randomNumber2===31){
//     document.querySelector(".img2").setAttribute("src","./images/dice3.png")
// }
// if(randomNumber2===4){
//     document.querySelector(".img2").setAttribute("src","./images/dice4.png")
// }
// if(randomNumber2===5){
//     document.querySelector(".img2").setAttribute("src","./images/dice5.png")
// }
// if(randomNumber2===6){
//     document.querySelector(".img2").setAttribute("src","./images/dice6.png")
// }

// if(randomNumber1>randomNumber2){
//     document.querySelector("h1").innerHTML=("player 1 wins")
// }else if(randomNumber1===randomNumber2){
//     document.querySelector("h1").innerHTML=("Its a draw")
// }else{
//     document.querySelector("h1").innerHTML=("Player 2 wins")
//}