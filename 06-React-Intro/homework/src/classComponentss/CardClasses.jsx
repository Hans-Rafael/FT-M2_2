import React from 'react'

export default class CardClasses extends React.Component {
    render() {
        return <div>
            <button onClick={this.props.onClose}>X</button>
            <h4>{this.props.name}</h4>
            <div>
                <div>
                    <div className="fondoRojo">Min</div>
                    <div>{this.props.min}</div>
                </div>
                <div>
                    <div>Max</div>
                    <div>{this.props.max}</div>
                </div>
                <div>
                    <div>{this.props.weather}</div>
                    <div>
                        <img src={`http://openweathermap.org/img/wn/${this.props.img}@2x.png`} />
                    </div>
                </div>
            </div>
        </div>
    }
}