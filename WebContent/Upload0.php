<?php

		
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



$userID = $_POST['un'];

$qry="select petName from pet where pet.userID = '$userID'";
$result1 = mysqli_query($db, $qry);

$prname1=array();
$prname1[]="<option>Select a Pet Name</option>";
$i = 0;

while($row=  mysqli_fetch_array($result1))
{
	$prname1[]= "<option value=\"".$i." \">" .$row['petName']. "</option>";
	$string = implode("<br>", $prname1);
	$i = $i + 1;
	
}

$prname1[] = "<option value=\"np\">Add a New Pet</option>";
$string = implode("", $prname1);
$prname2 = explode(',', $string);
echo json_encode($prname2); 

mysqli_close($db);

			

?>