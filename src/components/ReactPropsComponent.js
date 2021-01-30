/** Resuing the same component
 * props => means property 
 * 
 */

import React from 'react';
/** add parament to functional component 
 * use this use in app body
*/
const ReactPropsComponent = (props) => {
    console.log(props);
    /** React is use {} to eacho the property name */
    return (
        <div>
            <h1> NOTE : Named Props when you know the name of paramenters </h1> 
            <h1> Hello {props.name} , into the react prop component</h1>
            <h2> Your a {props.heroName}</h2>

            <h3>NOTE: Childern components : when you dont have clue that what is the parameters are pass on you components</h3>
            {props.children}
        </div>
    );
}

/**  This is the default export of the component or i can say veriable that we have created with the name Greet 
 * 
 * exports function and es6 components
*/

 export default ReactPropsComponent

 /** JSX contains only one wrapper element. */