import styles from "../styles/Header.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Fade from "react-reveal/Fade";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className={styles.header__container}>
      <nav className={styles.navbar}>
        <div className={styles.navbar__child}>
          <p>Keep the line</p>
          <MenuIcon
            onClick={() => setOpenMenu(() => !openMenu)}
            sx={{ color: "white", fontSize: "2.5rem" }}
          />
        </div>
      </nav>
      {openMenu && (
        <Fade right>
          <div onClick={() => setOpenMenu(false)} className={styles.menu__content}>
            <CloseIcon
              className={styles.close__icon}
              onClick={() => setOpenMenu(false)}
              sx={{ color: "white", fontSize: "2.5rem" }}
            />
            <ul>
              <li>
                <a href="#">item 1</a>
              </li>
              <li>
                <a href="#">item 2</a>
              </li>
              <li>
                <a href="#">item 3</a>
              </li>
              <li>
                <a href="#">item 4</a>
              </li>
              <li>
                <a href="#">item 5</a>
              </li>
            </ul>
          </div>
        </Fade>
      )}
    </div>
  );
}

export default Header;

{
  /* <div>
  {props.user ? (
    <button onClick={() => signOut()}>Sign out</button>
  ) : (
    <button onClick={() => signIn()}>Sign in</button>
  )}
</div>; */
}
