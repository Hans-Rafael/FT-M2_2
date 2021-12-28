import React from "react";

// class City extends React.Component {
// //constructor => cuando quiero definir un estado!
//  //constructor(props) {
//  //super(props);
//  //this.state = {}
// // }   
//    render() {
//        return (
//            <div>
//                <h4> Info sobre la ciudad</h4>
//            </div>
//        )
//    }
//}

export default function Ciudad({ city }) {
    return (
        console.log(city),
        //<div> Hola soy una ciudad {params.city}</div>
        //<div> Hola soy una ciudad {ciudadId}</div>
        //</div> <div className="ciudad">
        // <div className="container">
        <div>
            <h3>{city.name} : {city.weatherText}</h3>
            <div>Real feels: {city.feels_like}ºC </div>
            <div>Temperature: {city.temp} ºC</div>
            <div>Weather: {city.weather}</div>
            <div>Wind: {city.wind} km/h</div>
            <div>Clouds: {city.clouds} %</div>
            <div>Latitud: {city.latitud}º</div>
            <div>Longitud: {city.longitud}º</div>,
        </div>

    )
}