for(var i = 0;i < document.querySelectorAll("button").length;i++){
    
    document.querySelectorAll("button")[i].addEventListener("click",function (){
        
        var letter = this.innerHTML;
        playSound(letter)
        buttonAnimation(letter);
    });
}

document.addEventListener("keypress", function (event){
    let letter = event["key"]
    
    playSound(letter);
    buttonAnimation(letter);
})

function playSound(key){
    let audio = new Audio();

    switch(key){
        case "w":
                audio = new Audio("sounds/tom-1.mp3");
            break
        case "a":
                audio = new Audio("sounds/tom-2.mp3");
            break
        case "s":
                audio = new Audio("sounds/tom-3.mp3");
            break
        case "d":
                audio = new Audio("sounds/tom-4.mp3");
            break
        case "j":
                audio = new Audio("sounds/snare.mp3");
            break
        case "k":
                audio = new Audio("sounds/crash.mp3");
            break
        case "l":
                audio = new Audio("sounds/kick-bass.mp3");
            break
    }
    audio.play();
}

function buttonAnimation(key){
    var className = "." + key
    var button = document.querySelector(className);
    button.classList.add("pressed");
    setTimeout(function (){
        button.classList.remove("pressed");
    },100);
}

function clearFromClassList(button){
    
    
    
}
