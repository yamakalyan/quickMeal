import { Anchor, Container, Group, Text } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";

const NotfoundPage = () => {
  return (
    <Container mih={700}>
      <Group>
        <Text>Not found | 404</Text>
        <Anchor fz={"xs"} component={Link} to={"/"}>
          Back to home
        </Anchor>
      </Group>
    </Container>
  );
};

export default NotfoundPage;
