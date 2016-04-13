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

$photo = $_POST['photoID'];
$like = $_POST['like'];
$db = db_connect();


if($like == 0){
$query = "UPDATE petphoto SET numLikes = numLikes + 1 WHERE photoID = '$photo'";
$result = mysqli_query($db, $query);

}else{
	
$query = "UPDATE petphoto SET numReports = numReports + 1 WHERE photoID = '$photo'";
$result = mysqli_query($db, $query);
	
}


?>