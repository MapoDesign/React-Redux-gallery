import React from "react";
import { ReactComponent as Logo } from "../images/logo-footer.svg";
import { Container, Stack, Box } from "./styled";

const Footer = () => {
  return (
    <>
    <Container size="full-width" mt={['36px','96px']} pb="72px">
      <Stack width="100%" justify="flex-start">
        <Container>
        
          <Stack align="start" spacing="20px">
            <Box>
              <Logo />
            </Box>
            <Stack direction="column" align="start" height="100%" spacing="20px">
              <Box>Pick me</Box>
              <Box color="grey.600">Lorem ipsum dolor sit.</Box>
            </Stack>
          </Stack>
        
        </Container>
      </Stack>
    </Container>
    <Box height={["64px","72px"]} width="100%">

    </Box>
    </>
    );
};

export default Footer;
