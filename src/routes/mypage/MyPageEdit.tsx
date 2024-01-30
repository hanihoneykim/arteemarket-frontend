import { Box, Button, Card, CardHeader, Divider, FormControl, FormLabel, Input, Text, VStack, useToast } from "@chakra-ui/react";
import MypageCategory from "../../components/MypageCategory";
import { useForm } from "react-hook-form";
import ProtectedPage from "../../components/ProtectedPage";
import { useMutation, useQuery } from "@tanstack/react-query";
import { IUser } from "../../types";
import { IUploadMypageVariables, getMyProfile, uploadMypage } from "../../api";
import { useEffect, useState, Dispatch, SetStateAction } from "react";

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

export default function MyPageEdit() {
    const [userData, setUserData] = useState<IUser | null>(null);
    const { isLoading, data, refetch } = useQuery<IUser>(["mypage"], getMyProfile);

    useEffect(() => {
        if (data) {
            setUserData(prevUserData => ({
                ...prevUserData!,
                nickname: data.nickname || "",
                phone_number: data.phone_number || "",
                name: data.name || "",
            }));
        }
    }, [data]);

    const { register, handleSubmit } = useForm<IForm>({
        defaultValues: {
            nickname: userData?.nickname || "",
            phone_number: userData?.phone_number || "",
            name: userData?.name || "",
        },
    });
    
    const toast = useToast();
    const mutation = useMutation(uploadMypage, {
        onSuccess: () => {
            toast({
                status: "success",
                title: "내 정보가 수정되었습니다.",
                position: "bottom-right",
            });
            refetch();
        },
    });

    const onSubmit = (formData: IForm) => {
        mutation.mutate(formData);
    };

    return (
        <>
            <MypageCategory />
            <ProtectedPage>
                <Box pb={40} pt={16} w="100%" display={"flex"} justifyContent={"center"}>
                    <VStack as="form" spacing={10} mt={5} w="60%" h="100%" align="start" onSubmit={handleSubmit(onSubmit)}>
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
                        {/*
                        <FormLabel>프로필 사진</FormLabel>
                        <FormControl>
                            <Input {...register("profile_image")} required type="file" accept="image/*"/>
                        </FormControl>
                        */}
                        <FormControl>
                            <FormLabel>닉네임</FormLabel>
                            <Input {...register("nickname")} required type="text" w="100%"/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>이름 (본명)</FormLabel>
                            <Input {...register("name")} required type="text" w="100%"/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>핸드폰 번호 (번호만 입력해주세요) </FormLabel>
                            <Input {...register("phone_number")} required type="text" w="100%"/>
                        </FormControl>
                        <Button type="submit" w="full" colorScheme={"gray"}  mt={16}>
                            내 정보 수정하기
                        </Button>
                    </VStack>
                </Box>
            </ProtectedPage>
        </>
    );
}
