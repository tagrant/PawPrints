 var arrOptions = new Array();
				  var array = [];
var start = new Date().getTime();
function getPetData(){
	var petType = sessionStorage.getItem("TopPetsSearch");
	
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
	  
	     			
	     	var img = document.createElement('img');
	     	img.id = "::img"; 	
	
	     	  var data = res[i];
			  var hi = data;
			 hi = hi.replace(/\\/, '');
			 hi = hi.replace('"', '');
			 hi = hi.replace(/\\/g, '');
			 hi = hi.slice('"',-1);
			 //hi = "data:image;base64," + hi;
			 //alert(hi);
			 hi = hi.replace('"', '');
			 img.src = hi;

			    	img.setAttribute("style", "margin-top: -380px; width:700px; height:500px; background-color:#ffffff");
			    	img.src = hi;
			    	
			    	document.getElementById("dynamicInput").appendChild(img);
			    
			        var btnShow = document.createElement("input");
			        btnShow.setAttribute("type", "image");
			        btnShow.value = "Like";
			    	btnShow.setAttribute("style", "border: none; width:125px; height:125px; margin-top:400px; margin-left: 20px; vertical-align: top");
					btnShow.setAttribute("class", "likebutton");
					btnShow.id = "" + i;
					btnShow.src = "http://www.clker.com/cliparts/Q/0/a/r/h/S/paw-print-hi.png";
			    	btnShow.onclick = (function(opt) {
			    	    return function() {
			    	    	
							var photoID = opt;
							likePhoto(array[opt].photoID);
							
					//btnShow.src = "http://i.imgur.com/ngUjToO.png";	
					var idOfButton = "" + opt;
				
					document.getElementById(idOfButton).src = "http://i.imgur.com/ngUjToO.png";;
					document.getElementById(idOfButton).disabled = "disabled";

			    	    };
			    	
					})(i);
			    	document.getElementById("dynamicInput").appendChild(btnShow);

			    	 var reportButton = document.createElement("input");
			         reportButton.setAttribute("type", "image");
			         reportButton.value = "Report";
			         reportButton.setAttribute("style", "border:none; width:125px; margin-left: -124px; height:125px; margin-top:650px;");
					 reportButton.id = "report" + i;
					 reportButton.src= "http://vignette1.wikia.nocookie.net/clubpenguin/images/5/5f/Red_X.png/revision/latest?cb=20120514130731";
			         reportButton.onclick = (function(opt) {
			     	    return function() {
			     	    	
							
							var result = confirm("Are you sure you want to report this photo?");
							if (result) {
							var idOfButton = "report" + opt;
							reportPhoto(array[opt].photoID);
							document.getElementById(idOfButton).src = "http://i.imgur.com/1YOLUpN.png";
							document.getElementById(idOfButton).disabled = "disabled";
							}
		
							
			     	    };
			     	})(i);
			     	document.getElementById("dynamicInput").appendChild(reportButton);
			     
				 
				 
			    	var title = document.createElement("Label");
			    	title.innerHTML = array[i].userID;     
			    	title.setAttribute("style", "color:black; font-size: 14px;");
			    	title.setAttribute("class", "userIDLink");
			    	title.onclick = (function(opt) {
			     	    return function() {
			     	    	sessionStorage.setItem("otherUserName", opt);
			     	    	window.location.href = 'OtherProfile.html';
			     	    };
			     	})(array[i].userID);
			    	document.getElementById("dynamicInput").appendChild(title);

			    	var likes = document.createElement("Label");
			    	likes.innerHTML = "Likes: " + array[i].numLikes;     
			    	likes.setAttribute("style", "color:black; font-size: 14px; float: right; width: 240px;");
			    	likes.setAttribute("class", "userIDLink");
			   

			    	document.getElementById("dynamicInput").appendChild(likes);


	     }
	     	
	     
	     	var end = new Date().getTime();
var time = end - start;
alert('Execution time: ' + time);
	          }
			  
			  
			  
			  
function likePhoto(photoID){
					
var like = 0;					
	$.ajax({
		type: "POST",
		data: {like: like, photoID : photoID},
		url:"http://localhost/LikeOrReportPhoto.php",
		success: function(data){
			 
			  
			  
	  },
	  
	  error: function(xhr, ajaxOptions, thrownError ){
		  alert(xhr.status +" - " + ajaxOptions + " - " + thrownError);
		  sessionStorage.setItem('login', "Sign in Error");
		
	
     }
	  
 });
	
}			  


function reportPhoto(photoID){
	var like = 1;					
	$.ajax({
		type: "POST",
		data: {like: like, photoID : photoID},
		url:"http://localhost/LikeOrReportPhoto.php",
		success: function(data){
			 
			  
			  
	  },
	  
	  error: function(xhr, ajaxOptions, thrownError ){
		  alert(xhr.status +" - " + ajaxOptions + " - " + thrownError);
		  sessionStorage.setItem('login', "Sign in Error");
		
	
     }
	  
 });
	
	
}