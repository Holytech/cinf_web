import mother_care from "../../../../assets/mother-child-care.png";
import mental_health from "../../../../assets/mental-health.png";
import educational_empowerment from "../../../../assets/educational-enpowerment.png";
import diasbility_inclusion from "../../../../assets/disability-inclusion.png";
const OurFocus = () => {
  return (
    <>
      <div className="w-full">
        <div className="w-full md:max-w-[1200px] mx-auto py-10 px-5">
          <h1 className="font-Playfair font-bold text-4xl text-primary-blue text-center">
            Our Focus
          </h1>
          <div className="w-full flex flex-col md:flex-row gap-5 mt-10">
            <div className="w-full md:w-1/4 border p-5 rounded-3xl">
              <img
                src={mother_care}
                alt="mother_care"
                className="w-full object-cover"
              />
              <h1 className="text-center font-Poppins font-semibold text-2xl">
                Mother & Child Care
              </h1>
              <ul className="font-sans list-inside list-disc font-extralight mt-3 text-sm text-justify flex flex-col gap-2">
                <li>
                  <b>Supporting Families: </b>
                  We provide essential resources and support to mothers and
                  children, empowering them with tools for a better future.
                </li>
                <li>
                  <b>Tailored Counseling & Mental Health Services: </b>
                  Offering tailored counseling and mental health services to
                  families in need, ensuring no one faces these struggles alone.
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 border p-5 rounded-3xl">
              <img
                src={mental_health}
                alt="mental_health"
                className="w-full object-cover"
              />
              <h1 className="text-center font-Poppins font-semibold text-2xl">
                Mental Health Advocacy
              </h1>
              <ul className="font-sans list-inside list-disc font-extralight mt-3 text-sm text-justify flex flex-col gap-2">
                <li>
                  <b>Raising Awareness & Combatting Stigma: </b>
                  We are working tirelessly to raise awareness and reduce the
                  stigma surrounding mental health, particularly in underserved
                  communities.
                </li>
                <li>
                  <b>Access to Support Services: </b>
                  We provide free and affordable mental health support services,
                  ensuring that everyone, regardless of financial means, can
                  access help.
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 border p-5 rounded-3xl">
              <img
                src={educational_empowerment}
                alt="educational_empowerment"
                className="w-full object-cover"
              />
              <h1 className="text-center font-Poppins font-semibold text-2xl">
                Educational Empowerment
              </h1>
              <ul className="font-sans list-inside list-disc font-extralight mt-3 text-sm text-justify flex flex-col gap-2">
                <li>
                  <b>Scholarships & Resources for Underprivileged Children: </b>
                  Our foundation is committed to offering scholarships and
                  educational resources to underprivileged children, enabling
                  them to access quality education.
                </li>
                <li>
                  <b>Inclusive Education: </b>
                  We advocate for inclusive education policies that provide
                  opportunities for children with disabilities, ensuring they
                  receive the support they need to succeed.
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 border p-5 rounded-3xl">
              <img
                src={diasbility_inclusion}
                alt="diasbility_inclusion"
                className="w-full object-cover"
              />
              <h1 className="text-center font-Poppins font-semibold text-2xl">
                Disability Inclusion
              </h1>
              <ul className="font-sans list-inside list-disc font-extralight mt-3 text-sm text-justify flex flex-col gap-2">
                <li>
                  <b>Championing Rights: </b>
                  We advocate for the rights of individuals with disabilities,
                  ensuring they are treated with dignity and respect.
                </li>
                <li>
                  <b>Caregiver Support: </b>
                  We provide specialized training and resources to help
                  caregivers and families better support individuals with
                  disabilities, promoting a more inclusive and empathetic
                  society.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurFocus;
