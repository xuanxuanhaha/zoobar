<?php
include 'includes_zoobar.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

/**
 * Credits to https://github.com/PHPMailer/PHPMailer
 */
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'vendor/autoload.php';

function email_sending($from_user, $from_pass, $to_address, $to_address_name, $reply_to, $cc='', $subj, $body, $customerName, $customerEmail) {
  $mail = new PHPMailer(true);
  try {
        /*
        * Server Mail Settings
        */        

        $mail->isSMTP();
        $mail->Host = 'mail.zoobarandgrill.com.au';
        $mail->SMTPAuth = true;                             
        $mail->Username = $from_user;
        $mail->Password = $from_pass;
        $mail->SMTPSecure =  'ssl';
        $mail->Port = 465;

        //Recipients
        $mail->setFrom($customerEmail, $customerName);
        $mail->addAddress($to_address, $to_address_name);
        //$mail->addCC('cc@example.com');
        $mail->isHTML(true);
        $mail->Subject = $subj;
        $mail->Body    = $body;
        $mail_send = $mail->send();

        if ($mail_send) return 1;
        return 0;
    } catch (Exception $e) {
        return 0;
    }
}

$email_data = file_get_contents("php://input");

// Decoding the json data to retrieve based on objects
$request = json_decode($email_data, true);

$debug = 0;

if ($debug) {
  $customerName    = "JOhn";
  $customerMobile  = "03123123123";
  $customerEmail   = 'savy.1712@gmail.com';
  $customerSubject = 'TESTING - AUTOMATIC TEST SCRIPTING';
  $customerMessage = "HAI.. COnducting test";
} else {
  $customerName    = $request['name'];
  $customerMobile  = $request['mobile'];
  $customerEmail   = $request['email'];
  $customerSubject = $request['subject'];
  $customerMessage = $request['message'];
}

if ($request == NULL || $request == '') {
  return;
}

$content = "<p>Dear <strong>Team</strong>,</p>
<p>Name           : $customerName</p>
<p>Mobile Number  : $customerMobile</p>
<p>Email Address  : $customerEmail</p>
<p>Subject        : $customerSubject</p>
<p>CustomerMessage: $customerMessage</p>
";

// Just including the Plain HTML content
$body = $content;

date_default_timezone_set('Australia/Sydney');
$d    = strtotime("now");
$time = date("Y-m-d h:i:sa", $d);

// Submitting the Enquiries including Date & Time
$subj = 'Customer Enquiry - Zoo Bar & Grill '.$time;

if (email_sending(from_mail(), from_pass(), to_address(), to_address_name(), 
$customerEmail, '', $subj, $body, $customerName, $customerEmail) ) {
  echo json_encode('success');
} else {
    echo json_encode('failure');
}

?>