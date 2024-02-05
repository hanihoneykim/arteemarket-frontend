import Cookie from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
    Avatar,
    Box,
    Button,
    HStack,
    IconButton,
    Image,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    ToastId,
    useColorMode,
    useColorModeValue,
    useDisclosure,
    useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useUser from "../lib/useUser";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { logOut } from "../api";


export default function Header(){
    const { userLoading, isLoggedIn, user } = useUser();
    const toast = useToast();
    const queryClient = useQueryClient();
    const toastId = useRef<ToastId>();
    const navigate = useNavigate();
    const [isUserLoggedIn, setUserLoggedIn] = useState<boolean>(false);
    useEffect(() => {
        // localStorage에서 로그인 상태 확인
        const storedUserLoggedIn = localStorage.getItem("isUserLoggedIn");
        setUserLoggedIn(Boolean(storedUserLoggedIn));
    }, []);
    const mutation = useMutation(logOut, {
        onMutate: () => {
            toastId.current = toast({
                title: "로그아웃 중",
                description: "다음에 다시 방문해주세요",
                status: "loading",
                duration: 10000,
                position: "bottom-right",
            });
        },
        onSuccess: () => {
            if (toastId.current) {
                Cookie.remove("token");
                localStorage.removeItem("isUserLoggedIn");
                queryClient.refetchQueries(["me"]);
                toast.update(toastId.current, {
                    status: "success",
                    title: "로그아웃 완료",
                    description: "다음에 다시 만나요!",
                });
                navigate("/");
            }
        },
    });
    const onLogOut = async () => {
        mutation.mutate();
    };
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
                {!userLoading ? (
                    !isLoggedIn ? (
                        <>
                        <Link to={"/login"}>
                            <Text fontSize={20}>로그인</Text>
                        </Link>
                        <Link to={"/signup"}>
                            <Text ml={10} fontSize={20}>회원가입</Text>
                        </Link>
                        </>
                    ) : (
                        <Menu>
                            <MenuButton>
                                <HStack spacing={4}>
                                    <Avatar src="https://artee-s3-bucket.s3.ap-northeast-2.amazonaws.com/paint_icon_colored_orange_illustration.jpg" size={"md"} />
                                    <Text fontSize={16} fontWeight={600}>{user?.nickname}</Text>
                                </HStack>
                            </MenuButton>
                            <MenuList>
                                <Link to={"/mypage"}>
                                    <MenuItem>마이페이지</MenuItem>
                                </Link>
                                <MenuItem onClick={onLogOut}>로그아웃</MenuItem>
                            </MenuList>
                        </Menu>
                    )
                ) : null}
            </HStack>

        </HStack>
        
    )
}