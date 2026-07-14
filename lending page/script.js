const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event){

event.preventDefault();

let nome = document.getElementById("nome").value.trim();
let email = document.getElementById("email").value.trim();
let mensagem = document.getElementById("mensagem").value.trim();

if(nome == "" || email == "" || mensagem == ""){
    alert("Preencha todos os campos.");
    return;
}

let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!regex.test(email)){
    alert("Digite um e-mail válido.");
    return;
}

alert("Formulário enviado com sucesso!");

formulario.reset();

});