import React from 'react'

export default class SearchBarClass extends React.Component{
    render() {
        console.log(this.props)
        return <div>
            <input
                placeholder="Busca la ciudad..."
                type="text"
                />
            <button
                onClick={this.props.onSearch}
            >
                Buscar
            </button>
        </div>
    }
}