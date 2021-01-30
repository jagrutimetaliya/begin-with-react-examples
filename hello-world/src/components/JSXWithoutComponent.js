/**
 * JSX Syntex Differences
 * class -> Replace with ClassName 
 * for -> replace with htmlFor 
 * camelCase property nameming convention
 * onclick ->onClick
 * tabindex -> tabIndex
 * 
 */

import React from 'react';

const JSXWithoutComponent = () => {
    return React.createElement('div',
    {id : 'jsxClass', className : 'dummyClass'},
    React.createElement('h1',null,'Hello Jagruti into the without JSX Code.'));
}

export default JSXWithoutComponent