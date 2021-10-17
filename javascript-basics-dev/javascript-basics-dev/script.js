// global variables
let doorImage1 = document.getElementById("door1");
let botDoorPath =
    "https://content.codecademy.com/projects/chore-door/images/robot.svg";
let startButton = document.getElementById("start");
startButton.addEventListener("click", startButtonOnclick);

let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");

// global variables

let beachDoorPath =
    "https://content.codecademy.com/projects/chore-door/images/beach.svg";
let spaceDoorPath =
    "https://content.codecademy.com/projects/chore-door/images/space.svg";
let closedDoorPath =
    "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";
let numCloseDoors = 3;
let currentlyPlaying = true;

let openDoor1;
let openDoor2;
let openDoor3;

// events funnction responded on click
doorImage1.addEventListener("click", door1Action);
doorImage2.addEventListener("click", door2Action);
doorImage3.addEventListener("click", door3Action);
startButton.addEventListener("click", startButtonOnclick);

// isbot():  it check if we run to bot or not, if yes it return true;
function isBot(door) {
    if (door.src === botDoorPath) {
        return true;
    } else {
        return false;
    }
}

// isClicked(): take door as arg  if the door is open return true else false
function isClicked(door) {
    if (door.src === closedDoorPath) {
        return false;
    } else {
        return true;
    }
}
// playdoor(): takes door as arg and decrease the # of closed doors  and if closed door == 0 is win, else if isbot() return true , calls gameOver();
function playDoor(door) {
    numCloseDoors--;
    if (numCloseDoors === 0) {
        gameOver("win");
    } else if (isBot(door)) {
        gameOver();
    }
}

// random func using arrow function syntax. it generate random numbers(rNumbers) and based on rNumbers it assigned opendoors to either bot,beach and space paths.
const randomChoreDoorGenerator = () => {
    var choreDoor = Math.floor(Math.random() * numCloseDoors); // generate num b/n 2 and 0
    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else if (choreDoor === 1) {
        openDoor2 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else {
        choreDoor === 2;
        openDoor3 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath;
    }
};

// when u click door1. this func is executed and first checks if currentPlaying is true and if isclicked return false (door is closed)  and will change into false(!). and then it goes to assign
//doorimg 1 to opendoor(this handle by random()) and then it calls playDoor();
function door1Action(e) {
    if (currentlyPlaying && !isClicked(doorImage1)) {
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    }
}

function door2Action(e) {
    if (currentlyPlaying && !isClicked(doorImage2)) {
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
    }
}

function door3Action(e) {
    if (currentlyPlaying && !isClicked(doorImage3)) {
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
    }
}
// this function checks the currentPlaying and if is false it calls startRound();
function startButtonOnclick() {
    if (!currentlyPlaying) {
        startRound();
    }
}

// this function reset many global variables and calls random() again;
function startRound() {
    numCloseDoors = 3;
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    currentlyPlaying = true;
    startButton.innerHTML = "Good Luck!";
    randomChoreDoorGenerator();
}

// gameover() : check the argument and if win it override start button to "you win " else "game over" and assign currentlyplaying to false
function gameOver(status) {
    if (status === "win") {
        startButton.innerHTML = "you win! Play again?";
    } else {
        startButton.innerHTML = "Game Over! Play again?";
    }
    currentlyPlaying = false;
}
// to call random() you need to startround()
startRound();