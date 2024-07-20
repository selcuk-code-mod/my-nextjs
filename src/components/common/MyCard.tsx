"use client";

import React, { useState } from "react";
import { Button, Card } from "antd";
import { CardType } from "../page/tabs/MyTabs";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

const MyCard = ({ card }: { card: CardType }) => {
  const { image, content, title, type } = card;
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Card style={{ marginTop: "5px" }} className="my-card">
      <>
        <div className="flex center-between">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <img
              style={{
                backgroundColor: "#134e70",
                borderRadius: "10px",
                width: "40px",
                height: "47px",
              }}
              src={image}
              alt="alt"
            />
            <div className="flex-col center">
              <span style={{ color: "grey", fontSize: "1rem" }}>{type}</span>
              <span style={{ color: "#000", fontWeight: "700 " }}>{title}</span>
            </div>
          </div>
          <div>
            <Button
              style={{ borderRadius: "%50" }}
              onClick={toggleAccordion}
              icon={isOpen ? <UpOutlined /> : <DownOutlined />}
            />
          </div>
        </div>
        <div className={`content overflow-hidden transition`}>
          <div className={`${isOpen ? "open" : "hidden"} overflow-hidden`}>
            {content}
          </div>
        </div>
      </>
    </Card>
  );
};

export default MyCard;
