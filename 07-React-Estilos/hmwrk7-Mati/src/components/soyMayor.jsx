import React from 'react'
export default class soyMayor extends React.Component{
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log('soy mayor se monto')
    }
    shouldComponentUpdate() {
        return false
    }
    componentDidUpdate() {
        console.log('soy mayor se actualizo')
    }
    componentWillUnmount() {
        console.log('soy mayor se va a desmontar')
    }
    render() {
        console.log('render?')
    return <div>
        soy mayor
    </div>
    }
}