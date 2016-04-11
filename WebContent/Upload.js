// Photo Upload
var userId = sessionStorage.getItem("UserName");


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
var isnewpet = "no";
$(document).ready(function(){
    $('#whichpet').on('change', function() {
      if ( this.value == 'np')
      {
        $(".new-pet").show();
		isnewpet = "yes";
      }
      else
      {
        $(".new-pet").hide();
      }
    });
});




function saveall(){


	
if(isnewPet = "no"){
	
var e = document.getElementById("whichpet");
var petName = e.options[e.selectedIndex].innerHTML;

// first have to get petid
	  $.ajax({
		  type: "POST",
		  data: { userId : userId, petName : petName },
		  url:"http://localhost/Upload1.php",
		  success: function(data){
			
				var responseNew = JSON.parse(data);
				var petID = responseNew[0].petID;
				var petType = responseNew[1].petType;
				
				
		$.ajax({
		  type: "POST",
		  data: { petimage :petimage, petimagename : petimagename, petID : petID, petType : petType, userId : userId },
		  url:"http://localhost/Upload2.php",
		  success: function(data){
			
				alert(data);
				
				
		  },
		  
		  error: function(xhr, ajaxOptions, thrownError ){
			  alert("Failure");
			
		
          }
		  
	  });	
				
				
		  },
		  
		  error: function(xhr, ajaxOptions, thrownError ){
			  alert(xhr.status +" - " + ajaxOptions + " - " + thrownError);
			  sessionStorage.setItem('login', "Sign in Error");
			
		
          }
		  
	  });

  


}

	
}