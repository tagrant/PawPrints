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

$un = $_POST['UN'];
$db = db_connect();

$query = "SELECT * from pet, petphoto where pet.userID = '$un' and pet.petID = petphoto.petID group by pet.petName having COUNT(*) >=1";
$result = mysqli_query($db, $query);

	

$rows = array();
while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
	$petID = $rows[0]; 
	
		
}



echo json_encode($rows, JSON_FORCE_OBJECT);

?>