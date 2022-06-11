import { useState } from 'react';
import style from './Post.module.css';

const Post = ({ img, onLikePost }) => {
  const showCount = (str) => {
    return str.toString().length < 3 ? showCount('0' + str, 3) : str;
  };

  const [likeCount, setLikeCount] = useState(img.likes_count);
  const [liked, setLiked] = useState(img.liked);

  const onLikeCLick = (id) => {
    onLikePost(id);
    liked ? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1);
    setLiked(!liked);
  };

  return (
    <div className={style.post}>
      <a className={style.postLink}>
        <div className={style.imgBlock}>
          <div className={style.price}>
            {img.price.toFixed(2)} <sub>€</sub>
          </div>

          <picture alt={img.title}>
            <source media='(max-width: 767px)' srcSet={img.main_attachment.small} />
            <source media='(min-width: 768px)' srcSet={img.main_attachment.big} />
            <img className={style.img} src={img.main_attachment.small} alt={img.title} />
          </picture>
        </div>
        <div className={style.description}>
          <span className={style.title}>{img.title.toUpperCase()}</span>
          <span className={style.author}>
            <span className={style.authorBy}>by</span> {img.author}
          </span>
        </div>
      </a>
      <div className={style.reactions}>
        <a
          href='/'
          className={`${style.reaction} ${style.like}`}
          onClick={(e) => {
            e.preventDefault();
            onLikeCLick(img.id);
          }}
        >
          <div className={liked ? `${style.reactionIcon} ${style.liked}` : `${style.reactionIcon}`}></div>
          <div className={style.reactionCount}>{showCount(likeCount)}</div>
        </a>
        <a className={`${style.reaction} ${style.repost}`}>
          <div className={style.reactionIcon}></div>
          <div className={style.reactionCount}>{showCount(img.likes_count)}</div>
        </a>
      </div>
    </div>
  );
};

export default Post;
