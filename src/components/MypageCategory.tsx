import { useState } from "react";
import { Box, Button, Divider, HStack, Input, Text, VStack } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

export default function MypageCategory() {
    return (
        <>
            <VStack w="100%" display={"flex"} justifyContent={"center"}>
                <HStack w="80%" h={16} alignItems={"center"} mt={2}>
                    <Text fontSize={16} fontWeight={600} ml={2}>구매/판매 목록 ✨</Text>
                    <Link to="/my-funding">
                        <Text color="rgba(0, 0, 0, 0.5)" fontSize={14} fontWeight={600} ml={6} >나의 펀딩</Text>
                    </Link>
                    <Link to="/my-sale">
                        <Text color="rgba(0, 0, 0, 0.5)" fontSize={14} fontWeight={600} ml={6} >나의 프리오더</Text>
                    </Link>
                    <Text color="rgba(0, 0, 0, 0.5)" fontSize={14} fontWeight={600} ml={6} >/</Text>
                    <Link to="/my-participants">
                        <Text color="rgba(0, 0, 0, 0.5)" fontSize={14} fontWeight={600} ml={6} >펀딩 신청목록</Text>
                    </Link>
                    <Link to="/my-purchases">
                        <Text color="rgba(0, 0, 0, 0.5)" fontSize={14} fontWeight={600} ml={6} >프리오더 구매목록</Text>
                    </Link>
                </HStack>
                <Divider />
            </VStack>
        </>
    );
}
