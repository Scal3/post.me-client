import "./spinner.css";

import React from 'react'

const Spinner = () => {
  return (
    <div className="spinner">
      <img className="spinner__loader" src={require('./loader.gif')} alt="spinner loader" />
    </div>
  )
}

export default Spinner;