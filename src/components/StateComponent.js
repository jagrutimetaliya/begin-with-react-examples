
/**
 * Component States : 
1. Every react component return jsx which describes the UI
2. State is managed within the components 
3. Veriable declared in the function body.
4. Management within the componet full controll to change  the state=> state can be changed
5. Access 
=> Functional Component =>  useState Hook ( after react version 16.)
=> Class Component =>  this.state
6. If you are in a class don't forget to use this keyword to access the state
7. State is the reseved keyword in react
  Step1 : create state object and initalize 
  Step 2 : initalize state it in to the class constructor.
8. State is an object privately maintained by the class
9. State can be influence what is the render inside a component 

/**
 * If you are in a class don't forget to use this keyword to access the state
 * state is the reseved keyword in react
 * step1 : create state object and initalize 
 * step 2 : initalize state it in to the class constructor.
 */
/**
 * state is an object privately maintained by the class
 * state can be influence what is the render inside a component 
 */
import React, {Component} from 'react';

class StateComponent extends Component{
    constructor(){
        super(); /** because we are extending react component class and call has to be made in to the base class constructor  */
        this.state = {
            message : 'welcome jagrutis'
        };
    }
    /** Class ChangeMessage method or function  */
    changeMessage(){
        this.setState({
            message: "thank you for the subscribing"
        });
    }
    render(){
        return(
            <div>
            <h1>STATE COMPONENT : {this.state.message} </h1>
            {/* On button click event we call the changeMessage method or function */}
            <button onClick={() => this.changeMessage()}>Subscribe</button>      
        </div>
        )
    }
}


export default StateComponent
