var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'bilder/header-stahl.jpg') {
      myImage.setAttribute ('src','bilder/steel-works.jpg');
    } else {
      myImage.setAttribute ('src','bilder/header-stahl.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Bitte geben Sie Ihren Namen ein.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Neues von der Stahltruppe bei AUCOTEAM, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Neues von der Stahltruppe bei AUCOTEAM, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}