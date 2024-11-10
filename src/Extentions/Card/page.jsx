import { Anchor, Badge, Card, Image, Stack, Text } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./styles.module.css";

const CardProvider = ({ item, advanced }) => {
  return (
    <Card
      radius="md"
      className={classes.card}
      p={"md"}
      component={Stack}
      gap={2}
    >
      <Card.Section mb="sm">
        <Image
          src={item.strMealThumb}
          alt={item.strMeal}
          h={180}
          className={classes.image}
        />
      </Card.Section>
      {advanced && <Badge size="xs">{item.strCategory}</Badge>}
      <Text
        fw={700}
        className={classes.title}
        component={Link}
        to={"/view-details/" + item.idMeal}
        lineClamp={1}
      >
        {item.strMeal}
      </Text>
      {advanced && (
        <Text fz={"xs"} c={"dimmed"}my={2} lineClamp={2}>
          {item.strInstructions}
        </Text>
      )}
      {advanced && (
        <Anchor fz={"xs"} c={"red"} href={item.strYoutube}>
          Watch in youtube?
        </Anchor>
      )}
    </Card>
  );
};

export default CardProvider;
