import { Box, Link, Tooltip } from "@chakra-ui/react";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { IconType } from "react-icons/lib";
import styles from "../../styles/Footer.module.css";
interface FooterProps {
  name: string;
  route: string;
  icon: IconType;
  tooltip: string;
}

const Footer = () => {
  const footerItems: FooterProps[] = [
    {
      name: "GitHub",
      icon: SiGithub,
      route: "https://github.com/RuanGallio",
      tooltip: "GitHub profile",
    },
    {
      name: "LinkedIn",
      route: "https://www.linkedin.com/in/ruan-gallio-29896a17b/",
      icon: SiLinkedin,
      tooltip: "LinkedIn profile",
    },
    {
      name: "Gmail",
      route: "mailto: ruangallio1@gmai.com",
      icon: SiGmail,
      tooltip: "Mail me",
    },
  ];
  return (
    <Box className={styles.footer}>
      {footerItems.map((item) => (
        <Tooltip
          backgroundColor="#e31b6d"
          hasArrow
          key={item.name}
          borderRadius="10px"
          label={item.tooltip}
          placement="top"
        >
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
        </Tooltip>
      ))}
    </Box>
  );
};

export default Footer;
