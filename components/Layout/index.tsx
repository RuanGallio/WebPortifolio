import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import { ReactNode } from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
interface LayoutProps {
  children: ReactNode;
}
const Layout = (props: LayoutProps) => {
  return (
    <Flex height="100vh" width="100%=vw" direction="column">
      <NavBar />
      <Head>
        <title>Ruan Gallio's portfolio</title>
      </Head>
      <main style={{ height: "100%" }}>{props.children}</main>
      <Footer />
    </Flex>
  );
};

export default Layout;
