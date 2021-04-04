import logo from '../src/assets/images/logo.svg';
import './assets/css/App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Services from './pages/Services'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/AboutUs'
import Index from './pages/Index'


function App() {
  return (
    <Router>
     <Switch>
        <Route path="/" exact><Index /></Route>
        <Route path="/contacto" exact><ContactUs /></Route>
        <Route path="/servicios" exact><Services /> </Route>
        <Route path="/sobre_nosotros" exact><AboutUs /> </Route>
     </Switch>
    </Router>
  );
}

export default App;
