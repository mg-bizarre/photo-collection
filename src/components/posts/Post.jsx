import style from './Post.module.css';

const Post = ({ img }) => {
  const showCount = (str) => {
    return str.toString().length < 3 ? showCount('0' + str, 3) : str;
  };
  return (
    <div className={style.post}>
      <a>
        <div className={style.imgBlock}>
          <div className={style.price}>
            {img.price.toFixed(2)} <sub>€</sub>
          </div>

          <div
            className={style.img}
            style={{ backgroundImage: `url(${img.main_attachment.small})` }}
            title={img.title}
          ></div>
        </div>
        <div className={style.description}>
          <span className={style.title}>{img.title.toUpperCase()}</span>
          <span className={style.author}>
            <span className={style.authorBy}>by</span> {img.author}
          </span>
        </div>
      </a>
      <div className={style.reactions}>
        <a className={`${style.reaction} ${style.like}`}>
          <div className={style.reactionIcon}></div>
          <div className={style.reactionCount}>{showCount(img.likes_count)}</div>
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
