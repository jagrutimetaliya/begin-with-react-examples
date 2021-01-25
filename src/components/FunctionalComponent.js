import React from 'react';

/** Function Component  */
// function Greet(){
//     return <h1> Hello Jagruti </h1>
// }

/** ES6 Arrow Function syntext 
 * more consice is then function components;
*/


const FunctionalComponent = () => <h1> Hello jagruti, into the functional component</h1>

/**  This is the default export of the component or i can say veriable that we have created with the name Greet 
 * 
 * exports function and es6 components
*/

 export default FunctionalComponent

/** This is the name export of the veriable when we have import this component in app.js we must have to import with the same name if not then give a tmeplated import error. 
 * export const Greet = () => <h1> Hello jagruti</h1>
  */



