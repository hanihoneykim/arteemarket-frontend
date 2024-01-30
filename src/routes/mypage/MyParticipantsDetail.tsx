import { Alert, AlertIcon, AlertTitle, Box, Card, CardHeader, Divider, Flex, FormLabel, Grid, Spinner, Stack, Text, VStack } from "@chakra-ui/react";
import MypageCategory from "../../components/MypageCategory";
import { useQuery } from "@tanstack/react-query";
import { IMyParticipant, IMyParticipantsResponse, IParticipant } from "../../types";
import { getParticipantDetail } from "../../api";
import MyParticipantsFunding from "../../components/MyParticipantsFunding";
import { Link, useParams } from "react-router-dom";


export default function MyParticipantDetail() {
    const { participantPk } = useParams();
    const { isLoading, data } = useQuery<IMyParticipant>(["MyParticipantDetail", participantPk], getParticipantDetail);

    if (isLoading) {
        return (
            <Flex w="100%" h="80vh" justifyContent={"center"} alignItems={"center"}>
                <Stack direction='row' spacing={4}>
                    <Spinner size='xl' />
                </Stack>
            </Flex>
        )
    }


    return (
        <>
        <MypageCategory />

        <Box pb={40} pt={16} w="100%" display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <VStack spacing={6} mt={5} w="70%" h="100%">
                <Text color="orange" fontSize={20} fontWeight={600}>신청 정보</Text>
                <Divider />
                    <FormLabel mt={10}>입금자 성함</FormLabel>
                        <Card align='center' w="80%" bgColor={"rgba(0,0,0,0.2)"}>
                            <CardHeader>
                                <Text size='sm'>{data?.payment_name}</Text>
                            </CardHeader>
                        </Card>
                    <FormLabel>성함</FormLabel>
                    <Card align='center'w="80%" bgColor={"rgba(0,0,0,0.2)"}>
                        <CardHeader>
                            <Text size='sm'>{data?.name}</Text>
                        </CardHeader>
                    </Card>
                    <FormLabel>핸드폰 번호</FormLabel>
                    <Card align='center' w="80%" bgColor={"rgba(0,0,0,0.2)"}>
                        <CardHeader>
                            <Text size='sm'>{data?.phone_number}</Text>
                        </CardHeader>
                    </Card>
                    <FormLabel>배송 받으실 분 성함</FormLabel>
                    <Card align='center' w="80%" bgColor={"rgba(0,0,0,0.2)"}>
                        <CardHeader>
                            <Text size='sm'>{data?.shipping_name}</Text>
                        </CardHeader>
                    </Card>
                    <FormLabel>배송 받으실 분 핸드폰 번호</FormLabel>
                    <Card align='center' w="80%" bgColor={"rgba(0,0,0,0.2)"}>
                        <CardHeader>
                            <Text size='sm'>{data?.shipping_phone_number}</Text>
                        </CardHeader>
                    </Card>
                    <FormLabel>배송 받으실 주소</FormLabel>
                    <Card align='center' w="80%" bgColor={"rgba(0,0,0,0.2)"}>
                        <CardHeader>
                            <Text size='sm'>{data?.shipping_address1}</Text>
                        </CardHeader>
                    </Card>
                    <FormLabel>배송 받으실 주소 우편번호</FormLabel>
                    <Card align='center' w="80%" bgColor={"rgba(0,0,0,0.2)"}>
                        <CardHeader>
                            <Text size='sm'>{data?.shipping_zipcode}</Text>
                        </CardHeader>
                    </Card>
                    <Divider my={8}/>
                    <FormLabel>펀딩 상품 바로가기 (클릭)</FormLabel>
                    <Card align='center' w="80%" bgColor={"rgba(0,0,0,0.2)"}>
                        <Link to={`/funding-items/${data?.funding_item.id}`}>
                            <CardHeader>
                                <Text size='sm'>{data?.funding_item.title}</Text>
                            </CardHeader>
                        </Link>
                    </Card>

            </VStack>
        </Box>
        </>
    )
}