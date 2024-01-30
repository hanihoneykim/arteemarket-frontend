import { Box, Button, Card, CardHeader, Divider, FormControl, FormLabel, HStack, Heading, Input, Text, Textarea, VStack, useToast } from "@chakra-ui/react";
import MypageCategory from "../../components/MypageCategory";
import { useForm } from "react-hook-form";
import ProtectedPage from "../../components/ProtectedPage";
import { useMutation, useQuery } from "@tanstack/react-query";
import { IUser } from "../../types";
import { IEmailSignupVariables, IUploadMypageVariables, emailSignup, getMyProfile, uploadMypage } from "../../api";

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
            <Box pb={40} pt={16} w="100%" display={"flex"} justifyContent={"center"}>
                <VStack as="form" spacing={10} mt={5} w="80%" h="100%" align="start" onSubmit={handleSubmit(onSubmit)}>
                    <Text color="orange" fontSize={20} fontWeight={600}>내 정보 수정</Text>
                    <Divider />
                    <FormControl>
                        <FormLabel>이메일</FormLabel>
                        <Card align='center'>
                            <CardHeader>
                                <Text size='sm'>{data?.email}</Text>
                            </CardHeader>
                        </Card>
                    </FormControl>
                    <FormControl>
                        <FormLabel>본인 확인을 위해 비밀번호를 입력해주세요.</FormLabel>
                        <Input {...register("password", {required:"본인 확인을 위한 비밀번호를 입력해주세요"})} required type="password"/>
                    </FormControl>
                    <FormLabel>프로필 사진</FormLabel>
                            <Input {...register("profile_image")} type="file" accept="image/*"/>
                    <FormControl>
                        <FormLabel>닉네임</FormLabel>
                        <Input {...register("nickname")}  type="text" w="100%" placeholder={data?.nickname}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>이름 (본명)</FormLabel>
                        <Input {...register("name")}  type="text" w="100%" placeholder={data?.name}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>핸드폰 번호 (번호만 입력해주세요) </FormLabel>
                        <Input {...register("phone_number")} type="text" w="100%" placeholder={data?.phone_number}/>
                    </FormControl>
                    <Text color="orange" fontSize={20} fontWeight={600} mt={10}>비밀번호 변경</Text>
                    <Divider />
                    <FormControl>
                        <FormLabel>기존 비밀번호</FormLabel>
                        <Input {...register("old_password")} type="password"/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>새로운 비밀번호</FormLabel>
                        <Input {...register("new_password")} type="password"/>
                    </FormControl>
                    <Button type="submit" w="full" colorScheme={"gray"}  mt={16}>
                        내 정보 수정하기
                    </Button>
                </VStack>
            </Box>
        </ProtectedPage>
        
        </>
    )
}