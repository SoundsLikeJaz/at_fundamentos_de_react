export async function listarRefeicoes() {
    let retorno = [];
    const url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian";
    await fetch(url)
        .then((resposta) => resposta.json())
        .then((refeicoes) => {
            retorno = refeicoes.meals;
        })
        .catch((erro) => retorno = erro);
    return retorno;
}