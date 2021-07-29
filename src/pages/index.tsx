import { Box, Heading } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { NavMenu } from "../components/NavMenu";
import { Slider } from "../components/Slider";


export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <NavMenu />
      <Box w={["60px", "90px"]} mx="auto" my={["9", "20"]} bg="gray.400" h="2px"/>
      <Heading
        fontSize={["lg", "3xl"]}
        align="center"
        color="gray.400"
        fontWeight="500"
        lineHeight="xl"
        mb={["5", "18"]}
      >
        Vamos nessa ? <br /> Então escolha seu continente
      </Heading>
      <Slider />
    </>
  )
}
