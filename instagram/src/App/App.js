import React, { Component } from 'react';
import './App.css';
import FollowButton from '../common/UI/FollowButton/FollowButton';
import ArticleContainer from '../common/UI/ArticleContainer/ArticleContainer';

import InstaHeader from '../Header/Header'
import Post from '../common/UI/Post/Post';
// import ActivityIcons from '../common/UI/ActivityIcons/ActivityIcons'
 
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1>Test</h1> */}

        <InstaHeader />

        <ArticleContainer />
        <Post />
        <FollowButton />
                
      </div>
    );
  }
}

export default App;
