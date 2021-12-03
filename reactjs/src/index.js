import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from '../src/pages/inicial'
import ChooseDay from '../src/pages/chooseday'
import ChooseFilm from './pages/choosefilm'

ReactDOM.render(
  <React.StrictMode>
    <ChooseFilm />
  </React.StrictMode>,
  document.getElementById('root')
);

