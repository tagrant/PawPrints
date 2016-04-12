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

$noo = $_POST['neworold'];

$db = db_connect();

if($noo == 0){

$petimage = $_POST['petimage'];
$petimagename = $_POST['petimagename'];
$petID = $_POST['petID'];
$petType = $_POST['petType'];
$userId = $_POST['userId'];


$query = "INSERT INTO petphoto (photo, name, petID, petType, userID, numLikes, numReports) VALUES ('$petimage', '$petimagename', '$petID', '$petType', '$userId', 0, 0)";
$result = mysqli_query($db, $query);


}else if($noo == 1){
	
$petimage = $_POST['petimage'];
$petimagename = $_POST['petimagename'];
$petID = $_POST['petID'];
$petType = $_POST['newcategory'];
$userId = $_POST['userId'];


$query = "INSERT INTO petphoto (photo, name, petID, petType, userID, numLikes, numReports) VALUES ('$petimage', '$petimagename', '$petID', '$petType', '$userId', 0, 0)";
$result = mysqli_query($db, $query);	
	
	
}	

?>