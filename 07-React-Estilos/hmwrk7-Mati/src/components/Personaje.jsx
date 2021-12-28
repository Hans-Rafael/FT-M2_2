export default function Personaje(props) {
    const {name, image} = props
    return <div>
        <h3>{name}</h3>
        <img src={image} />
    </div>
}