function launchMe() {
  var response = prompt("Are you sure? You will not be able to return to Earth.\nPlease type Y or N");
  if (response == "Y" || response == "y" || response == "yes") {
    document.getElementById('earthbox').classList.add("flyaway");
        document.getElementById('earthbox').classList.remove("spin");
        document.getElementById('launchme').classList.add("rocketshadow");
                document.getElementById('letsgo').classList.add("rocketshadow");
  }
  else if (response == "N" || response == "n" || response == "no") {
    alert("Take your time, this is a major decision.");
  }
  else {
    alert("Invalid response");
  }
}
function leftScreen() {
  alert("Don\'t leave yet!\nIf you refer a friend or family member you can get 50% off!")
}
console.log('working');
