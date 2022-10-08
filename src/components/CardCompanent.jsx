import React from "react";
import { Card, Image, Text, Button, Grid } from "@geist-ui/core";
const CardCompanent = ({ title, description }) => {
  return (
    <Card width="350px">
      <Image
        src="https://user-images.githubusercontent.com/11304944/76085431-fd036480-5fec-11ea-8412-9e581425344a.png"
        height="200px"
        width="400px"
        draggable={false}
      />
      <Text h4 mb={0}>
        {title}
      </Text>
      <Text type="secondary" small>
        {description}
      </Text>
      <Card.Footer>
        <Grid.Container justify="space-between">
          <Grid >
            {" "}
            <Button type="success" width={"100%"}>
              Add to cart.
            </Button>
          </Grid>
          <Grid >
            <Button type="error" width={"100%"}>
              Delete
            </Button>
          </Grid>
        </Grid.Container>
      </Card.Footer>
    </Card>
  );
};

export default CardCompanent;
