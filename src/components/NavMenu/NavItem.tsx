import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface NavItemProps {
    icon: string;
    text: string;
}

export function NavItem({icon, text}: NavItemProps) {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return(
        <Flex direction={["row", "column"]} align="center" justify="center">
            { isWideVersion ? <Image src={`./icons/${icon}.svg`} h="85px" w="85px" mb="6" /> : <Text color="yellow.400" fontSize="4xl" mr="2">•</Text> }
            <Text fontWeight="600" color="gray.400" fontSize={["md", "xl", "2xl"]}>{text}</Text>
        </Flex>
    )
}