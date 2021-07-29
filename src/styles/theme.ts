import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        gray: {
            400: "#47585B",
            100: "#DADADA",
            50:"#F5F8FA"
        },
        yellow: {
            400: "#FFBA08"
        }
    },
    styles: {
        global: {
            body: {
                color: 'gray.450'
            }
        }
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins'
    }
})