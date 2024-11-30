import About from "./view/About";
import Gallery from "./view/Gallery";
import Hero from "./view/Hero";
// import JoinUs from "./view/JoinUs";
import OurFocus from "./view/OurFocus";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <OurFocus />
      <Gallery />
      {/* <JoinUs /> */}
    </>
  );
};

export default Home;
