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

$un = $_POST['username'];
$petID = $_POST['petID'];

$db = db_connect();
$query = "SELECT photo from petphoto where userID = '$un' and petID = '$petID' LIMIT 1";
$result = mysqli_query($db, $query);


while($row = mysqli_fetch_array($result)) {
    echo json_encode($row[0]);
	echo "&";
}

mysqli_close($db);


?>