import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import CommentSection from './components/CommentSection/CommentSection';

function App() {
  return (
    <div className="App">
      <SearchBar/>
      <CommentSection/>
    </div>
  );
}

export default App;
