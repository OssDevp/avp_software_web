import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    // esto se llama fragmentacion y es para no generar html extra <></>
    <>
      <main className='container mx-auto md:grid md:grid-cols-2 gap-8 mt-12 p-5 items-center'>
        <Outlet />
      </main>
    </>
  )
}

export default AuthLayout;