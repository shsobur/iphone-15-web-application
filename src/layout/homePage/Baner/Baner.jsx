import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {heroVideo, smallHeroVideo} from "../../../utils";
import { useState } from "react";
import { useEffect } from "react";

const Baner = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo );

  useGSAP(() => {
    gsap.to ("#baner-text-one", {opacity: 1, delay: 2})
    gsap.to ("#iht", {opacity: 1, y: -40, delay: 2})
  }, []);

  const handelVideoSrc = () => {
    if(window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    }
    else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handelVideoSrc);

    return () => {
      window.removeEventListener("resize", handelVideoSrc);
    }
  }, []);

  return (
    <section className="w-full mt-10 bg-black nav-height relative">
      <div className="h-auto w-full flex-cntainer flex-col">

        <h2 id="baner-text-one" className="hero-title">iPhone 15 Pro</h2>

        <div className="w-9/12 md:w-10/12 m-auto">
          <video autoPlay muted playsInline={true}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>

      </div>

      <div id="iht" className="flex flex-col items-center opacity-0 translate-y-20 mt-10">
        <a href="highlight" className="btn">Buy</a>
        <h3 className="font-normal text-xl">From $999 or $41.62/mo. for 24 mo.1</h3>
      </div>

    </section>
  );
};

export default Baner;