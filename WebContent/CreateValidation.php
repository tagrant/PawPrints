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


$db = db_connect();
$query = "SELECT User_Id from login_info where User_Id = '$un'";
//$query = "SELECT * from login_info where User_Id = 'justinisdumb' AND Pass = 'password1'";


$result = mysqli_query($db, $query);
//$row_cnt = mysqli_num_rows($result);
//echo $row_cnt;
if(mysqli_num_rows($result)== 0) { 
   $insert = "INSERT INTO pawprints.login_info VALUES('$un', '$pw')";
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