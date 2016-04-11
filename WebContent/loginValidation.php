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
$pw = $_POST['PW'];
$dataBaseName = "logininfo";


$db = db_connect();

$query = "SELECT userID from loginInfo where userID = '$un' AND password = '$pw'";
//$query = "SELECT * from login_info where User_Id = 'justinisdumb' AND Pass = 'password1'";


$result = mysqli_query($db, $query);


//echo json_encode($result);
$rows = array();
while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
}

echo json_encode($rows, JSON_FORCE_OBJECT);




?>