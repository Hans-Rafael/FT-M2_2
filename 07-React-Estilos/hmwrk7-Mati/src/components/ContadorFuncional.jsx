import React, {useState} from 'react'

export default function ContadorFuncional(props) {
    //react.useState me devuelve SIEMPRE
    //un arreglo de dos posiciones
    //primer posicion voy a tener MI ESTADO
    //voy a tener la funcion PARA CAMBIAR ESE ESTADO
    const [contador, setContador] = useState(props.initialValue) //funcion que me da react
    //parametro que le paso, es el valor inicial de mi estado
    // const contador = estado[0]
    // const setContador = estado[1]
    // function setState() {
    //     return ['valor', function(){}]
    // }
    function sumaUno() {
        // setContador(contador + 1)
        setContador((estadoPrevio) => { //puntero
            //al estado en su fase anterior
            return estadoPrevio + 1
        })
        setContador((estadoPrevio) => {
            return estadoPrevio + 1
        })
        setContador((estadoPrevio) => {
            return estadoPrevio + 1
        })

    }
    function restaUno() {
        setContador(contador - 1)
    }

    return <div>
        <button onClick={restaUno}>-</button>
        <span>{contador}</span>
        <button onClick={sumaUno}>+</button>
    </div>
}