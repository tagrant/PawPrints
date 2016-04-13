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

$un = $_POST['userId'];
$petID = $_POST['petid'];

$db = db_connect();
$query = "DELETE FROM pet WHERE userID = '$un' and petID = '$petID'";
$result = mysqli_query($db, $query);



mysqli_close($db);


?>