import {
  Anchor,
  Breadcrumbs,
  Container,
  LoadingOverlay,
  Stack,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MAIN_URL } from "../../App";
import DetailsPage from "../../Extentions/DetailPage/page";

const items = [
  { title: "Home", to: "/" },
  { title: "Filters", to: "/" },
].map((item, index) => (
  <Anchor to={item.to} key={index} component={Link}>
    {item.title}
  </Anchor>
));

const Details = () => {
  const [results, setResults] = useState("");
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchingDetails = async () => {
      try {
        setLoading(true);
        const result = await fetch(MAIN_URL + "lookup.php?i=" + id);
        if (result.ok) {
          const jsondata = await result.json();
          setLoading(false);
          return setResults(jsondata.meals);
        }
        setLoading(false);
        return;
      } catch (error) {
        console.log(error);
      }
    };
    fetchingDetails();
  }, [id]);

  return (
    <Container size={"sm"} pos={"relative"} mih={500}>
      <LoadingOverlay visible={loading} />
      <Stack justify="center" mt={"lg"} pos={"relative"}>
        <Breadcrumbs mb={"xl"}>{items}</Breadcrumbs>
        <DetailsPage results={results} />
      </Stack>
    </Container>
  );
};

export default Details;
