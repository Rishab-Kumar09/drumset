// function clickfunction(){
//     var drum1 = new Audio('./sounds/tom-1.mp3');
//     drum1.play();
    /*  new Audio creates a new audio element inside html.
        this audio element is then assigned the sound given inside the string.
        .play() is an inbuilt function to play audio.
    */
// }

// document.querySelector(".w").addEventListener("click", clickfunction);

/*addEventListener listens (or performs a function) to the action defined. 
  like in the above code, we added an event listerner to w, telling it to
  give an alert when it is clicked by mouse.
  The syntax usually is .addEventListener("some_action_performed_by_user",functionname_to_be_executed);
  Note that we dont use '()' with function name in .addEventListener method.
  This is because is we used (), the function will be immediately called irrespective of button pressed or not.
*/

/* another (and most common) way of adding an eventListener
document.querySelector(".a").addEventListener("click", function(){
    var audio = new Audio('./sounds/tom-1.mp3');
    audio.play();
});

*/

//challenge - to add the click function to all buttons at once
// var totaldrums = document.querySelectorAll(".drum").length

// for (var i=0;i<totaldrums;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//         this.style.color="white";
//         // 'this' is an inbuilt keyword that will tell us which button is displayed.
//     });

// }
// var audio = new Audio('./sounds/tom-1.mp3');
// audio.play();

/* in the above loop, insted of a number in the upper limit, we have given it the upper limit running 
   till all the items with drum class have been assigned the function.
   And lower limit is 2 because we have already assigned arert to index 0 and 1  i.e. w and a.
*/

/* Now let us try to play different sound when different button is clickek.
   the most effective way is switch case instead of if else.
*/

function buttonSound(key){
    switch (key) {
        case "w":
            var drum1 = new Audio('./sounds/tom-1.mp3');
            drum1.play();
            break;
        
        case "a":
            var drum2 = new Audio('./sounds/tom-2.mp3');
            drum2.play();
            break;
        case "s":
            var drum3 = new Audio('./sounds/tom-3.mp3');
            drum3.play();
            break;
        case "d":
            var drum4 = new Audio('./sounds/tom-4.mp3');
            drum4.play();
            break;

        case "j":
            var drum5 = new Audio('./sounds/crash.mp3');
            drum5.play();
            break;

        case "k":
            var drum6 = new Audio('./sounds/kick-bass.mp3');
            drum6.play();
            break;
        
        case "l":
            var drum7 = new Audio('./sounds/snare.mp3');
            drum7.play();
            break;

        default:
            console.log(key);
            break;
    }
}

var totaldrums = document.querySelectorAll(".drum").length;
for (var i=0;i<totaldrums;i++){
        document.querySelectorAll(".drum")[i].addEventListener("click",function(){
            var buttonname = this.innerHTML;
            buttonSound(buttonname);
        });
}


// now let us track the key presses from the keyboard

/* document.addEventListener("keydown",function(){
        alert("A key was pressed.");
   });
*/

// above code will detect key presses from all the keys. Now let us see how to check which key is pressed?

/* My challenge - let us try to add the audio to the key presses. 
    For this, we should remember 'key' property. it tells only the 'value of key pressed'.
    example - if we press key 'w', the key property will give us the output as 'w'.
    Let us console log and check first.
*/
document.addEventListener("keydown", function(event){
    // console.log(event.key);
    // instead of whole event, it only gives values like w,a,s,d etc. so we can now use switch statement function here also.
    buttonSound(event.key);
});