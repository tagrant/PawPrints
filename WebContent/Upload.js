// Photo Upload
var userId = sessionStorage.getItem("UserName");
var isnewpet = sessionStorage.getItem("isnewpet");
var neworold;

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
		var isnewpet = 1;
		sessionStorage.setItem("isnewpet", 1);
      }
      else
      {
        $(".new-pet").hide();
		sessionStorage.setItem("isnewpet", 0);
      }
    });
});




function saveall(){

	
if(isnewpet != 1){
	
	
neworold = 0;	
var e = document.getElementById("whichpet");
var petName = e.options[e.selectedIndex].innerHTML;

// first have to get petid
	  $.ajax({
		  type: "POST",
		  data: {neworold : neworold, userId : userId, petName : petName, petimage : petimage, petimagename : petimagename },
		  url:"http://localhost/Upload1.php",
		  success: function(data){
			
				var responseNew = JSON.parse(data);
				var petID = responseNew[0].petID;
				var petType = responseNew[1].petType;
				
								
				
		$.ajax({
		  type: "POST",
		  data: {neworold : neworold, petimage : petimage, petimagename : petimagename, petID : petID, petType : petType, userId : userId },
		  url:"http://localhost/Upload2.php",
		  success: function(data){
			
			newwindow();	
				
		  },
		  
		  error: function(xhr, ajaxOptions, thrownError ){
			  newwindow();
		
          }
		  
	  });	
				
				
		  },
		  
		  error: function(xhr, ajaxOptions, thrownError ){
			  alert(xhr.status +" - " + ajaxOptions + " - " + thrownError);
			  sessionStorage.setItem('login', "Sign in Error");
			newwindow();
		
          }
		  
	  });

  newwindow();


}else if(isnewpet == 1){
	
	var newpetname = document.getElementById("newpet").value;
	var newcategory = document.getElementById("newcategory").value;
	neworold = 1;	
	
	alert(newpetname);
				
		$.ajax({
		  type: "POST",
		  data: {neworold : neworold, newpetname : newpetname, newcategory : newcategory, userId : userId },
		  url:"http://localhost/Upload1.php",
		  success: function(data){
			
				var responseNew = JSON.parse(data);
				var petID = responseNew[0].petID;
				
				
		$.ajax({
		  type: "POST",
		  data: {neworold : neworold, petimage : petimage, petimagename : petimagename, petID : petID, newcategory : newcategory, userId : userId },
		  url:"http://localhost/Upload2.php",
		  success: function(data){
			newwindow();
				
		  },
		  
		  error: function(xhr, ajaxOptions, thrownError ){
			  newwindow();
		
          }
		  
	  });	
				
				
				
				newwindow();
				
				
		  },
		  
		  error: function(xhr, ajaxOptions, thrownError ){
			  newwindow();
		
          }
		  
	  });	
	
	
}

newwindow();
	
}


function newwindow(){
	window.location.href = 'Profile.html';
}