notas = [8, 7, 6, 10, 9]
pesos = [1, 2, 3, 4, 5]

notas.length == pesos.length
    ?
    console.log('Média: ' + notas.reduce((acc, nota) => acc + nota) / notas.length)
    :
    console.log("Arrays com tamanhos diferentes")

notas.length == pesos.length
    ?
    console.log('Media Ponderada: ' + notas.reduce((acc, nota, index) => acc + nota * pesos[index]) /
        pesos.reduce((acc, peso) => acc + peso))
    :
    console.log("Arrays com tamanhos diferentes")
