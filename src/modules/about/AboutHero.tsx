import {
  Box,
  BoxProps,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useInView } from "framer-motion";
import React, { useRef } from "react";

interface OvewrviewCardProps {
  title: string;
  description: string;
  bgColor: BoxProps["bgColor"];
  animateDirection?: string;
}

const OverviewCard = ({
  title,
  description,
  bgColor,
  animateDirection = "right",
}: OvewrviewCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <Box
        style={{
          transform: isInView
            ? "none"
            : animateDirection === "right"
            ? "translateX(-200px)"
            : "translateX(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        display="block"
        opacity={0}
        transform={
          animateDirection === "right"
            ? "translateX(-100px)"
            : "translateX(100px)"
        }
        height="100%"
      >
        <Box
          sx={{
            padding: "3rem 1.5rem",
            bgColor: bgColor,
            borderRadius: "18px",
            boxShadow: "3px 8px 18px rgba(130, 130, 130, 0.25)",
          }}
          maxW={{ base: undefined, md: "28.5rem" }}
          height="100%"
        >
          <Heading
            textAlign={"center"}
            fontSize={"2rem"}
            lineHeight={"3rem"}
            fontWeight={700}
          >
            {title}
          </Heading>
          <Text
            fontSize={"1.5rem"}
            lineHeight="2.5rem"
            fontWeight={400}
            mt="2rem"
          >
            {description}
          </Text>
        </Box>
      </Box>
    </section>
  );
};

export default function AboutHero() {
  return (
    <>
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Image
          src="/images/curved-background.svg"
          pos="absolute"
          top={{ base: 0, lg: "0rem" }}
          bottom={{ base: 0, lg: undefined }}
          left="50%"
          transform="translateX(-50%)"
          width="100%"
          zIndex={-1}
          alt="all-people"
          height={{ base: "100%", lg: undefined }}
          objectFit={{ base: "cover", lg: undefined }}
        ></Image>
        <Box
          sx={{
            paddingLeft: ["2.5rem", "4rem", "8rem", "8rem", "12.5rem"],
            paddingTop: ["5rem", "5rem", "5rem", "8.5rem"],
            paddingRight: ["2.5rem", "4rem", "6rem", "6rem", "6.875rem"],
            paddingBottom: { base: 0, lg: "17.75", xl: "20.75rem" },
          }}
          display="flex"
          flexDir={{ base: "column", lg: "row" }}
          rowGap="2rem"
          columnGap="4rem"
        >
          <Flex
            color="white"
            flexDir={"column"}
            // maxW={{ base: undefined, lg: "28.125rem", xl: undefined }}
          >
            <Box position="relative">
              <Heading
                fontSize={["46px"]}
                fontWeight={[700]}
                lineHeight={["69px"]}
                color="textLight"
              >
                About Us
              </Heading>
              <Image
                display="inline-block"
                src={"/images/dolphin.png"}
                alt="dolphin"
                position="absolute"
                top={"-3.5rem"}
                left={"-3.5rem"}
              />
            </Box>
            <Text
              fontSize={["30px"]}
              fontWeight={[600]}
              color="textLight"
              mt={{ base: "1rem", lg: "2rem", xl: "3rem" }}
            >
              Tagline
            </Text>
            <Text
              fontSize={["20px"]}
              lineHeight="166%"
              mt={"1rem"}
              color="white"
            >
              Members of a dolphin pod create strong bonds and work together to
              protect one another and thrive. Join now to build your pod! As
              dolphins, we have our sonars on at all times and form pods of
              mental health allies to support you.
            </Text>
          </Flex>

          <Box
            display={"flex"}
            justifyContent={{ base: "center", lg: "end" }}
            flexGrow={1}
          >
            <Image
              display="inline-block"
              width={{ base: "80%", lg: "640px" }}
              minW={{ base: "80%", lg: "640px" }}
              src={"/images/people.png"}
              objectFit="contain"
              alt="all-people"
            />
          </Box>
        </Box>
      </Box>
      <Container width="100%" maxW={"90%"}>
        <Flex
          justifyContent={"space-around"}
          width="100%"
          py="6.5rem"
          columnGap={"2rem"}
          rowGap={"2rem"}
          flexDir={{ base: "column", md: "row" }}
        >
          <OverviewCard
            title="Our Vision"
            description="Catalyze the world’s transition to precise, effective and preventative mental healthcare."
            bgColor={"primary.200"}
            animateDirection="right"
          />
          <OverviewCard
            title="Our Mission"
            description="Building digital health technology to proactively measure,
              identify and support youth mental health."
            bgColor={"secondary.200"}
            animateDirection="left"
          />
        </Flex>
      </Container>
    </>
  );
}
