import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.png";
import NavLink from "../nav-link";
import Styles from "./main-header.module.css";
const MainHeader = () => {
  return (
    <header className={Styles.header}>
      <Link href="/" className={Styles.logo}>
        <Image src={logo} alt="main header logo" />
        NEXTLEVEL FOOD
      </Link>

      <nav className={Styles.nav}>
        <ul className="flex space-x-10">
          <li>
            <NavLink href="/meal">Browse Meal</NavLink>
          </li>
          <li>
            <NavLink href="/community">Foodie Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
