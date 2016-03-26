<?php

$first = $_POST['first_name'];
$last = $_POST['first_name'];
$email = $_POST['email'];
$message = $_POST['message'];
// In case any of our lines are larger than 70 characters, we should use wordwrap()
$message = wordwrap($message, 70, "\r\n");



$to = "aln3@pdx.edu";
$subject = "New email from home/contact";

$result = mail ($to, $subject, $message, "From: " . $email);

echo "The email was sent is: " . $result;

?>
