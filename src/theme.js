import {
  Anchor,
  Autocomplete,
  Button,
  Center,
  Container,
  Grid,
  Image,
  Paper,
  Select,
  SimpleGrid,
  TextInput,
  createTheme,
} from "@mantine/core";
import { Link } from "react-router-dom";

export const theme = createTheme({
  primaryColor: "blue",
  // fontFamily: "Poppins, serif",
  components: {
    Container: Container.extend({
      defaultProps: {
        size: "xl",
        // fluid : true,
        display: "flex",
        component: Center,
      },
    }),
    Center: Center.extend({
      defaultProps: {
        h: "100%",
        w: "100%",
      },
    }),
    Grid: Grid.extend({
      defaultProps: {
        h: "100%",
        w: "100%",
      },
    }),
    SimpleGrid: SimpleGrid.extend({
      defaultProps: {
        cols: { base: 1, sm: 2 },
        h: "100%",
        w: "100%",
        spacing: "xs",
      },
    }),
    Image: Image.extend({
      defaultProps: {
        fit: "cover",
        radius: "md",
        h: "100%",
        w: "100%",
      },
    }),
    Anchor: Anchor.extend({
      defaultProps: {
        underline: "never",
        componant: Link,
        c: "",
      },
    }),
    GridCol: Grid.Col.extend({
      defaultProps: {
        span: { base: 12, sm: 6 },
        h: "100%",
        w: "100%",
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        p: "xs",
      },
    }),
    Button: Button.extend({
      defaultProps: {
        size: "xs",
        variant: "default",
      },
    }),
    TextInput: TextInput.extend({
      defaultProps: {
        placeholder: "...",
        description: true,
        variant: "filled",
        w: "100%",
      },
    }),
    Select: Select.extend({
      defaultProps: {
        placeholder: "...",
        clearable: true,
        description: true,
        variant: "filled",
        searchable: true,
        nothingFoundMessage: "Nothing found",
        w: "100%",
        allowDeselect : true
      },
    }),
    Autocomplete: Autocomplete.extend({
      defaultProps: {
        placeholder: "...",
        clearable: true,
        description: true,
        variant: "filled",
        searchable: true,
        nothingFoundMessage: "Nothing found",
        w: "100%",
      },
    }),
  },
});
