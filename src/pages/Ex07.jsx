import { useEffect, useState } from "react";
import { listarRefeicoes } from "../infra/refeicoes";

const Ex07 = () => {

    const [refeicoes, setRefeicoes] = useState([]);

    useEffect(() => {
        async function carregarRefeicoes() {
            setRefeicoes(await listarRefeicoes());
        }

        carregarRefeicoes();
    }, []);

    return (
        <>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <h1>Refeições</h1>
                <ul className="listaRefeicoes">
                    {refeicoes.map((refeicao) => (
                        <li key={refeicao.idMeal}>
                            <div className="refeicaoItem">
                                <h2>{refeicao.strMeal}</h2>
                                <img src={refeicao.strMealThumb} alt={refeicao.strMeal} />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );

}

export default Ex07;