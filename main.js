var adRan = false;
// hides the earth once it leaves the screen so it doesn't come back up
function waitFiveSeconds() {
  setTimeout(function() {
    document.getElementById('earthbox').classList.add("hide");
        document.getElementById('letsgo').classList.add("hide");
  }, 5000);
}
// asks permission and launches the rocket
function launchMe() {
  var response = prompt("Are you sure? You will not be able to return to Earth.\nPlease type Y or N");
  if (response == "Y" || response == "y" || response == "yes") {
    document.getElementById('earthbox').classList.add("flyaway");
    // document.getElementById('earthbox').classList.remove("spin");
    document.getElementById('launchme').classList.add("rocketshadow");
    document.getElementById('letsgo').classList.add("rocketshadow");
    waitFiveSeconds();
  } else if (response == "N" || response == "n" || response == "no") {
    alert("Take your time, this is a major decision.");
  } else {
    alert("Invalid response");
  }
}
// displays a popup (only once) when the cursor leaves the window
function leftScreen() {
  if (adRan == false) {
    alert("Don\'t leave yet!\nIf you refer a friend or family member you can get 50% off!")
    adRan = true;
  }
}
