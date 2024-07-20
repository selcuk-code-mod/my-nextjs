"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ColorToken } from "../../color/index";
import { Breadcrumb, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import styles from "./Navbar.module.css";

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
        <img
          className="country"
          height={18}
          width={24}
          src="/flag.svg"
          alt="alt"
        />
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

const Navbar: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  return (
    <>
      <div className={styles.nav}>
        <Link href="/">
          <Image
            className="myImages"
            src="/Layer 2.svg"
            alt="alt"
            width={208}
            height={44}
          />
        </Link>
        <div className={styles.incBreadcrumb}>
          <Breadcrumb className="myBreadcrumb" separator=" " items={items} />
        </div>
        <MenuOutlined className={styles.menuIcon} onClick={showDrawer} />
      </div>
      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        open={drawerVisible}
      >
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {items.map((item, index) => (
            <li key={index} style={{ marginBottom: "15px" }}>
              {item.href ? (
                <Link href={item.href}>{item.title}</Link>
              ) : (
                item.title
              )}
            </li>
          ))}
        </ul>
      </Drawer>
    </>
  );
};
export default Navbar;
