import style from './AllPosts.module.css';
import { useEffect, useState } from 'react';
import Post from './post/Post';

const AllPosts = ({ searchValue }) => {
  const filterFunc = (find, ...rules) => {
    if (
      rules.some((arg) => {
        return arg.toString().toLowerCase().includes(searchValue.toLowerCase());
      })
    ) {
      return find;
    }
  };

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
    const result = await fetch('http://localhost:3100/images');
    const data = await result.json();
    setImages(data);
  };

  const [images, setImages] = useState(null);

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <main className={style.posts}>
      {images &&
        images
          .filter((post) => {
            if (searchValue === '') {
              return post;
            } else if (filterFunc(post, post.title, post.author, post.price)) {
              return post;
            }
            return '';
          })
          .map((img) => <Post key={img.id} img={img} onLikePost={onLikePost} />)}
    </main>
  );
};

export default AllPosts;
