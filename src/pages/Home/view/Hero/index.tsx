import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="w-full">
        <div className="bg-hero bg-center w-full max-w-[1200px] mx-auto rounded-[30px] overflow-hidden pt-36 pb-10 px-5">
          <div className="w-full md:w-1/2 flex flex-col gap-8 bg-[#00000057] rounded-3xl p-5">
            <h1 className="text-2xl md:text-5xl font-Playfair font-bold text-white">
              Cecilia Ifeanyi Nwakaego Foundation
            </h1>
            <i className="font-extralight text-sm text-white font-ioppins">
              Empowering Lives, One Step at a Time
            </i>
            <div className="flex items-center gap-5">
              <Link
                to="#"
                className="bg-primary-green text-black rounded-md py-4 px-4 md:px-8"
              >
                Lorem ipsum
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
