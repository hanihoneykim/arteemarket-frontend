import React, { useState, useEffect } from "react";
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
SwiperCore.use([Navigation, Autoplay]);

const Banner:React.FC<IBannerProps> = ({ image }) =>{
    return(
        <>
        <Box w="90%" h="600px" mt={16}>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
                loop={true} 
                style={{ width: '100%', height: '100%' }}
            >
                <SwiperSlide>
                    <Image w={"100%"} h={"100%"} src={image} key={index} />
                </SwiperSlide>
            </Swiper>
        </Box>
        
        </>
    )
}

export default Banner;