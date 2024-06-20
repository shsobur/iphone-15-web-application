import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { watchImg } from "../../../utils";
import Carousel from "../../../components/videoCarousel/Carousel";

const Highlight = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
    gsap.to(".link", {opacity: 1, y: 0, duration: 1, stagger: 0.25})
  }, []);

  return (
    <section
      id="highlight"
      className="w-screen h-full over common-padding bg-zinc"
    >
      <div className="screen-max-width ">
        <div className="w-auto pb-12 flex items-center justify-between">

          <h2 id="title" className="section-heading">
            Get the highlight
          </h2>

          <div className="flex items-end flex-wrap gap-5">
            <p className="link">
              Watch the film <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              Watch the event <img src={watchImg} alt="watch" className="ml-2" />
            </p>
          </div>

        </div>
      </div>
      <div>
        <Carousel></Carousel>
      </div>
    </section>
  );
};

export default Highlight;
