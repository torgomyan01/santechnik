<?php 
session_start();
require ('../config.php');
$number = $_POST['number'];
$categorie = $_POST['categorie'];

if($categorie == '') {
    $categorie = 'Без категории';
}

// for date
$date = date("d.m.Y");
$time = $_POST['time'];
$full_date = $date . ' / '. $time;

// query
$sql = "INSERT INTO `order_text`(`number`, `order_time`, `order_cat`, `page`) VALUES ('$number','$full_date','$categorie','home')";
$query = mysqli_query($dbc, $sql);

if($query) {
    echo 1;
}
else {
    echo 0;
}

?>