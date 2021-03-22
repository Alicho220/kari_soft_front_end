import './App.css';
import LandingPage from './components/landingPage/LandingPage';
import Navbar from './components/navBar/Navbar';
import Home from './components/homePage/Home';
import Menu from './components/menu/Menu';
import InvestorRegistration from './components/Registration/InvestorRegistration/InvestorRegistration';
import StudentRegistration from './components/Registration/studentRegistration/StudentRegistration';
import TraderRegistration from './components/Registration/traderRegistration/TraderRegistration';
import Login from './components/authentication/login/Login';
import Register from './components/authentication/register/Register';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Verification from './components/authentication/verification/Verification';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>

      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/home' component={Home}/>
          <Route path='/menu' component={Menu} />
          <Route path='/register/investor' component={InvestorRegistration} />
          <Route path='/register/student' component={StudentRegistration} />
          <Route path='/register/trader' component ={TraderRegistration} />
          <Route path='/login' component ={Login} /> 
          <Route path='/register' component = {Register} />
          <Route path='/verification' component ={Verification} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
