<?php
	$userData = $_POST['user'];
	$partner = $_POST['partner'];
	$product = $_POST['product'];
	$language = $_POST['language'];

	$to = "NPOAlekseevskoe@yandex.ru"; 
	$date = date ("d.m.Y"); 
	$time = date ("H:i");
	$from = $email;
	$subject = "Заявка c сайта";
	$headers = 'Content-type: text/html; charset=iso-8859-1';

	$msg="$userData $partner
	$product

	Запрос был сделан $date в $time с $language версии сайта"; 
	
	mail($to, $subject, $msg, $headers);

?>