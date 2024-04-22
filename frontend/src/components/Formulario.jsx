import { useState } from "react"
import Alerta from "./Alerta";
const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState(Date.now());
  const [sintomas, setSintomas] = useState('');

  const [alerta, setAlerta] = useState();

  return (
    <>
      <p className="text-center text-lg mb-10 font-bold">
        Añade tus pacientes y <span className="text-indigo-600">Administralos</span>
      </p>
      <form action=""
        className="bg-white py-10 px-5 mb-10 lg:mb-0 shadow rounded-md"
      >
        <div className="mb-5">
          <label
            htmlFor="nombre"
            className="text-gray-700 uppercase font-bold"
          >Nombre Mascota</label>
          <input
            id="nombre"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="text-gray-700 uppercase font-bold"
          >Propietario</label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={e => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="text-gray-700 uppercase font-bold"
          >Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="fecha"
            className="text-gray-700 uppercase font-bold"
          >Fecha</label>
          <input
            id="fecha"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={e => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintoma"
            className="text-gray-700 uppercase font-bold"
          >Sintoma</label>
          <textarea
            id="sintoma"
            type="time"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={e => setSintomas(e.target.value)}
          ></textarea>
        </div >

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value="Registrar Cita"
        />
      </form>
    </>
  )
}

export default Formulario