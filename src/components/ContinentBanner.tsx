import { Flex, Heading } from "@chakra-ui/react";

export function ContinentBanner() {
    return (
        <Flex
            w="100%"
            h={["150px","300px", "500px"]}
            bgImage="url(/images/EuropeBackground.svg)"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            align="center"
            justify={["center", "center", "flex-start"]}
            px={["0","0", "140px"]}
            pt={["0", "0", "369px"]}
        >
            <Heading color="gray.50" fontWeight="600" fontSize={["2xl", "5xl"]}>Europa</Heading>
        </Flex>
    );
}