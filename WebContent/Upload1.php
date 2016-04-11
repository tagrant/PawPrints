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

$un = $_POST['userId'];
$pn = $_POST['petName'];


$query = "SELECT petID, petType from pet where userID = '$un' AND petName = '$pn'";
$result = mysqli_query($db, $query);


//echo json_encode($result);
$rows = array();
while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
	$rows[1] = $r;
}

echo json_encode($rows, JSON_FORCE_OBJECT);

}else if($noo == 1){
	
$un = $_POST['userId'];
$petname = $_POST['newpetname'];
$petType = $_POST['newcategory'];

$query = "INSERT INTO pet (petName, petType, userID) VALUES ('$petname', '$petType', '$un')";
$result = mysqli_query($db, $query);

$query2 = "SELECT petID FROM pet WHERE userID = '$un' AND petName = '$petname'";
$result2 = mysqli_query($db, $query2);
	
	
$rows = array();
while($r = mysqli_fetch_assoc($result2)) {
    $rows[] = $r;
	$rows[1] = $r;
}

echo json_encode($rows, JSON_FORCE_OBJECT);	
	
	
	
}


?>