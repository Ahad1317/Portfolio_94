<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "khanazan761@gmail.com";
    $headers = "From: ".$mailFrom;
    $text = "You have received an email from ".$name.".\n\n".$message;

    mail($mailTo, $subject, $tx, $headers);
    header("Location: index.php?mailsend");
}