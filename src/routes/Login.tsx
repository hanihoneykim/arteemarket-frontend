import { Box, Button, Divider, FormControl, FormLabel, HStack, Image, Input, Text, VStack } from "@chakra-ui/react";
import ProtectedPage from "../components/ProtectedPage";
import { useForm } from "react-hook-form";

interface IForm {
    email: string;
    password: string;
}

export default function Login() {
    const { register, handleSubmit, watch, reset } = useForm<IForm>()

    return (
        <ProtectedPage>
        <Box pb={40} pt={16} w="100%" display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <VStack as="form" spacing={2} mt={5} w="25%" h="100%">
                <Text fontWeight={"900"} fontSize={24} mb={10}>로그인</Text>
                <FormControl>
                    <Input {...register("email",{required:"이메일을 입력해주세요"})} placeholder="이메일" required type="text" w="100%" h={12}/>
                </FormControl>
                <FormControl>
                    <Input {...register("password",{required:"비밀번호를 입력해주세요"})} placeholder="비밀번호" required type="text" w="100%" h={12}/>
                </FormControl>
                <Button type="submit" mt={4} colorScheme={"orange"} w="100%" h={12}>
                    로그인
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