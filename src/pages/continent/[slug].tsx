import { Flex, Grid, Text } from "@chakra-ui/react";
import { Cities } from "../../components/Cities";
import { ContinentBanner } from "../../components/ContinentBanner";
import { Header } from "../../components/Header";
import { Infos } from "../../components/Infos"


export default function Continent() {
    return (
        <>
            <Header />
            <ContinentBanner />
            <Flex w="100%" maxW="1160px" direction={["column"]} mx="auto" px={["1rem", "1rem", "0"]}>
                <Grid templateColumns={["1fr", "1fr", "1.2fr 1fr"]} gap ={[5, 10, 16, 20]} my={["8", "20"]}>
                    <Text fontSize={["xl", "xl", "2xl"]} textAlign="justify" color="gray.400">
                        A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
                    </Text>
                    <Infos />
                </Grid>
                <Cities />
            </Flex>
        </>
    )
}