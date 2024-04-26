import { useState } from "react"
import AdminNav from "../components/AdminNav"
import Alerta from "../components/Alerta"
import useAuth from "../hook/useAuth"

const CambiarPassword = () => {

  const { guardarPassword } = useAuth();
  const [password, setPassword] = useState({});
  const [nuevoPassword, setNuevoPassword] = useState({});
  const [repetirPassword, setRepetirPassword] = useState({});

  const [alerta, setAlerta] = useState({})

  const handleSubmit = async e => {
    e.preventDefault();

    if ([password, nuevoPassword, repetirPassword].includes('')) {
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return;
    }

    if (nuevoPassword !== repetirPassword) {
      setAlerta({
        msg: 'Los passwords no son iguales',
        error: true
      });
      return;
    }

    if (nuevoPassword.length < 6) {
      setAlerta({
        msg: 'El password debe ser minimo de 6 caracteres',
        error: true
      });
      return;
    }

    //actualizar el password
    const resultado = await guardarPassword({
      password,
      nuevoPassword
    })

    setAlerta(resultado);
  }
  const { msg } = alerta;

  return (
    <>
      <AdminNav />

      <h2 className="font-black text-3xl text-center">Cambiar Password</h2>
      <p className="text-xl mt-5 mb-10 text-center">Modifica tu <span className="text-indigo-800 font-bold">Password aqui</span></p>

      <div className="w-full md:1/2 bg-white shadow rounded-lg p-5">
        <form
          onSubmit={handleSubmit}
        >
          {msg && <Alerta alerta={alerta} />}
          <div className="my-3">
            <label className="uppercase font-bold text-gray-600">Password</label>
            <input
              type="password"
              className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
              name="password"
              placeholder="Password Actual"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="my-3">
            <label className="uppercase font-bold text-gray-600">Nuevo Password</label>
            <input
              type="password"
              className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
              name="nuevoPassword"
              placeholder="Nueva Password"
              onChange={(e) => setNuevoPassword(e.target.value)}
            />
          </div>
          <div className="my-3">
            <label className="uppercase font-bold text-gray-600">Repite tu Nueva Password</label>
            <input
              type="password"
              className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
              name="repetirPassword"
              placeholder="Repite tu Nueva Password"
              onChange={(e) => setRepetirPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            className="bg-indigo-800 w-full p-3 text-white uppercase font-bold rounded-lg cursor-pointer hover:bg-indigo-900"
            value="Cambiar Password"
          />

        </form>
      </div>
    </>

  )
}

export default CambiarPassword