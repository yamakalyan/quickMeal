import {
  Anchor,
  AspectRatio,
  Badge,
  Group,
  Image,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
import React from "react";
import classes from "./styles.module.css";

const formatIngredients = (meal) => {
  const ingredients = [];
  const ingredientKeys = Object.keys(meal).filter((key) =>
    key.startsWith("strIngredient")
  );
  for (const ingredientKey of ingredientKeys) {
    const ingredient = meal[ingredientKey];
    const measureKey = ingredientKey.replace("strIngredient", "strMeasure");
    const measure = meal[measureKey];
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push({ ingredient, measure: measure || "" });
    }
  }
  return ingredients;
};

const DetailsPage = ({ results = [] }) => {
  const mealsWithFormattedIngredients = Array.isArray(results)
    ? results.map((meal) => ({
        ingredients: formatIngredients(meal),
      }))
    : [];

  const mappingIngredients = mealsWithFormattedIngredients[0]?.ingredients.map(
    ({ ingredient, measure }, index) => (
      <Group key={index}>
        <Text c={"dimmed"} fz={"sm"}>
          {ingredient}
        </Text>
        :<Text fz={"sm"}>{measure}</Text>
      </Group>
    )
  );
  return (
    <>
      <AspectRatio ratio={16 / 9}>
        <Image src={results[0]?.strMealThumb} alt={results[0]?.strMeal} />
      </AspectRatio>

      <div>
        <Text c="dimmed">{results[0]?.strArea}</Text>
        <Text fz="xl" fw={500}>
          {results[0]?.strMeal}
        </Text>
        <Badge size="sm" mt={"sm"} variant="light">
          {results[0]?.strCategory}
        </Badge>
      </div>

      <Text c="dimmed" className={classes.label}>
        Required Ingredients
      </Text>
      <Stack bg={"gray.0"} p="md" gap={2} component={Paper} radius="md" mt={5}>
        {mappingIngredients}
      </Stack>
      <Text c="dimmed" className={classes.label}>
        Instructions
      </Text>

      <Text fz="sm">{results[0]?.strInstructions}</Text>
      <Anchor
        href={results[0]?.strYoutube}
        td={"underline"}
        target="_blank"
        c="red"
      >
        Watch in youtube ?
      </Anchor>
    </>
  );
};

export default DetailsPage;
