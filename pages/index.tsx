import { Box, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";
import AboutCard from "../components/AboutCard";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

import type { NextPage } from "next";
import type { AboutCardProps } from "../components/AboutCard";

import { GiBookmark, GiTeapotLeaves } from "react-icons/gi";
import { TbCode, TbMathFunction } from "react-icons/tb";

const Home: NextPage = () => {
  const cards: AboutCardProps[] = [
    {
      title: "All around nerd",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ex ex, fringilla vitae ultrices non, accumsan quis lectus. Cras id dui purus. Quisque et dapibus sapien. Morbi varius nulla neque, sit amet pharetra ligula lacinia id. ",
      icon: GiBookmark,
      color: "#ff688c",
    },
    {
      title: "Likes an answer",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ex ex, fringilla vitae ultrices non, accumsan quis lectus. Cras id dui purus. Quisque et dapibus sapien. Morbi varius nulla neque, sit amet pharetra ligula lacinia id. ",
      icon: TbCode,
      color: "#005da9",
    },
    {
      title: "Enjoyer of models",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ex ex, fringilla vitae ultrices non, accumsan quis lectus. Cras id dui purus. Quisque et dapibus sapien. Morbi varius nulla neque, sit amet pharetra ligula lacinia id. ",
      icon: TbMathFunction,
      color: "#ff688c",
    },
    {
      title: "The little things",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ex ex, fringilla vitae ultrices non, accumsan quis lectus. Cras id dui purus. Quisque et dapibus sapien. Morbi varius nulla neque, sit amet pharetra ligula lacinia id. ",
      icon: GiTeapotLeaves,
      color: "#005da9",
    },
  ];

  return (
    <>
      <Head>
        <title>Ruan Gallio's portfolios Home Screen</title>
      </Head>
      <Flex flexDirection="column" flexWrap="wrap">
        <Box
          display="flex"
          flexDirection="column"
          width="100%"
          alignItems="center"
          alignContent={"center"}
          justifyContent="center"
        >
          <h1 className={styles.title}>
            Hello there, I'm <Text color="#ff688c">Ruan Gallio.</Text>
          </h1>
          <Text className={styles.description}>
            And I'm a Software Developer.
          </Text>
        </Box>
        <Box className={styles.grid}>
          {cards.map((card) => (
            <AboutCard
              title={card.title}
              color={card.color}
              icon={card.icon}
              text={card.text}
            />
          ))}
        </Box>
      </Flex>
    </>
  );
};

export default Home;
