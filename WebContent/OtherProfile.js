				  var arrOptions = new Array();
				  var array = [];
				  
				  
				 function goToUpload(){
					 window.location.href = 'Upload.php';
				 } 
				  
				  
function getPetData(){
	var username = sessionStorage.getItem("otherUserName");

	 $.ajax({
		  type: "POST",
		  data: {UN : username},
		  url:"http://localhost/GetUsersPets.php",
		  success: function(data){
			  
			  if(data == "{}"){
				 
			  }
			  else {
				  var responseNew = JSON.parse(data);
				  var i = 0;

				  
				  
				  while(responseNew[i]){
					  
					  arrOptions[i] = i;
					  var person = {petId: responseNew[i].petID, petName: responseNew[i].petName, 
							  petType:responseNew[i].petType, totalNumLikes:responseNew[i].totalNumLikes,
							  userID:responseNew[i].userID, photo: responseNew[i].photo};
						
						
					  array.push(person);
					  
				
	
					 i++;
				  }
				 
				 addPetInput(arrOptions , array);  
				
			  }
		  },
		  
		  error: function(xhr, ajaxOptions, thrownError ){
			  alert(xhr.status +" - " + ajaxOptions + " - " + thrownError);
			  sessionStorage.setItem('login', "Sign in Error");
			
		
          }
		  
	  });
	  
	
	
}
function alertMe(temp){
	alert(temp);
}





function addPetInput(arrOptions, array, pimage){

	
    	
    for(var i = 0; i < arrOptions.length; i++){

    	var img = document.createElement('img');
    	img.id = "::img"; 	
    	img.setAttribute("style", "width:800px; height:500px; padding-left: 20px; margin-left: 20px; margin-bottom: 40px;");
    	img.id = array[i].petName;
    	//img.setAttribute("onclick", "alertMe(array[i].petName);");
    	//img.setAttribute("src", "google.com");
    	//link.setAttribute("href", "");
	
			var data = array[i].photo;
			hi = data;
			 hi = hi.replace(/\\/, '');
			 hi = hi.replace('"', '');
			 hi = hi.replace(/\\/g, '');
			 hi = hi.slice('"',-1);
			 hi = "data:image;base64," + hi;
			 hi = hi.replace('"', '');
			
	
		img.src = hi;
    	
    	
    	img.onclick = (function(opt) {
    	    return function() {
    	    //	alert(array[opt].petId + "- " + opt);
    	    	//alert(opt);
    	    	sessionStorage.setItem("petId", array[opt].petId);
    	    	window.location.href= 'PetPortfolio.html';
    	    	//alert(array[opt].petId);
    	    };
    	})(arrOptions[i]);
    	
    	//link.appendChild(img);
    	//img = document.createElement('img').appendChild(link);
    	document.getElementById("dynamicInput").appendChild(img);
    	
    	
    	
    	//Display Pet's Name
    	var title = document.createElement("Label");
    	title.innerHTML = array[i].petName;     
    	title.setAttribute("style", "color: white; font-size: 50px; margin-left: -500px; background-color: black; padding: 20px;");
    	document.getElementById("dynamicInput").appendChild(title);
    	

    	
    	
    
    	
    	
         }
    }
	

	