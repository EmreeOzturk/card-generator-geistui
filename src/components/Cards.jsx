import React from "react";
import { Grid } from "@geist-ui/core";
import CardCompanent from "./CardCompanent";
const Cards = ({ cards }) => {
  return (
    <div>
      <Grid.Container gap={1} justify="center"  >
        {cards.map((card) => {
          return (
            <Grid md={8} justify="center" alignItems="center" >
              <CardCompanent  title={card.title} description={card.description} shadow width="100%" />
            </Grid>
          );
        })}
      </Grid.Container>
    </div>
  );
};

export default Cards;
