import React, { Component } from 'react';
import './App.css';
// import FollowButton from '../common/UI/FollowButton/FollowButton';
import ArticleContainer from '../common/UI/ArticleContainer/ArticleContainer';

import InstaHeader from '../Header/Header'
import Post from '../common/UI/Post/Post';

import { connect } from 'react-redux';
import Explore from '../Explore/Explore';
import Upload from '../Upload/upload' 
import { BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">

        <InstaHeader />
        
        <main>
          <Switch>
          <Route exact path="/" component={ArticleContainer} /> {/*тук ще бъде Home с два ArticleContainer*/}
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/upload" component={Upload} />
            

            {/* <ArticleContainer /> */}
            {/* <Post /> */}
            <Post props={this.props.users[0].posts[0]} />
            {/* <FollowButton /> */}
            <Upload />
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

const mapStateToProps = (state) => {
  return {
      users: state.users
  }
}

// export default App;
export default connect(mapStateToProps, null)(App);
