console.log('Rodando...');

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";

  var textContent = modal.firstElementChild.getElementsByClassName('text');
  textContent[0].innerHTML = appendContent();

  console.log('Modal ', modal);
  console.log('Modal filho ', textContent);
  console.log('This ', this.innerText);
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

function appendContent() {
  return 'appendContent...';
}