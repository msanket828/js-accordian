//access all elements
var contents=document.querySelectorAll(".hidecontent");
var btn=document.querySelectorAll(".acc-btn");
var plus=document.querySelectorAll(".plus");

//for accordian
btn.forEach(function(button){	
	button.addEventListener('click',function(e) {				
		//after clicking the particular button content will be display and hide	
		btn.forEach(function(btn) {
			btn.classList.remove("active");
		})
		
		button.classList.add("active");		
		//after clicking the particular button content will be display and hide	
		contents.forEach(function(contents){
				if(button.nextElementSibling==contents) {					
					contents.classList.toggle("hidecontent");
				}	else {						
						contents.classList.add("hidecontent");
					}
		});		
	});
});