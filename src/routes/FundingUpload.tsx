import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormHelperText,
    FormLabel,
    Heading,
    Image,
    Input,
    Select,
    Text,
    Textarea,
    VStack,
    useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import ProtectedPage from "../components/ProtectedPage";
import useUser from "../lib/useUser";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaRegUser } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";
import FundingCategory from "../components/FundingCategory";
import { IUploadFundingVariables, uploadFunding } from "../api";
import { IFundingItem } from "../types";

interface IForm {
    id: string;
    creator_nickname: string;
    creator_profile_image: string;
    title: string;
    content: string;
    price: number;
    goal_amount: number;
    end_date: string;
    image: FileList | null;
    category: string;
    bank_name: string;
    bank_account_number: string;
    bank_account_owner:string;
}

export default function FundingUpload() {
    const { register, handleSubmit, watch, reset, setValue } = useForm<IForm>()
    const toast = useToast();
    const navigate = useNavigate();
    const { user, isLoggedIn, userLoading } = useUser();
    const mutation = useMutation(uploadFunding, {
        onSuccess: (data: IFundingItem) => {
            console.log("data:", data)
            console.log(watch("category"))
            console.log(watch("end_date"))
            toast({
                status: "success",
                title: "펀딩이 생성되었습니다.",
                position: "bottom-right",
            });
            navigate(`/funding-items/${data.id}`);
            },
        });
        const onSubmit = (data: IUploadFundingVariables) => {
            const isoDate = new Date(data.end_date).toISOString();
            setValue("end_date", isoDate);
            mutation.mutate(data);
        };


    return (
        <>
        <FundingCategory />
        <ProtectedPage>
            <Box pb={40} pt={16} w="100%" display={"flex"} justifyContent={"center"}>
                <VStack as="form" spacing={10} mt={5} w="80%" h="100%" align="start" onSubmit={handleSubmit(onSubmit)}>
                    <Text color="orange" fontSize={20} fontWeight={600}>➊ 펀딩에 대해 설명해주세요!</Text>
                    <Divider />
                    <FormControl>
                    <FormControl>
                        <FormLabel>제목</FormLabel>
                        <Input {...register("title",{required:true})} required type="text" w="100%" mb={10}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>본문</FormLabel>
                        <Textarea {...register("content")} h="300px" mb={10}/>
                    </FormControl>
                    <FormLabel>사진 업로드</FormLabel>
                            <Input {...register("image")} type="file" accept="image/*"/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>카테고리</FormLabel>
                        <Select placeholder='카테고리를 선택하세요' {...register("category")}>
                            <option value="idol">아이돌</option>
                            <option value="subscription">구독상품</option>
                            <option value="accessory">악세사리</option>
                            <option value="food">푸드</option>
                            <option value="interior">인테리어</option>
                            <option value="pet">반려동물</option>
                            <option value="etc">기타</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel>가격</FormLabel>
                        <Input {...register("price",{required:true})} required type="text" w="100%" mb={10}/>
                    </FormControl>
                    <Text color="orange" fontSize={20} fontWeight={600}>➋ 펀딩 일정에 대해 설명해주세요!</Text>
                    <Divider />
                    <FormControl>
                        <FormLabel>목표 금액</FormLabel>
                        <Input {...register("goal_amount",{required:true})} required type="text" w="100%"/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>마감 날짜</FormLabel>
                        <Input
                                placeholder="날짜를 선택해주세요."
                                size="md"
                                type="datetime-local"
                                mb={10}
                                value={watch("end_date") || ""}
                                {...register("end_date", { required: true })}
                            />
                    </FormControl>
                    <Text color="orange" fontSize={20} fontWeight={600}>➌ 입금 받으실 정보를 입력해 주세요!</Text>
                    <Divider />
                    <FormControl>
                        <FormLabel>은행명</FormLabel>
                        <Input {...register("bank_name",{required:true})} required type="text" w="100%"/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>은행 계좌 번호</FormLabel>
                        <Input {...register("bank_account_number",{required:true})} required type="text" w="100%"/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>입금 받으실 분 성함</FormLabel>
                        <Input {...register("bank_account_owner",{required:true})} required type="text" w="100%"/>
                    </FormControl>

                    {mutation.isError ? (
                    <Text color="red.500">문제가 발생했습니다.</Text>
                    ) : null}
                    <Button type="submit" w="full" colorScheme={"gray"}  mt={16}>
                        새로운 펀딩 업로드하기
                    </Button>
                </VStack>
            </Box>
        </ProtectedPage>
        </>
    )
}