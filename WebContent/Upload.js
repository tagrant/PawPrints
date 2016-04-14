// Photo Upload
var userId = sessionStorage.getItem("UserName");
var isnewpet = 0;
var neworold = sessionStorage.getItem("neworold");


$(function () {
    $(":file").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = imageIsLoaded;
            reader.readAsDataURL(this.files[0]);
        }
    });
});

function imageIsLoaded(e) {
    $('#myImg').attr('src', e.target.result);
};


//Combo Box

$(document).ready(function(){
    $('#whichpet').on('change', function() {
      if ( this.value == 'np')
      {
        $(".new-pet").show();
		isnewpet = 1;
		sessionStorage.setItem("isnewpet", 1);
		sessionStorage.setItem("neworold", 0);
      }
      else
      {
        $(".new-pet").hide();
		isnewpet = 0;
		sessionStorage.setItem("isnewpet", 0);
		neworold = 1;
		sessionStorage.setItem("neworold", 1);
      }
    });
});

//FIX THIS
function one(petID, petType){
neworold = 0;	
var petimage = sessionStorage.getItem("petimage");
alert(petimage);
alert(petID);
alert(petType);
alert(userId);
		$.ajax({
		  type: "POST",
		  data: {neworold : neworold, petimage : petimage, petID : petID, petType : petType, userId : userId },
		  url:"http://localhost/Upload2.php",
		  success: function(data){
			location.reload();
	//document.getElementById("whatname").innerHTML = "Successfully added photo";
				
		  },
		  
		  error: function(xhr, ajaxOptions, thrownError ){
			 location.reload();
			// document.getElementById("whatname").innerHTML = "Successfully added photo";
          }
		  
	  });
	
}

// new pet
function two(petID, newcategory){
	

var petimage = sessionStorage.getItem("petimage");

//alert(petimage);
//alert(petID);
//alert(newcategory);
//alert(userId);	
	
	
	neworold = 1;	
	
		$.ajax({
		  type: "POST",
		  data: {neworold : neworold, petimage : petimage, petID : petID, newcategory : newcategory, userId : userId },
		  url:"http://localhost/Upload2.php",
		  success: function(data){
			location.reload();
			alert("Successfully added photo");
				
		  },
		  
		  error: function(xhr, ajaxOptions, thrownError ){
			  location.reload();
			 // document.getElementById("whatname").innerHTML = "Successfully added photo";
		
          }
		  
	  });	
	
}



function saveall(){

//alert(petimage);	
	 var petimage = document.getElementById("myImg").src;
	 sessionStorage.setItem("petimage", petimage);
	               // var petimage2= file_get_contents(document.getElementById("myImg").src);
                    //var petimage1= base64_encode(document.getElementById("myImg").src);
					//alert(petimage1);
//var petimage = sessionStorage.getItem("petimage");	
alert(petimage);
var petimagename = '0';


if(isnewpet == 0){

neworold = 0;	

//alert(petimage);
var e = document.getElementById("whichpet");
var petName = e.options[e.selectedIndex].innerHTML;




	  $.ajax({
		  type: "POST",
		  data: {neworold : neworold, userId : userId, petName : petName, petimage : petimage, petimagename : petimagename },
		  url:"http://localhost/Upload1.php",
		  success: function(data){
			
				var responseNew = JSON.parse(data);
				var petID = responseNew[0].petID;
				var petType = responseNew[1].petType;
						//alert(petID);
						//alert(petType);
						
				one(petID, petType);
				
				
		  },
		  
		  error: function(xhr, ajaxOptions, thrownError ){
			  sessionStorage.setItem('login', "Sign in Error");
			  alert("Successfully added photo");
		
          }
		  
	  });




}else if(isnewpet == 1){

	
	var newpetname = document.getElementById("newpet").value;
	var newcategory = document.getElementById("newcategory").value;
	neworold = 1;	
	
//alert(newpetname);
//alert(newcategory);

	
				
		$.ajax({
		  type: "POST",
		  data: {neworold : neworold, newpetname : newpetname, newcategory : newcategory, userId : userId },
		  url:"http://localhost/Upload1.php",
		  success: function(data){
			
				var responseNew = JSON.parse(data);
				var petID = responseNew[0].petID;
				//alert(petID);
				
	two(petID, newcategory);
				
				
				
		  },
		  
		  error: function(xhr, ajaxOptions, thrownError ){
			  alert("Successfully added photo");
			  location.reload();
		
          }
		  
	  });	
	
	
}

location.reload();
	
}

