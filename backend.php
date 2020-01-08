<?php 

if (isset($_GET)) {

    $metr=$_GET['data']['metr'];
    $count_kv = $_GET['data']['count_kv'];
    $name = $_GET['data']['name'];
    $email = $_GET['data']['email'];

    $message = "Введенные данные "." МЕТРАЖ КОМНАТЫ ".$metr." СКОЛЬКО КВ.М В УПАКОВКЕ ".$count_kv." Имя ".$name;
    mail($email,"Введенные данные", $message);

    echo "ВАША ЗАЯВКА ПРИНЯТА";
}

?>