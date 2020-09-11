
// Detecting HTML boutton press (JQuery update)

$(".drum").click(function (){

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    console.log("You clicked the " + "'" + buttonInnerHTML + "'" + " button");



  } );


// Detecting keyboard key press (JQuery update)
$(document).keypress(function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
    console.log("You pressed the " + "'" + event.key + "'" + " key");

});

// Apply sound function
function makeSound (key){

switch (key){
    case "a" :
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;
    case "z" :
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;

    case "e" :
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;
    case "r" :
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;
    case "t" :
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;
    case "y" :
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;
    case "u" :
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;

    default : console.log(buttonInnerHTML);

};


// Apply pression CSS class effect with a fading timeout (JQuery updated)

}

function buttonAnimation(currentKey) {
   
    var press = currentKey + ':hover';

    $('.' + currentKey).addClass("pressed press");

    setTimeout (function(){
        $('.' + currentKey).removeClass("pressed press");
    }, 100);
   // The hover part still need some work

}