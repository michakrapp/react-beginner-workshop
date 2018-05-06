// Because App can become rather large, we move it into a separate file.
// Please find App.js next to this file.
// To make use of this file (or rather the defined module), we use ES6 imports.

import React from 'react';
import { render } from 'react-dom';

import App from './App';

const root = document.getElementById( 'root' );

const element = <App />;

render( element, root );
