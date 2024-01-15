import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import "@fontsource/roboto";

const config: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: false,
};

const theme = extendTheme({
    config,
    fonts: {
        body: `'Roboto', san-serif`,
    },
    components: {
        Drawer: {
        variants: {
            alwaysOpen: {
            parts: ["dialog", "dialogContainer"],
            dialog: {
                pointerEvents: "auto",
            },
            dialogContainer: {
                pointerEvents: "none",
            },
            },
        },
        },
    },
});

export default theme;