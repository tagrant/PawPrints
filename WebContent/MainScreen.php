<?php

	session_start();
	
	$server = 'ex-std-node326.prod.rhcloud.com';
	$db_username ='admin64SSNiM ';
	$db_password='2HsXkv87aBGW'
	$database = 'PawPrints';
	
	if(!mysql_connect)($server, $db_password,$db_password)
		die('failed');
	}
	
	if(mysql_select_db)($database){
		die('couldnt connect to db')
	}


?>