<?php
session_start();
require ('../config.php');
$sql = "SELECT * FROM `order_text` ORDER BY id DESC";
$query = mysqli_query($dbc,$sql);
if(mysqli_num_rows($query) > 0){
    while($my_rout = mysqli_fetch_assoc($query)){
        if($my_rout['page'] == 'archive'){
           ?>
            <div class="orders">
                <div class="body_orders">
                    <p class="number"><?=$my_rout['number'];?></p>
                    <p class="data"><?=$my_rout['order_time'];?> - <span class="categories"><?=$my_rout['order_cat'];?></span></p>
                </div>
                <input type="submit" id="<?=$my_rout['id'];?>"  onclick="get('<?=$my_rout['id'];?>','ready','archive')" value="Готово">
                <input type="submit" id="<?=$my_rout['id'];?>"  onclick="get('<?=$my_rout['id'];?>','delete','archive')" value="Удалить">
            </div>
        <?php 
        }
    }
}else{
    echo 'error';
}
?>