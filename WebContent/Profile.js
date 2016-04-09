				  var arrOptions = new Array();
				  var array = [];
function getPetData(){
	var username = sessionStorage.getItem("UserName");
	 $.ajax({
		  type: "POST",
		  data: {UN : username},
		  url:"http://localhost/GetUsersPets.php",
		  success: function(data){
			  
			  if(data == "{}"){
				  alert("i hate you");
				 
			  }
			  else {
				  var responseNew = JSON.parse(data);
				  var i = 0;

				  
				  while(responseNew[i]){
					  arrOptions[i] = i;
					  var person = {petId: responseNew[i].petID, petName: responseNew[i].petName, 
							  petType:responseNew[i].petType, totalNumLikes:responseNew[i].totalNumLikes,
							  userID:responseNew[i].userID};
					  array.push(person);
					 //temp += responseNew[i].petName;
					 i++;
				  }
				
				  //alert(responseNew);
				 // sessionStorage.setItem("signedIn", "true");	 
				  //sessionStorage.setItem("UserName" , responseNew[0].userID );
				  //document.getElementById("loginButton").innerHTML =  sessionStorage.getItem("UserName");
				  //closeSignIn();
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


function addPetInput(arrOptions, array){
    	
    for(var i = 0; i < arrOptions.length; i++){
    			
    	var img = document.createElement('img');
    	img.id = "::img"; 	
    	img.setAttribute("style", "width:90%; height:auto; padding-left: 20px; margin-left: 20px; margin-bottom: 40px;");
    	img.id = array[i].petName;
    	//img.setAttribute("onclick", "alertMe(array[i].petName);");
    	//img.setAttribute("src", "google.com");
    	//link.setAttribute("href", "");
    	img.src = "http://i.imgur.com/dyuLi2Y.png";
    	
    	img.onclick = (function(opt) {
    	    return function() {

    	    	alert(array[opt].petId);
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

    