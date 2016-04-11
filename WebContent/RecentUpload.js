				  var arrOptions = new Array();
				  var array = [];
function getPetData(){
	var petType = sessionStorage.getItem("searchType");
	//alert(petId);
	 $.ajax({
		  type: "POST",
		  data: {petType : petType},
		  url:"http://localhost/recentUploadData.php",
		  success: function(data){
			 
			  var responseNew = JSON.parse(data);
			  var i = 0;
			  //alert(responseNew);
			  
			  while(responseNew[i]){
				  arrOptions[i] = i;
				  var person = {userID: responseNew[i].userID, numLikes: responseNew[i].numLikes, 
						  photoID:responseNew[i].photoID};
				  array.push(person);
				 //temp += responseNew[i].petName;
				 i++;
			  }
				//alert(arrOptions.length);
			  getPetPhotos(arrOptions , array); 
	  },
	  
	  error: function(xhr, ajaxOptions, thrownError ){
		  alert(xhr.status +" - " + ajaxOptions + " - " + thrownError);
		  sessionStorage.setItem('login', "Sign in Error");
		
	
     }
	  
 });
	
}
function getPetPhotos(arrOptions , array){
	var petType = sessionStorage.getItem("searchType");
	//alert(petId);
	 $.ajax({
		  type: "POST",
		  data: {petType : petType},
		  url:"http://localhost/recentUpload.php",
		  success: function(data){
			  var responseNew = JSON.stringify(data);
			  var res = responseNew.split("&");

			  if(data == "{}"){
				  alert("error");
				 
			  }
			  else {

				addPetInput(arrOptions , array , res);  
			  }
		  },
		  
		  error: function(xhr, ajaxOptions, thrownError ){
			  alert(xhr.status +" - " + ajaxOptions + " - " + thrownError);
			  sessionStorage.setItem('login', "Sign in Error");
			
		
         }
		  
	  });
	 
}

	 function addPetInput(arrOptions, array, res){
	     
	     for(var i = 0; i < arrOptions.length; i++){
	     	//alert(res.length);
	     			
	     	var img = document.createElement('img');
	     	img.id = "::img"; 	
	     	img.setAttribute("style", "width:90%; height:auto; padding-left: 20px; margin-left: 20px; margin-bottom: 40px;");
	     	//img.id = array[i].photoId;
	     	//img.setAttribute("onclick", "alertMe(array[i].petName);");
	     	//img.setAttribute("src", "google.com");
	     	//link.setAttribute("href", "");
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
	     	title.innerHTML = array[i].userID;     
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

	