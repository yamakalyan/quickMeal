import { BackgroundImage, Overlay, Stack, Text, Title } from "@mantine/core";
import React from "react";
import { Outlet } from "react-router-dom";
import RandomCardDrawer from "../Extentions/RandomCard/page";
import classes from "./styles.module.css";
const Home = () => {
  return (
    <div>
      <RandomCardDrawer />
      <BackgroundImage pos={"relative"} mih={450} src="/assets/main-course.jpg">
        <Overlay
          zIndex={10}
          gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 20%, #fff 100%)"
          opacity={1}
        >
          <Stack
            ta={"center"}
            justify="center"
            h={"100%"}
            align="center"
            maw={900}
            px="md"
            mx={"auto"}
          >
            <Title mx={"auto"} fw={"bolder"} className={classes.title}>
              Craving something tasty?
              <Text
                component="span"
                c={"teal.3"}
                inherit
                className={classes.highlight}
              >
                We’ll make it easy!
              </Text>{" "}
              Get cooking with what you have!
            </Title>
            <Text >– no stress, just flavor</Text>
          </Stack>
        </Overlay>
      </BackgroundImage>
      <Outlet />
    </div>
  );
};

export default Home;
