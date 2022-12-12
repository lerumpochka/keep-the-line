import styles from "../styles/Navbar.module.css";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AddIcon from "@mui/icons-material/Add";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Link from "next/link";
function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.icons__con}>
        <Link href="/profile">
          <AccountBoxIcon sx={{ color: "white", fontSize: "2.8rem" }} />
        </Link>

        <Link href="/taker/tasks/new">
          <AddIcon sx={{ color: "white", fontSize: "2.8rem" }} />
        </Link>

        <Link href="/keeper/tasks">
          <AssignmentIcon sx={{ color: "white", fontSize: "2.8rem" }} />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
