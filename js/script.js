var btn = document.querySelector('#button > button');
var whatsNewField = document.getElementById('search');

btn.addEventListener('click', function(){
		whatsNewField.value = '';
	}
);