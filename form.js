function Validate(){	
	if (document.getElementById('email').value == '') {
		document.getElementById('email').style.border = '1px solid hsl(354, 100%, 66%)';
		document.getElementById('email').style.fontcolor = 'black';
		document.getElementById('error-message').classList.remove('hide-error');
	}
	else {	
		if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value) === false) {
			document.getElementById('email').style.border = '1px solid hsl(0, 36%, 70%)';
			document.getElementById('email').style.fontcolor = 'black';
			document.getElementById('error-message').classList.remove('hide-error');
		}
		else {
			document.getElementById('email').style.border = '1px solid green';
			document.getElementById('email').style.fontcolor = 'black';
			document.getElementById('error-message').classList.add('hide-error');
		}
		
	}
}