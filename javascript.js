var playing = true;
var userhealth = 40;
var ehealth = 10;
var wins = 0;

var name= null;
var answer= null;

function startGame(){
  var play= prompt ("Are you ready to rumble?");
  if (play=== "yes") {
  var name= prompt ("What is your character's name?");
  startCombat(name);
  }
  else if (play === "no"){
playing = false;
  }
}
function startCombat(name){

  while (playing) {
      userChoice= prompt ("Do you want to attack or quit?");
    if (userChoice === "attack"){
      userhealth -= getDamage();
      ehealth -= getDamage();
      console.log("Oof, you take some damage! Your health is now " + userhealth + "!");
      console.log("The Almighty Grant has " + ehealth + " health left!");


    if (userhealth<=0){
      console.log ("Well, that was embarassing...");
      playing=false;
    }

    if (ehealth <= 0) {
      wins++
      ehealth=10;
        console.log("You've earned a win!");
    }

    if (wins ==3){
      console.log (wins ++)
      console.log ("You've beaten Grant to death! You monster.");
        playing=false;
    }
      }
    else if (userChoice === "quit"){
      playing=false;
    }
        }
    if(ehealth <= 0){
      ehealth = 10;
      wins++;
      console.log("You have defeated The Almighty Grant.")
          }

  function getDamage(){
    return Math.floor(Math.random() * 5) + 1;
  }
}
startGame();
