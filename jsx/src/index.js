/* Import the React and RDOM libraries */
import React from "react";
import ReactDOM from "react-dom";

// Create a React component
const App = () => {
  const buttonText = 'Click me! ';
  return (
    <div>
      <label className="label" htmlFor="name">Enter name:</label>
      <input id="name" type="text" />
      <button style={{backgroundColor: 'blue', color: 'white'}}>
        {buttonText}
      </button>
    </div>
  )
};

// Take component and show it on the screen
ReactDOM.render( <App />, document.querySelector('#root'));

// We can use JS objects, just not as text on screen
