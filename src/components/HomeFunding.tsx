import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";


interface IFundingItemProps {
    current_percentage: number;
    title: string;
    image: string;
    id:string;
}

const HomeFunding:React.FC<IFundingItemProps> = ({current_percentage, title, image, id}) => {
    return (
        <>
        <Link to={`/core/funding-items/${id}`}>
            <Box w={72} h={96} mx={4}>
                <Image w={"100%"} h={72} src={image}/>
                <Text color="orange.500" fontSize={24} fontWeight={"900"} mt={2}>{current_percentage}% 달성</Text>
                <Text fontSize={16} fontWeight={"500"} mt={2}>{title}</Text>
            </Box>
        </Link>
        
                    
        
        </>
    )
}

export default HomeFunding;