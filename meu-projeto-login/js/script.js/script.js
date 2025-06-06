// Função que será chamada quando o formulário for enviado
function validarLogin() {
    // Pega os valores digitados nos campos
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const mensagem = document.getElementById("mensagem");

    // Verifica se o usuário e a senha são "admin"
    if (usuario === "admin" && senha === "admin") {
        alert("Login bem-sucedido!"); // Mostra alerta de sucesso
        mensagem.textContent = ""; // Limpa mensagem de erro
        return true; // Permite o envio do formulário
    } else {
        mensagem.textContent = "Usuário ou senha incorretos!"; // Mostra mensagem de erro
        return false; // Impede o envio do formulário
    }
}