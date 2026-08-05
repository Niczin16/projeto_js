let nome = document.getElementById('nome');
let idade = document.getElementById('idade');
let curso = document.getElementById('curso');
let nota1 = document.getElementById('nota1');
let nota2 = document.getElementById('nota2');
let formulario = document.querySelector('form');
// Seleciona o corpo da tabela onde as linhas serão inseridas
let tabelaCorpo = document.querySelector('table tbody'); 

formulario.addEventListener('submit', function(event){
    event.preventDefault();
    inserirCadastro(); // Executa a função ao enviar
});

function calcularMedia(valorA, valorB){
    let lResultado = (parseFloat(valorA) + parseFloat(valorB)) / 2;
    return lResultado;
}

function inserirCadastro(){
    let n1 = nota1.value;
    let n2 = nota2.value;
    let lNome = nome.value;
    let lIdade = idade.value;
    let lCurso = curso.value;

    if (lNome === '') {
        alert('Não pode deixar nome em branco');
    } else if (lIdade === '') {
        alert('Não pode deixar idade em branco');
    } else if (lCurso === '') {
        alert('Não pode deixar curso em branco');
    } else if (n1 === '') {
        alert('Não pode deixar nota 1 em branco');
    } else if (n2 === '') {
        alert('Não pode deixar nota 2 em branco');
    } else {
        let lResultado = calcularMedia(n1, n2);
        
        let status = '';
        let corFundo = '';
        
        if (lResultado >= 6) {
            status = 'Aprovado';
            corFundo = 'green';
        } else {
            status = 'Reprovado';
            corFundo = 'red';
        }

        let novaLinha = tabelaCorpo.insertRow();

        novaLinha.insertCell(0).innerText = lNome;
        novaLinha.insertCell(1).innerText = lIdade;
        novaLinha.insertCell(2).innerText = lCurso;
        novaLinha.insertCell(3).innerText = lResultado.toFixed(1); 
        
        let celulaStatus = novaLinha.insertCell(4);
        celulaStatus.innerText = status;
        celulaStatus.style.backgroundColor = corFundo;
        celulaStatus.style.color = 'white'; 
        celulaStatus.style.fontWeight = 'bold';

        formulario.reset();
    }
}