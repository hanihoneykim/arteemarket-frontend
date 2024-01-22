import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Divider, HStack, Heading, Image, Stack, StackDivider, Text, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { INotice } from "../types";
import { useQuery } from "@tanstack/react-query";
import { getNoticeDetail } from "../api";
import React from "react";

export default function NoticeDetail() {
    const { noticePk } = useParams();
    const { isLoading, data } = useQuery<INotice>([`Notice`, noticePk], getNoticeDetail)
    console.log("NoticePk:", noticePk);
    return (
        <>
        <Box mb={40} py={20} px={28}>
            <Card>
                <CardHeader>
                    <Heading size='xs' textTransform='uppercase' color="orange" my={2}>
                            공지사항
                    </Heading>
                    <Heading size='md' mt={3}>{data?.title}</Heading>
                </CardHeader>
                <Divider color="rgba(0,0,0,0.1)"/>
                <CardBody>
                    <Box>
                        <Text pt='2' fontSize='sm'>
                        {data?.content}
                        </Text>
                    </Box>
                </CardBody>
            </Card>
        </Box>
        
        </>
    )
}
