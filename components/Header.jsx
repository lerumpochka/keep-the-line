import styles from "../styles/Header.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Fade from "react-reveal/Fade";
import Link from "next/link";

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
                <Link href="/keeper/tasks">All tasks around you</Link>
              </li>
              <li>
                <Link href="/keeper/tasks/2">book a task</Link>
              </li>
              <li>
                <Link href="/taker/tasks/new">Create new task-- form</Link>
              </li>
              <li>
                <Link href="/taker/tasks">All created tasks</Link>
              </li>
              <li>
                <Link href="/taker/tasks/1">created task details page</Link>
              </li>
              <li>
                <Link href="/keeper/tasks/booked">booked Tasks</Link>
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

{
  /* <h1>Home page</h1>
      
      <br />
      <br />
      <Link href="/profile">Profile page</Link>
      <br />
      <br />
      <Link href="/tasks/12">task details page</Link>
      <br />
      <br />
      <Link href="/profile/keeper/tasks">All Keeper tasks</Link>
      <br />
      <br />
      <Link href="/profile/keeper/tasks/34">Keeper task details page</Link>
      <br />
      <br />
      <Link href="/tasks/new">Create new task-- form</Link>
      <br />
      <br />
      <Link href="/profile/taker/tasks">All taker Tasks</Link>
      <br />
      <br />
      <Link href="/profile/taker/tasks/32">Taker task details page</Link> */
}
