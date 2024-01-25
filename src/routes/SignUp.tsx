import { Box, Button, Divider, FormControl, FormLabel, HStack, Image, Input, Text, VStack, useToast } from "@chakra-ui/react";
import ProtectedPage from "../components/ProtectedPage";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { emailSignup } from "../api";

interface IForm {
    email: string;
    password: string;
    nickname: string;
    phone_number: number;
}

export default function SignUp() {
    const { register, handleSubmit, watch, reset } = useForm<IForm>()
    const toast = useToast();
        const queryClient = useQueryClient();
        const mutation = useMutation(emailSignup, {
            onSuccess: () => {
                toast({
                    title: "회원가입을 환영합니다!",
                    status: "success",
                });
                queryClient.refetchQueries(["me"]);
                reset();
                localStorage.setItem("isUserLoggedIn", "true");
                navigate("/");
            },
        });
        const navigate = useNavigate();
        const onSubmit = ({ email, password, nickname, phone_number }: IForm) => {
            mutation.mutate({ email, password, nickname, phone_number });
        };

    return (
        <ProtectedPage>
        <Box pb={40} pt={28} w="100%" display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <VStack as="form" onSubmit={handleSubmit(onSubmit)} spacing={2} mt={5} w="25%" h="100%">
                <Text fontWeight={"900"} fontSize={24} mb={8}>회원가입</Text>
                <FormControl>
                    <Input {...register("email",{required:"이메일을 입력해주세요"})} placeholder="이메일" required type="text" w="100%" h={12}/>
                </FormControl>
                <FormControl>
                    <Input {...register("password",{required:"비밀번호를 입력해주세요"})} placeholder="비밀번호" required type="password" w="100%" h={12}/>
                </FormControl>
                <FormControl>
                    <Input {...register("nickname",{required:"닉네임을 입력해주세요"})} placeholder="닉네임" required type="text" w="100%" h={12}/>
                </FormControl>
                <FormControl>
                    <Input {...register("phone_number",{required:"핸드폰번호를 입력해주세요"})} placeholder="핸드폰 번호" required type="text" w="100%" h={12}/>
                </FormControl>
                <Button type="submit" mt={4} colorScheme={"orange"} w="100%" h={12}>
                    회원가입
                </Button>
                <Divider mt={8} mb={4} />
                <HStack spacing={6}>
                    <Image w={12} h={12} borderRadius={50} src="https://artee-s3-bucket.s3.ap-northeast-2.amazonaws.com/naver.png" />
                    <Image w={12} h={12} borderRadius={50} src="https://artee-s3-bucket.s3.ap-northeast-2.amazonaws.com/kakao.png" />
                </HStack>
                
            </VStack>
        </Box>
        </ProtectedPage>

        
    )

}