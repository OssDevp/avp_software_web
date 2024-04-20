import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alerta from "../components/Alerta";
import useAuth from "../hook/useAuth";
import clienteAxios from "../config/Axios";
// el Link es para redireccionar a otras paginas y no recargar la pagina
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});

  const { setAuth } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    if ([email, password].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }
    try {
      const { data } = await clienteAxios.post("/veterinarios/login", {
        email,
        password
      });
      localStorage.setItem("token", data.token); //guardas el token en el localStorage
      setAuth(data)
      navigate('/admin');
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      })
    }
  };

  const { msg } = alerta
  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl">Inicia Sesión y Administra tus <span className="text-black">Pacientes</span></h1>
      </div>
      <div className="mt-10 ml:mt-5 bg-white shadow-lg rounded-lg p-10">
        {msg && <Alerta
          alerta={alerta}
        />}
        <form onSubmit={handleSubmit}>
          <div className="my-5">
            <label className="text-gray-800 uppercase text-xl font-bold">
              Email
            </label>
            <input
              type="email"
              placeholder="Email de Registro"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label className="text-gray-800 uppercase text-xl font-bold mt-3">
              Password
            </label>
            <input
              type="password"
              placeholder="Email de Registro"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            value="Iniciar Sesión"
            className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
          />
        </form>
        <nav className="mt-10 lg:flex lg:justify-between">
          <Link
            to="/registrar"
            className="block text-center my-5 text-gray-500 transition hover:text-indigo-400"
          >
            Crear Cuenta
          </Link>
          <Link
            to="/olvide-password"
            className="block text-center my-5 text-gray-500 transition hover:text-indigo-400"
          >
            Recuperar Password
          </Link>
        </nav>
      </div>
    </>
  )
}

export default Login;