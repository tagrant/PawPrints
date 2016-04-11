				  var arrOptions = new Array();
				  var array = [];
function getPetData(){
	var petId = sessionStorage.getItem("petId");
	//alert(petId);
	 $.ajax({
		  type: "POST",
		  data: {petId : petId},
		  url:"http://localhost/GetPetPhotos.php",
		  success: function(data){
			  var responseNew = JSON.stringify(data);
			  var res = responseNew.split("&");

			  if(data == "{}"){
				  alert("error");
				 
			  }
			  else {
				  /*
				//  var responseNew = JSON.parse(data);
				  //alert(responseNew);
				  for(var j = 0; j < 2; j++){
					  var data = res[j];
					  var hi = data;
					  hi = hi.replace(/\\/, '');
					 hi = hi.replace('"', '');
					 hi = hi.replace(/\\/g, '');
					 hi = hi.slice('"',-1);
					 hi = "data:image;base64," + hi;
					 hi = hi.replace('"', '');

				  var img = document.createElement('img');
			      img.id = "::img"; 	
			      img.setAttribute("style", "height:30%;width:80%; padding-left: 20px; margin-left: 20px; margin-bottom: 40px;");
			    	//img.src = hi;
			      img.src = hi;
				//  var url =  "<img style=\"height:300px;width:300px\" src=\"data:image;base64, " + hi +" >";
				  document.getElementById("hello").appendChild(img);
				 // alert(url);
				  }
				  var i = 0;
*/
				 /* 
				  while(responseNew[i]){
					  arrOptions[i] = i;
					  var person = {photoId: responseNew[i].photoId, photo : responseNew[i].photo,
							  petId:responseNew[i].petId, numLikes:responseNew[i].numLikes};
					  array.push(person);
					 //temp += responseNew[i].petName;
					 i++;
				  }
				*/
				  //alert(responseNew);
				 // sessionStorage.setItem("signedIn", "true");	 
				  //sessionStorage.setItem("UserName" , responseNew[0].userID );
				  //document.getElementById("loginButton").innerHTML =  sessionStorage.getItem("UserName");
				  //closeSignIn();
				addPetInput(arrOptions , array , res);  
			  }
		  },
		  
		  error: function(xhr, ajaxOptions, thrownError ){
			  alert(xhr.status +" - " + ajaxOptions + " - " + thrownError);
			  sessionStorage.setItem('login', "Sign in Error");
			
		
          }
		  
	  });
	  
	
	
}




function addPetInput(arrOptions, array , res){
    	
    for(var i = 0; i < res.length - 1; i++){
    	//alert(res.length);
    			
    	var img = document.createElement('img');
    	img.id = "::img"; 	
    	img.setAttribute("style", "width:90%; height:auto; padding-left: 20px; margin-left: 20px; margin-bottom: 40px;");
    	//img.id = array[i].photoId;
    	//img.setAttribute("onclick", "alertMe(array[i].petName);");
    	//img.setAttribute("src", "google.com");
    	//link.setAttribute("href", "");
    	//img.src = "data:image;base64, array[i].photo";
		  var data = res[i];
		  var hi = data;
		  hi = hi.replace(/\\/, '');
		 hi = hi.replace('"', '');
		 hi = hi.replace(/\\/g, '');
		 hi = hi.slice('"',-1);
		 hi = "data:image;base64," + hi;
		 hi = hi.replace('"', '');
		 img.src = hi;

    	
    	//link.appendChild(img);
    	//img = document.createElement('img').appendChild(link);
    	document.getElementById("dynamicInput").appendChild(img);
    	
    	
    	
    	//Display Pet's Name
    	var title = document.createElement("Label");
    	title.innerHTML = "pet";     
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

    