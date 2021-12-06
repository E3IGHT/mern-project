import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from '../src/pages/inicial'
import ChooseDay from '../src/pages/chooseday'
import ChooseFilm from './pages/choosefilm'
import ChooseSeat from './pages/chooseseat'

ReactDOM.render(
  <React.StrictMode>
    <ChooseSeat />
  </React.StrictMode>,
  document.getElementById('root')
);

