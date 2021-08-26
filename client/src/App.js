import './App.css';
import {  Switch,  Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage.component';
import ContactPage from './pages/ContactPage/ContactPage.component';
import SoftwarePage from './pages/SoftwarePage/SoftwarePage.component';
import GearPage from './pages/Gear/Gear.component';
import Admin from './pages/Admin/Admin.component';
import Dashboard from './pages/Dashboard/Dashboard.component';
import { ProtectedRoute } from './helpers/routes';
import { connect } from 'react-redux';



function App({user}) {
  return (
      <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/software"  component={SoftwarePage} />
        <Route path="/gear"  component={GearPage} />
        <Route path="/login" component={Admin} />
        <ProtectedRoute user={user} path="/dashboard">
          <Dashboard />
        </ProtectedRoute>
      </Switch>
      </>
  );
}

const mapStateToProps = state => ({
  user : state.user.currentUser
})

export default connect(mapStateToProps , null)(App);
