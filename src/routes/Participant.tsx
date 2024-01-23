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
    useToast
} from "@chakra-ui/react";
import ProtectedPage from "../components/ProtectedPage";
import useUser from "../lib/useUser";
import { useForm } from "react-hook-form";

import FundingCategory from "../components/FundingCategory";

interface IForm {
    id: string;
    is_paid: boolean;
    payment_name : string;
    name : string;
    phone_number : number;
    shipping_name : string;
    shipping_phone_number : number;
    shipping_address1 : string;
    shipping_zipcode : number;
}

export default function Participant() {
    const { register, handleSubmit, watch, reset } = useForm<IForm>()
    const toast = useToast();
    const { user, isLoggedIn, userLoading } = useUser();
    const isPaidValue = watch("is_paid");

    const onSubmit = (data: IForm) => {
        // <Select> 컴포넌트에서 선택한 값에 따라 is_paid를 설정합니다.
        data.is_paid = isPaidValue as boolean;

        // is_paid가 false인 경우 Toast를 표시하고 제출을 중단합니다.
        if (!data.is_paid) {
            toast({
                title: "무통장 입금 여부를 선택해주세요.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
            return;
        }
    }


    return (
        <>
        <FundingCategory />
        <ProtectedPage>
            <Box pb={40} pt={16} w="100%" display={"flex"} justifyContent={"center"}>
                <VStack as="form" spacing={10} mt={5} w="80%" h="100%" align="start">
                    <Text color="orange" fontSize={20} fontWeight={600}>➊ 펀딩 신청 전 입금 여부 확인 해주세요!</Text>
                    <Divider />
                    <FormControl>
                        <Select {...register("is_paid", { required: "무통장 입금 여부를 확인해 주세요."})} placeholder='무통장 입금 하셨나요?'>
                            <option value='true'>예</option>
                            <option value='false'>아니요</option>
                        </Select>
                    </FormControl>
                    <Text color="gray" fontSize={14} fontWeight={500}>무통장 입금이 완료되어야 펀딩 신청이 가능합니다. 무통장 입금 완료 후 신청 폼을 작성해주세요!</Text>

                    <Text color="orange" fontSize={20} fontWeight={600} mt={10}>➋ 주문 정보를 기입해주세요!</Text>
                    <Divider />
                    <FormControl>
                        <FormLabel>입금하신 성함</FormLabel>
                        <Input {...register("payment_name",{required:"입금하신 분의 성함을 기입해주세요"})} required type="text" w="100%" mb={2}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>주문자 성함</FormLabel>
                        <Input {...register("name",{required:"주문하시는 분의 성함을 기입해주세요"})} required type="text" w="100%" mb={2}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>주문자 핸드폰 번호</FormLabel>
                        <Input {...register("phone_number",{required:"주문하시는 분의 핸드폰 번호를 기입해주세요"})} required type="text" w="100%" mb={2} placeholder='번호만 기입해주세요'/>
                    </FormControl>

                    <Text color="orange" fontSize={20} fontWeight={600} mt={10}>➌ 배송 정보를 기입해주세요!</Text>
                    <Divider />
                    <FormControl>
                        <FormLabel>배송 받으실 분 성함</FormLabel>
                        <Input {...register("shipping_name",{required:"배송 받으실 분의 성함을 기입해주세요"})} required type="text" w="100%" mb={2}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>배송 받으실 분 핸드폰 번호</FormLabel>
                        <Input {...register("shipping_phone_number",{required:"배송 받으실 분의 핸드폰 번호를 기입해주세요"})} required type="text" w="100%" mb={2} placeholder='번호만 기입해주세요'/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>배송 받으실 곳 주소</FormLabel>
                        <Input {...register("shipping_address1",{required:"배송 받으실 곳의 주소를 기입해주세요"})} required type="text" w="100%" mb={2}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>배송 받으실 곳 우편번호</FormLabel>
                        <Input {...register("shipping_zipcode",{required:"배송 받으실 곳의 우편번호를 기입해주세요"})} required type="text" w="100%" mb={2} placeholder='번호만 기입해주세요'/>
                    </FormControl>
                    

                    <Button type="submit" w="full" colorScheme={"gray"}  mt={16}>
                        펀딩 신청하기
                    </Button>
                </VStack>
            </Box>
        </ProtectedPage>
        </>
    )
}