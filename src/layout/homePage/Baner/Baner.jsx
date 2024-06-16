import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {heroVideo, smallHeroVideo} from "../../../utils";
import { useState } from "react";

const Baner = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo );

  useGSAP(() => {
    gsap.to ("#hero-baner", {opacity: 1, delay: 2})
  }, [])

  return (
    <section className="w-full mt-10 bg-black nav-height relative">
      <div className="h-5/6 w-full flex-cntainer flex-col">

        <h2 id="hero-baner" className="hero-title">iPhone 15 Pro</h2>

        <div className="w-9/12 md:w-10/12 m-auto">
          <video autoPlay loop muted playsInline={true}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>

      </div>
    </section>
  );
};

export default Baner;