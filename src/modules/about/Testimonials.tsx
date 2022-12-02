import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { OUR_STORY } from "../../constants";

export default function Testimonials() {
  return (
    <Box width="100%" bgColor={"#F9F9F9"} py="4rem">
      <Container width="100%" maxW={"80%"}>
        <Grid
          justifyContent={"space-around"}
          width="100%"
          templateColumns={{base: "repeat(1, 1fr)", md: "repeat(2, 1fr)"}}
          gridRowGap="2rem"
        >
          <Box display="flex" flexDir={"column"} justifyContent="center" order={{base: 2, md: 1}}>
            <Text fontSize={"1.875rem"} fontWeight={700} pb="1.5rem">
              Our Pod Loves Sonar
            </Text>
            <Box display={"flex"} alignItems="center">
              <Box maxW={"90%"}>
                <Text fontSize={"1.25rem"}>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Placerat elementum ultricies vel volutpat lacinia tellus
                  mattis hac.”
                </Text>
              </Box>
            </Box>
            <Text fontWeight={600} sx={{ mt: "1rem" }}>
              -Pod Fam
            </Text>
            <Box>
              <Button
                variant={"outline"}
                colorScheme="primary"
                sx={{ mt: "1.875rem" }}
              >
                Next Quote
              </Button>
            </Box>
          </Box>
          <Box order={{base: 1, md: 2}}>
            <Image
              src={"/images/girl-quote.png"}
              width="100%"
              alt="all-people"
              maxH="327px"
              objectFit={"contain"}
            ></Image>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
