import React, { Component } from 'react';
import './App.css';
import FollowButton from '../common/UI/FollowButton/FollowButton';
import ArticleContainer from '../common/UI/ArticleContainer/ArticleContainer';
import CircleImg from '../common/UI/CircleImg/CircleImg';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Test</h1>

        <ArticleContainer />
        <FollowButton />
        <CircleImg src={"https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} 
        width = {500}/>
        
      </div>
    );
  }
}

export default App;
