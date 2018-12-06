


// function handleClick(){
//     alert("I got clicked")
// }

// document.querySelector(".set").addEventListener('click',(e)=>{
//     if(e.target.classList.contains("drum")){
//         // let audio=new Audio("./sounds/tom-1.mp3")
//         // audio.play()
//         console.log(e.target)
//     }
// })

let drumButtons= document.querySelectorAll(".drum").length

for (i=0;i<drumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener('click',function(){
        // this.style.color="white"
        let buttonHTML=this.innerHTML
        makeSound(buttonHTML)
        buttonAnimation(buttonHTML)
    })
}

document.addEventListener('keypress',function(e){
  makeSound(event.key)
  buttonAnimation(event.key)
})
function makeSound(key){

    switch (key) {
        case 'w':
            var tom1=new Audio('./sounds/tom-1.mp3')
            tom1.play()    
            break;
        case 'a':
            var tom2=new Audio('./sounds/tom-2.mp3')
            tom2.play()
            break;
        case 's':
            var tom3=new Audio('./sounds/tom-3.mp3')
            tom3.play()
            break;
        case 'd':
            var tom4=new Audio('./sounds/tom-4.mp3')
            tom4.play()
                break;
        case 'j':
            var snare=new Audio('./sounds/snare.mp3')
            snare.play()
            break;
        case 'k':
            var crash=new Audio('./sounds/crash.mp3')
            crash.play()
            break;
        case 'l':
            var kick=new Audio('./sounds/kick-bass.mp3')
            kick.play()
            break;
        
    
        default:
            console.log(buttonHTML)
            break;
    }
}
function buttonAnimation(currentKey){
   let  activBtn=document.querySelector("."+currentKey)
   activBtn.classList.add("pressed")
   setTimeout(() => {
       activBtn.classList.remove("pressed")
   }, 100);
}