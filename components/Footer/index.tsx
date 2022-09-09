import { Box, Link } from "@chakra-ui/react";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { IconType } from "react-icons/lib";
import styles from "../../styles/Footer.module.css";
interface FooterProps {
  name: string;
  route: string;
  icon: IconType;
}

const Footer = () => {
  const footerItems: FooterProps[] = [
    {
      name: "GitHub",
      icon: SiGithub,
      route: "https://github.com/RuanGallio",
    },
    {
      name: "LinkedIn",
      route: "https://www.linkedin.com/in/ruan-gallio-29896a17b/",
      icon: SiLinkedin,
    },
    {
      name: "Gmail",
      route: "mailto: ruangallio1@gmai.com",
      icon: SiGmail,
    },
  ];
  return (
    <Box className={styles.footer}>
      {footerItems.map((item) => (
        <Link
          margin="10px"
          color="#fff"
          href={item.route}
          key={item.name}
          target="_blank"
          _hover={{
            color: "#04c2c9",
            paddingRight: "7px",
            paddingLeft: "7px",
            paddingBottom: "3px",
            borderBottom: `2px solid #e31b6d`,
          }}
        >
          <item.icon size={30} />
        </Link>
      ))}
    </Box>
  );
};

export default Footer;
