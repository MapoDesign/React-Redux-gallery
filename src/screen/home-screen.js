import React from "react";
import Layout from "../components/layout";
import { Box, Container, Stack, InputWrapper, Skeleton, Button} from "../components/styled";
import Hero from "../components/Hero";
import HomeBody from "../components/HomeBody";

const HomePage = () => {
  return (
    <Layout>
      <Container size="fullwidth">
        <Hero />
        <HomeBody />
      </Container>
    </Layout>
  );
};

export default HomePage;
