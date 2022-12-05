<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

$ROOT = $_SERVER['DOCUMENT_ROOT'];

require "$ROOT/wp-includes/PHPMailer/Exception.php";
require "$ROOT/wp-includes/PHPMailer/PHPMailer.php";
require "$ROOT/wp-includes/PHPMailer/SMTP.php";

$mail = new PHPMailer(true);
$msg = $_POST['msg'];
$date = date ("d.m.Y"); 
$time = date ("H:i");
$msg="$msg <span style='font-style:italic'>$date в $time</span>";
$DIR = __DIR__;

$from = 'technoprogress@ibm-r.com';
$to = 'Rostehnoprogress@bk.ru';

if (!is_dir("$DIR/error")) {
  mkdir("$DIR/error");
};
$path = "$DIR/error/mail.html";

try {
  //Server settings
  $mail->isSMTP();                                            //Send using SMTP
  $mail->Host       = 'mail.hosting.reg.ru';                  //Set the SMTP server to send through
  $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
  $mail->Username   = $from;                                  //SMTP username
  $mail->Password   = '94jOV7EtOcCLL0nl';                     //SMTP password
  $mail->SMTPSecure = "ssl";                                  //Enable implicit TLS encryption
  $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
  $mail->CharSet    = "utf-8";

  //Recipients
  $mail->setFrom($from);
  $mail->addAddress($to);     

  //Content
  $mail->isHTML(true);                                  //Set email format to HTML
  $mail->Subject = 'Новая заявка';
  $mail->Body    = $msg;

  $mail->send();
  
  $fp = fopen($path, 'w+');
  fwrite($fp, 'access');
  fclose($fp);
} catch (Exception $e) {
  $error = "[$time | $date] {$mail->ErrorInfo}";
  
  $fp = fopen($path, 'w+');
  fwrite($fp,  $error);
  fclose($fp);
}