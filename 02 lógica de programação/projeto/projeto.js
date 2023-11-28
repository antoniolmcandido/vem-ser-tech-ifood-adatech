var tarefas = [];

// Adiciona uma tarefa nova ao array de tarefas
function adicionarTarefa(id, titulo, descricao, status) {
    const tarefa = {
        id,
        titulo,
        descricao,
        status,
    };
    tarefas.push(tarefa)
}

// Edita uma tarefa existente no array de tarefas
function editarTarefa(id, titulo, descricao, status) {
    const tarefaEncontrada = tarefas.find((tarefa) => tarefa.id === id)

    if (tarefaEncontrada) {
        tarefaEncontrada.titulo = titulo
        tarefaEncontrada.descricao = descricao
        tarefaEncontrada.status = status
    } else {
        console.log("Tarefa não encontrada")
    }
}

// Remove uma tarefa do array de tarefas
function removerTarefa(id) {
    const tarefaEncontrada = tarefas.find((tarefa) => tarefa.id === id)

    if (tarefaEncontrada) {
        tarefas.splice(tarefas.indexOf(tarefaEncontrada), 1)
    } else {
        console.log("Tarefa não encontrada")
    }
}

// Lista todas as tarefas do array de tarefas
function listarTarefas() {
    return tarefas.map((tarefa) => {
        return `> ${tarefa.titulo} (${tarefa.status === "pendente" ? "🔴" : "🟢"})`
    })
}

// Obtém uma tarefa do array de tarefas, a partir do seu id
function obterTarefa(id) {
    const tarefaEncontrada = tarefas.find((tarefa) => tarefa.id === id)
    if (tarefaEncontrada) {
        return tarefaEncontrada
    } else {
        console.log("Tarefa não encontrada")
    }
}

// Adicionar uma tarefas
adicionarTarefa(1, "Comprar pão", "Ir ao mercado", "pendente")
adicionarTarefa(2, "Comprar queijo", "Ir ao mercado", "pendente")
adicionarTarefa(3, "Comprar farinha", "Ir ao mercado", "pendente")
adicionarTarefa(4, "Estudar", "estudar capítulos de javascript", "pendente")
adicionarTarefa(5, "Pagar contas", "pagar contas de água e energia", "concluida")

console.log(listarTarefas())

editarTarefa(1, "Comprar leite", "Ir ao mercado", "concluida")

console.log(listarTarefas())

removerTarefa(3)

console.log(listarTarefas())

const tarefa = obterTarefa(2)
console.log(tarefa.titulo)