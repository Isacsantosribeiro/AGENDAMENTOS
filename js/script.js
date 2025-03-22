/*********************************************
 *           Funções de Validação
 *********************************************/
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  function validarSenhaForte(senha) {
    // Ao menos 8 caracteres, uma letra maiúscula, uma minúscula, um número e um caractere especial
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(senha);
  }
  
  /*********************************************
   *           Funções de Registro
   *********************************************/
  /**
   * @description Tenta registrar um novo usuário no localStorage
   */
  function registrarUsuario(event) {
    event.preventDefault();
  
    // Obter valores do formulário
    const email = document.getElementById('email-registro').value.trim();
    const senha = document.getElementById('password-registro').value.trim();
  
    // Validar
    if (!email || !senha) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    if (!validarEmail(email)) {
      alert('Por favor, insira um email válido.');
      return;
    }
  
    if (!validarSenhaForte(senha)) {
      alert('A senha deve ter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um caractere especial.');
      return;
    }
  
    // Se chegou até aqui, a validação passou
    // Salvar no localStorage (exemplo simples, apenas um usuário)
    const usuario = { email, senha };
    localStorage.setItem('usuario', JSON.stringify(usuario));
  
    // Redirecionar para tela principal
    window.location.href = 'telaPrincipal.html';
  }
  
  /*********************************************
   *           Funções de Login
   *********************************************/
  function validarLogin(event) {
    event.preventDefault();
  
    const email = document.getElementById('email-login').value.trim();
    const senha = document.getElementById('password-login').value.trim();
  
    if (!email || !senha) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    // Recuperar usuário do localStorage
    const usuarioSalvo = JSON.parse(localStorage.getItem('usuario'));
  
    // Se não existir usuário salvo, já avisa
    if (!usuarioSalvo) {
      alert('Nenhum usuário cadastrado. Por favor, registre-se primeiro.');
      return;
    }
  
    // Verificar se bate com o que está salvo
    if (email === usuarioSalvo.email && senha === usuarioSalvo.senha) {
      // Sucesso no login
      window.location.href = 'telaPrincipal.html';
    } else {
      alert('E-mail ou senha incorretos.');
    }
  }
  
  /*********************************************
   *        Verificação de Cadastro
   *********************************************/
  function verificarCadastro() {
    const usuarioSalvo = localStorage.getItem('usuario');
  
    if (usuarioSalvo) {
      // Usuário cadastrado, redireciona
      window.location.href = 'telaPrincipal.html';
    } else {
      alert('Você precisa se cadastrar para acessar a tela principal.');
      window.location.href = 'login.html#registro';
    }
  }
  
  /*********************************************
   *    Associação de Eventos (Listeners)
   *********************************************/
  // Verifica se existe o botão "continuar-sem-login" na página antes de adicionar o evento
  const btnContinuarSemLogin = document.getElementById('continuar-sem-login');
  if (btnContinuarSemLogin) {
    btnContinuarSemLogin.addEventListener('click', verificarCadastro);
  }
  
  // Exemplo: associar os forms de registro e login aos eventos
  const formRegistro = document.getElementById('form-registro');
  if (formRegistro) {
    formRegistro.addEventListener('submit', registrarUsuario);
  }
  
  const formLogin = document.getElementById('form-login');
  if (formLogin) {
    formLogin.addEventListener('submit', validarLogin);
  }
  