var doorImage1 = document.getElementById("door1");
doorImage1.addEventListener("click",door1Action);

let botDoorPath ="https://content.codecademy.com/projects/chore-door/images/robot.svg";

var doorImage2 = document.getElementById("door2")
var doorImage3 = document.getElementById("door3")

doorImage2.addEventListener("click",door2Action);
doorImage3.addEventListener("click",door3Action);

var beachDoorPath ="https://content.codecademy.com/projects/chore-door/images/beach.svg";
var spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";




function door1Action(e){
    console.log(e.type);
    doorImage1.src = botDoorPath;

}

function door2Action(e){
    doorImage2.src =beachDoorPath;
    
}

function door3Action(e){
    doorImage3.src = spaceDoorPath;
    
}