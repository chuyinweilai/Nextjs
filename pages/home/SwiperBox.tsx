import { useEffect, useState } from 'react';
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import styles from './home.module.css';
import { useRef } from "react";

interface SwiperBoxProps{
  className: string;
}
const SwiperBox = ({className}:SwiperBoxProps) => {
  const [swiperDom,setSwiperDom] = useState<any>();

  useEffect(() => {
    // const swiper = new Swiper();
  },[swiperDom])

  // return (
  //   <div className={`swiper-container ${className}`}>
  //     <div className="swiper-wrapper">
  //         <div className={`swiper-slide ${styles.slider}`} >
  //             <a href="/product/index.html?catid=2" data-catid="0">全部</a>
  //         </div>
  //         <div className={`swiper-slide ${styles.slider}`}>
  //             <a href="/product/index.html?catid=3" data-catid="0">类别1</a>
  //         </div>
  //         <div className={`swiper-slide ${styles.slider}`}>
  //             <a href="/product/index.html?catid=4" data-catid="0">类别2</a>
  //         </div>
  //         <div className={`swiper-slide ${styles.slider}`}>
  //             <a href="/product/index.html?catid=5" data-catid="0">类别3</a>
  //         </div>
  //         <div className={`swiper-slide ${styles.slider}`}>
  //             <a href="/product/index.html?catid=6" data-catid="0">类别4</a>
  //         </div>
  //     </div>
  //   </div>
  // )

  return (
    <Swiper
      slidesPerView="auto"
      // direction="vertical"
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className={className}
      mousewheel={true}
      allowTouchMove={false}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => {
        setSwiperDom(swiper)
      }}
    >
      <SwiperSlide className={styles.slider}>Slide 133</SwiperSlide>
      <SwiperSlide className={styles.slider}>Slide 2</SwiperSlide>
      <SwiperSlide className={styles.slider}>Slide 3</SwiperSlide>
      <SwiperSlide className={styles.slider}>Slide 4</SwiperSlide>
    </Swiper>
  );
};
export default SwiperBox;
