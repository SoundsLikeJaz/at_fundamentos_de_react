export async function listarTarefas() {
    let retorno = [];
    const url = "https://jsonplaceholder.typicode.com/todos";
    await fetch(url)
        .then((resposta) => resposta.json())
        .then((tarefas) => {
            retorno = tarefas;
        })
        .catch((erro) => retorno = erro);
    return retorno;
}