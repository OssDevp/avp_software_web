import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import Login from './page/Login';
import Registrar from './page/Registrar';
import ConfirmarCuenta from './page/ConfirmarCuenta';
import OlvidePassword from './page/OlvidePassword';
import NuevoPassword from './page/NuevoPassword';
import { AuthProvider } from './context/AuthProvider';
function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AuthLayout />}>  {/* Esto es lo que se muestra en la pagina, aqui puedes cargar todo*/}
            <Route index element={<Login />} />
            <Route path="registrar" element={<Registrar />} />
            <Route path="olvide-password" element={<OlvidePassword />} />
            <Route path="olvide-password/:token" element={<NuevoPassword />} />
            <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
