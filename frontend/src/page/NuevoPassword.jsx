import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/Axios";

const NuevoPassword = () => {
  const [password, setPassword] = useState('');
  const [repetirPassword, setRepetirPassword] = useState('');
  const [tokenValido, setTokenValido] = useState(false);
  const [alerta, setAlerta] = useState({});
  const [passwordModificada, setPasswordModificada] = useState(false);

  const param = useParams();
  const { token } = param;

  useEffect(() => {
    const comprobarToken = async () => {
      try {
        await clienteAxios.get(`/veterinarios/olvide-password/${token}`);
        setAlerta({
          msg: 'Coloca tu nuevo password',
          error: false
        })
        setTokenValido(true);
      } catch (error) {
        setAlerta({
          msg: 'Hubo un error con el enlace',
          error: true
        })
      }
    }

    comprobarToken();
  }, [token])

  const handleSubmit = async e => {
    e.preventDefault();
    if (password.length < 6) {
      setAlerta({
        msg: 'La contraseña es muy corta, agrega minimo 6 caracteres',
        error: true
      })
      return;
    }

    if (password !== repetirPassword) {
      setAlerta({
        msg: 'Las contraseñas no son iguales',
        error: true
      })
      return;
    }

    try {
      const url = `/veterinarios/olvide-password/${token}`;
      const { data } = await clienteAxios.post(url, { password });
      setAlerta({
        msg: data.msg,
        error: false
      })
      setPasswordModificada(true);
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
        {msg && <Alerta
          alerta={alerta}
        />}
        {tokenValido && (
          <form
            onSubmit={handleSubmit}
          >
            <div className="my-5">
              <label className="text-gray-800 uppercase text-xl font-bold mt-3">
                Nuevo Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="my-5">
              <label className="text-gray-800 uppercase text-xl font-bold mt-3">
                Repetir Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                value={repetirPassword}
                onChange={(e) => setRepetirPassword(e.target.value)}
              />
            </div>
            <input
              type="submit"
              value="Guardar Password"
              className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
            />
          </form>
        )}
        {passwordModificada && (
          <Link
            to="/"
            className="block text-center my-5 text-gray-500 transition hover:text-indigo-400"
          >
            Inicia Sesión
          </Link>
        )}
      </div>
    </>

  )
}

export default NuevoPassword;