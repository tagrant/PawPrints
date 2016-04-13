<?php
header("Access-Control-Allow-Origin: *");

define("servername", "localhost");
define("username", "root");
define("password", "");
define("dbname", "pawprints");

function db_connect(){
	
	$db = mysqli_connect(servername, username,password) or die ("error");
	mysqli_select_db($db, dbname);
	return $db;
}

//$petid = $_POST['petId'];

$db = db_connect(); 
              
            displayimage();
				
            function displayimage()
            {
				$petID = $_POST['petId'];  
                $con=mysqli_connect("localhost","root","");
                mysqli_select_db($con,"pawprints");
                $qry="select userID, numLikes, photoID from petphoto where petId = '$petID'";
                $result=mysqli_query($con,$qry);
				$try = array();
                while($row = mysqli_fetch_array($result))
                {
					 $try[] = $row;
        
				}

				echo json_encode($try, JSON_FORCE_OBJECT);
				   
                mysqli_close($con);   
            }
      

?>