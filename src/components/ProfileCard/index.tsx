import {
  Box,
  BoxProps,
  Button,
  Flex,
  Image,
  Link,
  Stack,
  Text,
  useToken,
} from "@chakra-ui/react";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { AvatarIllustration } from "../icons/AvatarIllustration";
import styles from "./ProfileCard.module.css";

interface ProfileCardProps {
  name: string;
  role: string;
  image: string;
  linkedInLink: string;
  profileLink: string;
  color: string | number;
}

export default function ProfileCard(props: ProfileCardProps) {
  const { name, role, image, linkedInLink, profileLink, color } = props;

  const [fontThemeColor] = useToken("colors", [color]);

  const fontColor =
    typeof fontThemeColor === "number" ? "black" : fontThemeColor;

  const [expanded, setExpanded] = React.useState(false);

  const toggleReadMore = () => {
    setExpanded(!expanded);
  };

  return (
    <Box
      display={"flex"}
      p="0.5rem"
      alignItems={"center"}
      justifyContent="center"
      borderRadius={"18px"}
      className={`${styles["flip-card"]} ${expanded ? styles["rotated"] : ""}`}
      height="300px"
      w="19.5rem"
      mx="auto"
    >
      <div className={styles["flip-card-inner"]}>
        <Box className={styles["flip-card-front"]}>
          <Stack textAlign="center" position={"relative"}>
            <Box
              onClick={toggleReadMore}
              position="absolute"
              right={"0.5rem"}
              top="0.5rem"
              zIndex={2}
              sx={{ cursor: "pointer", color: fontColor }}
              fontSize="0.75rem"
            >
              Read More
            </Box>
            <Box
              position="relative"
              py="1.5rem"
              display={"flex"}
              justifyContent="center"
            >
              <Image
                src={image}
                width="110px"
                height="110px"
                alt="all-people"
                objectFit={"contain"}
                zIndex={2}
              ></Image>
              <Box
                pos="absolute"
                bottom="0%"
                left="50%"
                transform="translateX(-50%)"
                width="154px"
                height="164px"
                zIndex={1}
                color={fontColor}
              >
                <AvatarIllustration />
              </Box>
            </Box>
            <Text fontSize={"1.25rem"} fontWeight={700}>
              {name}
            </Text>
            <Text fontSize={"1.25rem"} fontWeight={400}>
              {role}
            </Text>
            <Flex
              justifyContent={"center"}
              columnGap="0.5rem"
              color={fontColor}
            >
              <Link href={linkedInLink}>
                <FaLinkedinIn />
              </Link>
              <Link href={profileLink}>
                <TbWorld />
              </Link>
            </Flex>
          </Stack>
        </Box>
        <div className={styles["flip-card-back"]}>
          <Stack textAlign="center" position={"relative"}>
            <Box
              onClick={toggleReadMore}
              position="absolute"
              right={"0.5rem"}
              top="0.5rem"
              zIndex={2}
              sx={{ cursor: "pointer", color: fontColor }}
              fontSize="0.75rem"
            >
              Read Less
            </Box>
            <Box pt="2rem">
              <Text fontSize={"1.25rem"} fontWeight={400}>
                Description Here
              </Text>
            </Box>
          </Stack>
        </div>
      </div>
    </Box>
  );
}
