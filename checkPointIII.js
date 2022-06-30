
/* 
  1 -Crie uma função construtora que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). 
  2 - Na função construtora crie o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, 
  que simplesmente aumenta o número de faltas em 1. Crie alguns alunos para testar a sua função construtora. 
  */

function aluno(nome, qtdFaltas, notas) {
    this.nome = nome;
    this.qtdFaltas = qtdFaltas;
    this.notas = notas;

    this.media = function (notas) {
        var i = 0;
        let summ = 0;
        let arrayLen = this.notas.length;
        
        while (i < arrayLen) {
            summ = summ + this.notas[i++];
        }
        return summ / arrayLen;
    }

    this.addfaltas = function (){
        return this.qtdFaltas++;
    }
}

const aluno1 = new aluno('Andre', 3, [8,7,6,10,5]);
const aluno2 = new aluno('Joao', 5,[8, 10, 9, 7, 10]);
const aluno3 = new aluno('Pedro', 3,[8, 8, 10, 10, 10]);




console.log(aluno1.media());
console.log(aluno3.addfaltas());




/* 3- crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), 
faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 2). */

let curso = {
    nomeDoCurso: 'Dev Full Stack',
    notaAprovacao: 7,
    faltaMax: 4,
    estudantes: [aluno1, aluno2, aluno3]

}


/*
Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso,
 deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso. */
  

    const addEstudante = (nome, qtdFaltas, notas) => {
        const newestudent = new aluno(nome,qtdFaltas,notas);
        curso.estudantes.push(newestudent);
    } 

    addEstudante('Rafael', 4, [4, 2, 6, 5, 3]);
    addEstudante('Tom', 6, [2, 5, 8, 4, 1]);

    console.log(curso);


/*Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação.
 Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. 
 Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação. */


function aprovacao(aluno){
  let nota = aluno.media();
  let faltas = aluno.qtdFaltas;
  let aprovadofaltas = curso.notaAprovacao * 1.1;

  if(nota >= curso.notaAprovacao && faltas < curso.faltaMax){
    return true;
  } else if (faltas == curso.faltaMax && nota >= aprovadofaltas){
    return true;
  } else{
    return false
  }
}



 /*Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados
  se os alunos aprovaram ou não. */

 const resultado = () => {

  let booleano = [];
  for (const elemento of curso.estudantes) {
    booleano.push(aprovacao(elemento));
  
  }
  console.log(booleano);
 }

 resultado();

 








 







