import { useState } from "react";
import { Link } from "react-router-dom";
import clienteAxios from "../config/Axios";
import Alerta from "../components/Alerta";

const Registrar = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repetirPassword, setRepetirPassword] = useState('');

  const [alerta, setAlerta] = useState({});


  const handleSubmit = async e => {
    e.preventDefault();

    if ([nombre, email, password, repetirPassword].includes('')) {
      setAlerta({ msg: 'Hay al menos un campo vacio', error: true });
      return;
    }

    if (password.length < 6) {
      setAlerta({ msg: 'La contraseña es muy corta, agrega minimo 6 caracteres', error: true });
      return;
    }

    if (password !== repetirPassword) {
      setAlerta({ msg: 'Las contraseñas no son iguales', error: true });
      return;
    }

    setAlerta({});

    try {
      await clienteAxios.post('/veterinarios/', { nombre, email, password }); //variable de url para hacer mas corto las url de produccion y desarrollo
      setAlerta({ msg: 'Creado Correctamente, revise su correo', error: false });

      setTimeout(() => {
        setAlerta({});
      }, 3000)
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
      setTimeout(() => {
        setAlerta({});
      }, 3000)
    }

  }

  const { msg } = alerta; // para que se muestre la alerta

  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl">Crea tu Cuenta y Administra tus <span className="text-black">Pacientes</span></h1>
      </div>
      <div className="mt-10 ml:mt-5 bg-white shadow-lg rounded-lg p-10">
        <form onSubmit={handleSubmit}>
          {msg && <Alerta /* para que se muestre la alerta */
            alerta={alerta}
          />}
          <div className="my-5">
            <label className="text-gray-800 uppercase text-xl font-bold">
              Nombre
            </label>
            <input
              type="text"
              placeholder="Tu Nombre"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label className="text-gray-800 uppercase text-xl font-bold mt-3">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label className="text-gray-800 uppercase text-xl font-bold mt-3">
              Password
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
              placeholder="Repetir tu Password"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={repetirPassword}
              onChange={(e) => setRepetirPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            value="Crear Usuario"
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

export default Registrar;