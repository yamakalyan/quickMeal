import { Anchor, Container, Stack, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import classes from "./styles.module.css";

export function Footer() {
  return (
    <Container className={classes.footer} component="">
      <div className={classes.inner}>
        <Text fz={"sm"} c={"dimmed"}>
          @ QuickMeal.
        </Text>
        <Text fz={"sm"} c={"dimmed"}>
          🧑‍💻 developed by{" "}
          <Anchor
            component={Link}
            to={"https://kalyanyama.vercel.app"}
            target="_blank"
            inherit
          >
            Kalyanyama.
          </Anchor>
        </Text>{" "}
        <Stack>
          <Text fz={"sm"} c={"dimmed"}>
            ❤️ built it using{" "}
            <Anchor
              inherit
              component={Link}
              to={"https://mantine.dev"}
              target="_blank"
            >
              Mantine UI.
            </Anchor>{" "}
            &{" "}
            <Anchor
              inherit
              component={Link}
              to={"https://react.dev"}
              target="_blank"
            >
              React.
            </Anchor>
          </Text>
          <Text fz={"sm"} c={"dimmed"}>
            🍱 apis by{" "}
            <Anchor
              component={Link}
              to={"https://www.themealdb.com/api.php"}
              target="_blank"
              inherit
            >
              TheMealDb.
            </Anchor>
          </Text>{" "}
        </Stack>
      </div>
    </Container>
  );
}
