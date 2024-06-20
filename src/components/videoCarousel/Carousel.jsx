import { useRef } from 'react';
import highlightFirst from "../../../public/assets/videos/highlight-first.mp4";
import highlightSecond from "../../../public/assets/videos/hightlight-sec.mp4";
import hightlightThird from "../../../public/assets/videos/hightlight-third.mp4";
import hightlightFourth from "../../../public/assets/videos/hightlight-fourth.mp4";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import "./Carousel.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; 


const Carousel = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <section className="h-[80vh] w-full">
      <div className="h-full">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: false,
          }}
          modules={[Autoplay, Pagination]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper rounded-3xl"
        >
          <SwiperSlide>
            <video autoPlay muted playsInline={true}>
              <source src={ highlightFirst }  type="video/mp4" />
            </video>
          </SwiperSlide>
          <SwiperSlide>
            <video autoPlay muted playsInline={true}>
              <source src={ highlightSecond }  type="video/mp4" />
            </video>
          </SwiperSlide>
          <SwiperSlide>
            <video autoPlay muted playsInline={true}>
              <source src={ hightlightThird }  type="video/mp4" />
            </video>
          </SwiperSlide>
          <SwiperSlide>
            <video autoPlay muted playsInline={true}>
              <source src={ hightlightFourth }  type="video/mp4" />
            </video>
          </SwiperSlide>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Carousel;
