import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import { useEffect, useState } from 'react';
import Post from './components/post/Post';

function App() {
  const fetchImages = async () => {
    const result = await fetch('http://localhost:3100/images');
    const data = await result.json();
    // console.log(data);
    setImages(data);
  };
  const [images, setImages] = useState();
  useEffect(() => {
    fetchImages();
    console.log(images);
  }, []);

  return (
    <div className='App'>
      <div className='container'>
        <Header />
        {images && images.map((img) => <Post key={img.id} />)}
      </div>
    </div>
  );
}

export default App;
