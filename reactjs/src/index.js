import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from '../src/pages/inicial'
import ChooseDay from '../src/pages/chooseday'

ReactDOM.render(
  <React.StrictMode>
    <ChooseDay />
  </React.StrictMode>,
  document.getElementById('root')
);

