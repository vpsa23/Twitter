window.onload = function(){
	
}


//Función del botón y creando div de comentarios 
var btn = document.getElementById('btn');

btn.addEventListener('click', function(){
	var comments = document.getElementById('comment').value;
	
	document.getElementById('comment').value = "";

	var text = document.getElementById('text');
	var newTxt = document.createElement('div');

	if (comments.length == 0 || comments.length == null ) {
		alert('Debes ingresar una frase')
		return false;
	}

	var txtNewComment = document.createTextNode(comments);
	var contElement = document.createElement('p');


	contElement.appendChild(txtNewComment);
	newTxt.appendChild(contElement);
	text.appendChild(newTxt);
})

//Para Habilitar el comentario en el textarea.
var btn = document.getElementById('btn');

//Para deshabilitar el botón twittear y
//Función que hace contar los carácteres de cuenta regresiva
var cont = 0;
numbers = 140;

function counter(){
	var menssage = document.getElementById('comment').value.length;
	cont = menssage;

	numbers = 140 - cont;
	document.getElementById('contador').innerHTML = numbers;
		if(cont >= 1){
			document.getElementById('btn').disabled = false;
			document.getElementById('btn').setAttribute('class', 'btn-hability');

			if(cont >= 1 && cont < 120){
				document.getElementById('contador').setAttribute('class', 'negro');
			}

			if (cont >= 120 && cont < 130) {
				document.getElementById('contador').setAttribute('class', 'naranja');
			}

			if (cont >=130 && cont <= 140){
				document.getElementById('contador').setAttribute('class', 'rojo');
			}
			if (cont == 0 || /^\s+$/.test(document.getElementById('comment').value) || cont > 140){
				document.getElementById("btn").disabled = true;
				document.getElementById('btn').setAttribute('class', 'btn');
		}
	}
}

//Función para que le textarea crezca de acuerdo el tamaño del texto
function initial(){
	numbers = 140;
	cont = 0;

	document.getElementById('contador').innerHTML = numbers; 
	document.getElementById("btn").disabled = true; 
	document.getElementById('btn').setAttribute('class', 'btn');
	document.getElementById('contador').setAttribute('class', 'negro');
	document.getElementById('comment').style.height = null;
}



