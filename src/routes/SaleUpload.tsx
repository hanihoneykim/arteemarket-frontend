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
import { ISaleItem } from "../types";
import { IUploadSaleVariables, uploadSale } from "../api";

interface IForm {
    id: string;
    creator_nickname: string;
    creator_profile_image: string;
    title: string;
    content: string;
    price: number;
    image: string;
    category_name: string;
    bank_name: string;
    bank_account_number: string;
    bank_account_owner:string;
}

export default function SaleUpload() {
    const { register, handleSubmit, watch, reset } = useForm<IForm>()
    const toast = useToast();
    const navigate = useNavigate();
    const { user, isLoggedIn, userLoading } = useUser();
    const mutation = useMutation(uploadSale, {
        onSuccess: (data: ISaleItem) => {
            toast({
                status: "success",
                title: "프리오더가 생성되었습니다.",
                position: "bottom-right",
            });
            navigate(`/sale-items/${data.id}`);
            },
        });
    const onSubmit = (data: IUploadSaleVariables) => {
        mutation.mutate(data);
    };


    return (
        <>
        <FundingCategory />
        <ProtectedPage>
            <Box pb={40} pt={16} w="100%" display={"flex"} justifyContent={"center"}>
                <VStack as="form" spacing={10} mt={5} w="80%" h="100%" align="start" onSubmit={handleSubmit(onSubmit)}>
                    <Text color="orange" fontSize={20} fontWeight={600}>➊ 프리오더 제품에 대해 설명해주세요!</Text>
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
                        <Select placeholder='Select country'>
                            <option>아이돌</option>
                            <option>구독상품</option>
                            <option>악세사리</option>
                            <option>푸드</option>
                            <option>인테리어</option>
                            <option>반려동물</option>
                            <option>기타</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel>가격</FormLabel>
                        <Input {...register("price",{required:true})} required type="text" w="100%" mb={10}/>
                    </FormControl>
                    <Text color="orange" fontSize={20} fontWeight={600}>➋ 입금 받으실 정보를 입력해 주세요!</Text>
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

                    <Button type="submit" w="full" colorScheme={"gray"}  mt={16}>
                        새로운 프리오더 업로드하기
                    </Button>
                </VStack>
            </Box>
        </ProtectedPage>
        </>
    )
}