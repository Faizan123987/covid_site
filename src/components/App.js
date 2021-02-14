import React from 'react';
import  {BrowserRouter as Router,
    Switch,
    Route,
    Link} from 'react-router-dom'
import Notification from './Notification/Notification'
import Home from './Home/Home'
import Contact from './Contact/Contact'
import Hospital from './Hospital_Dashboard/Hospital';
import Medical from './Hospital_Dashboard/MedicalCollege';
import Daily from './DailyTest/Daily';
import Navigation from './Navigation/Navigation'
const App = function({ name }) {
    return (
        <Router>
          <Navigation/>
            <div>
            
        <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/notification"  component={Notification} /> 
        <Route path="/contact" exact component={Contact} />
        <Route path = "/hospital" exact component = {Hospital} />
        <Route path = "/medical" exact component = {Medical} />
        <Route path = "/daily" exact component = {Daily} />

      </Switch>
    </div>
  </Router>
    );
};

export default App;