import '../styles/Hero.css'
const Hero = () => {
  const heading = "Welcome";
  return (
    <div>
    <section className="relative flex justify-center h-screen">

      <img src="/3241.jpg" className = "animate-[fade-in_forwards_5s] object-fill h-screen w-screen absolute bottom-0 left-0 pointer-events-none overflow-y-hidden"/>
      <h2 className = "absolute top-2/4 transform-[translateY(-50%)]">       
        <div className="absolute inset-0 flex justify-center items-center">
        <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-black">
          <span className = "animate-[fade-in_forwards_6s]">
           <i>Intellect23</i> 
          </span>
        </div>
      </div>
      </h2>
  


      <img src="/plants.png" id="m2" />
      
      {/* <img src="/mountains_front.png" id="m3" />  */}


      <img src="/man.png" className = "w-3/5 h-1/2 absolute bottom-0 left-0 pointer-events-none overflow-y-hidden"/>
      <img src="/plants.png" className = "w-full absolute bottom-0 left-0 pointer-events-none h-full overflow-y-hidden"/>
      {/* <img src="/grass.png" id="g1" /> */}
      {/* <img src="/trees_02.png" id="m1" /> */}
      
      
    
      
      <img src="/1234.jpg" className ="object-fill h-screen w-screen animate-[zoom-out-fade_5s_forwards]" ></img>
      <h2 className = "absolute top-2/4 transform-[translateY(-50%)]">       
          <div className="absolute inset-0 flex justify-center items-center">
        <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-black">
          <span className = "animate-[zoom-out-fade_5s_forwards]">
            {heading}
          </span>
        </div>
      </div>
      </h2>
     




    </section>
  
    </div>
    




    // <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    //   <motion.div
    //     variants={staggerContainer}
    //     initial="hidden"
    //     whileInView="show"
    //     viewport={{ once: false, amount: 0.25 }}
    //     className={`${styles.innerWidth} mx-auto flex flex-col`}
    //   >
    //     {/* <div className="flex justify-center items-center flex-col relative z-10">
    //       <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
    //         --techfest--
    //       </motion.h1>
    //     </div> */}
    //     <div className="relative h-screen px-4">
    //       <div className="absolute inset-0">
    //         <div className="h-full w-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500" />
    //       </div>
    // <div className="absolute inset-0 flex justify-center items-center">
    //   <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
    //     <motion.span
    //       initial={{ opacity: 0 }}
    //       animate={{ opacity: 1 }}
    //       transition={{ delay: 1 }}
    //     >
    //       {heading}
    //     </motion.span>
    //   </div>
    // </div>
    //     </div>
    //   </motion.div>
  
  );
};

export default Hero;
