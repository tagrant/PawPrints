
  function topPets(){
	  var e = document.getElementById("type-Of-Pet");
	  if(e.value == "Cat"){
	  title=e;
	  window.location.href='login.html';
	  }
	  
	  }
  
  function recentUploaded(){
	  var e = document.getElementById("type-Of-Pet");
	  if(e.value == "Cat"){
	  title=e;
	  window.location.href='login.html';
	  }
	  
	  }

  function myFunction() {
	    document.getElementById("myDropdown").classList.toggle("show");
	}


	window.onclick = function(event) {
	  if (!event.target.matches('.dropbtn')) {

	    var dropdowns = document.getElementsByClassName("dropdown-content");
	    var i;
	    for (i = 0; i < dropdowns.length; i++) {
	      var openDropdown = dropdowns[i];
	      if (openDropdown.classList.contains('show')) {
	        openDropdown.classList.remove('show');
	      }
	    }
	  }
	};
	
