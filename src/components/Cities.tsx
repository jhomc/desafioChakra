import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";

export function Cities() {
    return(
        <>
            <Heading fontWeight="600" color="gray.400" fontSize={["xl", "2xl", "4xl"]} mb="10">Cidades 100+</Heading>
            <Grid
                templateColumns={["1fr","1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
                gap ={["20px", "40px"]}
                alignItems="center"
                justifyContent="center"
                px={["30px", "0"]}
            >
                <Box borderRadius="4px" overflow="hidden">
                    <Image src="/images/Londres.jpg" h="170px" w="100%"/>
                    <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.400" borderTop="0">
                        <Flex direction="column">
                        <Heading fontSize="xl" fontWeight="500">Londres</Heading>
                        <Text mt="3" fontSize="md" color="gray.400" fontWeight="500">Reino Unido</Text>
                        </Flex>
                    <Image src="/images/BandeiraUK.png" w="30px" h="30px" borderRadius="50%" objectFit="cover"/>
                    </Flex>
                </Box>

                <Box borderRadius="4px" overflow="hidden">
                    <Image src="/images/Paris.jpg" h="170px" w="100%"/>
                    <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.400" borderTop="0">
                        <Flex direction="column">
                        <Heading fontSize="xl" fontWeight="500">París</Heading>
                        <Text mt="3" fontSize="md" color="gray.400" fontWeight="500">França</Text>
                        </Flex>
                    <Image src="/images/BandeiraFR.jpg" w="30px" h="30px" borderRadius="50%" objectFit="cover"/>
                    </Flex>
                </Box>

                <Box borderRadius="4px" overflow="hidden">
                    <Image src="/images/Roma.jpg" h="170px" w="100%"/>
                    <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.400" borderTop="0">
                        <Flex direction="column">
                        <Heading fontSize="xl" fontWeight="500">Roma</Heading>
                        <Text mt="3" fontSize="md" color="gray.400" fontWeight="500">Reino Unido</Text>
                        </Flex>
                    <Image src="/images/BandeiraIT.png" w="30px" h="30px" borderRadius="50%" objectFit="cover"/>
                    </Flex>
                </Box>

                <Box borderRadius="4px" overflow="hidden">
                    <Image src="/images/Praga.jpg" h="170px" w="100%"/>
                    <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.400" borderTop="0">
                        <Flex direction="column">
                        <Heading fontSize="xl" fontWeight="500">Praga</Heading>
                        <Text mt="3" fontSize="md" color="gray.400" fontWeight="500">Republica Tcheca</Text>
                        </Flex>
                    <Image src="/images/BandeiraRC.png" w="30px" h="30px" borderRadius="50%" objectFit="cover"/>
                    </Flex>
                </Box>

                <Box borderRadius="4px" overflow="hidden">
                    <Image src="/images/amsterda.jpg" h="170px" w="100%"/>
                    <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.400" borderTop="0">
                        <Flex direction="column">
                        <Heading fontSize="xl" fontWeight="500">Amsterdã</Heading>
                        <Text mt="3" fontSize="md" color="gray.400" fontWeight="500">Holanda</Text>
                        </Flex>
                    <Image src="/images/BandeiraHL.png" w="30px" h="30px" borderRadius="50%" objectFit="cover"/>
                    </Flex>
                </Box>
            </Grid>
        </>
    );
}