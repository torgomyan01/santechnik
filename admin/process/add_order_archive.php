<?php 
session_start();
require ('../config.php');
$id = $_POST['id'];
$sql = "UPDATE `order_text` SET `page`= 'archive' WHERE `id`='$id'";
$query = mysqli_query($dbc,$sql);
if($query){
    echo 1;
}else{
    echo 0;
}

?>