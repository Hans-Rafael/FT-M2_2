import React from 'react'
import SoyMayor from './soyMayor'
export default class Contador  extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contador: this.props.initialValue,
        }
        this.sumaUno = this.sumaUno.bind(this)
    }
    sumaUno() {
        // this.setState({
        //     contador: this.state.contador + 1
        // })
        this.setState(function(estadoPrevio) {
            //mi return va a ser mi nuevo estado
            return {
                contador: estadoPrevio.contador + 1
            }
        })

        this.setState(function(estadoPrevio) {
            //mi return va a ser mi nuevo estado
            return {
                contador: estadoPrevio.contador + 1
            }
        })
        this.setState(function(estadoPrevio) {
            //mi return va a ser mi nuevo estado
            return {
                contador: estadoPrevio.contador + 1
            }
        })
    }
    // cambio el estado de mi formulario
    //cambiar el estado de mis errores
    restaUno = () => {
        this.setState({
            contador: this.state.contador - 1
        })
    }
    componentDidMount() {
        console.log('cuando monto el componente contador')
    }
    componentDidUpdate() {
        console.log('se actualizo contador')
    }
    render() {
        return <div>
            <button onClick={this.restaUno}>-</button>
            <span>
                    {this.state.contador}
            </span>
            <button onClick={this.sumaUno}>+</button>
            { this.state.contador > 18 && <SoyMayor /> }
        </div>
    }
}