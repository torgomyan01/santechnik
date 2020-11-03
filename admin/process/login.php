<?php
session_start();
$password = $_POST['password'];
$admin_password = 'd2gkB&VXtk';
if($_SESSION['password'] == ''){
    $_SESSION['password'] = $password; 
    if($_SESSION['password'] == $admin_password){
        echo 'log_y';
    }else{
        echo 'log_n';
    }
}else{
    if($_SESSION['password'] == $admin_password){
        echo 'log_y';
    }else{
        $_SESSION['password'] = $password; 
        if($_SESSION['password'] == $admin_password){
            echo 'log_y';
        }else{
            echo 'log_n';
        }
    }
}



?>