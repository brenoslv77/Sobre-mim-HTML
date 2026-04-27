// inicializando o emailjs com um token (public key)
emailjs.init (window.env.EMAIL_PUBLIC_KEY);

// função para enviar o formulario por email
function enviarFormulario(e){

// impede a página de recarregar ao enviar o formulario 
e.preventDefault();

// pegando os campos do formulario por ID e armazenando em variaveis
let nome = document.getElementById("nome").value;
let email = document.getElementById("email").value;
let mensagem = document.getElementById("mensagem").value;
let resposta = document.getElementById("resposta");
let form = document.getElementById("form");

// envia email usando o:
    // service id:
    // template id:
    //  campos de email
emailjs.send(window.env.EMAIL_SERVICE_ID, window.env.EMAIL_TEMPLATE_ID_ADMIN, {
    nome: nome,
    email: email,
    mensagem: mensagem
});

emailjs.send(window.env.EMAIL_SERVICE_ID, window.env.EMAIL_TEMPLATE_ID_REPLY, {
    nome: nome,
    email: email
});

//alert("Sua mensagem foi enviada com sucesso! Aguarde nosso retorno")

// inserir dentro do paragrafo (HTML) o texto
// apos enviar a mensagem
resposta.innerHTML = "Sua mensagem foi enviada com sucesso! Aguarde nosso retorno";
// limpar os campos do formulario
form.reset();
}