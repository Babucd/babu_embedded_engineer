import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";
import { profile } from "../../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto flex flex-col lg:flex-row pb-20 lg:pb-0`}>
      {/* Left Column: Profile and Text */}
      <div
        className={`w-full lg:w-1/2 pt-[120px] lg:pt-[150px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-start justify-center z-10`}
      >
        <div className="flex flex-col gap-6">
          <img 
            src={profile} 
            alt="Profile" 
            className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] object-cover rounded-full border-[4px] border-[#915EFF] shadow-[0_0_20px_rgba(145,94,255,0.5)]" 
          />

          <div className="flex flex-row items-start gap-5">
            <div className="mt-1 flex flex-col items-center justify-center">
              <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
              <div className="violet-gradient h-40 w-1 sm:h-80" />
            </div>

            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>
                I'm <span className="text-[#915EFF]">{config.hero.name}</span>
              </h1>
              <p className={`${styles.heroSubText} text-white-100 mt-2`}>
                {config.hero.p[0]} <br className="hidden sm:block" />
                {config.hero.p[1]}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: 3D Canvas */}
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-full relative z-0 lg:pt-20 cursor-pointer">
        <ComputersCanvas />
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20 pointer-events-none">
        <a href="#about" className="pointer-events-auto">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
