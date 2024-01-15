import { useQuery } from "@tanstack/react-query"
import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { getBanners } from "../api"; 
import { IBanner } from "../types";

interface IBannerProps {
    image: string;
}   


const Banner:React.FC<IBannerProps> = ({ image }) =>{ {
    return(
        <>
        <Image w={"100%"} h={"100%"} src={image}/>
        </>
    )
}}

export default Banner;