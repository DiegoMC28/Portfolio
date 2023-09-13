import style from "./Header.module.css";
import HeaderLinks from "./HeaderLinks";
import HeaderLogoContent from "./HeaderLogoContent";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.headerContent}>
        <HeaderLogoContent />
        <div className={style.headerMain}>
          <HeaderLinks />
        </div>
      </div>
    </div>
  );
};

export default Header;
