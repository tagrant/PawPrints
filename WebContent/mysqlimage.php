<?php
    ini_set('mysql.connect_timeout',300);
    ini_set('default_socket_timeout',300);
?>
<html>
    <body>
        <form method="post" enctype="multipart/form-data">
        <br/>
            <input type="file" name="image" />
            <br/><br/>
            <input type="submit" name="sumit" value="Upload" />
        </form>
        <?php
		   
            echo $OPENSHIFT_DATA_DIR

			
            if(isset($_POST['sumit']))
            {
                if(getimagesize($_FILES['image']['tmp_name']) == FALSE)
                {
                    echo "Please select an image.";
                }
                else
                {
                    $image= addslashes($_FILES['image']['tmp_name']);
                    $name= addslashes($_FILES['image']['name']);
                    $image= file_get_contents($image);
                    $image= base64_encode($image);
                    saveimage($name,$image);
                }
            }
            displayimage();
            function saveimage($name,$image)
            {
				
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
         
				$con = mysqli_connect(DB_HOST, DB_USER, DB_PASS) or die ("error");
				mysqli_select_db($con, "PawPrints");
                $qry="insert into images values ('$name','$image')";
				
                $result=mysqli_query($con,$qry);
				
                if($result)
                {
                    echo "<br/>Image uploaded.";
                }
                else
                {
                    echo "<br/>Image not uploaded.";
                }
            }
            function displayimage()
            {
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
			
                $con = mysqli_connect(DB_HOST, DB_USER, DB_PASS) or die ("error");
				mysqli_select_db($con, "PawPrints");
                $qry="select * from 'images'";
                $result=mysqli_query($con,$qry);
                while($row = mysqli_fetch_array($result))
                {
                    echo '<img height="300" width="300" src="data:image;base64,'.$row[2].' "> ';
                }
                mysqli_close($con);   
            }
        ?>
    </body>
</html>