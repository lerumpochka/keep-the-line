import styles from "../styles/Navbar.module.css";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AddIcon from "@mui/icons-material/Add";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import PlaylistAddCheckOutlinedIcon from "@mui/icons-material/PlaylistAddCheckOutlined";

import Link from "next/link";
function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.icons__con}>
        <Link href="/keeper/tasks/booked">
          <PlaylistAddCheckOutlinedIcon sx={{ color: "white", fontSize: "2.8rem" }} />
        </Link>

        <Link href="/taker/tasks">
          <PlaylistAddIcon sx={{ color: "white", fontSize: "2.8rem" }} />
        </Link>

        <Link href="/keeper/tasks">
          <ManageSearchIcon sx={{ color: "white", fontSize: "2.7rem" }} />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
