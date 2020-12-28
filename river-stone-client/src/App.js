import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Home} from './components/Home.js';
import {Users} from './components/Users.js';
import {Admin} from './components/Admin.js';
import {MailPage} from './components/Mail-page.js';
import UserRegister from './components/User-register';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/users' component={Users}></Route>
        <Route path='/admin' component={Admin}></Route>
        <Route path='/mail' component={MailPage}></Route>
        <Route path='/register' component={UserRegister}></Route>
      </Switch>
    </Router>
  );
}

export default App;
