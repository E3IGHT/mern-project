import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/inicial'
import ChooseDay from './pages/chooseday'
import ChooseFilm from './pages/choosefilm'

export default function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/chooseday" component={ChooseDay} />
                <Route path="/choosefilm" component={ChooseFilm} />
            </Switch>
        </BrowserRouter>
    )
}