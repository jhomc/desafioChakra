import { Grid, GridItem } from "@chakra-ui/react";
import { NavItem } from "./NavItem";

export function NavMenu() {
    return(
        <Grid
            templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5,1fr)"]}
            w="100%"
            justifyContent="space-between"
            align="center"
            mt={["10", "32"]}
            mx="auto"
            maxW="1160px"
            gap={[1, 5]}
        >
            <GridItem>
                <NavItem icon="cocktail" text="vida noturna"/>
            </GridItem>
            <GridItem>
                <NavItem icon="surf" text="praia"/>
            </GridItem>
            <GridItem>
                <NavItem icon="building" text="moderno"/>
            </GridItem>
            <GridItem>
                <NavItem icon="museum" text="clássico"/>
            </GridItem>
            <GridItem colSpan={[2, 2, 2, 1]}>
                <NavItem icon="earth" text="e mais..."/>
            </GridItem>
        </Grid>
    )
}