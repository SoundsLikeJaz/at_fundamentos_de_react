import { useEffect, useState } from "react";
import { listarTarefas } from "../infra/toDo";

const Ex08 = () => {

    const [tarefas, setTarefas] = useState([]);

    useEffect(() => {
        async function carregarTarefas() {
            setTarefas(await listarTarefas())
        }

        carregarTarefas();
    }, [])

    return (
        <div style={{display: "grid"}}>
            <h1 style={{justifySelf: "center"}}>Lista de Tarefas</h1>
            <ul className="listaTarefas">
                {tarefas.map((tarefa) => (
                    <li key={tarefa.id}>
                        <div className="itemTarefa">
                            <h3>{tarefa.title} </h3> <span className={(tarefa.completed ? "feito" : "aFazer")}> - Status: {tarefa.completed ? "Feito" : "A Fazer"}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Ex08;