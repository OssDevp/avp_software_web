import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import clienteAxios from "../config/Axios";
import Alerta from "../components/Alerta";

const ConfirmarCuenta = () => {
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
  const [cargando, setCargando] = useState(true);
  const [alerta, setAlerta] = useState({});


  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const { data } = await clienteAxios(`/veterinarios/confirmar/${id}`);
        setCuentaConfirmada(true);
        setAlerta({
          msg: data.msg,
        })
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })
      }

      setCargando(false);
    }

    confirmarCuenta();
  }, [id])

  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl">Confirma tu Cuenta y Administra tus <span className="text-black">Pacientes</span></h1>
      </div>
      <div className="mt-10 ml:mt-5 bg-white shadow-lg rounded-lg p-10">
        {!cargando && <Alerta
          alerta={alerta}
        />}
        {cuentaConfirmada && (
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

export default ConfirmarCuenta;