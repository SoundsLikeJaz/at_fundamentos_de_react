import { useEffect, useState } from "react";
import { listarTarefas } from "../infra/toDo";

const Ex09 = () => {

    const [tarefas, setTarefas] = useState([]);

    useEffect(() => {
        async function carregarTarefas() {
            setTarefas(await listarTarefas())
        }

        carregarTarefas();
    }, [])

    function handleClick(id) {
        const novaLista = tarefas.map((item) => {
            if (item.id === id) {
                return { ...item, completed: true }
            } else {
                return item;
            }
        });
        setTarefas(novaLista);
    }

    return (
        <div style={{ display: "grid" }}>
            <h1 style={{ justifySelf: "center" }}>Lista de Tarefas</h1>
            <ul className="listaTarefas">
                {tarefas.map((tarefa) => (
                    <li key={tarefa.id}>
                        <div className="itemTarefa">
                            <h3>{tarefa.title} </h3> <span className={(tarefa.completed ? "feito" : "aFazer")}> - Status: {tarefa.completed ? "Feito" : "A Fazer"}</span> {!tarefa.completed &&
                                <button id="button" onClick={() => handleClick(tarefa.id)}>OK</button>
                            }
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Ex09;