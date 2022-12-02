import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import ProfileCard from "../../components/ProfileCard";
import { OUR_ADVISORS, OUR_STORY, OUR_TEAM } from "../../constants";

export default function OurAdvisors() {
  return (
    <Box width="100%" pb="7rem">
      <Container width="100%" maxW={"90%"}>
        <Text fontSize={"2.5rem"} fontWeight={700} textAlign="center" pb="5rem">
          Our Advisors
        </Text>
        <Container>
        <Grid
          justifyContent={"space-around"}
          width="100%"
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gridColumnGap={{ base: "2rem", sm: "2rem", xl: "2rem" }}
          gridRowGap={{ base: "2rem", sm: "2rem", lg: "2rem" }}
        >
          {OUR_ADVISORS.map((advisorItem) => {
            return (
              <ProfileCard
                key={advisorItem.id}
                name={advisorItem.name}
                image={advisorItem.image}
                role={advisorItem.role}
                profileLink={advisorItem.profileLink}
                linkedInLink={advisorItem.linkedInLink}
                color="secondary.main"
              ></ProfileCard>
            );
          })}{" "}
        </Grid>
        </Container>
      </Container>
    </Box>
  );
}
