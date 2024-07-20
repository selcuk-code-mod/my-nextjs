"use client";
import { Tabs } from "antd";
import React from "react";
import CardList from "../../common/CardList";

export interface CardType {
  image: string;
  type: string;
  title: string;
  content: string;
}

const cardListData: CardType[] = [
  {
    image: "/user.svg",
    type: "Seafarer",
    title: "Is there a registration or subscription fee?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quae est veritatis. Eos assumenda quis optio nobis quos? Molestiae accusantium maiores architecto a pariatur excepturi nisi nulla eligendi inventore assumenda?",
  },
  {
    image: "/user.svg",
    type: "Seafarer",
    title: "Are there any conditions for applying?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quae est veritatis. Eos assumenda quis optio nobis quos? Molestiae accusantium maiores architecto a pariatur excepturi nisi nulla eligendi inventore assumenda?",
  },
  {
    image: "/building.svg",
    type: "Company",
    title: "Do I need to spend a packet again for a seafarer I have imaged?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quae est veritatis. Eos assumenda quis optio nobis quos? Molestiae accusantium maiores architecto a pariatur excepturi nisi nulla eligendi inventore assumenda?",
  },
  {
    image: "/user.svg",
    type: "Seafarer",
    title: "How do companies contact me?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quae est veritatis. Eos assumenda quis optio nobis quos? Molestiae accusantium maiores architecto a pariatur excepturi nisi nulla eligendi inventore assumenda?",
  },
  {
    image: "/teacher.svg",
    type: "Cadet",
    title: "Can I see the refenras grades of my instructors?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quae est veritatis. Eos assumenda quis optio nobis quos? Molestiae accusantium maiores architecto a pariatur excepturi nisi nulla eligendi inventore assumenda?",
  },
  {
    image: "/building.svg",
    type: "Company",
    title: "Is there a charge for detailed filtering?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quae est veritatis. Eos assumenda quis optio nobis quos? Molestiae accusantium maiores architecto a pariatur excepturi nisi nulla eligendi inventore assumenda?",
  },
];

const MyTabs = () => {
  const type: string[] = cardListData.map((card) => card.type);
  const uniqueSet = new Set(type);
  const uniqueTypes = Array.from(uniqueSet);

  const myItems: any[] = ["all", ...uniqueTypes].map((t, index) => {
    let data = [];

    if (t === "all") {
      data = [...cardListData];
    } else {
      data = cardListData.filter((card) => card.type === t);
    }

    return {
      key: index,
      label: t.toLocaleUpperCase(),
      children: <CardList cardListData={data} />,
    };
  });

  return (
    <Tabs className="myTabs" items={myItems}>
      {<CardList />}
    </Tabs>
  );
};

export default MyTabs;
