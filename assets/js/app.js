//Para Habilitar el comentario en el textarea.
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

     



