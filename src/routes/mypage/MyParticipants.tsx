import { Alert, AlertIcon, AlertTitle, Box, Flex, Grid, Spinner, Stack, Text } from "@chakra-ui/react";
import MypageCategory from "../../components/MypageCategory";
import { useQuery } from "@tanstack/react-query";
import { IMyParticipant, IMyParticipantsResponse, IParticipant } from "../../types";
import { getMyParticipants } from "../../api";
import MyParticipantsFunding from "../../components/MyParticipantsFunding";

export default function MyParticipants() {
    const { isLoading, data } = useQuery<IMyParticipantsResponse>(["MyParticipantsList"], getMyParticipants);
    const myparticipants = data?.results || [];

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
                    <Text color="orange" fontWeight={"bold"} fontSize="md">등록한 펀딩 신청 목록이 없습니다.</Text>
                </Box>
            </>
        );
    }

    return (
        <>
        <MypageCategory />

        <Box mb={64} pt={12} pl={20} pr={20} w="100%" h="300px">
            <Text ml={4} fontWeight={"bold"} fontSize="lg" mb={14}>펀딩 신청목록</Text>
            <Grid gap={10} gridAutoFlow={"row"} templateColumns={"repeat(4,1fr)"}>
                {myparticipants.map((myparticipants: IMyParticipant, index: number) => (
                    <MyParticipantsFunding id={myparticipants.id} image={myparticipants.funding_item.image} current_percentage={myparticipants.funding_item.current_percentage} title={myparticipants.funding_item.title} />
                ))}
            </Grid>
        </Box>
        </>
    )
}