import React from 'react';
import CardClasses from './CardClasses';

export default class CardsClasses extends React.Component {
    render() {
        return <div>
            {
                this.props.cities.map((city) => <CardClasses
                    max={city.main.temp_max}
                    min={city.main.temp_min}
                    name={city.name}
                    img={city.weather[0].icon}
                    onClose={() => alert(city.name)}
                />)
            }
        </div>
    }
}