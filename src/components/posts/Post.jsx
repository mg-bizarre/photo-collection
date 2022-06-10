import style from './Post.module.css';

const Post = ({ img }) => {
  return (
    <div className={style.post}>
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
        <div className={style.reactions}>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Post;
