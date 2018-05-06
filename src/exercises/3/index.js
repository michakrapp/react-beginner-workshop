// Now, let's extract the JSX string into a separate function, called App.

import React from 'react';
import { render } from 'react-dom';

function App() {
  return <h1 id="title">Hello World!</h1>;
}

const root = document.getElementById( 'root' );

const element = App();

render( element, root );
