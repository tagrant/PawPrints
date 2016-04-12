				  var arrOptions = new Array();
				  var array = [];
				  
				  
				 function goToUpload(){
					 window.location.href = 'Upload.php';
				 } 
				  
				  
function getPetData(){
	var username = sessionStorage.getItem("UserName");
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
							  userID:responseNew[i].userID};
							  
							  var petID = responseNew[i].petID;
							  getfirstphoto(petID);
							var thefirstphoto = sessionStorage.getItem("thefirstphoto");  
							  
					  array.push(person);
					 i++;
				  }
				
				addPetInput(arrOptions , array, thefirstphoto);  
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


function getfirstphoto(petID){
		var username = sessionStorage.getItem("UserName");

	
	$.ajax({
		  type: "POST",
		  data: {petID: petID, username: username},
		  url:"http://localhost/GetFirstPhoto.php",
		  success: function(data){
			  
			var responseNew = JSON.stringify(data);
			var res = responseNew.split("&");
			var img = document.createElement('img');
			var data = res[0];
			var hi = data;
			 hi = hi.replace(/\\/, '');
			 hi = hi.replace('"', '');
			 hi = hi.replace(/\\/g, '');
			 hi = hi.slice('"',-1);
			 hi = "data:image;base64," + hi;
			 hi = hi.replace('"', '');
			sessionStorage.setItem("thefirstphoto" , hi);
						
		  },
		  
		  error: function(xhr, ajaxOptions, thrownError ){
		
		
          }
		  
	  });
	
}


function addPetInput(arrOptions, array, thefirstphoto){

    	
    for(var i = 0; i < arrOptions.length; i++){
    			
    	var img = document.createElement('img');
    	img.id = "::img"; 	
    	img.setAttribute("style", "width:800px; height:400px; padding-left: 20px; margin-left: 20px; margin-bottom: 40px;");
    	img.id = array[i].petName;
    	//img.setAttribute("onclick", "alertMe(array[i].petName);");
    	//img.setAttribute("src", "google.com");
    	//link.setAttribute("href", "");
    	img.src = thefirstphoto;
    	
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
    	

    	
    	// FOR PERSONAL PETS ONLY: delete pet portfolio
    	var deletelink = document.createElement('a');
    	deletelink.innerHTML = "DELETE PORTFOLIO";  
    	deletelink.setAttribute("style", "float: right; margin-top: 400px; margin-right: 70px; font-size: 12px; position: relative;");
    	deletelink.setAttribute("src", "yahoo.com");
    	deletelink.setAttribute("href", "yahoo.com");
    	
    	document.getElementById("dynamicInput").appendChild(deletelink);
    	
    	
    
    	
    	
         }
    }

    