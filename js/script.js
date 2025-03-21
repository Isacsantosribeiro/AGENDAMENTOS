// Simulação do banco de dados (inicialmente em JSON)
let bancoDados = {
    empresas: [],
    clientes: [],
    agendamentos: []
};

// Cadastro de empresa
document.getElementById('form-empresa').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome-empresa').value;
    const servicos = document.getElementById('servicos-empresa').value.split(',');
    bancoDados.empresas.push({ nome, servicos });
    atualizarSelectEmpresas();
});

// Cadastro de cliente
document.getElementById('form-cliente').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome-cliente').value;
    const email = document.getElementById('email-cliente').value;
    bancoDados.clientes.push({ nome, email });
});

// Atualizar select de empresas
function atualizarSelectEmpresas() {
    const selectEmpresa = document.getElementById('select-empresa');
    selectEmpresa.innerHTML = '<option value="">Selecione a Empresa</option>';
    bancoDados.empresas.forEach((empresa, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = empresa.nome;
        selectEmpresa.appendChild(option);
    });
}

// Atualizar select de serviços
document.getElementById('select-empresa').addEventListener('change', function() {
    const empresaIndex = this.value;
    const selectServico = document.getElementById('select-servico');
    selectServico.innerHTML = '<option value="">Selecione o Serviço</option>';
    if (empresaIndex !== '') {
        const empresa = bancoDados.empresas[empresaIndex];
        empresa.servicos.forEach(servico => {
            const option = document.createElement('option');
            option.textContent = servico.trim();
            selectServico.appendChild(option);
        });
    }
});

// Agendar serviço
document.getElementById('btn-agendar').addEventListener('click', function() {
    const empresaIndex = document.getElementById('select-empresa').value;
    const servico = document.getElementById('select-servico').value;
    const data = document.getElementById('data-agendamento').value;
    bancoDados.agendamentos.push({ empresa: bancoDados.empresas[empresaIndex].nome, servico, data });
    atualizarListaAgendamentos();
});

// Atualizar lista de agendamentos
function atualizarListaAgendamentos() {
    const listaAgendamentos = document.getElementById('lista-agendamentos-ul');
    listaAgendamentos.innerHTML = '';
    bancoDados.agendamentos.forEach(agendamento => {
        const item = document.createElement('li');
        item.textContent = `${agendamento.empresa} - ${agendamento.servico} - ${agendamento.data}`;
        listaAgendamentos.appendChild(item);
    });
}

// Inicialização
atualizarSelectEmpresas();
atualizarListaAgendamentos();