import usePacientes from "../hook/usePacientes";
const Paciente = ({ paciente }) => {
  console.log(paciente);
  const { setEdicion, eliminarPaciente } = usePacientes();

  const { nombre, propietario, email, fecha, sintomas, _id } = paciente;
  const formatearFecha = (fecha) => {
    const nuevaFecha = new Date(fecha);
    return new Intl.DateTimeFormat("es-PY", { dateStyle: "long" }).format(
      nuevaFecha,
    );
  };

  return (
    <div className="mx-5 mt-10 mb-5 bg-white px-5 py-10 rounded-xl">
      <p className="font-bold uppercase text-gray-700">
        Nombre:{" "}
        <span className="font-normal normal-case text-black my-2 ">
          {nombre}
        </span>
      </p>
      <p className="font-bold uppercase text-gray-700">
        Propietario:{" "}
        <span className="font-normal normal-case text-black my-2">
          {propietario}
        </span>
      </p>
      <p className="font-bold uppercase text-gray-700">
        Email:{" "}
        <span className="font-normal normal-case text-black my-2">{email}</span>
      </p>
      <p className="font-bold uppercase text-gray-700">
        Fecha:{" "}
        <span className="font-normal normal-case text-black my-2">
          {formatearFecha(fecha)}
        </span>
      </p>
      <p className="font-bold uppercase text-gray-700">
        Sintomas:{" "}
        <span className="font-normal normal-case text-black my-2">
          {sintomas}
        </span>
      </p>

      <div className="flex flex-col lg:flex-row justify-between my-5">
        <button
          type="button"
          className="bg-indigo-800 py-2 px-10 rounded-xl text-white font-bold uppercase hover:bg-indigo-900 mb-3 lg:mb-0"
          onClick={() => setEdicion(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="bg-slate-600 py-2 px-10 rounded-xl text-white font-bold uppercase hover:bg-slate-800"
          onClick={() => eliminarPaciente(_id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
