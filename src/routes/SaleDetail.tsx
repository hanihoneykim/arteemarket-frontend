import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, HStack, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { ISaleItem } from "../types";
import { useQuery } from "@tanstack/react-query";
import { getSaleDetail } from "../api";
import React from "react";
import { Link } from "react-router-dom";


export default function SaleDetail() {
    const { salePk } = useParams();
    const { isLoading, data } = useQuery<ISaleItem>([`sale`, salePk], getSaleDetail)
    console.log("SalePk:", salePk);
    return (
        <Box mb={40} w="100%" h="100%" px={24} my={20}>
            <HStack w="100%" h="100%" display={"flex"}>
                <VStack id="mainBox" w="60%" h="100%" justifyContent={"flex-start"} align={"start"} position="relative">
                    <Image objectFit={"cover"} w={"100%"} h={"700px"} src={data?.image} />
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
                        <Text fontSize={14} fontWeight={"500"} mb={4}>프리오더 ⟫ {data?.category_name}</Text>
                        <Divider />

                        <Text fontSize={20} fontWeight={"900"} my={6}>{data?.title}</Text>
                        <HStack>
                            <Image w={"30px"} h={"30px"} borderRadius={50} src="https://artee-s3-bucket.s3.ap-northeast-2.amazonaws.com/paint_icon_colored_orange_illustration.jpg" />
                            <Text fontSize="14" fontWeight={"500"} mt={1} color="gray">{data?.creator_nickname}</Text>
                        </HStack>
                        
                        <Divider mt={8}/>
                        
                        
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
                                <Link to={`/sale-items/${salePk}/purchases`} >
                                        <Button w="420px" h="14" variant='solid' colorScheme='orange' fontWeight={"900"} fontSize={"18"}>
                                            구입하기
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
