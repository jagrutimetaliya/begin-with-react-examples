/**
 *  Destructuring props and state
 *  Two ways of destructering  
 * 1. using gucntion component
 * 1. DestructuringComponent = ({name, heroName}) =
 * 2. const {name, heroName} = props
 */




import React from 'react'
const DestructuringFunctionalComponent = props => {
  const {name, heroName} = props
    return (
        <div>
            <h1>
                Hello {name} aka {heroName}
            </h1>
        </div>
    )
}

export default DestructuringFunctionalComponent