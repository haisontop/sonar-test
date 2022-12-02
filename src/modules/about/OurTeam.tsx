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
import { OUR_STORY, OUR_TEAM } from "../../constants";

export default function OurTeam() {
  return (
    <Box width="100%" py="7rem">
      <Container width="100%" maxW={"90%"}>
        <Text fontSize={"2.5rem"} fontWeight={700} textAlign="center" pb="5rem">
          Our Team
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
            {OUR_TEAM.map((memberItem) => {
              return (
                <ProfileCard
                  key={memberItem.id}
                  name={memberItem.name}
                  image={memberItem.image}
                  role={memberItem.role}
                  profileLink={memberItem.profileLink}
                  linkedInLink={memberItem.linkedInLink}
                  color="primary.main"
                ></ProfileCard>
              );
            })}{" "}
          </Grid>
        </Container>
      </Container>
    </Box>
  );
}
