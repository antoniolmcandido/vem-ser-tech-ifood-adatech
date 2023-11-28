let nome = true

console.log(nome ?? "Valor padrão")


const idade = 17

/// É obrigatório votar entre 18 e 70 anos

if ( idade >= 18 && idade <= 70  )
    console.log("Você é Obrigado a votar") 
else
    console.log("Você não é obrigado a votar")


function exibeNome(nome){
    if (!nome){
       console.log('É obrigatório passar o parametro nome')
       return
    }

    console.log(`Seu nome é ${nome}`)

    // if (nome)
    //     console.log(`Seu nome é ${nome}`)
    // else
    //     console.log('É obrigatório passar o parametro nome')
 
}

exibeNome("Carlos")
