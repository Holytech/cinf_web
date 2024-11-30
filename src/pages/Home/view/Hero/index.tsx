import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="w-full">
        <div className="bg-hero bg-center w-full max-w-[1200px] mx-auto rounded-[30px] overflow-hidden pt-20 pb-40 px-5">
          <div className="w-full md:w-1/2 flex flex-col gap-8 bg-[#00000057] rounded-3xl p-5">
            <h1 className="text-2xl md:text-5xl font-Playfair font-bold text-white">
              Promoviendo la participación cívica y política en la juventud de
              Puerto Rico
            </h1>
            <p className="font-extralight text-sm text-primary-grey font-Poppins">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis nobis minima, officiis voluptatem quod labore suscipit
              vitae vel, molestias, iure ad accusamus doloribus totam nostrum
              recusandae perspiciatis assumenda delectus? Ratione.
            </p>
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
