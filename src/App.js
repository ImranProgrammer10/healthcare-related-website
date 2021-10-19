
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";


import Header from './components/hedaer/Header';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PageNotFound from './pages/PageNotFound';
import Services from './pages/Services';
import AuthProvider from './contexts/AuthProvider';
import Footer from './components/footer/Footer';
import Details from './pages/Details';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <PrivateRoute path='/details'>
              <Details></Details>
            </PrivateRoute>

            <Route path="/service">
              <Services></Services>

            </Route>

            <Route path="/about">
              <About></About>
            </Route>


            <Route path="/contact">
              <Contact></Contact>
            </Route>

            <Route path="/blog">
              <Blog></Blog>
            </Route>

            <Route path="/cart">
              <Cart></Cart>
            </Route>


            <Route path="/login">
              <Login></Login>
            </Route>


            <Route path="/signup">
              <Signup></Signup>
            </Route>

            <Route path="/*">
              <PageNotFound></PageNotFound>
            </Route>



          </Switch>
          <Footer></Footer>
        </Router>

      </AuthProvider>


    </div>
  );
}

export default App;
