import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Slider(props) {

    const changeSlide = props.changeSlide

    return (
        <Swiper
            className='carousel'
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={(slide) => changeSlide(slide.swipeDirection)}
            onSwiper={(swiper) => swiper}
        >
            <SwiperSlide className='project_apresentation'>
                <div id='nord_image' className='project_image'></div>
                <div id='nord_gif' className='project_gif'></div>
            </SwiperSlide>
            <SwiperSlide className='project_apresentation'>
                <div id='nlob_image' className='project_image'></div>
                <div id='nlob_gif' className='project_gif'></div>
            </SwiperSlide>
            <SwiperSlide className='project_apresentation'>
                <div id='chat_image' className='project_image'></div>
                <div id='chat_gif' className='project_gif'></div>
            </SwiperSlide>
            <SwiperSlide className='project_apresentation'>
                <div id='pokemon_image' className='project_image'></div>
                <div id='pokemon_gif' className='project_gif'></div>
            </SwiperSlide>
            ...
        </Swiper>
    );
};