import { Alert, AlertIcon, AlertTitle, Box, Flex, Grid, Spinner, Stack, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query"
import SaleCategory from "../components/SaleCategory";
import HomeSale from "../components/HomeSale";
import { ISaleItem } from "../types";
import { getSaleItems } from "../api";

export default function SaleList() {
    const { isLoading, data } = useQuery<ISaleItem[]>(["SaleList"], getSaleItems);


    if (isLoading) {
        return (
            <Flex w="100%" h="80vh" justifyContent={"center"} alignItems={"center"}>
                <Stack direction='row' spacing={4}>
                    <Spinner size='xl' />
                </Stack>
            </Flex>
        )
    }
    
    if (!data) {
        return(
            <Alert status='error'>
                <AlertIcon />
                <AlertTitle>잘못된 경로입니다.</AlertTitle>
            </Alert>
        ) // 데이터가 없을 때 표시할 UI
    }

    return (
        <>
        <SaleCategory />

        <Box mb={40} pt={16} pl={20} pr={20} w="100%" h="100%">
            <Grid gap={10} gridAutoFlow={"row"} templateColumns={"repeat(4,1fr)"}>
                {data && data.map((sale, index) => (
                    <HomeSale id={sale.id} image={sale.image} title={sale.title} price={sale.price} />
                ))}
            </Grid>
        </Box>
        </>
    )
}