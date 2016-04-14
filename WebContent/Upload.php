<?php
    ini_set('mysql.connect_timeout',300);
    ini_set('default_socket_timeout',300);
?>

<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="MainScreen.css">
<link rel="stylesheet" type="text/css" href="Upload.css">
<title>PawPrints - Upload a Photo</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet"
	href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script
	src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
<script src="Upload.js" type="text/javascript" charset="UTF-8"></script>
<script src="MainScreen.js" type="text/javascript" charset="UTF-8"></script>
</head>


<body>

<div id="wrap">

<div class="title">


<button class="title-log-in" id = "loginButton" type = "button" name="" onclick="signUp()" value = "Sign In" >  
	<script type='text/javascript'>
			document.getElementById("loginButton").innerHTML =  sessionStorage.getItem("UserName");
			
			var un = document.getElementById("loginButton").innerHTML =  sessionStorage.getItem("UserName");
			document.getElementById("loginButton").name = un;
			
			$.ajax({
		  type: "POST",
		  data: {un :  un },
		  url:"http://localhost/Upload0.php",
		  success: function(data){
			var responseNew = JSON.parse(data);
				  document.getElementById("whichpet").innerHTML = responseNew;
				
		  },
		  
		  error: function(xhr, ajaxOptions, thrownError ){
			  
		
          }
		  
	  });	
			
	</script>


</button>



<div id="menuwrapper" style="font-size: 11px;">
    <ul>
        <li><a href="#" style="font-size: 13px;">Menu ▼</a>
            <ul>
                <li><a href="#"onClick="topPage()">Top Pets</a></li>
                <li><a href="#"onClick="searchFunction('RecentlyUploaded')">Recently Uploaded</a></li>
                <li><a href="#">Search Pets ►</a>
                    <ul>
                    <li>
                    <div style="background-color: #C6C3C0; padding: 8px;">
                   		<b>Common Pets: </b><br>
                   		<p><a href="#"onClick="searchFunction('Cats')">Cats</a>
                   		<a href="#" onClick="searchFunction('Dogs')">Dogs</a>
                   		<a href="#"onClick="searchFunction('Fishes')">Fishes</a>
                   		<a href="#"onClick="searchFunction('Birds')">Birds</a></p>
                   		</div><BR>
                   		<div style="padding: 8px;">
                   		<b>Small Pets: </b><br>
                   		<p><a href="#"onClick="searchFunction('Rabbits')">Rabbits</a>
                   		<a href="#"onClick="searchFunction('Hamsters')">Hamsters</a>
                   		<a href="#"onClick="searchFunction('Ferrets')">Ferrets</a>
                   		<a href="#"onClick="searchFunction('Mouse')">Mouse</a></p>
                   		</div><BR>
                   		<div style="background-color: #C6C3C0; padding: 8px;">
                   		<b>Other Pets: </b><br>
                   		<p><a href="#"onClick="searchFunction('Reptiles')">Reptiles</a>
                   		<a href="#"onClick="searchFunction('Amphibians')">Amphibians</a>
                   		<a href="#"onClick="searchFunction('Horses')">Horses</a>
                   		<a href="#"onClick="searchFunction('Exotic Pets')">Exotic Pets</a></p>
                   		</div>
                   	</li>
                        
                       </ul>
                       
                       </li>
                    </ul>
                    
                    
                    
                </li> 
            </ul>     
</div>



	<a class="title-image" id = "homebutton" type = "button" onclick="mainscreen()" ></a>

</div>





<div class="content" style="padding-top: 100px; padding-bottom: 300px; height: 100% !important;">


<h2>Upload a Photo:</h2>
	
<br>
<div class="upload-image">
Please select an image you wish to upload:
 <form method="post" enctype="multipart/form-data">
<input style="font-size: 14px; margin-left: 20px;  letter-spacing: 2px; " name="image" type='file'/>

<div style="margin-left: 450px; margin-top: -145px;">
<img style="height:250px; width: 400px; border: none;" id="myImg" src="http://i.imgur.com/GEs36JP.gif" />
</div>
</div>


   
            <input class="upload-button" type="submit" name="Upload" onclick="saveall()" value="Upload" />
			
        </form>

		
		<div class="which-pet">
