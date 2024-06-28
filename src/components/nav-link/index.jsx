"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Styles from "./nav-link.module.css";

const NavLink = ({ href, children }) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={`${path.startsWith(href) && Styles.active} ${Styles.link}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
