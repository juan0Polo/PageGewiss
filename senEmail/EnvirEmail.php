<?php
// Uncomment next line if you're not using a dependency loader (such as Composer)
// SG.Q0USCw04S42Ib26Cgze6zA.euOU2DUqTDOxrWch9O3tHz7C-Crqi-W-8OWTwtTxySU
require_once 'sengrid-php/sendgrid-php.php';

use SendGrid\Mail\Mail;

$email = new Mail();
$email->setFrom("juanpablopolo29@outlook.com", "Juan Polo");
$email->setSubject("Test SenGrid");
$email->addTo("polomontenegrojuanpablo@gmail.com", "Juan Pablo");
$email->addContent("text/plain", "Prueba de envio de correo electronico con SendGrid");
$email->addContent(
    "text/html", "<strong>Prueba exitosa</strong>"
);
$sendgrid = new \SendGrid('SG.Q0USCw04S42Ib26Cgze6zA.euOU2DUqTDOxrWch9O3tHz7C-Crqi-W-8OWTwtTxySU');
try {
    $response = $sendgrid->send($email);
    print $response->statusCode() . "\n";
    print_r($response->headers());
    print $response->body() . "\n";
} catch (Exception $e) {
    echo 'Caught exception: '.  $e->getMessage(). "\n";
}