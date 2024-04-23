import { createContext, useEffect, useState } from "react";
import clienteAxios from "../config/Axios";

const PacientesContext = createContext();

export const PacientesProvider = ({ children }) => {

  const [pacientes, setPacientes] = useState([]);

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
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const { data } = await clienteAxios.post('/pacientes', pacientes, config);
      const { createdAt, updatedAt, __v, ...pacienteAlmacenado } = data;
      setPacientes([pacienteAlmacenado, ...pacientes]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <PacientesContext.Provider
      value={{
        pacientes,
        guardarPaciente
      }}
    >
      {children}
    </PacientesContext.Provider>
  )
}

export default PacientesContext;