import React, { Component } from 'react'

class DestructuringClassComponent extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }

    render() {
        const {name,heroName } = this.props
        //const {state1, state2 } = this.state
        return (
            <div>
                <h1> welcome  Hello {name} aka {heroName}</h1>
            </div>
        )
    }
}
 
export default DestructuringClassComponent
