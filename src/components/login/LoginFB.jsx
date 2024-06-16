import { logarUsuario } from "../../infra/usuarios";

const LoginFB = () => {

    async function handleClick(event) {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;
        let usuario = await logarUsuario(email, senha);
        if(usuario.id) {
            alert("Usuário logado!");
            // setUsuario(usuario);
        } else {
            alert(usuario.erro);
        }
    };

    return (
        <form className="flex flex-col rounded shadow-lg p-12 mt-12 text-white-700 bg-gray-700 w-1/3 items-center" action="">
            <h2 className="font-semibold text-xl pb-10">Login</h2>
            <label className="font-semibold text-xs" htmlFor="usernameField">Email</label>
            <input className="flex items-center h-12 px-4 w-64 bg-gray-400 mt-2 rounded focus:outline-none focus:ring-2" type="email" id="email" />
            <label className="font-semibold text-xs mt-3" htmlFor="passwordField">Senha</label>
            <input className="flex items-center h-12 px-4 w-64 bg-gray-400 mt-2 rounded focus:outline-none focus:ring-2" type="password" id="senha" />
            <button className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700" onClick={handleClick}>Entrar</button>
        </form>
    );
}

export default LoginFB;