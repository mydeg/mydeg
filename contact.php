<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Pegando os dados do formulário
    $nome = $_POST['name'];
    $email = $_POST['email'];
    $assunto = $_POST['subject'];
    $mensagem = $_POST['message'];

    // Validando se todos os campos foram preenchidos
    if (empty($nome) || empty($email) || empty($assunto) || empty($mensagem)) {
        echo "Por favor, preencha todos os campos.";
        exit;
    }

    // Configurações do e-mail
    $para = "mydeplus2023@gmail.com";  // Altere para seu e-mail
    $titulo = "Mensagem de Contato - $assunto";
    $corpo = "Nome: $nome\nE-mail: $email\n\nMensagem:\n$mensagem";

    // Enviando o e-mail
    if (mail($para, $titulo, $corpo)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Ocorreu um erro ao enviar a mensagem. Tente novamente.";
    }
}
?>
