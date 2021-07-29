import { Flex, Grid, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io"
import { useRouter } from "next/router";

export function Header() {
    const { asPath } = useRouter()
    const homePage = asPath === "/"
    return (
        <Flex
            as="header"
            w="100%"
            h={["50px", "100px"]}
            mx="auto"
            align="center"
            justify="center"
            px="1rem"

        >
            <Grid
                h="100%"
                mx="auto"
                w="100%"
                maxW="1160px"
                alignItems="center"
                justifyContent="center"
                templateColumns="repeat(3, 1fr)"
            >
                {!homePage && (
                    <Link href="/" passHref>
                        <Icon as={IoIosArrowBack} fontSize={["16px", "32px"]} color="gray.400"/>
                    </Link>
                )}
                <Image
                  src="/images/Logo.svg"
                  w={["81px", "184px"]}
                  gridColumn="2"
                  justifySelf="center" 
                />
            </Grid>
        </Flex>
    )
}