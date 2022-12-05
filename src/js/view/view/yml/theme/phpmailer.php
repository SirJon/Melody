<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

$ROOT = $_SERVER['DOCUMENT_ROOT'];

require "$ROOT/wp-includes/PHPMailer/Exception.php";
require "$ROOT/wp-includes/PHPMailer/PHPMailer.php";
require "$ROOT/wp-includes/PHPMailer/SMTP.php";

$mail = new PHPMailer(true);

$userData = $_POST['user'];
$partner = $_POST['partner'];
$product = $_POST['product'];
$language = $_POST['language'];
$date = date ("d.m.Y"); 
$time = date ("H:i");

$msg="$userData $partner
$product

Запрос был сделан $date в $time с $language версии сайта"; 

$DIR = __DIR__;
if (!is_dir("$DIR/error")) {
  mkdir("$DIR/error");
};

$from = 'npoalex@npoalex.com';
$to = 'NPOAlekseevskoe@yandex.ru';

try {
    //Server settings
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'mail.hosting.reg.ru';                  //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = $from;                                  //SMTP username
    $mail->Password   = '2UmLV67X7OSkrxEK';                     //SMTP password
    $mail->SMTPSecure = "ssl";                                  //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom($from);
    $mail->addAddress($to);     

    //Content
    $mail->isHTML(true);                                        //Set email format to HTML
    $mail->Subject = 'Новая заявка';
    $mail->Body    = $msg;

    $mail->send();
    
    $path = "$DIR/error/mail.html";
    
    $fp = fopen($path, 'w+');
    fwrite($fp, 'access');
    fclose($fp);
} catch (Exception $e) {
    $error = "[$time | $date] Error: {$mail->ErrorInfo}";
    $path = "$DIR/error/test.html";
    
    $fp = fopen($path, 'w+');
    fwrite($fp, $error);
    fclose($fp);
}