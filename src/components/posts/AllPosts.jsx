import style from './AllPosts.module.css';
import { useEffect, useState } from 'react';
import Post from './post/Post';

const AllPosts = ({ searchValue }) => {
  const onLikePost = async (id) => {
    const result = await fetch(`http://localhost:3100/images/${id}/likes`, {
      method: 'POST',
      headers: {
        'Content-type': 'text/plain',
      },
      body: null,
    });
    return result;
  };

  const fetchImages = async () => {
    const result = await fetch('http://localhost:3100/images?page=10');
    const data = await result.json();
    console.log(data);
    setImages(data);
  };

  const [images, setImages] = useState(null);

  useEffect(() => {
    fetchImages();
    console.log(images);
  }, []);

  return (
    <div className={style.posts}>
      {images &&
        images
          .filter((post) => {
            if (searchValue === '') {
              return post;
            } else if (
              post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
              post.author.toLowerCase().includes(searchValue.toLowerCase()) ||
              post.price.toString().includes(searchValue.toLowerCase())
            ) {
              return post;
            }
          })
          .map((img) => <Post key={img.id} img={img} onLikePost={onLikePost} />)}
    </div>
  );
};

export default AllPosts;
