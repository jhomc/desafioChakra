import { Flex, Heading, Text, Popover, PopoverTrigger, Icon, PopoverArrow, PopoverCloseButton, PopoverContent, PopoverBody } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri"

export function Infos() {
    return(
        <Flex align="center" justify="space-between">
            <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]}>
                <Heading fontSize={["2xl", "5xl"]} fontWeight="600" color="yellow.400">50</Heading>
                <Text fontSize={["xl", "2xl"]} fontWeight="600" color="gray.400">países</Text>
            </Flex>

            <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]}>
                <Heading fontSize={["2xl", "5xl"]} fontWeight="600" color="yellow.400">60</Heading>
                <Text fontSize={["xl", "2xl"]} fontWeight="600" color="gray.400">línguas</Text>
            </Flex>

            <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]}>
                <Heading fontSize={["2xl", "5xl"]} fontWeight="600" color="yellow.400">27</Heading>
                <Text fontSize={["xl", "2xl"]} fontWeight="600" color="gray.400">
                    cidades 100+
                    <Popover>
                        <PopoverTrigger>
                            <span>
                                <Icon as={RiInformationLine}/>
                            </span>
                        </PopoverTrigger>
                        <PopoverContent bg="gray.400" color="yellow.400">
                            <PopoverArrow bg="gray.400"/>
                            <PopoverCloseButton />
                            <PopoverBody fontWidth="400" fontSize="lg" >
                                París, Roma, Suécia, Suíça , Portugal
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                </Text>
            </Flex>
        </Flex>
    )
}