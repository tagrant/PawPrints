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
$query = "SELECT * from pet where userID = '$un'";

$result = mysqli_query($db, $query);

if(mysqli_num_rows($result)== 0) { 
   $insert = "INSERT INTO loginInfo VALUES('$un', '$pw')";
   $insert_db = mysqli_query($db, $insert);
   
	}
	
else {
$rows = array();
while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
}
echo json_encode($rows, JSON_FORCE_OBJECT);
}
?>