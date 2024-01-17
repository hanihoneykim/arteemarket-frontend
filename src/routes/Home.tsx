import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query"
import { IBannerResponse, IFundingItem } from "../types";
import { getBanners, getHomeFundingItems } from "../api";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Banner from "../components/Banner";
import HomeFunding from "../components/HomeFunding";

SwiperCore.use([Navigation, Autoplay]);

export default function Home() {
    const { isLoading, data } = useQuery<IBannerResponse>(["image"],getBanners);
    const { isLoading: isLoadingFunding, data: fundingData } = useQuery<IFundingItem[]>(["homeFunding"], getHomeFundingItems);
    const banners = data?.results || [];
    return (
        <>
            <VStack w="100%" h="100%">

                {/* Banner */}
                <Box w="80%" h="550px" mt={10}>
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

                {/* 신규 펀딩 */}
                <Box w="80%" h="100%" mt={20} mb={56} display={"flex"} justifyContent={"flex-start"}>
                    <VStack alignItems={"flex-start"} w="100%">
                        <Text fontSize={30} fontWeight={"bold"} mb={4}>신규 펀딩</Text>
                        <HStack spacing={4} alignItems="flex-start" flexWrap="wrap">
                            {fundingData && fundingData.map((funding, index) => (
                                <VStack key={index} w="calc(25% - 16px)" p={2}>
                                    <HomeFunding id={funding.id} image={funding.image} current_percentage={funding.current_percentage} title={funding.title} />
                                </VStack>
                            ))}
                        </HStack>
                    </VStack>
                </Box>

            </VStack>
        
        </>
    )
}