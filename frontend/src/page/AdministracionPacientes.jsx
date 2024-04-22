import { useState } from 'react';
import Formulario from '../components/Formulario';
import ListadoPacientes from '../components/ListadoPacientes';
const AdministracionPacientes = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <button
          type="button"
          className="bg-indigo-800 p-3 text-white uppercase font-bold mx-10 mb-10 md:hidden rounded-md"
          onClick={() => setMostrarFormulario(!mostrarFormulario)}
        >{mostrarFormulario ? 'Ocultar Formulario' : 'Mostrar Formulario'}</button>
        <div className={`${mostrarFormulario ? 'block' : 'hidden'} md:block md:w-1/2 lg:w-2/5`}>
          <Formulario />
        </div>

        <div className='md:w-1/2 lg:w-3/5'>
          <ListadoPacientes />
        </div>
      </div>
    </div>
  )
};

export default AdministracionPacientes;