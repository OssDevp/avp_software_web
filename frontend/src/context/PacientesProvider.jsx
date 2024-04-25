import { createContext, useEffect, useState } from "react";
import clienteAxios from "../config/Axios";

const PacientesContext = createContext();

export const PacientesProvider = ({ children }) => {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerPaciente = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return;

        const config = {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
        const { data } = await clienteAxios.get('/pacientes', config);
        setPacientes(data);
      } catch (error) {
        console.log(error);
      }
    }

    obtenerPaciente();
  }, []);

  const guardarPaciente = async (pacientes) => {

    console.log(pacientes);
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }

    if (pacientes.id) {
      try {
        const { data } = await clienteAxios.put(`/pacientes/${paciente.id}`, paciente, config);

        console.log(data);
      } catch (error) {
        try {
          const { data } = await clienteAxios.post('/pacientes', pacientes, config);
          const { createdAt, updatedAt, __v, ...pacienteAlmacenado } = data;
          setPacientes([pacienteAlmacenado, ...pacientes]);
        } catch (error) {
          console.log(error);
        }
      }
      return
    }
  }

  const setEdicion = (paciente) => {
    // setPacientes(pacientes.map((pacienteState) => pacienteState._id === paciente._id ? paciente : pacienteState))
    setPaciente(paciente);
  }

  return (
    <PacientesContext.Provider
      value={{
        pacientes,
        guardarPaciente,
        setEdicion,
        paciente
      }}
    >
      {children}
    </PacientesContext.Provider>
  )
}

export default PacientesContext;