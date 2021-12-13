import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/inicial'
import ChooseDay from './pages/chooseday'
import ChooseFilm from './pages/choosefilm'
import ChooseSession from './pages/choosesession';
import Payment from './pages/payment'
import AllTickets from './pages/alltickets'

export default function Rotas () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact={true} element={<Home />} />
                <Route path="/chooseday" element={<ChooseDay />} />
                <Route path="/choosefilm" element={<ChooseFilm />} />
                <Route path="/choosesession" element={<ChooseSession />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/alltickets" element={<AllTickets />} />
            </Routes>     
        </BrowserRouter>
    )
}