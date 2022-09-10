import { Box, Text, Flex } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/SkillCard.module.css";
import { IconType } from "react-icons/lib";
import {
  FaCss3,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaReact,
  FaRust,
} from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiPandas,
  SiTypescript,
  SiWolframmathematica,
} from "react-icons/si";

interface Skills {
  title: string;
  years: number;
  icon: IconType;
}

const Skills: NextPage = () => {
  const skills: Skills[] = [
    {
      title: "Python",
      years: 3,
      icon: FaPython,
    },
    {
      title: "Pandas",
      years: 1,
      icon: SiPandas,
    },

    {
      title: "NodeJS",
      years: 3,
      icon: FaNodeJs,
    },
    {
      title: "React",
      years: 2,
      icon: FaReact,
    },
    {
      title: "HTML",
      years: 3,
      icon: FaHtml5,
    },
    {
      title: "CSS",
      years: 3,
      icon: FaCss3,
    },
    {
      title: "TypeScript",
      years: 1,
      icon: SiTypescript,
    },
    {
      title: "MongoDB",
      years: 2,
      icon: SiMongodb,
    },
    {
      title: "MySQL",
      years: 1,
      icon: SiMysql,
    },
    {
      title: "Rust",
      years: 1,
      icon: FaRust,
    },
    {
      title: "Git",
      years: 3,
      icon: FaGitAlt,
    },
    {
      title: "Applied Mathematics",
      years: 4,
      icon: SiWolframmathematica,
    },
  ];
  type CardBgColor = "#ff688c" | "#005da9" | "#fff";

  return (
    <>
      <Head>
        <title>Ruan Gallio's portfolios Skills Screen</title>
      </Head>
      <Flex
        as="section"
        id="skills"
        flexDir="column"
        width={{ sm: "95%", md: "90%", lg: "80%" }}
        mx="auto"
        mt="auto"
      >
        <Flex flexWrap="wrap">
          {skills.map((skill, i) => (
            <Box
              className={styles.skillcard}
              key={skill.title}
              as="article"
              m="3"
              flexBasis="250px"
              flexGrow={1}
              textAlign="center"
            >
              <skill.icon
                style={{ paddingBottom: "5px" }}
                color={i % 2 === 0 ? "#ff688c" : "#005da9"}
                size={100}
              />
              <Text fontWeight="extrabold" fontSize="16">
                {skill.title}
              </Text>
              <Text>+{skill.years} years experience</Text>
            </Box>
          ))}
        </Flex>
      </Flex>
    </>
  );
};

export default Skills;
