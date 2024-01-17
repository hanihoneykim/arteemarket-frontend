import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";


interface ISaleItemProps {
    price: number;
    title: string;
    image: string;
    id:string;
}

const HomeSale:React.FC<ISaleItemProps> = ({price, title, image, id}) => {
    return (
        <>
        <Link to={`/core/funding-items/${id}`}>
            <Box w={72} h={96} mx={4}>
                <Image w={"100%"} h={72} src={image}/>
                <Text color="orange.500" fontSize={18} fontWeight={"900"} mt={2}>Free Order +</Text>
                <Text fontSize={16} fontWeight={"500"} mt={2}>{title}</Text>
                <Text color="gray" fontSize={14} fontWeight={"500"} mt={2}>{price} 원</Text>
            </Box>
        </Link>
        
                    
        
        </>
    )
}

export default HomeSale;