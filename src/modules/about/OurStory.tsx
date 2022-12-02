import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { OUR_STORY } from "../../constants";

interface StoryCardProps {
  image: string;
  leftImage?: boolean;
  content: string;
}

const StoryCard = ({ image, leftImage, content }: StoryCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <Grid
        justifyContent={"space-around"}
        width="100%"
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}
        gridRowGap="2rem"
        gridColumnGap="2rem"
      >
        <Box
          style={{
            transform: isInView ? "none" : "translateX(-200px)",

            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          display="block"
          opacity={0}
          transform={"translateX(-100px)"}
          order={[2, 2, leftImage ? 1 : 2]}
        >
          <Image
            src={image}
            width="100%"
            alt="all-people"
            maxH="420px"
            objectFit={"contain"}
          ></Image>
        </Box>
        <Box
          style={{
            transform: isInView ? "none" : "translateX(200px)",

            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          opacity={0}
          transform={"translateX(100px)"}
          order={[1, 1, leftImage ? 2 : 1]}
        >
          <Box maxW={"80%"}>
            <Text fontSize={"1.25rem"} lineHeight="2rem" textAlign={["center", "center", "left"]}>
              {content}
            </Text>
          </Box>
        </Box>
      </Grid>
    </section>
  );
};

export default function OurStory() {
  return (
    <Box width="100%" bgColor={"#F9F9F9"} py="7rem">
      <Container width="100%" maxW={"60rem"}>
        <Heading
          fontSize={"2.5rem"}
          fontWeight={700}
          textAlign="center"
          pb={["5rem", "5rem", "7rem"]}
        >
          Our Story
        </Heading>
        <Stack spacing="6rem" width="100%">
          {OUR_STORY.map((storyItem) => {
            return (
              <StoryCard
                image={storyItem.image}
                leftImage={storyItem.leftImage}
                content={storyItem.content}
                key={storyItem.id}
              />
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}
