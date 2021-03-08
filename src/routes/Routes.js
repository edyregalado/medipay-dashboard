import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import LogIn from '../pages/LogIn';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LogIn}/>
        <Route path="/" component={Dashboard}/>
        <Route path="/login" component={LogIn}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
