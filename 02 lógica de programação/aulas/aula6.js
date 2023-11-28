function calcularMedia (notas){
    const soma = notas.reduce ((acc, nota) => acc + nota, 0 ) / notas.length;
    return Math.round(soma);
}

function alunoPassouDeAno( media ){
    return media  >= 7
}

function imprimirAlunosAprovados (alunos){

    const aprovados = alunos.filter( aluno => alunoPassouDeAno(aluno.media));
    aprovados.sort((a, b) => a.nome.localeCompare(b.name))
    aprovados.forEach(aluno => console.log(`Aprovado - ${aluno.nome}: ${aluno.media}`));

}

function imprimirAlunosReprovados(alunos){
    const reprovados = alunos.filter( aluno => !alunoPassouDeAno(aluno.media));
    reprovados.sort((a, b) => b.media - a.media)
    reprovados.forEach(aluno => console.log(`Reprovado - ${aluno.nome}: ${aluno.media}`));
}


const alunos = [
    { id: 1, nome: "João", notas: [8, 7, 6], dataNascimento: "01/01/2000" },
    { id: 2, nome: "Maria", notas: [6, 5, 4], dataNascimento: "02/02/2001"},
    { id: 3, nome: "Carlos", notas: [9, 8, 7], dataNascimento: "03/03/1999"},
    { id: 4, nome: "ána", notas: [9, 8, 7], dataNascimento: "03/03/1999"},
    { id: 5, nome: "antonio", notas: [9, 8, 7], dataNascimento: "03/03/1999"},
  ];

  alunos.forEach( aluno => aluno.media = calcularMedia(aluno.notas) )

  imprimirAlunosAprovados(alunos)
  imprimirAlunosReprovados(alunos)

//////////

for (let i = 0; i < 5; i++) { 

    if(i === 2){
        //break;
        //continue
        //console.log("É impar")
    }

    console.log(i); 
 }
 