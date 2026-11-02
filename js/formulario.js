// Formulário validado (contato.html). O envio é SIMULADO: nada é enviado nem guardado.

// Localiza os elementos pelo id do HTML.
const formulario = document.getElementById("formContato");
const campoEmail = document.getElementById("email");
const mensagemErro = document.getElementById("mensagemErro");
const mensagemSucesso = document.getElementById("mensagemSucesso");

// Função executada quando o formulário é enviado.
function validarFormulario(evento) {
    // Impede o envio e o recarregamento da página.
    evento.preventDefault();

    // Lê os campos e remove espaços do começo e do fim com trim().
    const nome = document.getElementById("nome").value.trim();
    const email = campoEmail.value.trim();
    const assunto = document.getElementById("assunto").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Guarda os erros encontrados (começa vazio, por isso usa let).
    let erros = "";
    // Verifica se o nome tem 3 caracteres.
    if (nome.length < 3) {
        erros = erros + "O nome precisa ter pelo menos 3 caracteres. \n ";
    }
    // Verifica se o e-mail esta certo.
    if (email === "") {
        erros = erros + "Preencha o e-mail. ";
    } else if (campoEmail.checkValidity() === false) {
    // checkValidity() confere o formato do type="email".
        erros = erros + " Digite um e-mail válido, como nome@email.com.\n ";
    }
    // Verifica se o assunto esta vazio.
    if (assunto === "") {
        erros = erros + "Preencha o assunto.\n  ";
    }
    // Verifica se a mensagem tem menos de 10 caracteres.
    if (mensagem.length < 10) {
        erros = erros + "A mensagem precisa ter pelo menos 10 caracteres.\n ";
    }

    // Mostra o resultado na própria página.
    if (erros === "") {
        mensagemErro.textContent = "";
        mensagemSucesso.textContent = "Obrigado, " + nome + "! Mensagem recebida! \n (Confirmação simulada: nenhum e-mail foi enviado e nenhum dado foi coletado ou guardado.)";
        formulario.reset();
    // Mostra mensagem de erros. 
    } else {
        mensagemSucesso.textContent = "";
        mensagemErro.textContent = erros;
    }
}

// Executa a função quando o formulário for enviado.
formulario.addEventListener("submit", validarFormulario);
