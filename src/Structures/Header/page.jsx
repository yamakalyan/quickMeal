import { Button, Container, Group, Text } from "@mantine/core";
import { IconBolt } from "@tabler/icons-react";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { openedDrawer } from "../../Features/drawer";
import classes from "./styles.module.css";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Text fz={"xl"} fw={"bold"} component={Link} to={"/"}>
            QuickMeal
          </Text>
          <Group>
            <Button variant="light" component={Link} to={"/advanced-filters"}>
              Advanced
            </Button>
            <Button
              leftSection={<IconBolt size={16} />}
              onClick={() => dispatch(openedDrawer())}
            >
              Random
            </Button>
          </Group>
        </Group>
      </header>
    </Container>
  );
};

export default Header;
