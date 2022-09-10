import { Box, Link, Flex } from "@chakra-ui/react";
import styles from "../../styles/NavBar.module.css";

interface NavBarProps {
  name: string;
  route: string;
}

const NavBar = () => {
  const navBarItems: NavBarProps[] = [
    {
      name: "Experience",
      route: "/experience",
    },
    {
      name: "Skills",
      route: "/skills",
    },
    {
      name: "Projects",
      route: "/projects",
    },
    {
      name: "About Me",
      route: "/about",
    },
  ];

  return (
    <Flex className={styles.navbar} flexWrap="wrap" as="nav" zIndex={999}>
      <Box>
        <Link
          color="#000"
          margin="10px"
          _hover={{
            fontWeight: "bold",
            color: "#005da9",
            paddingBottom: "3px",
            borderBottom: `2px solid #e31b6d`,
          }}
          href="/"
        >
          Home
        </Link>
      </Box>
      <Box
        display="flex"
        gap={5}
        fontWeight={"bold"}
        textTransform={"uppercase"}
        height={"40px"}
        alignItems={"center"}
      >
        {navBarItems.map((item) => (
          <Link
            color="#000"
            margin="10px"
            _hover={{
              color: "#005da9",
              paddingBottom: "3px",
              borderBottom: `2px solid #e31b6d`,
            }}
            href={item.route}
            key={item.name}
          >
            {item.name}
          </Link>
        ))}
      </Box>
      <Box>
        <p style={{ color: "#000" }}> Color Scheme</p>
      </Box>
    </Flex>
  );
};

export default NavBar;
