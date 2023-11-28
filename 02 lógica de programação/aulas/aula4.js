let contatos = []

function adicionarContato(contato){

    if(!verificarSeContatoExiste(contato.id))
       contatos.push(contato)

}

function adicionarContato2(id,nome,email,telefone, endereco){

    if(!verificarSeContatoExiste(id))
       contatos.push({
            id,
            nome,
            email,
            telefone,
            endereco
       })

}

function verificarSeContatoExiste(id){

    return contatos.some(contato => contato.id === id)

}

function apagarContato(id){

    contatos = contatos.filter( contato => contato.id !== id )

}

function apagarContato2(id){

    contatoIndex = contatos.findIndex( contato => contato.id === id )

    if (contatoIndex >-1)
      contatos.splice(contatoIndex,1)

}

function imprimirContatos(){

    contatos.forEach( 
        contato => console.log(`Id: ${contato.id} e Nome: ${contato.nome}`)
    )
}

adicionarContato({id:1, nome: 'Carlos', email:'carlos@carlos.com' })
adicionarContato({id:2, nome: 'Carlossss', email:'carlos@carlos.com' })
adicionarContato2(3, 'Bete', 'carlos@carlos.com')

apagarContato(2)
apagarContato2(3)


imprimirContatos()