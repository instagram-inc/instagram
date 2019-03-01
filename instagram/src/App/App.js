import React, { Component } from 'react';
import './App.css';
import FollowButton from '../common/UI/FollowButton/FollowButton';
import ArticleContainer from '../common/UI/ArticleContainer/ArticleContainer';

import InstaHeader from '../Header/Header'
import Post from '../common/UI/Post/Post';

import { connect } from 'react-redux';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1>Test</h1> */}
      
        <InstaHeader />

        <ArticleContainer />
        {/* <Post /> */}
        <Post props={this.props.users[0].posts[0]} />
        <FollowButton />
                
      </div>
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
