import { Box, Card, CardBody, Divider, HStack, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";


interface IEventProps {
    id:string;
    title:string;
    image: string;
}

const EventList: React.FC<IEventProps> = ({ title, id, image }) => {
    return (
        <>
        <Link to={`/events/${id}`}>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src={image}
                    borderRadius='lg'
                    />
                    <Stack mt='6'>
                    <Text color='orange' fontSize="16" fontWeight={"bold"}>event 🎉</Text>
                    <Heading size='md'>{title}</Heading>
                    </Stack>
                </CardBody>
            </Card>
        </Link>
        </>
    )
}

export default EventList;