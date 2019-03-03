import React, { Component } from 'react';
import './App.css';

import InstaHeader from '../Header/Header'
import Home from '../Home/Home';


import Explore from '../Explore/Explore';
import Upload from '../Upload/upload' 
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Register from '../LoginRegister/Register';
// import Login from '../LoginRegister/Login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">

        <InstaHeader />
        
        <main>
          <Switch>
          {/* {isLogged ? */}
            <React.Fragment>
              <Route exact path="/" component={Home} /> {/*тук ще бъде Home с два ArticleContainer*/}
              <Route exact path="/explore" component={Explore} />
              <Route exact path="/upload" component={Upload} />
              <Route exact path="/register" component={Register} />
            </React.Fragment>
          {/* :
            <Login />
          } */}

            
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


export default App;

