 var arrOptions = new Array();
				  var array = [];
function getPetData(){
	var petType = sessionStorage.getItem("TopPetsSearch");
	//alert(petId);
	 $.ajax({
		  type: "POST",
		  data: {petType : petType},
		  url:"http://localhost/TopPetsData.php",
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
	var petType = sessionStorage.getItem("TopPetsSearch");
	//alert(petId);
	 $.ajax({
		  type: "POST",
		  data: {petType : petType},
		  url:"http://localhost/TopPetsPhoto.php",
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
	     	//img.setAttribute("style", "width:90%; height:auto; padding-left: 20px; margin-left: 20px; margin-bottom: 40px;");
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

			    	//var img = document.createElement('img');
			    //	img.id = "::img";
			    	img.setAttribute("style", "margin-top: -50px; width:700px; height:500px; background-color:#ffffff");
			    	//img.style.css = 'width:50px; height:100px';
			    	img.src = hi;
			    	
			    	document.getElementById("dynamicInput").appendChild(img);
			    
			        var btnShow = document.createElement("input");
			        btnShow.setAttribute("type", "button");
			        btnShow.value = "Like";
			        
			        
			        
			       // var optionPar = arrOptions[i];
			    	btnShow.setAttribute("style", "width:125px; height:125px; margin-top:350px; margin-left: 20px; vertical-align: top");
			    	btnShow.onclick = (function(opt) {
			    	    return function() {
			    	    	if(opt == 'option4' ){
			    	    	
			    	    	//	window.location.href = 'PersonalProfileView.html';
			    	    	}
			    	    	alert(opt);
			    	    };
			    	})(arrOptions[i]);
			    	document.getElementById("dynamicInput").appendChild(btnShow);

			    	 var reportButton = document.createElement("input");
			         reportButton.setAttribute("type", "button");
			         reportButton.value = "Report";
			         reportButton.setAttribute("style", "width:125px; margin-left: -124px; height:125px; margin-top:500px;");
			         reportButton.onclick = (function(opt) {
			     	    return function() {
			     	    	if(opt == 'option4' ){
			     	    	
		//	     	    		window.location.href = 'PersonalProfileView.html';
			     	    	}
			     	    	alert(opt);
			     	    };
			     	})(arrOptions[i]);
			     	document.getElementById("dynamicInput").appendChild(reportButton);
			     		/*
			     	 var userIdName = document.createElement("a");
			     	//userIdName.setAttribute("type", "button");
			     	userIdName.value = array[i].userID;
			     	//alert(responseNew[i].userID);
			     	userIdName.setAttribute("style", "width:100px; height:50px;");
			     	userIdName.onclick = (function(opt) {
			     	    return function() {
			     	    	if(opt == 'option4' ){
			     	    	
		//	     	    		window.location.href = 'PersonalProfileView.html';
			     	    	}
			     	    	alert(opt);
			     	    };
			     	})(arrOptions[i]);
			     	*/
			    	var title = document.createElement("Label");
			    	title.innerHTML = array[i].userID;     
			    	title.setAttribute("style", "color:black; font-size: 14px;");
			    	title.setAttribute("class", "userIDLink");
			    	title.onclick = (function(opt) {
			     	    return function() {
			     	    	if(opt == 'option4' ){
			     	    	
		//	     	    		window.location.href = 'PersonalProfileView.html';
			     	    	}
			     	    	alert(opt);
			     	    };
			     	})(array[i].userID);
			    	document.getElementById("dynamicInput").appendChild(title);

			    	var likes = document.createElement("Label");
			    	likes.innerHTML = array[i].numLikes;     
			    	likes.setAttribute("style", "color:black; font-size: 14px; float: right; width: 205px;");
			    	likes.setAttribute("class", "userIDLink");
			   

			    	document.getElementById("dynamicInput").appendChild(likes);

	     	//document.getElementById("dynamicInput").appendChild(userIdName);

	     }
	     	
	     
	     	
	     	
	          }