"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";

import { ColorToken } from "../color/";
import { Breadcrumb, Button } from "antd";

const items = [
  {
    href: "/",
    title: <div>Home</div>,
  },
  {
    href: "/",
    title: "About",
  },
  {
    title: "Contact",
  },
  {
    title: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <span> | </span>
        <img height={18} width={24} src="/flag.svg" alt="alt" />
        <span> | </span>
      </div>
    ),
  },
  {
    title: (
      <ColorToken>
        <Button type="primary">Login</Button>
      </ColorToken>
    ),
  },
];

const Navbar = () => {
  return (
    <>
      <Breadcrumb className="mybreadcrumb" separator=" " items={items} />
    </>
    // <nav className={styles.navbar}>
    //   <div className={styles.logo}>
    //     <Link href="/">
    //       <Image src="/Layer 2.svg" alt="alt" width={208} height={44} />
    //     </Link>
    //   </div>
    //   <ul className={styles.navLinks}>
    //     <li>
    //       <Link href="/home">Home</Link>
    //     </li>
    //     <li>
    //       <Link href="/about">About</Link>
    //     </li>
    //     <li>
    //       <Link href="/contact">Contact</Link>
    //     </li>
    //     <li>
    //       <Image
    //         className="country"
    //         src="/🦆 icon _United States_.svg"
    //         alt="alt"
    //         width={24}
    //         height={18}
    //       />
    //     </li>
    //     <li>
    //       <ColorToken>
    //         <Button type="primary">Login</Button>
    //       </ColorToken>
    //     </li>
    //   </ul>
    // </nav>
  );
};

export default Navbar;
