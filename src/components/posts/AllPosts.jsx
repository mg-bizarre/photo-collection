import style from './AllPosts.module.css';
import { useEffect, useState } from 'react';
import Post from './Post';

const AllPosts = ({}) => {
  const fetchImages = async () => {
    const result = await fetch('http://localhost:3100/images');
    const data = await result.json();
    console.log(data);
    setImages(data);
  };
  const [images, setImages] = useState();
  useEffect(() => {
    fetchImages();
    console.log(images);
  }, []);
  return <div className={style.posts}>{images && images.map((img) => <Post key={img.id} img={img} />)}</div>;
};

export default AllPosts;
