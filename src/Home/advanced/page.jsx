import {
  Anchor,
  Breadcrumbs,
  Container,
  Group,
  LoadingOverlay,
  Pagination,
  rem,
  Select,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { IconFlag, IconList, IconSearch } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MAIN_URL } from "../../App";
import CardProvider from "../../Extentions/Card/page";

function chunk(array, size) {
  if (!array?.length) {
    return [];
  }
  const head = array.slice(0, size);
  const tail = array.slice(size);
  return [head, ...chunk(tail, size)];
}

const AdvancedFilters = () => {
  const [activePage, setPage] = useState(1);
  const [results, setResults] = useState([]);
  const [initialResults, setInitialResults] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [categorySelector, setCategorySelector] = useState([]);
  const [categoryValue, setCategoryValue] = useState("");
  const [areaSelector, setAreaSelector] = useState([]);
  const [areaValue, setAreaValue] = useState("");

  const FullURL = MAIN_URL + `search.php?s=`;
  const categoriesURL = MAIN_URL + "list.php?c=list";
  const areasURL = MAIN_URL + "list.php?a=list";

  useEffect(() => {
    const inititalLoadForSelectData = async () => {
      try {
        const resultCategories = await fetch(categoriesURL);
        if (resultCategories.ok) {
          const jsonResult = await resultCategories.json();
          const mapping = jsonResult?.meals.map((item) => item.strCategory);
          setCategorySelector(mapping);
        }

        const resultAreas = await fetch(areasURL);
        if (resultAreas.ok) {
          const jsonResult = await resultAreas.json();
          const mapping = jsonResult?.meals.map((item) => item.strArea);
          setAreaSelector(mapping);
        }
      } catch (error) {
        console.log(error);
      }
    };
    inititalLoadForSelectData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await fetch(FullURL + searchValue);
        if (result.ok) {
          const jsonData = await result.json();
          setLoading(false);
          setInitialResults(jsonData.meals || []);
          setResults(jsonData.meals || []);
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [searchValue]);

  useEffect(() => {
    const filteredResults = initialResults.filter((meal) => {
      const matchesCategory = categoryValue
        ? meal.strCategory === categoryValue
        : true;
      const matchesArea = areaValue ? meal.strArea === areaValue : true;
      return matchesCategory && matchesArea;
    });
    setResults(filteredResults);
  }, [categoryValue, areaValue, initialResults]);

  const data = chunk(results, 12);

  return (
    <Container mih={600} component={""}>
      <Stack w={"100%"}>
        <Breadcrumbs>
          <Anchor component={Link} to={"/"}>
            Home
          </Anchor>
          <Anchor component={Link} to={"/"}>
            Filters
          </Anchor>
        </Breadcrumbs>
        <Stack>
          <TextInput
            mt={"md"}
            placeholder="Type ingredients, like avocado toast or spicy curry..."
            label="What's Cooking in Your Kitchen?"
            onChange={(e) => setSearchValue(e.target.value)}
            leftSection={
              <IconSearch
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            }
          />

          <SimpleGrid cols={{ base: 1, sm: 3 }}>
            <Select
              placeholder="Any type – Breakfast, Comfort Food, Desserts..."
              label="Choose Your Culinary Style"
              data={categorySelector}
              onChange={(e) => setCategoryValue(e || "")}
              leftSection={
                <IconList
                  style={{ width: rem(18), height: rem(18) }}
                  stroke={1.5}
                />
              }
            />

            <Select
              placeholder="A taste of places – Italian, Mexican, Indian..."
              label="Discover a World of Flavors"
              data={areaSelector}
              onChange={(e) => setAreaValue(e || "")}
              leftSection={
                <IconFlag
                  style={{ width: rem(18), height: rem(18) }}
                  stroke={1.5}
                />
              }
            />
          </SimpleGrid>

          <Text fz={"sm"} fs={"italic"} c={"dimmed"} maw={700} py="md">
            Here’s a feast crafted just for you! Find recipes that match your
            unique taste.
          </Text>
        </Stack>

        <Stack pos={"relative"}>
          <LoadingOverlay visible={loading} title="loading..." />
          {data.length === 0 ? (
            <Text ta={"center"} tt={"uppercase"} c={"dimmed"}>
              No data found
            </Text>
          ) : (
            <SimpleGrid cols={{ base: 1, sm: 4 }} spacing={"md"}>
              {data[activePage - 1]?.map((item, index) => (
                <CardProvider key={index} item={item} advanced />
              ))}
            </SimpleGrid>
          )}
        </Stack>
        {results?.length > 12 && (
          <Group justify="flex-start" mt={"lg"}>
            <Pagination
              total={data?.length}
              value={activePage}
              defaultValue={1}
              onChange={setPage}
              mt="sm"
            >
              <Group gap={5} justify="center">
                <Pagination.First />
                <Pagination.Previous />
                <Pagination.Items />
                <Pagination.Next />
                <Pagination.Last />
              </Group>
            </Pagination>
          </Group>
        )}
      </Stack>
    </Container>
  );
};

export default AdvancedFilters;
