const form = document.getElementById('form-contato');
const nomes = [];
const tel = [];

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    capturandoLinhas();
    adicionandoTabela();

});

function capturandoLinhas() {
    const inputNomeContato = document.getElementById('nome')
    const inputTelContato = document.getElementById('telefone')

    if (nomes.includes(inputNomeContato.value)) {
        alert(`O nome:${inputNomeContato.value} já se encontra na lista de contatos`);
    } else {
        nomes.push(inputNomeContato.value);
        tel.push(inputTelContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelContato.value}</td>`;
        linha += '</tr>'

        linhas += linha;
    }
    inputNomeContato.value = '';
    inputTelContato.value = '';
}

function adicionandoTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas;
}