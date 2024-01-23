import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, HStack, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { IFundingItem } from "../types";
import { useQuery } from "@tanstack/react-query";
import { getFundingDetail } from "../api";
import React from "react";
import { Link } from "react-router-dom";


export default function FundingDetail() {
    const { fundingPk } = useParams();
    const { isLoading, data } = useQuery<IFundingItem>([`funding`, fundingPk], getFundingDetail)
    console.log("fundingPk:", fundingPk);
    return (
        <Box mb={40} w="100%" h="100%" px={24} my={20}>
            <HStack w="100%" h="100%" display={"flex"}>
                <VStack id="mainBox" w="60%" h="100%" justifyContent={"flex-start"} align={"start"} position="relative">
                    <Image objectFit={"cover"} w={"100%"} h={"500px"} src={data?.image} />
                    <Text mt={10} fontSize={16} fontWeight={"500"} mb={56}>
                        {data?.content.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </Text>
                    
                </VStack>
                <VStack id="sideBox" w="32%" h="300px" align={"start"} position="absolute" right={50} top={200}>
                    <Box w="100%" h="100%">
                        <Text fontSize={14} fontWeight={"500"} mb={4}>펀딩 ⟫ {data?.category}</Text>
                        <Divider />

                        <Text fontSize={20} fontWeight={"900"} my={6}>{data?.title}</Text>
                        <HStack>
                            <Image w={"30px"} h={"30px"} borderRadius={50} src={data?.creator_profile_image || "https://artee-s3-bucket.s3.ap-northeast-2.amazonaws.com/usericon.png"} />
                            <Text fontSize="14" fontWeight={"500"} mt={1} color="gray">{data?.creator_nickname}</Text>
                        </HStack>
                        <HStack mt={6}>
                            <Text color="orange" fontSize={26} fontWeight={"900"}>{data?.current_percentage}</Text>
                            <Text color="orange" fontSize={16} fontWeight={"600"}>달성</Text>
                        </HStack>
                        <HStack mt={2}>
                            <Text fontSize={26} fontWeight={"900"}>{data?.current_amount}</Text>
                            <Text fontSize={16} fontWeight={"600"}>원 달성</Text>
                        </HStack>
                        
                        <Divider mt={8}/>
                        
                        <HStack mt={6}>
                            <Text fontSize="14" fontWeight={"800"} mr={6}>목표 금액</Text>
                            <Text fontSize="14" fontWeight={"500"}>{data?.goal_amount} 원</Text>
                        </HStack>
                        <HStack mt={2}>
                            <Text fontSize="14" fontWeight={"800"} mr={6}>펀딩 마감일</Text>
                            <Text fontSize="14" fontWeight={"500"}>{data?.end_date}</Text>
                        </HStack>
                        
                        <Card maxW='100%' mt={8}>
                            <CardBody>
                                <Text color="orange" fontSize="14" fontWeight={"600"}>가격</Text>
                                <Text fontSize="14" fontWeight={"600"} mt={2}>{data?.price} 원</Text>
                                <Text color="orange" fontSize="14" fontWeight={"600"} mt={4}>은행명</Text>
                                <Text fontSize="14" fontWeight={"600"} mt={2}>{data?.bank_name}</Text>
                                <Text color="orange" fontSize="14" fontWeight={"600"} mt={4}>계좌 번호</Text>
                                <Text fontSize="14" fontWeight={"600"} mt={2}>{data?.bank_account_number}</Text>
                                <Text color="orange" fontSize="14" fontWeight={"600"} mt={4}>받는 분</Text>
                                <Text fontSize="14" fontWeight={"600"} mt={2}>{data?.bank_account_owner}</Text>
                            </CardBody>
                            <Divider color="rgba(0,0,0,0.1)" />
                            <CardFooter>
                                <Link to={`/funding-items/${fundingPk}/participants`} >
                                    <Button w="420px" h="14" variant='solid' colorScheme='orange' fontWeight={"900"} fontSize={"18"}>
                                        펀딩하기
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    </Box>
                </VStack>
            </HStack>
        </Box>

    )
}
