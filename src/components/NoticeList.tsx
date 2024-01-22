import { Box, Card, CardBody, Divider, HStack, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";


interface INoticeProps {
    id:string;
    title:string;
}

const NoticeList: React.FC<INoticeProps> = ({ title, id }) => {
    return (
        <>
        <Link to={`notice/${id}`}>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://artee-s3-bucket.s3.ap-northeast-2.amazonaws.com/artee_logo.jpg'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    />
                    <Stack mt='6'>
                    <Text color='orange' fontSize="16" fontWeight={"bold"}>공지사항</Text>
                    <Heading size='md'>{title}</Heading>
                    </Stack>
                </CardBody>
            </Card>
        </Link>
        </>
    )
}

export default NoticeList;