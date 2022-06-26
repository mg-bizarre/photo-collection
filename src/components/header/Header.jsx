import SVG from '../SVG';
import style from './Header.module.css';

const Header = ({ setSearchValue }) => {
  return (
    <header className={style.header}>
      <div>
        <SVG id='logo' />
      </div>
      <form
        action=''
        className={style.form}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
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
          placeholder='You&#39;re looking for something?'
        />
      </form>
    </header>
  );
};

export default Header;
