import './App.css';
import {  Switch,  Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage.component';
import ContactPage from './pages/ContactPage/ContactPage.component';
import SoftwarePage from './pages/SoftwarePage/SoftwarePage.component';
import GearPage from './pages/Gear/Gear.component';
import Admin from './pages/Admin/Admin.component';
import { firebase } from './firebase/firebase';


function App() {
  return (
      <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/software"  component={SoftwarePage} />
        <Route path="/gear"  component={GearPage} />
        <Route path="/login" component={Admin} />
      </Switch>
      </>
  );
}

export default App;
