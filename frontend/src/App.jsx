import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import RutaProtegido from './layout/RutaProtegido';
import Login from './page/Login';
import Registrar from './page/Registrar';
import ConfirmarCuenta from './page/ConfirmarCuenta';
import OlvidePassword from './page/OlvidePassword';
import NuevoPassword from './page/NuevoPassword';
import AdministracionPacientes from './page/AdministracionPacientes';
import EditarPerfil from './page/EditarPerfil';
import CambiarPassword from './page/CambiarPassword';

import { AuthProvider } from './context/AuthProvider';
import { PacientesProvider } from './context/PacientesProvider';
function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <PacientesProvider>
          <Routes>
            <Route path="/" element={<AuthLayout />}>  {/* Esto es lo que se muestra en la pagina, aqui puedes cargar todo*/}
              <Route index element={<Login />} />
              <Route path="registrar" element={<Registrar />} />
              <Route path="olvide-password" element={<OlvidePassword />} />
              <Route path="olvide-password/:token" element={<NuevoPassword />} />
              <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
            </Route>

            <Route path='/admin' element={<RutaProtegido />}>
              <Route index element={<AdministracionPacientes />} />
              <Route path='perfil' element={<EditarPerfil />} />
              <Route path='cambiar-password' element={<CambiarPassword />} />
            </Route>
          </Routes>
        </PacientesProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
