import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostsPage from './components/PostContainer/PostsPage';
import CommentSection from './components/CommentSection/CommentSection';
import PostContainer from './components/PostContainer/PostContainer';

// function App() {
//   return (
//     <div className="App">
//       <SearchBar/>
//       <CommentSection/>
//       <PostContainer/>
//       <PostsPage/>
//     </div>
//   );
// }


class App extends React.Component {
  constructor(){
    super();
    this.state ={}
  }

  render (){
    return (
      <div>
        <ComponentFromWithAuthenticate />
      </div>
    )
  }
}

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);

export default App;
