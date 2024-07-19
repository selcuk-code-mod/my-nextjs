"use client";
import Link from "next/link";
import Image from "next/image";
import { ColorToken } from "../color/";
import { Breadcrumb, Button } from "antd";

const items = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/",
    title: "About",
  },
  {
    href: "/",
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
        <span className="span"> | </span>
        <img height={18} width={24} src="/flag.svg" alt="alt" />
        <span className="span"> | </span>
      </div>
    ),
  },
  {
    title: (
      <ColorToken>
        <Button className="myButton" type="primary">
          Login
        </Button>
      </ColorToken>
    ),
  },
];

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <Link href="/">
          <Image
            className="myImages"
            src="/Layer 2.svg"
            alt="alt"
            width={208}
            height={44}
          />{" "}
        </Link>
        <div className="incBreadcrumb">
          <Breadcrumb className="myBreadcrumb" separator=" " items={items} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
