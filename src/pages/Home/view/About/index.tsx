import school_program from "../../../../assets/school_program_2.jpg";
const About = () => {
  return (
    <>
      <div className="w-full bg-white px-5 py-20">
        <div className="w-full md:max-w-[1200px] mx-auto flex flex-col-reverse md:flex-row gap-5">
          <img className="w-full md:w-1/2" src={school_program} />
          <div className="w-full md:w-1/2 flex flex-col gap-5">
            <h1 className="font-Playfair text-primary-blue text-4xl font-semibold">
              About Cecilia Ifeanyi Nwakaego Foundation
            </h1>
            <p className="text-black font-Poppins font-extralight text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              similique numquam cumque excepturi aliquid possimus dolorum
              commodi ratione, debitis temporibus optio aliquam provident eum
              beatae, voluptatibus quam soluta cupiditate! Odit? Recusandae,
              odio! Blanditiis quam delectus animi iusto omnis, accusantium
              cupiditate eos nemo? Tempore accusamus voluptas voluptatibus
              libero explicabo accusantium, rerum adipisci atque non. Sapiente
              mollitia, at ratione ducimus architecto perferendis. Dolores
              praesentium tempore eaque, alias voluptatum a, veritatis odio,
              ducimus est asperiores expedita quae autem sed laboriosam eveniet
              quidem.
            </p>
            <p className="text-black font-Poppins font-extralight text-justify">
              Quis iusto, recusandae eos hic vero tempore ut architecto tenetur
              magni. Dolorum reiciendis voluptates enim nobis aperiam incidunt?
              Corporis reiciendis blanditiis earum ipsa eaque quisquam deserunt!
              Architecto, ea consectetur. Quae harum maiores consequuntur
              expedita officia aperiam quos ex ipsam neque ipsum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
