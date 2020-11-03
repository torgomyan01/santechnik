
<?php
session_start();
require ('../config.php');
$id = $_POST['id'];
$sql = "DELETE FROM `order_text` WHERE `id`='$id'";
$query = mysqli_query($dbc,$sql);
if($query){
    echo 1;
}else{
    echo 0;
}
?>