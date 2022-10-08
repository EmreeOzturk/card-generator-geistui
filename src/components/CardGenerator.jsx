import React, { useState } from "react";
import {Spacer, Button,Input} from "@geist-ui/core"
import Cards from "./Cards";
const CardGenerator = () => {
  const list = [
    {
      id: 1,
      title: "Card 1",
      description: "This is the first card",
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is the second card",
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is the third card",
    },
  ];
  const [cards, setCards] = useState(list);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const clickHandler = () => {
    const newCard = {
      id: cards.length + 1,
      title,
      description,
    };
    setCards([...cards, newCard]);
    setTitle("");
    setDescription("");
  };
  return (
    <div>
      <Input width="100%" value={title} onChange={e => setTitle(e.target.value)} placeholder="Card title"/>
        <Spacer y={0.5} />
      <Input value={description} onChange={e => setDescription(e.target.value)} placeholder="Card Description" width="100%" />
        <Spacer y={0.5} />
        <Button onClick={clickHandler} type="success" width="100%">Add Card</Button>
        <Spacer y={0.5} />
      <Cards cards={cards} />
    </div>
  );
};

export default CardGenerator;
