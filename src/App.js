import './App.css';
import Header from './components/header/Header';

import AllPosts from './components/posts/AllPosts';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Header />
        <AllPosts />
      </div>
    </div>
  );
}

export default App;
