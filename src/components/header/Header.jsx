import SVG from '../SVG';
import style from './Header.module.css';

const Header = ({ setSearchValue }) => {
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
          <input
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            className={style.input}
            id='input'
            type='text'
            placeholder={`You're looking for something?`}
          />
        </form>
      </div>
    </header>
  );
};

export default Header;
