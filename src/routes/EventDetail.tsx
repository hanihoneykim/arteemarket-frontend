import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Divider, HStack, Heading, Image, Stack, StackDivider, Text, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { IEvent } from "../types";
import { useQuery } from "@tanstack/react-query";
import { getEventDetail } from "../api";
import React from "react";

export default function EventDetail() {
    const { eventPk } = useParams();
    const { isLoading, data } = useQuery<IEvent>([`event`, eventPk], getEventDetail)
    console.log("EventPk:", eventPk);
    return (
        <>
        <Box mb={40} py={20} px={28}>
            <Card>
                <CardHeader>
                    <Heading size='xs' textTransform='uppercase' color="orange" my={2}>
                    event 🎉
                    </Heading>
                    <Heading size='md' mt={3}>{data?.title}</Heading>
                </CardHeader>
                <Divider color="rgba(0,0,0,0.1)"/>
                <CardBody>
                    <Image
                    src={data?.image}
                    w="100%"
                    borderRadius='lg'
                    />
                    <Box mt={10}>
                        <Text pt='2' fontSize='md'>
                        {data?.content}
                        </Text>
                    </Box>
                </CardBody>
            </Card>
        </Box>
        
        </>
    )
}
