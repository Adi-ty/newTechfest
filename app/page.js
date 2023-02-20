import About from "../sections/About";
import Explore from "../sections/Explore";
import Hero from "../sections/Hero";
import Insights from "../sections/Insights";
import WhatsNew from "../sections/WhatsNew";
import World from "../sections/World";

const Page = () => (
  <div>
    <Hero />
    <div className="relative ">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <WhatsNew />
      <div className="gradient-04 z-0" />
      <World />
    </div>
    <Insights />
  </div>
);

export default Page;
