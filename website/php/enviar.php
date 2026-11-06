<?php
/**
 * enviar.php
 * Processa o formulário de contato do rodapé universal (footer.js).
 * EDIT: troque $para pelo e-mail que deve receber as mensagens, se necessário.
 */

$isAjax = isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest';

function respond($success, $isAjax, $redirectBase) {
    if ($isAjax) {
        http_response_code($success ? 200 : 400);
        header('Content-Type: application/json; charset=UTF-8');
        echo json_encode(['success' => $success]);
        exit;
    }
    header('Location: ' . $redirectBase . ($success ? '?sucesso=1#contact' : '?erro=1#contact'));
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(false, $isAjax, '../index.html');
}

$nome = strip_tags(trim($_POST['nome'] ?? ''));
$email = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$mensagem = strip_tags(trim($_POST['mensagem'] ?? ''));

if (empty($nome) || empty($mensagem) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(false, $isAjax, '../index.html');
}

$para = 'nocthyraudio@gmail.com';
$assunto = 'Contato do site - ' . $nome;
$corpo = "Nome: $nome\nE-mail: $email\n\nMensagem:\n$mensagem";
$headers = "From: $email\r\nReply-To: $email\r\n";

$enviado = mail($para, $assunto, $corpo, $headers);

respond($enviado, $isAjax, '../index.html');
