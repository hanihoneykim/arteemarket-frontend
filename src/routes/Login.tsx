import { Box, Button, Divider, FormControl, FormLabel, HStack, Image, Input, Text, VStack, useDisclosure, useToast } from "@chakra-ui/react";
import ProtectedPage from "../components/ProtectedPage";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react"; 
import {
    IEmailLoginError,
    IEmailLoginSuccess,
    IEmailLoginVariables,
    emailLogIn,
} from "../api";

interface IForm {
    email: string;
    password: string;
}

export default function Login() {
    const kakaoParams = {
        client_id:"1bce7b8ba49556b21c8e728a30c4f0bd",
        redirect_uri:"https://www.arteemarket.xyz/social/kakao",
        response_type:"code",
    }
    const params = new URLSearchParams(kakaoParams).toString();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        } = useForm<IForm>();
        const toast = useToast();
        const queryClient = useQueryClient();
        const mutation = useMutation(emailLogIn, {
            onSuccess: () => {
                toast({
                    title: "welcome back!",
                    status: "success",
                });
                queryClient.refetchQueries(["myprofile"]);
                reset();
                localStorage.setItem("isUserLoggedIn", "true");
                navigate("/");
            },
        });
        const navigate = useNavigate();
        const onSubmit = ({ email, password }: IForm) => {
            mutation.mutate({ email, password });
        };
        useEffect(() => {
            // 로그인 화면 진입 시 localStorage에서 로그인 상태 확인
            const storedUserLoggedIn = localStorage.getItem("isUserLoggedIn");
            if (storedUserLoggedIn) {
                navigate("/");  // 이미 로그인된 경우 "/"로 이동
            }
        }, [navigate]);

    return (
        <ProtectedPage>
        <Box pb={40} pt={28} w="100%" display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <VStack as="form" onSubmit={handleSubmit(onSubmit)} spacing={2} mt={5} w="25%" h="100%">
                <Text fontWeight={"900"} fontSize={24} mb={10}>로그인</Text>
                <FormControl>
                    <Input {...register("email",{required:"이메일을 입력해주세요"})} isInvalid={Boolean(errors.email?.message)} placeholder="이메일" type="text"variant={"filled"} w="100%" h={12}/>
                </FormControl>
                <FormControl>
                    <Input {...register("password",{required:"비밀번호를 입력해주세요"})} isInvalid={Boolean(errors.password?.message)} placeholder="비밀번호" type="password" variant={"filled"} w="100%" h={12}/>
                </FormControl>
                {mutation.isError ? (
                    <Text color="red.500" textAlign={"center"} fontSize="sm">
                    email or Password are wrong
                    </Text>
                ) : null}
                <Button isLoading={mutation.isLoading} type="submit" mt={4} colorScheme={"orange"} w="100%" h={12}>
                    로그인
                </Button>
                <Divider mt={8} mb={4} />
                <HStack spacing={6}>
                    {/* <Image w={12} h={12} borderRadius={50} src="https://artee-s3-bucket.s3.ap-northeast-2.amazonaws.com/naver.png" /> */}
                    <Link to={`https://kauth.kakao.com/oauth/authorize?${params}`} >
                        <Image w={12} h={12} borderRadius={50} src="https://artee-s3-bucket.s3.ap-northeast-2.amazonaws.com/kakao.png" />
                    </Link>
                </HStack>
                
            </VStack>
        </Box>
        </ProtectedPage>

        
    )

}