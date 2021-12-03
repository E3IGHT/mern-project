import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Home from './pages/inicial';
import ChooseDay from './pages/chooseday';

export default function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/chooseday" exact={true} component={ChooseDay} />
            </Switch>
        </BrowserRouter>
    )
}