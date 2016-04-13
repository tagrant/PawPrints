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


function one(petID, petType){
	neworold = 0;

alert(petimage);
alert(petimagename);
alert(petID);
alert(petType);
alert(userId);
	
		$.ajax({
		  type: "POST",
		  data: {neworold : neworold, petimage : petimage, petimagename : petimagename, petID : petID, petType : petType, userId : userId },
		  url:"http://localhost/Upload2.php",
		  success: function(data){
			location.reload();
				
		  },
		  
		  error: function(xhr, ajaxOptions, thrownError ){
			 location.reload();
		
          }
		  
	  });
	
}

function two(petID, newcategory){
	
petimage = getimage();
petimagename = getimagename();

alert(petimage);
alert(petimagename);
alert(petID);
alert(newcategory);
alert(userId);
	
	neworold = 1;	
	
		$.ajax({
		  type: "POST",
		  data: {neworold : neworold, petimage : petimage, petimagename : petimagename, petID : petID, newcategory : newcategory, userId : userId },
		  url:"http://localhost/Upload2.php",
		  success: function(data){
			location.reload();
				
		  },
		  
		  error: function(xhr, ajaxOptions, thrownError ){
			  location.reload();
		
          }
		  
	  });	
	
}


function getimage(){
	return petimage;
}

function getimagename(){
	return petimagename;
}



function saveall(){


	alert(isnewpet);

if(isnewpet != 1){

neworold = 0;	
var e = document.getElementById("whichpet");
var petName = e.options[e.selectedIndex].innerHTML;

getimage();
getimagename();



// first have to get petid
	  $.ajax({
		  type: "POST",
		  data: {neworold : neworold, userId : userId, petName : petName, petimage : petimage, petimagename : petimagename },
		  url:"http://localhost/Upload1.php",
		  success: function(data){
			
				var responseNew = JSON.parse(data);
				var petID = responseNew[0].petID;
				var petType = responseNew[1].petType;
						
				one(petID, petType);
				
				
		  },
		  
		  error: function(xhr, ajaxOptions, thrownError ){
			  alert(xhr.status +" - " + ajaxOptions + " - " + thrownError);
			  sessionStorage.setItem('login', "Sign in Error");
		
          }
		  
	  });




}else if(isnewpet == 1){
	
	var newpetname = document.getElementById("newpet").value;
	var newcategory = document.getElementById("newcategory").value;
	neworold = 1;	
	
	
				
		$.ajax({
		  type: "POST",
		  data: {neworold : neworold, newpetname : newpetname, newcategory : newcategory, userId : userId },
		  url:"http://localhost/Upload1.php",
		  success: function(data){
			
				var responseNew = JSON.parse(data);
				var petID = responseNew[0].petID;
				
				
	two(petID, newcategory);
				
				
				
		  },
		  
		  error: function(xhr, ajaxOptions, thrownError ){
			  location.reload();
		
          }
		  
	  });	
	
	
}

location.reload();
	
}

