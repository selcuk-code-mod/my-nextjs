import { Button, Col, Row } from "antd";

import { ColorToken } from "../color";
import Image from "next/image";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const footerData = [
  {
    title: "Company",
    links: ["Terms of Service", "Privacy Policy", "FAQ", "About", "Contact"],
  },
  {
    title: "Platform",
    links: ["Pricing Table", "Seafefer", "Company", "Career", "Mobile Apps"],
  },
];

const Footer = () => {
  return (
    <footer>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {footerData.map((section, index) => (
              <div key={index}>
                <h3>{section.title}</h3>
                <ul>
                  {section.links.map((link, idx) => (
                    <li style={{ margin: "20px 0 20px 0" }} key={idx}>
                      <a
                        href="#"
                        style={{
                          color: "#858585",
                          textDecoration: "none",
                        }}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Col>
        <Col xs={24} md={12}>
          {" "}
          <div>
            <div style={{ textAlign: "end" }}>
              <Image
                className="layer"
                src="/Layer 2.svg"
                alt="alt"
                width={182}
                height={39}
              />
              <h4 style={{ margin: "30px 0 30px 0 " }}>
                MARITIME WORKFORCE PLATFORM THAT MEETS <br /> SHEFARERS &
                SEAFARERS WITH SHIPPING COMPANIES
              </h4>
              <ColorToken>
                <Button type="primary">Login</Button>
              </ColorToken>
            </div>
          </div>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <Row
        gutter={16}
        style={{
          display: "flex",
          justifyContent: "space-between",
          textAlign: "end",
        }}
      >
        <Col xs={24} md={12} lg={18}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              className="images"
              src="/celsius-(cel)-.svg"
              alt="alt"
              width={24}
              height={24}
            />
            <p style={{ color: "#858585" }}>
              copyright 2024 by CreWin. All Rights Reserved.
            </p>
          </div>
        </Col>
        <Col xs={2} md={4} lg={6}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              opacity: "0.4",
            }}
          >
            <TwitterOutlined className="icons" />
            <FacebookOutlined className="icons" />
            <InstagramOutlined className="icons" />
            <LinkedinOutlined className="icons" />
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
