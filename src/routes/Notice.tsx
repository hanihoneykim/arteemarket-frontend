import { Alert, AlertIcon, AlertTitle, Box, Button, Flex, Heading, Spinner, Stack, Text, VStack, Grid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query"
import NoticeList from "../components/NoticeList";
import { INoticeResponse } from "../types";
import { getNotice } from "../api";

export default function Notice(){
    const { isLoading, data } = useQuery<INoticeResponse>(["Notices"], getNotice)
    const notices = data?.results || [];
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
    <Box mb={56} pt={16} pl={20} pr={20} w="100%" h="100%">
        <Grid gap={10} gridAutoFlow={"row"} templateColumns={"repeat(4,1fr)"}>
            {notices.map((notice, index) => (
                <NoticeList id={notice.id} title={notice.title} content={notice.content}/>
            ))}
        </Grid>
    </Box>
    )
}