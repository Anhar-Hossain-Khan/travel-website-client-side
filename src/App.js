import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AddService from './components/Home/AddService/AddService';
import Home from './components/Home/Home/Home';
import OrderPlace from './components/Home/OrderPlace/OrderPlace';
import Services from './components/Home/Services/Services';
import Login from './components/Login/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/services">
            <Services></Services>
          </Route>

          <Route path="/bookNow/:bookingId">
            <OrderPlace></OrderPlace>
          </Route>
       
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
     
    </div>
  );
}

export default App;
