import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import InstaHeader from '../Header/Header'
import Home from '../Home/Home';
import { connect } from 'react-redux';


import Explore from '../Explore/Explore';
import Upload from '../Upload/Upload' 
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Register from '../LoginRegister/Register';
import Login from '../LoginRegister/Login';
import ProfilePage from '../ProfilePage/ProfilePage';
import LandscapePost from '../common/UI/Post/LandscapePost'
import List from '../List/List';


class App extends Component {

  render() {

    const isLogged = window.sessionStorage.getItem("loggedUser");

    return (
      <BrowserRouter>
      <div className="App">

        <InstaHeader isLogged={isLogged} />
        
        <main>
          <Switch>

          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />

          {isLogged ?
            <React.Fragment>
              <Route exact path="/" component={Home} /> {/*тук ще бъде Home с два ArticleContainer*/}
              <Route exact path="/explore" component={Explore} />
              <Route exact path="/upload" component={Upload} />
              <Route exact path="/list" component={List} />
              <Route exact path="/profile/:uid" component={ProfilePage} />
              <Route exact path="/profile/:uid/post/:pid" component={LandscapePost} />
            </React.Fragment> 
          :
            <Login />
          }

          {/* NOT FOUND page */}
          {/* <Route render={
            () => 
            ( <React.Fragment>
              <h1>Sorry, this page isn't available.</h1>
              <p>The link you followed may be broken, or the page may have been removed. <Link to="/">Go back to Instagram.</Link></p>
              </React.Fragment>)
          } /> */}

          </Switch>
        </main>

        <footer>
          <hr />
          footer footer footer footer footer footer footer footer
        </footer>

      </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
      users: state.users
  }
}

export default connect(mapStateToProps, null)(App);

// export default App;

