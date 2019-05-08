import React from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './components/Authenticate/withAuthenticate';
import LoginPage from './components/Authenticate/LoginPage';


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
