import { useState } from "react";
import clienteAxios from "../config/Axios";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";


const OlvidePassword = () => {

  const [email, setEmail] = useState('');
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async e => {
    e.preventDefault();
    if (email === '' || email.length < 6) {
      setAlerta({
        msg: 'El email es obligatorio',
        error: true
      })
      return;
    }
    try {
      const { data } = await clienteAxios.post('/veterinarios/olvide-password', { email });

      setAlerta({
        msg: data.msg,
        error: false
      })
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }
  }
  const { msg } = alerta;

  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl">Recupera tu Acceso y No Pierdas tus <span className="text-black">Pacientes</span></h1>
      </div>
      <div className="mt-10 ml:mt-5 bg-white shadow-lg rounded-lg p-10">
        <form
          onSubmit={handleSubmit}
        >
          {msg && <Alerta
            alerta={alerta}
          />}
          <div className="my-5">
            <label className="text-gray-800 uppercase text-xl font-bold mt-3">
              Email
            </label>
            <input
              type="email"
              placeholder="Email de Registro"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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