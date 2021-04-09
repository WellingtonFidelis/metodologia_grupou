//node melhor_caso.js -i turmas/152.json -o grupos -q 4 -s 1

var argv = require('yargs/yargs')(process.argv.slice(2)).argv;
const fs = require('fs');
const { isContext } = require('vm');

let rawdata = fs.readFileSync(argv.i);
let turma = JSON.parse(rawdata);

const pesoHardskills = turma.hardskills_atividade;
let total_alunos = turma.alunos.length;
let alunos_por_grupo = argv.q;
let quantidade_grupos = total_alunos / alunos_por_grupo;

for (let i = 0; i < turma.alunos.length; i++) {

  let aluno = turma.alunos[i];

  let grau = (aluno.hardskills.API.nota * pesoHardskills.API.peso)
    + (aluno.hardskills.REST.nota * pesoHardskills.REST.peso)
    + (aluno.hardskills.Firebase.nota * pesoHardskills.Firebase.peso);

  aluno.hardskills['grau_hardskills'] = grau;
}

// ordenando do menor para o maior grau
let alunosOrdered = turma.alunos.sort(function (alunoA, alunoB) {
  return alunoA.hardskills.grau_hardskills - alunoB.hardskills.grau_hardskills
});
 
// agrupando os piores com melhores
duplas = [];
let metade_total_alunos = alunosOrdered.length / 2;
let posicao_ultimo_aluno = alunosOrdered.length - 1;
let isCurrent = true;

for (let i = 0; i < metade_total_alunos; i ++){
  
  if(isCurrent){

    duplas.push(alunosOrdered[i]);
    isCurrent = false;

  } else {

    duplas.push(alunosOrdered[posicao_ultimo_aluno]);
    posicao_ultimo_aluno --;
    isCurrent = true;

  }  
}

grupos = {}

for (let i = 0; i < quantidade_grupos; i++) {
  grupos[`grupo_${i + 1}`] = []
}

let grupo_corrente = 1;
let alunos_adicionados = 1;

for (let i = 0; i < duplas.length; i++){

  if( alunos_adicionados = alunos_por_grupo){
    grupo_corrente ++;
    alunos_adicionados = 1;
  }

  //.push com erro
  grupos[`grupo_${grupo_corrente}`].push(duplas[i]);
  alunos_adicionados ++;
}

console.log(grupos);

function grauCurrentStudent() {
  return
}