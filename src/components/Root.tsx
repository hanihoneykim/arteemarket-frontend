import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


export default function Root(){
    return (
    <Box>
        <Header />
        <Outlet/>
        <Footer />
        <ReactQueryDevtools />
    </Box>
    )
}