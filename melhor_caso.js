var argv = require('yargs/yargs')(process.argv.slice(2)).argv;
// console.log(argv)
const fs = require('fs');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let rawdata = fs.readFileSync(argv.i);
let turma = JSON.parse(rawdata);
const pesoHardskills = turma.hardskills_atividade;
//console.log(pesoHardskills);

let total_alunos = turma.alunos.length;

//console.log(turma.alunos[0]);

let quantidade_grupos = total_alunos / argv.q;
// console.log(total_alunos / argv.q)



grupos = {}

for (let i = 0; i < quantidade_grupos; i++) {
  grupos[`grupo_${i + 1}`] = []
}

for (let i = 0; i < turma.alunos.length; i++) {

  let aluno = turma.alunos[i];

  let grau = (aluno.hardskills.API.nota * pesoHardskills.API.peso)
    + (aluno.hardskills.REST.nota * pesoHardskills.REST.peso)
    + (aluno.hardskills.Firebase.nota * pesoHardskills.Firebase.peso);

  aluno.hardskills['grau_hardskills'] = grau;

}

// ordenando do menor para o maior o array a turma
let alunosOrdered = turma.alunos.sort(function (alunoA, alunoB) {
  return alunoA.hardskills.grau_hardskills - alunoB.hardskills.grau_hardskills
});

console.log(alunosOrdered);

function grauCurrentStudent() {
  return
}