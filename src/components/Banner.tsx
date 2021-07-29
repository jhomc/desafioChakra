import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";

export function Banner() {
    return(
        <Flex 
            w="100%"
            h={["163px", "250px", "250px", "335px"]}
            bgImage="url('./images/Background.jpg')"
            bgPosition={["100% 20%"]}
            bgSize="cover"
        >
          <Flex
                w="100%"
                mx="auto"
                justify={['center', 'space-between']}
                align="center"
                px={["4", "10","15", "20", "36"]}
            >
            <Box>
                <Text
                  fontWeight="500"
                  fontSize={["xl","2l","2xl", "2xl", "4xl"]}
                  color="gray.50"
                >
                    5 Continentes,<br /> infinitas possibilidades.
                </Text>
                <Text
                  fontWeight="400"
                  color="gray.100"
                  mt="5"
                  fontSize={["0.8rem", "xl"]}
                  maxW={["100%", "100%", "100%", "550px"]}
                  >
                  Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                </Text>
            </Box>
           <Image
              src="./images/Airplane.svg"
              w={["300px", "300px", "300px", "400px"]}
              ml="8"
              transform="translateY(62px)"
              display={["none", "none", "block"]}
            />
          </Flex>
        </Flex>
    )
}