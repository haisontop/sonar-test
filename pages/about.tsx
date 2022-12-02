import Head from "next/head";
import Image from "next/image";
import {
  Container,
  ChakraProvider,
  Heading,
  Stack,
  Button,
  Input,
  SimpleGrid,
  InputGroup,
  InputLeftElement,
  Box,
  Text,
  Icon,
  Link,
} from "@chakra-ui/react";
import { AvatarIllustration } from "../src/components/icons/AvatarIllustration";
import styles from "../styles/Home.module.css";
import Navbar from "../src/components/Navbar";
import AboutHero from "../src/modules/about/AboutHero";
import OurStory from "../src/modules/about/OurStory";
import OurTeam from "../src/modules/about/OurTeam";
import OurAdvisors from "../src/modules/about/OurAdvisors";
import Testimonials from "../src/modules/about/Testimonials";
import Footer from "../src/components/Footer";

export default function About() {
  return (
    <>
      <Navbar></Navbar>

      <AboutHero />
      <OurStory />

      <OurTeam />
      <OurAdvisors />
      <Testimonials />
      <Footer />
    </>
  );
}
