
import React, {Component} from 'react';
import moduleName from 'module'
class SetStateClassComponent extends Component{
    constructor(props) {
        super(props)
        this.state = {
             count : 0
        }
    }
    add(){
        /** setState have two paramenters 1st is statebject and 2nd parameter is callback function and callback function is arrow function  */
        // this.setState({
        //     count : this.state.count + 1
        // },() => {
        //     console.log('updated callback value ', this.state.count);
        // })
        this.setState((prevState, props ) => ({
            count : prevState.count + 1
        }))
        /*** console.log is call before the state is actually set */
        console.log(this.state.count);
    }
    addFive(){
        this.add();
        this.add();
        this.add();
        this.add();
        this.add();
    }
    render(){
        return(
            <div>
        <h1> count  - {this.state.count} </h1>
         <button onClick={() => this.addFive()}>Add </button>
        </div>
        )
    }
}


export default SetStateClassComponent
