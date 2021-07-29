import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, A11y } from "swiper"

SwiperCore.use([Navigation, Pagination, A11y])

export function Slider() {
    return(
        <Flex
          w="100%"
          maxW="1240px"
          mx="auto"
          mb={["5","10"]}
          h={["250px","450px"]}
        >
            <Swiper
                slidesPerView={1}
                navigation
                pagination={{clickable: true}}
                autoplay={{
                    delay: 3000
                }}
                style={{ width: '100%', flex:'1'}}
            >
                <SwiperSlide>
                    <Flex
                        bgImage='url(./images/Europe.svg)'
                        bgPosition="center"
                        w="100%"
                        h="100%"
                        align="center"
                        justify="center"
                        direction="column"
                        color="gray.50"
                    >
                     <Link href="/europe">
                         <>
                            <Heading fontWeight="700" fontSize={["3xl", "4xl", "5xl"]}>Europa</Heading>
                            <Text mt={["2", "4"]} fontWeight="700" fontSize={["sm", "xl"]}>O continente mais antigo</Text>
                        </>
                     </Link>   
                    </Flex>
                </SwiperSlide>

                <SwiperSlide>
                    <Flex
                        bgImage='url(./images/Africa.jpg)'
                        bgPosition="center"
                        bgRepeat="no-repeat"
                        bgSize="cover"
                        w="100%"
                        h="100%"
                        align="center"
                        justify="center"
                        direction="column"
                        color="gray.50"
                    >
                     <Link href="/europe">
                         <>
                            <Heading fontWeight="700" fontSize={["3xl", "4xl", "5xl"]}>África</Heading>
                            <Text mt={["2", "4"]} fontWeight="700" fontSize={["sm", "xl"]}>O continente mais selvagem</Text>
                        </>
                     </Link>   
                    </Flex>
                </SwiperSlide>

                <SwiperSlide>
                    <Flex
                        bgImage='url(./images/Asia.jpg)'
                        bgPosition="center"
                        bgRepeat="no-repeat"
                        bgSize="cover"
                        w="100%"
                        h="100%"
                        align="center"
                        justify="center"
                        direction="column"
                        color="gray.50"
                    >
                     <Link href="/europe">
                         <>
                            <Heading fontWeight="700" fontSize={["3xl", "4xl", "5xl"]}>Ásia</Heading>
                            <Text mt={["2", "4"]} fontWeight="700" fontSize={["sm", "xl"]}>O continente mais místico</Text>
                        </>
                     </Link>   
                    </Flex>
                </SwiperSlide>

            </Swiper>
        </Flex>
    );
}