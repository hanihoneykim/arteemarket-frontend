import { Box, Divider, HStack, Text, VStack } from "@chakra-ui/react";

export default function Footer(){
    return(
        <>
        <Divider />
        <Box bgColor={"orange.50"} w="100%" h="200px" display={"flex"} justifyContent={"center"}>
            <VStack w="80%" alignItems={"flex-start"} mt={10}>
                <HStack>
                    <Text fontSize={16} fontWeight={400} color="rgba(0, 0, 0, 0.6)">주식회사 : 아티마켓 </Text>
                    <Text fontSize={20} fontWeight={400} color="rgba(0, 0, 0, 0.3)" ml={4}> | </Text>
                    <Text fontSize={16} fontWeight={400} color="rgba(0, 0, 0, 0.6)" ml={4}>대표 : 김하은 </Text>
                    <Text fontSize={20} fontWeight={400} color="rgba(0, 0, 0, 0.3)" ml={4}> | </Text>
                    <Text fontSize={16} fontWeight={400} color="rgba(0, 0, 0, 0.6)" ml={4}>사업자 등록번호 : 723-02-20785 </Text>
                </HStack>
                <HStack>
                    <Text fontSize={16} fontWeight={400} color="rgba(0, 0, 0, 0.6)">TEL : 070-3479-8203 </Text>
                    <Text fontSize={20} fontWeight={400} color="rgba(0, 0, 0, 0.3)" ml={4}> | </Text>
                    <Text fontSize={16} fontWeight={400} color="rgba(0, 0, 0, 0.6)" ml={4}>통신판매업신고 : 2024-서울종로-0121 </Text>
                    <Text fontSize={20} fontWeight={400} color="rgba(0, 0, 0, 0.3)" ml={4}> | </Text>
                    <Text fontSize={16} fontWeight={400} color="rgba(0, 0, 0, 0.6)" ml={4}>E-MAIL : artee@artee.co.kr </Text>
                </HStack>
                <Text fontSize={16} fontWeight={400} color="rgba(0, 0, 0, 0.6)" mt={1}>주소 : 서울 종로구 삼청로 30 소격동 165-10</Text>
            </VStack>
        </Box>
        </>
    )
}