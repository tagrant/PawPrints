	var temp = true;


	
function topPage(){
	sessionStorage.setItem("searchType", "Top: ");
	window.location.href= 'TopPets.html';
}
 function searchFunction(name){
	 //go to the page 
	 sessionStorage.setItem("searchType", name);
	 //alert(name);
	 window.location.href= 'Search.html';
	 
	
 }
 
 function recentlySearch(){
	 //go to the page 
	 //alert(name);
	 window.location.href= 'RecentUpload.html';
 }
 
function addInput(buttonName){
	document.getElementById("loginButton").value = sessionStorage.getItem("UserName");
	
}
  function signUp(){
	

	  if(sessionStorage.getItem("signedIn") == "false"){
	if(temp == true){
  document.getElementById("wrap").style.opacity = ".3";
  temp = false;
  document.getElementById("respond-1").style.display ="block";
	}
	
	else 
		{
		document.getElementById("wrap").style.opacity = "1.0";
		temp = true;
		  document.getElementById("respond-1").style.display = "none";
		
		}
	  }
	else {
		 window.location.href= 'Profile.html';
		}
	

}
  
  function mainscreen(){
	  window.location.href= 'MainScreen.html';
  }
  
  function checkCreateInfo(){
	  
	  var username = document.getElementById("username-createAccount").value;
	  var password = document.getElementById("password-createAccount").value;
	  var retypePassword = document.getElementById("retype-password-createAccount").value;
	  //alert(password + " - " + retypePassword);
	  
	  if(password !== retypePassword){
		  alert("Retyped password does not match password");
		  session.setItem("createAccount" ,"Retyped password does not match password");
		  
	  }
	  else{
	  $.ajax({
		  type: "POST",
		  data: {UN : username, PW: password},
		  url:"http://localhost/CreateValidation.php",
		  success: function(data){
		
			  if(data == ""){
				  sessionStorage.setItem('CreateAccount', "Account Created");
				  alert("Account Created");
			 // window.location.href= 'PersonalProfileView.html';
			  }
			  else {
				  sessionStorage.setItem('CreateAccount', "UserName is already taken");
				  alert("UserName is already taken");
				  //window.location.href= 'PersonalProfileView.html';
			  }
		  },
		  
		  error: function(xhr, ajaxOptions, thrownError ){
			 // alert(xhr.status +" - " + ajaxOptions + " - " + thrownError);
			  sessionStorage.setItem('CreateAccount', "Create Account Error");
			//  window.location.href= 'PersonalProfileView.html';
		
          }
		  
	  });
	  }
	//  $("#respond-1").load("MainScreen.html");
  }
  function checkLoginInfo(){
	  var username = document.getElementById("signIn-UserName").value;
	  var password = document.getElementById("signIn-Password").value;

	  if(username == "" || password == ""){
		  session.setItem("login" , "Enter a value for username and password");
		  alert("Enter a value for username and password");
	  }
   
	  $.ajax({
		  type: "POST",
		  data: {UN : username, PW: password},
		  url:"http://localhost/loginValidation.php",
		  success: function(data){
			  
			  if(data == "{}"){
				  alert("Username or Password is incorrect");
				  sessionStorage.setItem('login', "Username or Password is incorrect");
			  
			  //window.location.href= 'PersonalProfileView.html';
			 // location.reload(true);
			  }
			  else {
				  var responseNew = JSON.parse(data);
				  sessionStorage.setItem("signedIn", "true");	 
				  sessionStorage.setItem("UserName" , responseNew[0].userID );
				  document.getElementById("loginButton").innerHTML =  sessionStorage.getItem("UserName");
				  closeSignIn();
				  
			  }
		  },
		  
		  error: function(xhr, ajaxOptions, thrownError ){
			  alert(xhr.status +" - " + ajaxOptions + " - " + thrownError);
			  sessionStorage.setItem('login', "Sign in Error");
			
		
          }
		  
	  });
	  
	 // window.location.href= 'PersonalProfileView.html';

  }
  
  function closeSignIn(){
	  document.getElementById("wrap").style.opacity = "1.0";
	  temp = true;
	  document.getElementById("respond-1").style.display = "none";
  }
  
  
  