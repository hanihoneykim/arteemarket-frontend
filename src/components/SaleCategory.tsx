import { useState } from "react";
import { Box, Button, Divider, HStack, Input, Text, VStack } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

export default function SaleCategory() {
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
        const newPath = `/sale-items/search/${searchParams.toString()}`;
        navigate(newPath);
        console.log("newPath:", newPath);
    };
    


    return (
        <>
            <VStack w="100%" display={"flex"} justifyContent={"center"}>
                <HStack w="80%" h={16} alignItems={"center"} mt={2}>
                    <Text fontSize={18} fontWeight={600}>펀딩</Text>
                    <Text fontSize={18} fontWeight={600} ml={2}>Categories ✨</Text>
                    <Link to="/sale-items/idol">
                        <Text color="rgba(0, 0, 0, 0.5)" fontSize={16} fontWeight={600} ml={8} >아이돌</Text>
                    </Link>
                    <Link to="/sale-items/stationery">
                        <Text color="rgba(0, 0, 0, 0.5)" fontSize={16} fontWeight={600} ml={8} >문구</Text>
                    </Link>
                    <Link to="/sale-items/accessory">
                        <Text color="rgba(0, 0, 0, 0.5)" fontSize={16} fontWeight={600} ml={8} >악세사리</Text>
                    </Link>
                    <Link to="/sale-items/food">
                        <Text color="rgba(0, 0, 0, 0.5)" fontSize={16} fontWeight={600} ml={8} >푸드</Text>
                    </Link>
                    <Link to="/sale-items/interior">
                        <Text color="rgba(0, 0, 0, 0.5)" fontSize={16} fontWeight={600} ml={8} >인테리어</Text>
                    </Link>
                    <Link to="/sale-items/pet">
                        <Text color="rgba(0, 0, 0, 0.5)" fontSize={16} fontWeight={600} ml={8} >반려동물</Text>
                    </Link>
                    <Link to="/sale-items/etc">
                        <Text color="rgba(0, 0, 0, 0.5)" fontSize={16} fontWeight={600} ml={8} >기타</Text>
                    </Link>

                    {/* 여기 */}
                    <Input
                        id="search-input"
                        placeholder="검색어를 입력하세요"
                        value={searchKeyword}
                        onChange={(e) => setSearchKeyword(e.target.value)}
                        w={56}
                        ml={10}
                    />
                    <Button colorScheme="gray" onClick={handleSearch}>
                        검색
                    </Button>
                        <Button colorScheme="gray" ml={8}>
                            새로운 프리오더 만들기
                        </Button>
                </HStack>


                <Divider />
            </VStack>
        </>
    );
}
