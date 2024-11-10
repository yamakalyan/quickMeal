import {
  ActionIcon,
  Center,
  Drawer,
  LoadingOverlay,
  Stack,
  Text,
} from "@mantine/core";
import { IconDice2 } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openedDrawer } from "../../Features/drawer";
import DetailsPage from "../DetailPage/page";

const RandomCardDrawer = () => {
  const { drawer } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [results, setResults] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchingRandomMeal = async () => {
      setLoading(true);
      const result = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      if (result.ok) {
        const jsonData = await result.json();
        setLoading(false);
        return setResults(jsonData.meals);
      }
      return setLoading(false);
    };
    fetchingRandomMeal();
  }, [refresh]);

  return (
    <Drawer
      opened={drawer.value}
      onClose={() => dispatch(openedDrawer())}
      title={<Text>Random Dish for you..</Text>}
    >
      <Stack justify="center" mt={"lg"} pos={"relative"}>
        <LoadingOverlay
          visible={loading}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
        />
        <DetailsPage results={results} />
        <Center mt="md">
          <ActionIcon
            size={"xl"}
            radius={"xl"}
            onClick={() => setRefresh(!refresh)}
          >
            <IconDice2 />
          </ActionIcon>
        </Center>
      </Stack>
    </Drawer>
  );
};

export default RandomCardDrawer;
