import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
/** WE can also import with any  name */
// import FunctionalComponent from './components/FunctionalComponent'
/** import with the other name then the component name, you have to change the same name a given to the import time 
 * import MyComponent from './components/FunctionalComponent'
*/
/** Named import
 * import {FunctionalComponent} from './components/FunctionalComponent'

 */

// import ClassComponent from './components/ClassComponent'
// import JSXWithoutComponent from './components/JSXWithoutComponent'
// import JSXComponent from './components/JSXComponent'
// import ReactProps from './components/ReactPropsComponent'
// import ReactPropsWithClassComponent from './components/ReactPropsWithClassComponent'
// import StateComponent from './components/StateComponent'

//import SetStateClassComponent from './components/SetStateClassComponent'

import DestructuringFunctionalComponent from './components/DestructuringFunctionalComponent'
import DestructuringClassComponent from './components/DestructuringClassComponent'

class App extends Component{
  render(){
    return(<div className="App">
        {/* <FunctionalComponent/>
        <ClassComponent/>
        <JSXComponent/>
        <JSXWithoutComponent/> */}
        {/* <ReactProps name="jassi" heroName="wonder women"> </ReactProps>
        <ReactProps name="Namshvi" heroName="Spider women"></ReactProps> */}
        {/* <ReactPropsWithClassComponent name="jassi" heroName="wonder women"> </ReactPropsWithClassComponent>
        <ReactPropsWithClassComponent name="Namshvi" heroName="Spider women"></ReactPropsWithClassComponent> */}
         {/* <StateComponent/> */}
       {/* <SetStateClassComponent/> */}
       <DestructuringFunctionalComponent name="jassi" heroName="wonder women"> </DestructuringFunctionalComponent>
       <DestructuringClassComponent name="jassi" heroName="wonder women"> </DestructuringClassComponent>
    </div>)
  }
}

export default App;
