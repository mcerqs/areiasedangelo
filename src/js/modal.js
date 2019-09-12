// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

function showModal(e) {
  modal.style.display = "block";
  appendText();

  // var textContent = modal.firstElementChild.getElementsByClassName('text');
  // textContent[0].innerHTML = e.innerText;
  // textContent[0].innerHTML = appendText();

  console.log('Modal ', modal);
  // console.log('Modal filho ', textContent);
  console.log('This ', e.innerText);
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

function appendText() {
  var textContent = '';
  
  var pathContent = './static/criminal.txt';

  var xhttp = new XMLHttpRequest();
  
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // textContent = this.responseText;
      
      // console.log('CONTEUDO this.responseText: ', this.responseText);
      // console.log('CONTEUDO textContent: ', textContent);
    
      document.getElementById("myContent").innerHTML = this.responseText;
    }
  };

  // xhttp.open("GET", "criminal.txt", true);
  xhttp.open("GET", pathContent, true);
  xhttp.send();

  // return 'textContent';
}