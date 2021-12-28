import { useState } from "react"
import MuestraContador from "./MuestraContador"
import Operador from './Operador'

export default function ContadorDataFlow() {
    const [contador, setContador] = useState(0)
    function sumaUno() {
        setContador(contador + 1)
    }
    function restaUno() {
        setContador(contador - 1)
    }
    return <div>
         <Operador operador="-" operacion={restaUno}/>
         <MuestraContador contador={contador}/>
        <Operador operador="+" operacion={sumaUno}/>
    </div>
}