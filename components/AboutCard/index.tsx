import { Box } from "@chakra-ui/react";
import styles from "../../styles/AboutCard.module.css";
import { IconType } from "react-icons/lib";

type CardBgColor = "#ff688c" | "#005da9" | "#fff";
export interface AboutCardProps {
  icon: IconType;
  title: string;
  text: string;
  color: CardBgColor;
}

const AboutCard = (props: AboutCardProps) => {
  let reverseColor = "#fff";
  if (props.color === "#ff688c") {
    reverseColor = "#005da9";
  }
  if (props.color === "#005da9") {
    reverseColor = "#ff688c";
  }
  // On hover, change the background color of the card slide to the opposite color
  return (
    <Box
      className={styles.aboutcard}
      borderLeft={`3px solid ${props.color}`}
      backgroundImage={`linear-gradient(to right, #fff 0%, #fff 50%, ${props.color} 50%, ${props.color} 100%)`}
      sx={{ "--icon-color": reverseColor }}
      _hover={{
        backgroundColor: props.color,
        borderColor: props.color,
      }}
    >
      <props.icon size="30%" key={`${props.icon.name}`} />
      <h1 key={props.title}>{props.title}</h1>
      <p key={props.text}>{props.text}</p>
    </Box>
  );
};

export default AboutCard;
