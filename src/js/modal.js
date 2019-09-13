// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

function showModal(e, namePath) {
  var title = modal.firstElementChild.querySelector('h2');
  
  modal.style.display = "block";
  title.innerHTML = e.innerText;
  
  appendText(namePath);
  
  // TO DO
  console.log('Modal ', modal);
  console.log('This ', e.innerText);
  console.log('Modal title: ', modal.firstElementChild.querySelector('h2'));
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function appendText(nameFile) {

  var pathContent = './static/'+nameFile+'.txt';

  var xhttp = new XMLHttpRequest();
  
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("textContent").innerHTML = this.responseText;
    }
  };

  xhttp.open("GET", pathContent, true);
  xhttp.send();
}