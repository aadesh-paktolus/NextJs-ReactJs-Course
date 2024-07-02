import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.jpg";
import HeaderLists from "./header-lists";

const MainHeader = () => {
  return (
    <div id="main-header">
      <div id="logo">
        <Link href="/">
          <Image
            className="rounded-full"
            src={logo}
            alt="logo_image"
            width={50}
            height={50}
          />
        </Link>
      </div>
      <ul>
        <HeaderLists href="/news">News</HeaderLists>
        <HeaderLists href="/archive">Archive</HeaderLists>
      </ul>
    </div>
  );
};

export default MainHeader;
