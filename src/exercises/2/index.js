// Feel the power of JSX.
// We can write something that is pretty close to HTML markup.
// In fact, it is syntactic sugar on top of JavaScript, meaning a function call.

import React from 'react';
import { render } from 'react-dom';

const root = document.getElementById( 'root' );

const element = <h1 id='title' className='first-title' style={{ color: 'red' }}>Hello World!</h1>;

render( element, root );
