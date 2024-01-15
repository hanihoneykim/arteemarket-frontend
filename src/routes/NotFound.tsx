import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NotFound(){
    return <VStack justifyContent={"center"} minH="100vh">
        <Heading>Page Not Found</Heading>
        <Text>it seems you are lost.</Text>
        <Link to="/">
            <Button>Go Home</Button>
        </Link>
    </VStack>
}