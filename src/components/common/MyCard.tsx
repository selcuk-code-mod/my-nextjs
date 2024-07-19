"use client";

import React, { useState } from "react";
import { Button, Card } from "antd";
import { CardType } from "../page/tabs/MyTabs";

const MyCard = ({ card }: { card: CardType }) => {
  const { image, content, title, type } = card;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card style={{ marginTop: "10px" }} className="my-card">
      <>
        <div className="flex center-between">
          {/* Resim */}
          <div>
            <img
              src="/public/Rectangle 44.jpg"
              alt="alt"
              height={45}
              width={45}
            />
          </div>
          {/* Başlık ve Tip */}
          <div className="flex-col center">
            <span style={{ color: "grey", fontSize: "0.8rem" }}>{type}</span>
            <span>{title}</span>
          </div>
          <Button
            onClick={() => {
              setIsOpen((s) => !s);
            }}
          >
            +
          </Button>
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
