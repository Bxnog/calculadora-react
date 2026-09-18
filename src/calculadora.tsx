import { useState } from "react"

function Calculadora() {

    const [visor, setVisor] = useState("")
    const [operador, setoperador] = useState("")
    const [numero1, setNumero1] = useState<number>()
    const [limparproximo, setLimparproximo] = useState<boolean>(false)

    function definirOperador(op: string) {
        if (visor != "") {
            setNumero1(parseFloat(visor))
        }
        setoperador(op)
        setVisor("")
        setLimparproximo(false)
    }


    function resultado() {
        if (numero1 === undefined || visor === "") return;
        const numero2 = parseFloat(visor);
        let total;
        switch (operador) {
            case "+": total = numero1 + numero2; break;
            case "-": total = numero1 - numero2; break;
            case "/": total = numero1 / numero2; break;
            case "*": total = numero1 * numero2; break;
            default: return;
        }
        setVisor(total.toString())
    }

    function posi_neg() {
        if (visor != "") {
            const numero_np = parseFloat(visor) * -1
            setVisor(numero_np.toString())
        }
    }

    function percent() {
        if (visor != "") {
            const numero_pc = parseFloat(visor) / 100
                setVisor((parseFloat(visor) / 100).toString())
            if (operador == "*" && numero1 != undefined) {
                setVisor((numero1 * numero_pc).toString())
            }
            setoperador("")

        }
    }

    function Botao({ children, onClick, cor = "bg-gray-700", duplo = false }: any) {
        return (
            <button
                className={`h-14 rounded-full ${cor} text-white text-[20px] font-bold hover:opacity-80 transition-all ${duplo ? "col-span-2 w-full" : "w-14"
                    }`}
                onClick={onClick}
            >
                {children}
            </button>
        );
    }

    function digitar(anterior: boolean, numero: string){
        if(anterior){
            const vazio = ""
            setVisor(vazio)
            setNumero1(undefined)
            setoperador("")
            setLimparproximo(false)
            setVisor(numero)
            return
        }
        setVisor(visor + numero)
    }


    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <div className="calculadora bg-black w-80 p-4 rounded-3xl shadow-2xl">
                <div className="w-full min-h-20 place-content-end p-5">
                    <div className="text-gray-400 text-right text-[14px] min-h-[24px]">{numero1} {(operador != undefined) && operador}</div>
                    <div className="text-white text-right text-3xl min-h-10">{visor || ""}</div>
                </div>
                <div className="grid grid-cols-4 place-items-center text-white gap-3 bg-black">
                    <Botao onClick={() => { setVisor(""); setNumero1(undefined); setoperador("") }} cor="bg-gray-400">C</Botao>
                    <Botao onClick={posi_neg} cor="bg-gray-400">+/-</Botao>
                    <Botao onClick={percent} cor="bg-gray-400">%</Botao>
                    <Botao onClick={() => {definirOperador("/");}} cor="bg-amber-500">÷</Botao>
                    <Botao onClick={() => digitar(limparproximo, "1")}>1</Botao>
                    <Botao onClick={() => digitar(limparproximo, "2")}>2</Botao>
                    <Botao onClick={() => digitar(limparproximo, "3")}>3</Botao>
                    <Botao onClick={() => definirOperador("*")} cor="bg-amber-500">*</Botao>
                    <Botao onClick={() => digitar(limparproximo, "4")}>4</Botao>
                    <Botao onClick={() => digitar(limparproximo, "5")}>5</Botao>
                    <Botao onClick={() => digitar(limparproximo, "6")}>6</Botao>
                    <Botao onClick={() => definirOperador("-")} cor="bg-amber-500">-</Botao>
                    <Botao onClick={() => digitar(limparproximo, "7")}>7</Botao>
                    <Botao onClick={() => digitar(limparproximo, "8")}>8</Botao>
                    <Botao onClick={() => digitar(limparproximo, "9")}>9</Botao>
                    <Botao onClick={() => definirOperador("+")} cor="bg-amber-500">+</Botao>
                    <Botao onClick={() => digitar(limparproximo, "0")} duplo>0</Botao>
                    <Botao onClick={() => !visor.includes(".") && setVisor(v => v + ".")}>.</Botao>
                    <Botao onClick={() => {resultado(); setLimparproximo(true)}} cor="bg-amber-500">=</Botao>
                </div>
            </div>
        </div>
    )

}


export default Calculadora




// function guardarNumero() {
//     if (numero1 == undefined) {
//         setNumero1(parseFloat(visor))
//     }
//     setVisor("")
// }

// function operar(operador: boolean) {
//     if (numero1 !== undefined) {
//         let resultado;
//         if(operador){resultado = numero1 + parseFloat(visor);}
//         else if(!operador){resultado = numero1 - parseFloat(visor);}
//         setConta(resultado
//         )
//         if(resultado != undefined){}
//     }

// }