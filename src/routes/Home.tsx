import { Box, VStack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query"
import Banner from "../components/Banner";
import { IBannerResponse } from "../types";
import { getBanners } from "../api";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Autoplay]);

export default function Home() {
    const { isLoading, data } = useQuery<IBannerResponse>(["image"],getBanners);
    const banners = data?.results || [];
    console.log(data);
    return (
        <>
            <VStack display={"flex"} justifyContent={"center"} w="100%" h="100%">
                <Box w="90%" h="600px" mt={10}>
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
                        style={{ width: '100%', height: '100%', display:'flex'}}
                    >
                        {banners.map(banner => (
                            <SwiperSlide key={banner.id}>
                                <Banner image={banner.image} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
            </VStack>
        
        </>
    )
}