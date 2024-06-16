import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../infra/firebase";

export async function logarUsuario(email, senha) {
    let retorno = new Object();
    console.log(`Email: ${email} - Senha: ${senha}`)
    await signInWithEmailAndPassword(auth, email, senha)
        .then((credenciais) => {
            console.log(credenciais);
            retorno.id = credenciais.user.uid;
            retorno.email = email;
            retorno.senha = senha;
        })
        .catch((error) => {
            console.log(`${error.code} = ${error.message}`);
            retorno.erro = "Login Inválido";
        });
    return retorno;
}

export async function criarConta(email, senha) {
    let retorno = new Object();
    await createUserWithEmailAndPassword(auth, email, senha)
        .then((credenciais) => {
            console.log(credenciais);
            retorno.id = credenciais.user.uid;
            retorno.email = email;
            retorno.senha = senha;
        })
        .catch((error) => {
            console.log(`${error.code} = ${error.message}`);
            retorno.erro = "Login Inválido";
        });
    return retorno;
}