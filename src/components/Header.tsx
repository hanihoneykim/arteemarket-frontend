import { HiNewspaper } from "react-icons/hi"
import { FaMoon, FaSun } from "react-icons/fa";
import {
    Box,
    Button,
    HStack,
    IconButton,
    Image,
    Text,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";


export default function Header(){

    return (
        <HStack justifyContent={"space-between"} p={6} px={20} borderBottomWidth={1}>
            <HStack ml={10} justifyContent={"flex-start"} spacing={8}>
                    <Link to={"/"}>
                        <HStack>
                            <Image w={24} h={20} src="https://artee-s3-bucket.s3.ap-northeast-2.amazonaws.com/artee_logo.jpg" />
                        </HStack>
                    </Link>
                    <HStack px={10}>
                        <Link to={"/funding-items"}>
                            <Text fontSize={22} fontWeight={"bold"}>펀딩</Text>
                        </Link>
                        <Link to={"/sale-items"}>
                            <Text ml={10} fontSize={22} fontWeight={"bold"}>프리오더</Text>
                        </Link>
                        <Link to={"/notices"}>
                            <Text ml={10} fontSize={22} fontWeight={"bold"}>공지사항</Text>
                        </Link>
                        <Link to={"/events"}>
                            <Text ml={10} fontSize={22} fontWeight={"bold"}>이벤트</Text>
                        </Link>
                    </HStack>
            </HStack>
            <HStack justifyContent={"flex-end"} mr={10} >
                <Link to={"/login"}>
                    <Text fontSize={20}>로그인</Text>
                </Link>
                <Link to={"/signup"}>
                    <Text ml={10} fontSize={20}>회원가입</Text>
                </Link>
            </HStack>

        </HStack>
        
    )
}