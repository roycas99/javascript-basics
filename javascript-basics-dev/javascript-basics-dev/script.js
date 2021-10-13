/*eslint-env browser*/

var doorImage1 = document.getElementById("door1");
doorImage1.addEventListener("click",door1Action);

let botDoorPath =  "https://content.codecademy.com/projects/chore-door/images/robot.svg";

var doorImage2 = document.getElementById("door2");
var doorImage3 = document.getElementById("door3");

doorImage2.addEventListener("click",door2Action);
doorImage3.addEventListener("click",door3Action);

var beachDoorPath ="https://content.codecademy.com/projects/chore-door/images/beach.svg";
var spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";

let numCloseDoors = 3;

let openDoor1;
let openDoor2;
let openDoor3;


// random func using arrow function syntax
const randomChoreDoorGenerator = () => {
    var choreDoor = Math.floor(Math.random()*numCloseDoors) ; // generate num b/n 2 and 0
    if(choreDoor ===0){
        openDoor1 = botDoorPath;
        openDoor2 = spaceDoorPath;
        openDoor3 = beachDoorPath;
    }
    else if (choreDoor === 1) {
        openDoor2  = botDoorPath;
        openDoor3 = beachDoorPath;
        openDoor1 = spaceDoorPath;
    }
    else{ 
        openDoor3 === botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor1 =spaceDoorPath;
    }
}
 // 51 start tommorow
 function isClicked(door){

 }

 function playDoor(){
     numCloseDoors--;
     if(numCloseDoors === 0){
         gameOver();
     }
 }


function door1Action(e){
    console.log(e.type);
    doorImage1.src = openDoor1;
    playDoor;

}

function door2Action(e){
    doorImage2.src = openDoor2;
    playDoor;
    
}

function door3Action(e){
    doorImage3.src = openDoor3;
    playDoor;
    
}



