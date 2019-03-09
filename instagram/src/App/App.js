import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import InstaHeader from '../Header/Header'
import Home from '../Home/Home';
import { connect } from 'react-redux';
import { Redirect } from 'react-router'


import Explore from '../Explore/Explore';
import Upload from '../Upload/upload' 
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
        
        <main className="main">
          <Switch>
            
          {isLogged ?
            <Route exact path="/login"  render={() => (<Redirect to="/" />)}/>
          :
            <Route exact path="/login" component={Login} />
          }
          
          {isLogged ?
            <Route exact path="/register"  render={() => (<Redirect to="/" />)}/>
          :
            <Route exact path="/register" component={Register} />
          }

          {isLogged ?
            <React.Fragment>
              <Route exact path="/" component={Home} /> {/*тук ще бъде Home с два ArticleContainer*/}
              <Route exact path="/explore" component={Explore} />
              <Route exact path="/upload" component={Upload} />
              <Route exact path="/list" component={List} />
              <Route exact path="/list/resault" component={List} />
              <Route exact path="/list/recommended" component={List} />
              <Route exact path="/list/followersOfMe/:uid" component={List} />
              <Route exact path="/list/followedUsers/:uid" component={List} />
              <Route exact path="/profile/:uid" component={ProfilePage} />
              <Route exact path="/profile/:uid/saved" component={ProfilePage} />
              <Route exact path="/profile/:uid/post/:pid" component={LandscapePost} />
            </React.Fragment> 
          :
            <Login />
          }

          {/* PAGE NOT FOUND */}
          <Route render={
            () => 
            ( <React.Fragment>
              <h1>Sorry, this page isn't available.</h1>
              <p>The link you followed may be broken, or the page may have been removed. <Link to="/">Go back to Instagram.</Link></p>
              </React.Fragment>)
          } />

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


