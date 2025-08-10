import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router";

const Carousel = () => {
    return (
        <>
            <p className="text-4xl max-sm:text-3xl font-bold mt-34 mb-5">
                Ask And Get <span className="text-[#15c39a]">Recommendations</span>
            </p>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                loop={true}
                className="rounded-xl"
            >
                
                <SwiperSlide>
                    <div className="relative w-full h-[430px]">
                        <img
                            src={"/first.jpg"}
                            alt="Slide 1"
                            className="w-full h-full object-cover object-[37%_10%]"
                        />
                        <p className="absolute top-[120px] left-[110px] font-semibold text-2xl max-sm:left-5 max-sm:w-1/2">
                            Confused About What to Buy?
                        </p>
                        <p className="absolute top-[70px] right-[110px] font-semibold text-2xl max-sm:hidden">
                            Confused About Product Quality?
                        </p>
                        <p className="absolute top-[240px] right-[70px] font-semibold text-2xl max-sm:hidden">
                            Confused About Longevity?
                        </p>
                        <p className="absolute top-[260px] left-[80px] font-semibold text-2xl max-sm:hidden">
                            Need Better suggestions?
                        </p>
                    </div>
                </SwiperSlide>

                
                <SwiperSlide>
                    <div className="relative w-full h-[430px]">
                        <img
                            src={"/second.jpg"}
                            alt="Slide 2"
                            className="w-full h-full object-cover object-[55%_35%]"
                        />
                        <p className="text-3xl max-sm:text-xl absolute top-[110px] left-[100px] max-sm:top-[50px] max-sm:left-[20px] max-sm:w-[80%]">
                            <span className="font-semibold text-4xl max-sm:text-2xl">
                                We Got You Covered!
                            </span>
                            <br />
                            With Our suggestions, You Can shop Tension Free
                        </p>
                    </div>
                </SwiperSlide>

                
                <SwiperSlide>
                    <div className="relative w-full h-[430px]">
                        <img
                            src={"/third.jpg"}
                            alt="Slide 3"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[#0000006c]"></div>
                        <p className="absolute text-white text-4xl font-bold left-[380px] top-[210px] max-sm:top-1/3 max-sm:left-8 max-sm:text-lg z-10">
                            Shop Tension Free!{" "}
                            <Link
                                className="underline underline-offset-5 mx-5 text-[#15c39a]"
                                to={"/signup"}
                            >
                                Sign Up Now
                            </Link>
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Carousel;
