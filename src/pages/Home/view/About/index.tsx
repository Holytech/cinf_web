import school_program from "../../../../assets/school_program_2.jpg";
const About = () => {
  return (
    <>
      <div className="w-full bg-white px-5 py-20">
        <div className="w-full md:max-w-[1200px] mx-auto flex flex-col-reverse md:flex-row gap-5">
          <img className="w-full md:w-1/2 object-cover" src={school_program} />
          <div className="w-full md:w-1/2 flex flex-col gap-5">
            <h1 className="font-Playfair text-primary-blue text-4xl font-semibold">
              Our Mission
            </h1>
            <p className="text-black font-Poppins font-extralight text-justify">
              At the Cecilia Ifeanyi Nwakaego Foundation, we are unwavering in
              our commitment to transforming lives through{" "}
              <b>mental health advocacy</b> , <b>educational empowerment</b> ,
              and <b>disability inclusion</b>.
            </p>
            <p className="text-black font-Poppins font-extralight text-justify">
              Our foundation was born from a place of deep personal experience
              and compassion. Inspired by the journey of caring for a brother
              with autism and the profound loss of our mother to depression, we
              understand first-hand the challenges faced by families navigating
              mental health and disability. These life-changing moments have
              shaped our understanding of the struggles faced by individuals
              living with mental health conditions and developmental
              disabilities. From these experiences, we have learned the
              importance of empathy, resilience, and the power of community in
              overcoming life's toughest challenges.
            </p>
            <p className="text-black font-Poppins font-extralight text-justify">
              Our mission is clear: to create a world where every
              individual—regardless of their challenges—can thrive, live with
              dignity, and contribute meaningfully to society.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
