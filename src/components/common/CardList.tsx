"use client";
import React, { useState } from "react";
import MyCard from "../common/MyCard";
import { CardType } from "../page/tabs/MyTabs";

const CardList = ({
  cardListData = [],
}: {
  cardListData?: CardType[] | [];
}) => {
  const types = cardListData.map((card) => card.type);
  const [selectedTab, setSelectedTab] = useState("company");
  const [tabContent, setTabContent] = cardListData.filter(
    (card) => card.type === selectedTab
  );
  return (
    <>
      <div className="myAccordion" style={{ maxWidth: "700px" }}>
        {cardListData.map((card: CardType, index: number) => (
          <MyCard key={index} card={card} />
        ))}
      </div>
    </>
  );
};

export default CardList;
