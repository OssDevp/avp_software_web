import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import Login from './page/Login';
import Registrar from './page/Registrar';
import ConfirmarCuenta from './page/ConfirmarCuenta';
import OlvidePassword from './page/OlvidePassword';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>  {/* Esto es lo que se muestra en la pagina, aqui puedes cargar todo*/}
          <Route index element={<Login />} />
          <Route path="registrar" element={<Registrar />} />
          <Route path="olvide-password" element={<OlvidePassword />} />
          <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
