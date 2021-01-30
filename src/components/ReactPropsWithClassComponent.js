import React, {Component} from 'react';

class ReactPropsWithClassComponent extends Component{
    render(){
        // this.props.name = " JAgruti"; 
        return(
            <div>
            {/* <h1> NOTE : Named Props with this keyword in you class component, when you know the name of paramenters </h1>  */}
            <h1> Hello {this.props.name} , into the react prop component</h1>
            <h2> Your a {this.props.heroName}</h2>

          
           
        </div>
        )
    }
}


export default ReactPropsWithClassComponent

/** NOTE : Class Props => We can access directly and render dynamic content
 * props value can not be changed on to the component.
 * react component have to act like a pure function with respect thier props parameter. 
 * you can not changes to any circumstances  
 * props are immutable => ( readonly ) => So we can not change value of the prop
 */