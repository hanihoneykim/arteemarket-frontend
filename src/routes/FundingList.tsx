import { Alert, AlertIcon, AlertTitle, Box, Flex, Grid, Spinner, Stack, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query"
import FundingCategory from "../components/FundingCategory";
import HomeFunding from "../components/HomeFunding";
import { IFundingItem } from "../types";
import { getFundingItems } from "../api";

export default function FundingList() {
    const { isLoading, data } = useQuery<IFundingItem[]>(["FundingList"], getFundingItems);


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
        <FundingCategory />

        <Box mb={40} pt={16} pl={20} pr={20} w="100%" h="100%">
            <Grid gap={10} gridAutoFlow={"row"} templateColumns={"repeat(4,1fr)"}>
                {data && data.map((funding, index) => (
                    <HomeFunding id={funding.id} image={funding.image} current_percentage={funding.current_percentage} title={funding.title} />
                ))}
            </Grid>
        </Box>
        </>
    )
}