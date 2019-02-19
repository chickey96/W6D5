import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/components/clock';

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Clock/>, document.getElementById('content'))

});