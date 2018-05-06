// Let's use React now!
// We still grab the root element, but creation of the h1 will be done with React.createElement().
// The configuration of that element will happen on-the-fly (by passing data as second argument).
// The "insertion" will then happen by React DOM's render method.

import React from 'react';
import { render } from 'react-dom';

const element = React.createElement( 'h1', {
    children: 'Hello World',
    style: {
      color: 'red',
    }
});

render( element, root );
