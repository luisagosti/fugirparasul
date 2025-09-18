<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "geral@fugirparasul.com"; // where the email goes
    $subject = "Nova mensagem: " . htmlspecialchars($_POST['subject']);

    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    $body  = "Nome: $name\n";
    $body .= "Email: $email\n";
    $body .= "Telefone: $phone\n\n";
    $body .= "Mensagem:\n$message\n";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Try sending
    if (mail($to, $subject, $body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
?>