/* eslint-disable */

import React from 'react'
import ReactDOM from 'react-dom'

// function getButtonText() {
//   return "Submit";
// }

const App = () => {
  const buttonText = { text: 'Submit' }
  const labelText = 'Enter Number:'

  return (
    <div>
      <label className="lable" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText.text}
      </button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// We can reference anything within JSX. The only caveat is that if we are showing that to the screen, we can't directly use objects but can use them with the attributes.
