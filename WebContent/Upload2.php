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

if($noo == '0'){

$petimage = $_POST['petimage'];
$petimagename = '0';
$petID = $_POST['petID'];
$petType = $_POST['petType'];
$userId = $_POST['userId'];


$query = "INSERT INTO petphoto (photo, petID, petType, userID, numLikes, numReports) VALUES ('$petimage', '$petID', '$petType', '$userId', 0, 0)";

$result = mysqli_query($db, $query);


}else{
	

	
$petimage = $_POST['petimage'];
$petimagename = '0';
$petID = $_POST['petID'];
$newcategory = $_POST['newcategory'];
$userId = $_POST['userId'];


$query = "INSERT INTO petphoto (photo, petID, petType, numLikes, numReports, userID) VALUES ('$petimage', '$petID', '$newcategory', 0, 0, '$userId')";

$result = mysqli_query($db, $query);	

	
}	

?>