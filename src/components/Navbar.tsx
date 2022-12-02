import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  useDisclosure,
  Image,
  createIcon,
  HStack,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { RiTwitterLine, RiInstagramLine } from "react-icons/ri";
import { FC, useContext } from "react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      position="sticky"
      top={0}
      zIndex="200"
      bg={"white"}
      transition="ease-in-out all .2s"
      px="2rem"
      boxShadow={"0px 2px 10px rgba(35, 35, 35, 0.15)"}
    >
      <Box display={{ base: "none", md: "flex" }}>
        <DesktopNav fontColor={"black"} bgColor={"white"}></DesktopNav>
      </Box>

      <Flex
        display={{ base: "flex", md: "none" }}
        padding="0"
        py="1rem"
        justifyContent={"center"}
      >
        <Box flex="1">
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <CloseIcon color={"black"} w={3} h={3} />
              ) : (
                <HamburgerIcon color={"black"} w={5} h={5} />
              )
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
            color={"black"}
          />
        </Box>

        <Link href="/">
          <Image
            justifySelf="flex-end"
            display={"flex"}
            flex="1"
            textAlign="right"
            alignItems={"center"}
            justifyContent="end"
            //display='inline-block'
            ml={{ md: "1rem" }}
            height="100%"
            src={"/images/logo.png"}
            alt="Logo"
          />
        </Link>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav fontColor={"black"} bgColor={"white"} />
      </Collapse>
    </Box>
  );
};

const DesktopNav = ({
  fontColor,
  bgColor,
}: {
  fontColor: string;
  bgColor: string;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      width="100vw"
      maxWidth="82rem"
      margin="1.25rem auto"
      justifyContent={"space-between"}
      alignItems="center"
    >
      <Box
        textAlign={{ base: "center", md: "left" }}
        display="flex"
        alignItems={"center"}
      >
        <Link href="/">
          <Image
            _hover={{ cursor: "pointer" }}
            display="inline-block"
            height={{ base: "24px", md: "27px" }}
            width={"auto"}
            src={"/images/logo.png"}
            alt="Logo"
          />
        </Link>
      </Box>

      <Stack
        direction={"row"}
        spacing={"4rem"}
        alignItems="center"
        justifyContent="center"
        flex="10 0"
      >
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label} textAlign="center">
            <Link
              href={navItem.href ?? "#"}
              padding={2}
              fontSize="1rem"
              fontWeight={500}
              color={fontColor}
              display="inline-block"
              w="100%"
              textAlign="center"
            >
              {navItem.label}
            </Link>
          </Box>
        ))}
      </Stack>
      <HStack spacing={"1.75rem"}>
        <Button colorScheme={"secondary"} size="lg">
          Sign Up
        </Button>
        <Button colorScheme={"secondary"} variant="outline" size="lg">
          Login
        </Button>
      </HStack>
    </Flex>
  );
};

const MobileNav = ({
  fontColor,
  bgColor,
}: {
  fontColor: string;
  bgColor: string;
}) => {
  return (
    <Stack bg={bgColor} color={fontColor} py={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <Box
          key={navItem.label}
          display={{ base: navItem.label == "logo" ? "none" : "block" }}
        >
          {navItem.label != "logo" && (
            <Link href={navItem.href ?? "#"}>
              <Box
                p={2}
                fontSize={{ lg: "sm", xl: "md" }}
                fontWeight={500}
                color={fontColor}
              >
                {navItem.label}
              </Box>
            </Link>
          )}
        </Box>
      ))}
      <Box>
        <Button>Login</Button>
      </Box>
    </Stack>
  );
};

export default Navbar;

interface NavItem {
  label: string;
  href: string;
  private?: boolean;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Dashboard",
    href: "/dashboard",
    private: true,
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "FAQ",
    href: "/dashboard",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
