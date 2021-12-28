export default function Operador(props) {
    function dispadorEvento() {
        props.operacion()
    }
    return <button onClick={dispadorEvento}>
        {props.operador}
    </button>
}