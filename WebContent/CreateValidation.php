<?php
define('DB_HOST', getenv('OPENSHIFT_MYSQL_DB_HOST'));
define('DB_PORT', getenv('OPENSHIFT_MYSQL_DB_PORT'));
define('DB_USER', getenv('OPENSHIFT_MYSQL_DB_USERNAME'));
define('DB_PASS', getenv('OPENSHIFT_MYSQL_DB_PASSWORD'));
define('DB_NAME', getenv('OPENSHIFT_EXTMYSQL_DB_NAME'));

$dbhost = constant("DB_HOST"); // Host name
$dbport = constant("DB_PORT"); // Host port
$dbusername = constant("DB_USER"); // Mysql username
$dbpassword = constant("DB_PASS"); // Mysql password
$db_name = constant("DB_NAME"); // Database name

function db_connect(){
	
	$db = mysqli_connect(DB_HOST, DB_USER, DB_PASS) or die ("error");
	mysqli_select_db($db, DB_NAME);
	return $db;
}

$un = $_POST['UN'];
$pw = $_POST['PW'];


$db = db_connect();
$query = "SELECT 'userID' from 'loginInfo' where userID = '$un'";
//$query = "SELECT * from login_info where User_Id = 'justinisdumb' AND Pass = 'password1'";


$result = mysqli_query($db, $query);
//$row_cnt = mysqli_num_rows($result);
//echo $row_cnt;
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