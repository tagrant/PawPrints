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

$query = "SELECT photo
 from pet, petphoto where pet.userID = '$un' and pet.petID = petphoto.petID group by pet.petName having COUNT(*) >=1";
$result = mysqli_query($db, $query);

	

$rows = array();
while($row = mysqli_fetch_array($result)) {
    echo json_encode($row[0]);
	echo "&";
	
		
}

mysqli_close($db);

?>