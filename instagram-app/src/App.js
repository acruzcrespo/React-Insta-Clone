import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostsPage from './components/PostContainer/PostsPage';
import CommentSection from './components/CommentSection/CommentSection';
import PostContainer from './components/PostContainer/PostContainer';

function App() {
  return (
    <div className="App">
      <SearchBar/>
      <CommentSection/>
      <PostContainer/>
      <PostsPage/>
    </div>
  );
}

export default App;
