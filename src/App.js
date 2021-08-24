import './App.css';
import {  Switch,  Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage.component';
import ContactPage from './pages/ContactPage/ContactPage.component';
import SoftwarePage from './pages/SoftwarePage';
import GearPage from './pages/Gear/Gear.component';

function App() {
  return (
      <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/software"  component={SoftwarePage} />
        <Route path="/gear"  component={GearPage} />
      </Switch>
      </>
  );
}

export default App;
