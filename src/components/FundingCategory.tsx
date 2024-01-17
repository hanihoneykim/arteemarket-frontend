import { useState } from "react";
import { Box, Button, Divider, HStack, Input, Text, VStack } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

export default function Category() {
    const navigate = useNavigate();
    const [searchKeyword, setSearchKeyword] = useState("");

    const handleSearch = () => {
        // URLSearchParams를 직접 생성하여 search_keyword 파라미터를 추가 또는 삭제
        const searchParams = new URLSearchParams(window.location.search);
        console.log("searchKeyword:", searchKeyword)
    
        // searchKeyword가 있는 경우에만 search_keyword 파라미터를 추가
        if (searchKeyword) {
            // 백엔드에서 원하는 형식으로 파라미터 추가
            searchParams.set("search_keyword", encodeURIComponent(searchKeyword));
        }
    
        // 새로운 URL 생성
        const newPath = `/funding-items/search/${searchParams.toString()}`;
        navigate(newPath);
        console.log("newPath:", newPath);
    };
    


    return (
        <>
            <VStack w="100%" display={"flex"} justifyContent={"center"}>
                <HStack w="80%" h={16} alignItems={"center"} mt={2}>
                    <Text fontSize={16} fontWeight={600}>펀딩</Text>
                    <Text fontSize={16} fontWeight={600} ml={2}>Categories ✨</Text>
                    <Link to="/funding-items/idol">
                        <Text color="rgba(0, 0, 0, 0.5)" fontSize={14} fontWeight={600} ml={6} >아이돌</Text>
                    </Link>
                    <Link to="/funding-items/stationery">
                        <Text color="rgba(0, 0, 0, 0.5)" fontSize={14} fontWeight={600} ml={6} >문구</Text>
                    </Link>
                    <Link to="/funding-items/accessory">
                        <Text color="rgba(0, 0, 0, 0.5)" fontSize={14} fontWeight={600} ml={6} >악세사리</Text>
                    </Link>
                    <Link to="/funding-items/food">
                        <Text color="rgba(0, 0, 0, 0.5)" fontSize={14} fontWeight={600} ml={6} >푸드</Text>
                    </Link>
                    <Link to="/funding-items/interior">
                        <Text color="rgba(0, 0, 0, 0.5)" fontSize={14} fontWeight={600} ml={6} >인테리어</Text>
                    </Link>
                    <Link to="/funding-items/pet">
                        <Text color="rgba(0, 0, 0, 0.5)" fontSize={14} fontWeight={600} ml={6} >반려동물</Text>
                    </Link>
                    <Link to="/funding-items/etc">
                        <Text color="rgba(0, 0, 0, 0.5)" fontSize={14} fontWeight={600} ml={6} >기타</Text>
                    </Link>

                    {/* 여기 */}
                    <Input
                        id="search-input"
                        placeholder="검색어를 입력하세요"
                        value={searchKeyword}
                        onChange={(e) => setSearchKeyword(e.target.value)}
                        w={48}
                        ml={10}
                        fontSize={14}
                    />
                    <Button colorScheme="gray" onClick={handleSearch} fontSize={14}>
                        검색
                    </Button>
                    <Link to="/funding-items/upload">
                        <Button colorScheme="gray" ml={8} fontSize={14}>
                            새로운 펀딩 만들기
                        </Button>
                    </Link>
                </HStack>


                <Divider />
            </VStack>
        </>
    );
}
