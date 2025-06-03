import { motion } from "framer-motion";
import { styles } from "../../constants/styles";
import { config } from "../../constants/config";

const Hero = () => {
  return (
    <section
      className="relative mx-auto h-screen w-full"
      style={{
        backgroundImage: "none",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "200px auto",
      }}
    >
      <style>
        {`
          @media (max-width: 640px) {
            section[style] {
              background-image: url('/src/assets/mobile-view.png') !important;
              background-size: cover !important;
              background-position: center !important;
            }
          }
        `}
      </style>
      {/* 3D model removed */}
      <div className="xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
