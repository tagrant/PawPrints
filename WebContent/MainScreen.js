var temp = true;

  function signUp(){
//document.getElementById('boldStuff').innerHTML = 'Fred Flinstone';
//window.location.href= 'PersonalProfileView.html';

	if(temp == true){
  document.getElementById("wrap").style.opacity = ".3";
  temp = false;
  document.getElementById("respond-1").style.display ="block";
 // document.getElementById("thomas").style.display ="none";
  //document.getElementById("respond-1").style.opacity ="1.0";
	}
	else 
		{
		document.getElementById("wrap").style.opacity = "1.0";
		temp = true;
		}


}
  
  function closeSignIn(){
	  document.getElementById("wrap").style.opacity = "1.0";
	  temp = true;
	  document.getElementById("respond-1").style.display = "none";
  }