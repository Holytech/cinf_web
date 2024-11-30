import ImageOne from "../../../../assets/WhatsApp Image 2024-11-28 at 10.23.47 (1).jpeg";
import ImageTwo from "../../../../assets/WhatsApp Image 2024-11-28 at 10.27.45 (1).jpeg";
import ImageThree from "../../../../assets/WhatsApp Image 2024-11-28 at 10.23.47.jpeg";
import ImageFour from "../../../../assets/WhatsApp Image 2024-11-28 at 10.27.46 (3).jpeg";
import ImageFive from "../../../../assets/WhatsApp Image 2024-11-28 at 10.27.47 (3).jpeg";
import ImageSix from "../../../../assets/WhatsApp Image 2024-11-28 at 10.27.47 (1).jpeg";
import ImageSeven from "../../../../assets/WhatsApp Image 2024-11-28 at 10.27.48.jpeg";
import ImageEight from "../../../../assets/WhatsApp Image 2024-11-28 at 10.27.46.jpeg";
import ImageNine from "../../../../assets/IMG-20240915-WA0018.jpg";

const Gallery = () => {
  return (
    <>
      <div className="w-full">
        <div className="w-full md:max-w-[1200px] mx-auto py-10">
          <h1 className="font-Playfair font-bold text-2xl md:text-4xl text-primary-blue text-center">
            Our Gallery
          </h1>
          <div className="flex mt-10 rounded-lg overflow-hidden">
            <div className="w-full md:w-1/3 flex flex-col">
              <img src={ImageOne} alt="" className="w-full" />
              <img src={ImageTwo} alt="" className="w-full" />
              <img src={ImageThree} alt="" className="w-full" />
            </div>
            <div className="w-full md:w-1/3 flex flex-col">
              <img src={ImageFour} alt="" className="w-full" />
              <img src={ImageFive} alt="" className="w-full" />
              <img src={ImageSix} alt="" className="w-full" />
            </div>
            <div className="w-full md:w-1/3 flex flex-col">
              <img src={ImageSeven} alt="" className="w-full" />
              <img src={ImageEight} alt="" className="w-full" />
              <img src={ImageNine} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
