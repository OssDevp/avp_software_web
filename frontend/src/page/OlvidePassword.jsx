import { Link } from "react-router-dom";

const OlvidePassword = () => {
    return (
        <>
            <div>
                <h1 className="text-indigo-600 font-black text-6xl">Recupera tu Acceso y No Pierdas tus <span className="text-black">Pacientes</span></h1>
            </div>
            <div className="mt-10 ml:mt-5 bg-white shadow-lg rounded-lg p-10">
                <form>
                    <div className="my-5">
                        <label className="text-gray-800 uppercase text-xl font-bold mt-3">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Email de Registro"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        />
                    </div>
                    <input
                        type="submit"
                        value="Recuperar Password"
                        className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
                    />
                </form>
                <nav className="mt-10 lg:flex lg:justify-between">
                    <Link
                        to="/"
                        className="block text-center my-5 text-gray-500 transition hover:text-indigo-400"
                    >
                        Inicia Sesión
                    </Link>
                    <Link
                        to="/registrar"
                        className="block text-center my-5 text-gray-500 transition hover:text-indigo-400"
                    >
                        Crear Cuenta
                    </Link>
                </nav>
            </div>
        </>
    )
}

export default OlvidePassword;