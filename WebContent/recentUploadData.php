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



$db = db_connect(); 

				$petType = $_POST['petType'];  
				
                $con=mysqli_connect("localhost","root","");
                mysqli_select_db($con,"pawprints");
				
				
                $qry="SELECT userID, numLikes, photoID FROM petphoto ORDER BY petphoto.dateMade DESC  LIMIT 10";
                $result=mysqli_query($con,$qry);
				$try = array();
                while($row = mysqli_fetch_array($result))
                {
					 $try[] = $row;
     
				}

				echo json_encode($try, JSON_FORCE_OBJECT);
				   
                mysqli_close($con);   
            
      

?>


































