import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import { ReactNode } from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import styles from "../../styles/Home.module.css";
interface LayoutProps {
  children: ReactNode;
}
const Layout = (props: LayoutProps) => {
  return (
    <Flex className={styles.main}>
      <Head>
        <title>Ruan Gallio's portfolio</title>
      </Head>
      <NavBar />
      <main>{props.children}</main>
      <Footer />
    </Flex>
  );
};

export default Layout;
