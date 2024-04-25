import { useState, useEffect } from "react"
import Alerta from "./Alerta";
import usePacientes from "../hook/usePacientes";

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [id, setId] = useState('');

  const [alerta, setAlerta] = useState({});

  const { guardarPaciente, paciente } = usePacientes();

  console.log(paciente);
  useEffect(() => {
    if (paciente?.nombre) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
      setId(paciente._id)
    }
  }, [paciente])

  const handleSubmit = e => {
    e.preventDefault();
    //validar formulario
    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return;
    }

    setAlerta({
      msg: 'Agregado Correctamente',
      error: false
    });
    setTimeout(() => {
      setAlerta({})
    }, 3000);
    //crear el objeto paciente
    guardarPaciente({
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
      id
    })
  }

  const { msg } = alerta;

  return (
    <>
      <p className="text-center text-lg mb-10 font-bold">
        Añade tus pacientes y <span className="text-indigo-600">Administralos</span>
      </p>
      <form
        className="bg-white py-10 px-5 mb-10 lg:mb-0 shadow rounded-md"
        onSubmit={handleSubmit}
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
          value={id ? "Guardar Cita" : "Registrar Cita"}
        />
      </form>
      <div className="mt-5">
        {msg && <Alerta alerta={alerta} />}
      </div>
    </>
  )
}

export default Formulario