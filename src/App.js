import './App.css';
import {  Switch,  Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage.component';
import ContactPage from './pages/ContactPage';
import SoftwarePage from './pages/SoftwarePage';

function App() {
  return (
      <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/software"  component={SoftwarePage} />
      </Switch>
      </>
  );
}

export default App;