Which pet is this?

<select style="margin-left: 288px; width: 400px; padding: 5px;" name="whichpet" id="whichpet">

</select>

<div style="display:none;" class='new-pet'>New pet name:
    <input style="margin-left: 308px; width: 400px;" id="newpet" type='text' name='np'/>

<div class="which-category">
Which category is your pet in?


<select id="newcategory" style="margin-left: 176px; width: 400px; padding: 5px;">
<option>Select a Category</option>
<option>Cats</option>
<option>Dogs</option>
<option>Fishes</option>
<option>Birds</option>
<option>Rabbits</option>
<option>Hamsters</option>
<option>Ferrets</option>
<option>Mouse</option>
<option>Reptiles</option>
<option>Amphibians</option>
<option>Horses</option>
<option>Exotic Pets</option>
</select>


</div>
</div>



</div>
	
		

</div>

</div>


<div  class= "login-div" id="respond-1" style="display:none;">
            <div class = "input-login">
            Sign in:
                 <form action="demo_form.asp" class= "text-box-font">
                      <input class = "text-box-background-login" id="signIn-UserName" type="text" name="username-login" class="padding" placeholder="Username"><br>
                      <input class = "text-box-background-login" id= "signIn-Password" type="password" name="password-Login" class="padding" placeholder="Password"><br>
                  <input class ="submit-button-signIn" type="button"  value="Sign In" onclick = "checkLoginInfo()">
                 
                </form>                 
            </div>   
           
            <div class="input-Create-Account">
            <a class="close-button" type="button" onclick="closeSignIn()"><img src="http://www.nulana.com/static/i/products/flexiglass/icon_close.png"></a>
            Create Account:
                 <form action="demo_form.asp" class= "text-box-font">
                      <input class = "text-box-background-create" type="text" id="username-createAccount" name="username-createAccount" class="padding" placeholder="Username"><br>
                      <input class = "text-box-background-create" type="password" id="password-createAccount" name="password-createAccount" class="padding" placeholder="Password"><br>
                      <input class = "text-box-background-create" type="password" id="retype-password-createAccount" name="retype-password-createAccount" class="padding" placeholder="Retype password"><br>
                  <input class ="submit-button" type="button" value="Sign Up" onclick = "checkCreateInfo()">
                 
                </form>                 
            </div>       
    </div>





   <?php
		
define("servername", "localhost");
define("username", "root");
define("password", "");
define("dbname", "pawprints");

function db_connect(){
	
	$db = mysqli_connect(servername, username,password) or die ("error");
	mysqli_select_db($db, dbname);
	return $db;
}


$db = db_connect();


if(isset($_POST['un']))
            {

$userID = $_POST['un'];

$qry="select petName from pet where pet.userID = '$userID'";
$result1 = mysqli_query($db, $qry);

$prname1=array();
$prname1[]="<select style=\"margin-left: 288px; width: 400px; padding: 5px;\" name=\"whichpet\" id=\"whichpet\">
<option>Select a Pet Name</option>";
$i = 0;

while($row=  mysqli_fetch_array($result1))
{
	$prname1[]= "<option value=\"".$i."\">".$row["petName"]."</option>";
	$string = implode("<br>", $prname1);
	$i = $i + 1;
	
}

$prname1[] = "<option value=\"np\">Add a New Pet</option></select>";
$string = implode("", $prname1);
$prname2 = explode(',', $string);
echo json_encode($prname2); 

mysqli_close($db);

			}
		
		 if(isset($_POST['Upload']))
            {
              
                    $image= addslashes($_FILES['image']['tmp_name']);
                   //$name= addslashes($_FILES['image']['name']);
                    $image= file_get_contents($image);
                    $image= base64_encode($image);
					
				
			}
			
			?>
			<script type="text/javascript">				
				
			var petimage = "<?= $image ?>"; 
			//sessionStorage.setItem("petimage", petimage);
			
			
			</script>
			
<script type="text/javascript" src="Upload.js"></script>
			
			
     
			</html></body>