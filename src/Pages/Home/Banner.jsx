import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Autoplay, Pagination } from 'swiper/modules';
import banner from '../../assets/YebjR0sAJB_L2NLC3Kh.jpg'
// import banner2 from '../../assets/banner.jpg'
import banner3 from '../../assets/supima-2-1400x533.webp'

const Banner = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper lg:h-[450px] h-[105px]"
            >
                <SwiperSlide><img src={banner} alt="" /></SwiperSlide>
                {/* <SwiperSlide><img src={banner2} alt="" /></SwiperSlide> */}
                <SwiperSlide><img src={banner3} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;