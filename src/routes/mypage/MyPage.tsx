import { Box, Button, Card, CardHeader, Divider, FormControl, FormLabel, HStack, Heading, Input, Text, Textarea, VStack, useToast } from "@chakra-ui/react";
import MypageCategory from "../../components/MypageCategory";
import { useForm } from "react-hook-form";
import ProtectedPage from "../../components/ProtectedPage";
import { useMutation, useQuery } from "@tanstack/react-query";
import { IUser } from "../../types";
import { IEmailSignupVariables, IUploadMypageVariables, emailSignup, getMyProfile, uploadMypage } from "../../api";
import { Link } from "react-router-dom";

interface IForm {
    email: string;
    old_password: string;
    new_password: string;
    nickname: string;
    phone_number: string;
    name: string;
    profile_image: FileList | null;
    password: string;
}

export default function MyPage() {
    const { isLoading, data, refetch } = useQuery<IUser>(["mypage"], getMyProfile)
    const { register, handleSubmit, watch, reset } = useForm<IForm>({
        defaultValues: {
            email: data?.email || "",
            old_password: "",
            new_password: "",
            nickname: data?.nickname || "",
            phone_number: data?.phone_number || "",
            name: data?.name || "",
            profile_image: null,
            password: data?.password || ""
        },
    });
    const toast = useToast();
    const mutation = useMutation(uploadMypage, {
        onSuccess: (data: IUser) => {
            toast({
                status: "success",
                title: "내 정보가 수정되었습니다.",
                position: "bottom-right",
            });
            refetch();
            },
        });
        const onSubmit = (data: IUploadMypageVariables) => {
            console.log(data);
            console.log(data.profile_image)
            mutation.mutate(data);
        };


    return (
        <>
        <MypageCategory />
        <ProtectedPage>
            <Box mb={10} pb={40} pt={16} w="100%" display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <VStack spacing={10} mt={5} w="70%" h="100%">
                    <Text color="orange" fontSize={20} fontWeight={600}>내 정보</Text>
                    <Divider />
                        <FormLabel>이메일</FormLabel>
                            <Card align='center' w="80%">
                                <CardHeader>
                                    <Text size='sm'>{data?.email}</Text>
                                </CardHeader>
                            </Card>
                        <FormLabel>닉네임</FormLabel>
                        <Card align='center'w="80%">
                            <CardHeader>
                                <Text size='sm'>{data?.nickname}</Text>
                            </CardHeader>
                        </Card>
                        <FormLabel>이름</FormLabel>
                        <Card align='center'w="80%">
                            <CardHeader>
                                <Text size='sm'>{data?.name}</Text>
                            </CardHeader>
                        </Card>
                        <FormLabel>핸드폰 번호</FormLabel>
                        <Card align='center' w="80%">
                            <CardHeader>
                                <Text size='sm'>{data?.phone_number}</Text>
                            </CardHeader>
                        </Card>
                        <Button w="80%" colorScheme={"gray"}  mt={16}>
                            <Link to="/mypage/edit">
                                내 정보 수정하기
                            </Link>
                        </Button>
                    
                </VStack>
            </Box>
        </ProtectedPage>
        
        </>
    )
}