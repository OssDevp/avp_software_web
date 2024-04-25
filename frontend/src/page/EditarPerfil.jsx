import AdminNav from "../components/AdminNav"

const EditarPerfil = () => {
  return (
    <>
      <AdminNav />
      <h2 className="font-black text-3xl text-center">Editar Perfil</h2>
      <p className="text-xl mt-5 mb-10 text-center">Modifica tu <span className="text-indigo-800 font-bold">Perfil aqui</span></p>
      <div className="flex justify-center">
        <div className="w-full md:1/2 bg-white shadow rounded-lg p-5">
          <form >
            <div className="my-3">
              <label className="uppercase font-bold text-gray-600">Nombre</label>
              <input type="text" className="border bg-gray-50 w-full p-2 mt-5 rounded-lg" name="nombre" />
            </div>
            <div className="my-3">
              <label className="uppercase font-bold text-gray-600">Sitio Web</label>
              <input type="text" className="border bg-gray-50 w-full p-2 mt-5 rounded-lg" name="web" />
            </div>
            <div className="my-3">
              <label className="uppercase font-bold text-gray-600">Telefono</label>
              <input type="text" className="border bg-gray-50 w-full p-2 mt-5 rounded-lg" name="telefono" />
            </div>
            <div className="my-3">
              <label className="uppercase font-bold text-gray-600">Email</label>
              <input type="text" className="border bg-gray-50 w-full p-2 mt-5 rounded-lg" name="email" />
            </div>
            <input
              type="submit"
              className="bg-indigo-800 w-full p-3 text-white uppercase font-bold rounded-lg cursor-pointer hover:bg-indigo-900"
            />
          </form>
        </div>
      </div>
    </>
  )
}

export default EditarPerfil