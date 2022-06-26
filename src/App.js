import { useState } from 'react';
import Header from './components/header/Header';

import AllPosts from './components/posts/AllPosts';

function App() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className='App'>
      <div className='container'>
        <Header setSearchValue={setSearchValue} />
        <AllPosts searchValue={searchValue} />
      </div>
    </div>
  );
}

export default App;
