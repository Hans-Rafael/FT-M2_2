import Personaje from './Personaje'
export default function Personajes(props) {
    const {personajes} = props
    return <div>
        {personajes.map((personaje) => {
            return <Personaje name={personaje.name} image={personaje.image}/>
        })}
    </div>
}