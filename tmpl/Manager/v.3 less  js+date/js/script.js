var date = new Date();

var options = {
	day: 'numeric',
  month: 'long',
	year: 'numeric',
};

//date.toLocaleString("ru", options);







var form = document.getElementById('form');
var input = document.getElementById('text');
var container = document.getElementById('container');
var element = document.createDocumentFragment();


form.addEventListener('submit', function(e){
	e = e || window.event;
  e.preventDefault();  
	
	if(input.value.length>0){
		var comCont = document.createElement("div");
		var comName = document.createElement("span");
		var comDate = document.createElement("span");
		var comText = document.createElement("p");
		
		
		comCont.className = "ontent__comment";
		comName.className = "content__comment-name";
		comDate.className = "content__comment-date";
		comText.className = "content__comment-text";
		
		comName.textContent = ("Гость ");
		comDate.textContent = (date.toLocaleString("ru", options));
		comText.textContent = input.value;
		
		comCont.appendChild(comName);
		comCont.appendChild(comDate);
		comCont.appendChild(comText);
		
		element.appendChild(comCont);
		
		container.appendChild(element);
		
		input.value = '';
	}
});


text.onkeydown = function(e) {
    e = e || window.event;
    if (e.ctrlKey && e.keyCode == 13) {
      if(input.value.length>0){
				var comCont = document.createElement("div");
				var comName = document.createElement("span");
				var comDate = document.createElement("span");
				var comText = document.createElement("p");
				
				
				comCont.className = "ontent__comment";
				comName.className = "content__comment-name";
				comDate.className = "content__comment-date";
				comText.className = "content__comment-text";
				
				comName.textContent = ("Гость ");
				comDate.textContent = (date.toLocaleString("ru", options));
				comText.textContent = input.value;
				
				comCont.appendChild(comName);
				comCont.appendChild(comDate);
				comCont.appendChild(comText);
				
				element.appendChild(comCont);
				
				container.appendChild(element);
				
				input.value = '';
			}
    }
    return true;
}