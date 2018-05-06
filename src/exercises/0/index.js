// Create a first-level heading (i.e., <h1>) within the root element (available in our HTML).
// We make use of document.createElement() for this.
// Grabbing the root can be done by document.getElementById().
// And "insertion" is possible with root.apendChild().

const root = document.getElementById( 'root' );

const element = document.createElement( 'h1' );

element.textContent = 'Hello World';

root.appendChild(element);
