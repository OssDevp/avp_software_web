import usePacientes from "../hook/usePacientes"
const ListadoPacientes = () => {

    const { pacientes } = usePacientes()

    console.log(pacientes);

    return (
        <div>ListadoPacientes</div>
    )
}

export default ListadoPacientes