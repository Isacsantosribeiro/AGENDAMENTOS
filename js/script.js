function verificarCadastro() {
    const usuarioCadastrado = localStorage.getItem('usuarioCadastrado');

    if (usuarioCadastrado) {
        window.location.href = 'telaPrincipal.html';
    } else {
        alert('Você precisa se cadastrar para acessar a tela principal.');
        window.location.href = 'login.html#registro';
    }
}

function registrarUsuario(event) {
    event.preventDefault();

    if (validarRegistro(event)) {
        // Simula o registro do usuário (adapte para o seu backend)
        localStorage.setItem('usuarioCadastrado', true);
        window.location.href = 'telaPrincipal.html';
    }
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validarSenhaForte(senha) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(senha);
}

function validarRegistro(event) {
    const email = document.getElementById('email-registro').value;
    const senha = document.getElementById('password-registro').value;

    if (email === '' || senha === '') {
        alert('Por favor, preencha todos os campos.');
        event.preventDefault();
        return false;
    }

    if (!validarEmail(email)) {
        alert('Por favor, insira um email válido.');
        event.preventDefault();
        return false;
    }

    if (!validarSenhaForte(senha)) {
        alert('A senha deve ter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um caractere especial.');
        event.preventDefault();
        return false;
    }

    // Aqui você adicionaria a lógica para enviar os dados para o servidor e registrar o usuário
    return true;
}

function validarLogin(event) {
    const email = document.getElementById('email-login').value;
    const senha = document.getElementById('password-login').value;

    if (email === '' || senha === '') {
        alert('Por favor, preencha todos os campos.');
        event.preventDefault();
        return false;
    }

    // Aqui você precisaria adicionar a lógica para verificar se o email e senha correspondem a um usuário cadastrado
    // Exemplo fictício:
    if (email === 'usuario@exemplo.com' && senha === 'senha123') {
        return true; // Login bem-sucedido
    } else {
        alert('E-mail ou senha incorretos.');
        event.preventDefault(); // Impede o envio do formulário
        return false;
    }
    
}

document.getElementById('continuar-sem-login').addEventListener('click', verificarCadastro);


