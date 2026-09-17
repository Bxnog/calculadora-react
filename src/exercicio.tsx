import { useState, type ChangeEvent } from "react"

function Exercicios() {
    const [contador, setContador] = useState(0)
    const [busca, setBusca] = useState("")
    const [estadoGuia, setEstadoGuia] = useState(true)

    function handleChange(e:ChangeEvent<HTMLInputElement>){
        setBusca(e.target.value)
    }

    return (
        <div className="flex flex-col items-center p-8 mt-10 bg-gray-100 rounded-xl shadow-md max-w-sm mx-auto border border-gray-200">

            {/* Seção do Contador */}
            <div className="w-full text-center mb-8 border-b pb-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">
                    Repetições: <span className="text-blue-600">{contador}</span>
                </h1>

                <div className="flex justify-center gap-4">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded shadow transition-colors"
                        onClick={() => setContador(contador => contador + 1)}
                    >
                        Mais uma
                    </button>
                    {(contador > 0) && <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded shadow transition-colors"
                        onClick={() => setContador(0)}
                    >
                        Zerar
                    </button>}

                </div>
            </div>

            {/* Seção do Guia Turístico */}
            <div className="w-full text-center mt-2 border-b pb-6">
                <h1 className="text-lg text-gray-700 mb-4">
                    O guia está:{' '}
                    <span className={estadoGuia ? "text-green-600 font-bold" : "text-red-600 font-bold"}>
                        {estadoGuia ? "Disponível" : "Ocupado"}
                    </span>
                </h1>

                <button
                    className={`text-white font-bold py-2 px-6 rounded shadow transition-colors ${estadoGuia
                            ? "bg-green-500 hover:bg-green-700"
                            : "bg-gray-500 hover:bg-gray-700"
                        }`}
                    onClick={() => setEstadoGuia(!estadoGuia)}
                >
                    {estadoGuia ? "Agendar Guia" : "Liberar Guia"}
                </button>
            </div>


            {/*Seção Busca*/}
            <div className="w-full text-center mt-2">
                <input type="text" value={busca} onChange={handleChange} placeholder="Pesquise"/>
                <p>Buscando por: {busca}</p>
            </div>
        </div>
    )
}

export default Exercicios