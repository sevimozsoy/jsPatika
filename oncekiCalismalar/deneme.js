var greetings = document.querySelector('#greeting').addEventListener("click", rengiDegistir);

function rengiDegistir() {
  var degistir = document.querySelector('#greeting')
  degistir.innerHTML = `<h1 style = "color:red">${degistir.innerHTML}</h1>`
}


// var node = document.getElementById('node')
// alert(node.childNodes[0].nodeValue)

var baslik = document.createElement("h2");
var node = document.createTextNode("Bu bir başlık!")
baslik.appendChild(node)

var div1 = document.getElementById('div1');
var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2')

div1.insertBefore(baslik,p1);
div1.removeChild(p2)
div1.replaceChild(baslik,p1)
