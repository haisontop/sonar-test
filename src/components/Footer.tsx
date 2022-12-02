import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { NAV_ITEMS } from "./Navbar";

export default function Footer() {
  const publicNavItems = NAV_ITEMS.filter((navItem) => !navItem.private);

  return (
    <Box bgColor={"#C2EEFF"}>
      <Flex
        width="100vw"
        margin="0rem auto"
        justifyContent={"space-between"}
        alignItems="center"
        py="2.25rem"
        px={{ base: "2rem", lg: "2rem" }}
      >
        <Container width="100%" maxW={"100%"} px="">
          <Grid
            width="100%"
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
            gridRowGap="2rem"
          >
            <Box display="flex" flexDir={"column"} justifyContent="center">
              <Text
                fontSize={"1.75rem"}
                fontWeight={700}
                pb={{ base: 0, md: "1.5rem" }}
              >
                Get Sonar, Inc.
              </Text>
              <Flex columnGap="0.75rem">
                <FaInstagram />
                <FaLinkedinIn />
              </Flex>
              <Stack display={"flex"} mt="2.5rem" spacing="0.5rem">
                {publicNavItems.map((navItem) => (
                  <Box key={navItem.label}>
                    <Link
                      href={navItem.href ?? "#"}
                      fontSize="1rem"
                      fontWeight={400}
                      display="inline-block"
                    >
                      {navItem.label}
                    </Link>
                  </Box>
                ))}
              </Stack>
            </Box>
            <Box>
              <Text>
                Sign up to join our pod and get early access to Sonar.
              </Text>
              <Box  mt={{base: "0.5rem", md: "1.5rem"}}>
                <Text sx={{ mb: "0.5rem" }} fontWeight={600}>Email</Text>
                <Flex columnGap={"0.75rem"}>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <TfiEmail color="#949494" />
                    </InputLeftElement>
                    <Input
                      placeholder="pods@getsonar.org"
                      sx={{ bgColor: "white" }}
                    />
                  </InputGroup>
                  <Button colorScheme={"primary"}>Sign Up</Button>
                </Flex>
              </Box>
            </Box>
          </Grid>
        </Container>
      </Flex>
    </Box>
  );
}
