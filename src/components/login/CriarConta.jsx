const CriarConta = () => {
    return (
        <form className="flex flex-col rounded shadow-lg p-12 mt-12 text-white-700 bg-gray-700 w-1/3 items-center" action="">
            <h2 className="font-semibold text-xl pb-10">Criar Conta</h2>
            <label className="font-semibold text-xs" for="usernameField">Email</label>
            <input className="flex items-center h-12 px-4 w-64 bg-gray-400 mt-2 rounded focus:outline-none focus:ring-2" type="text" />
            <label className="font-semibold text-xs mt-3" for="passwordField">Senha</label>
            <input className="flex items-center h-12 px-4 w-64 bg-gray-400 mt-2 rounded focus:outline-none focus:ring-2" type="password" />
            <label className="font-semibold text-xs mt-3" for="passwordField">Confirmar Senha</label>
            <input className="flex items-center h-12 px-4 w-64 bg-gray-400 mt-2 rounded focus:outline-none focus:ring-2" type="password" />
            <button className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">Cadastrar</button>
        </form>
    );
}

export default CriarConta;