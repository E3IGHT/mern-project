import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from '../src/pages/inicial'
import ChooseDay from '../src/pages/chooseday'
import ChooseFilm from './pages/choosefilm'
import ChooseSession from './pages/choosesession';
import Payment from './pages/payment'

ReactDOM.render(
  <React.StrictMode>
    <Payment />
  </React.StrictMode>,
  document.getElementById('root')
);

