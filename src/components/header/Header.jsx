import SVG from '../SVG';
import style from './Header.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <div>
        <SVG id='logo' />
      </div>
      <div>
        <form action='' className={style.form}>
          <label htmlFor='input'>
            <SVG id='search' />
          </label>
          <input className={style.input} id='input' type='text' placeholder={`You're looking for something?`} />
        </form>
      </div>
    </header>
  );
};

export default Header;
