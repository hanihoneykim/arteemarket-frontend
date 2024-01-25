import { Alert, AlertIcon, AlertTitle, Box, Flex, Grid, Spinner, Stack, Text } from "@chakra-ui/react";
import MypageCategory from "../components/MypageCategory";
import { useQuery } from "@tanstack/react-query";
import { IFundingItem, IFundingResponse } from "../types";
import { getMyFundingItems } from "../api";
import HomeFunding from "../components/HomeFunding";

export default function MyFunding() {
    const { isLoading, data } = useQuery<IFundingResponse>(["MyFundingList"], getMyFundingItems);
    const myfunding = data?.results || [];

    if (isLoading) {
        return (
            <Flex w="100%" h="80vh" justifyContent={"center"} alignItems={"center"}>
                <Stack direction='row' spacing={4}>
                    <Spinner size='xl' />
                </Stack>
            </Flex>
        )
    }

    console.log(data)
    if (data?.results.length === 0) {
        return (
            <>
                <MypageCategory />
                <Box p={16} h="500px" display={"flex"} alignItems={"center"} justifyContent={"center"}>
                    <Text color="orange" fontWeight={"bold"} fontSize="md">등록한 펀딩 목록이 없습니다.</Text>
                </Box>
            </>
        );
    }

    return (
        <>
        <MypageCategory />

        <Box mb={40} pt={16} pl={20} pr={20} w="100%" h="300px">
            <Grid gap={10} gridAutoFlow={"row"} templateColumns={"repeat(4,1fr)"}>
                {myfunding.map((funding: IFundingItem, index: number) => (
                    <HomeFunding id={funding.id} image={funding.image} current_percentage={funding.current_percentage} title={funding.title} />
                ))}
            </Grid>
        </Box>
        </>
    )
}