<?php
header("Content-Type: application/json");
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

$query = "SELECT User_ID from Login_Info where User_ID = 'justinisdumb' AND Password = 'password1'";


$result = mysqli_query($db, $query);
$rows = array();
while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
}
echo json_encode($rows);

?>