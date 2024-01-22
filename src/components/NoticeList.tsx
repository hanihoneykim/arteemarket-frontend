import { Box, Card, CardBody, Divider, HStack, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";


interface INoticeProps {
    id:string;
    title:string;
    content: string;
}

const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
        return text;
    }
    return text.slice(0, maxLength) + '...';
};

const NoticeList: React.FC<INoticeProps> = ({ title, id, content }) => {
    const truncatedContent = truncateText(content, 30);
    return (
        <>
        <Link to={`/notices/${id}`}>
            <Card maxW='sm'>
                <CardBody>
                    {/* <Image
                    src='https://artee-s3-bucket.s3.ap-northeast-2.amazonaws.com/artee_logo.jpg'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    /> */}
                    <Stack>
                    <Text color='orange' fontSize="16" fontWeight={"bold"}>공지사항</Text>
                    <Heading size='md'>{title}</Heading>
                    </Stack>
                    <Divider color="rgba(0,0,0,0.1)" my={4}/>
                    <Text fontSize="14">{truncatedContent}</Text>

                </CardBody>
            </Card>
        </Link>
        </>
    )
}

export default NoticeList;