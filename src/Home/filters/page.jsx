import {
  Container,
  Group,
  LoadingOverlay,
  Pagination,
  rem,
  Select,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
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

const checkBoxData = [
  {
    description: "Warm & Wholesome",
    title: "Soup",
    image: "assets/soup.jpg",
  },
  {
    description: "Small Bites, Big Flavor",
    title: "Appetizer",
    image: "assets/appetizer.jpg",
  },
  {
    description: "Fresh & Crisp",
    title: "Salad",
    image: "assets/salad.jpg",
  },
  {
    description: "Hearty & Satisfying",
    title: "Main Course",
    image: "assets/main-course.jpg",
  },
  {
    description: "Sweet Finishes",
    title: "Dessert",
    image: "assets/dessert.jpg",
  },
];

const Filters = () => {
  const [activePage, setPage] = useState(1);
  const [results, setResults] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectListData, setSelectListData] = useState([]);

  const urlProvider = (type) => MAIN_URL + `${type}.php?i=`;

  useEffect(() => {
    const inititalLoadForSelectData = async () => {
      try {
        const fullURL = urlProvider("list") + "list";
        const result = await fetch(fullURL);
        if (result.ok) {
          const jsonResult = await result.json();
          const mapping = jsonResult.meals.map((item) => item.strIngredient);
          return setSelectListData(mapping);
        }
      } catch (error) {
        console.log(error);
      }
    };
    inititalLoadForSelectData();
  }, []);

  useEffect(() => {
    const cardsData = async () => {
      try {
        setLoading(true);
        const fullURL = urlProvider("filter") + searchValue;
        const result = await fetch(fullURL);
        if (result.ok) {
          const jsonData = await result.json();
          // await setPage(activePage !== 1 ? 1 : activePage);
          setLoading(false);
          return setResults(jsonData.meals);
        }
        setLoading(false);

        return;
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    cardsData();
  }, [searchValue]);

  const data = chunk(results, 12);

  return (
    <Container mih={600} component={""}>
      <Stack w={"100%"}>
        <Select
          size="md"
          label="What's in Your Kitchen?"
          description="List ingredients you have, and let us find recipes tailored just for you."
          placeholder="Think eggs, spinach, pasta..."
          data={selectListData}
          onChange={(e) => setSearchValue(e || "")}
          leftSection={
            <IconSearch
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          }
        />
        <Text fz={"sm"} fs={"italic"} c={"dimmed"} maw={700} py="md">
          Delicious recipes await! Discover meals crafted from what’s in your
          pantry.
        </Text>

        <Stack pos={"relative"} mih={500}>
          <LoadingOverlay visible={loading} title="loading..." />
          {data.length === 0 ? (
            <Text ta={"center"} tt={"uppercase"} c={"dimmed"}>
              No data found
            </Text>
          ) : (
            <SimpleGrid cols={{ base: 1, sm: 4 }} spacing={"md"}>
              {data[activePage - 1]?.map((item, index) => (
                <CardProvider key={index} item={item} />
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

export default Filters;
