import OtherHeaderBlade from "../../Component/OtherHeaderBlade";
import AboutProfile from "../../Asset/Product/632e8cfdf66eb9f4f4c8fa7802d03919.jpg";
import Award from "../../Asset/Banner/award.jpg";
import CEO from "../../Asset/Banner/banner-person.png";
import Signature from "../../Asset/Banner/about-signature.png";
import { TeamINFO } from "../../Utils/Utils";

const About = () => {
  let paramName = window.location.pathname;

  return (
    <>
      <OtherHeaderBlade paramName={paramName} />
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-14 md:gap-5 px-7 max-h-max lg:h-[62vh] my-10">
        <div className="w-[100%] md:w-[46%] h-full flex justify-center items-center">
          <img
            src={AboutProfile}
            alt="About_Picture"
            className="w-[100%] md:w-[90%] h-full"
          />
        </div>
        <div className="w-[100%] md:w-[50%] h-full flex flex-col justify-center items-start gap-5">
          <h4 className="uppercase text-4xl font-GreatVibes text-DGold">
            story about us
          </h4>
          <div className="w-full flex flex-col justify-center items-start gap-0">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              blanditiis officiis a quia consequuntur. Dolorum obcaecati
              adipisci id commodi dolore est, minima dolorem qui cum sed
              deleniti maxime rem consequatur iste nulla. Omnis, cum? <br />{" "}
              <br />
              Officia iure sed iusto libero corporis porro eligendi est sint ad
              rerum. Itaque nobis cum libero in incidunt harum suscipit. Tempora
              dicta eveniet tempore aperiam. Accusamus impedit id minus
              recusandae, laboriosam soluta quia atque.
            </p>
            <img className="py-3" src={Signature} alt="Admin Signature" />
            <h6 className="font-bold text-lg">Antonio Chavez</h6>
            <h6 className="text-HGold">CEO - Founder</h6>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center max-h-max md:h-[20vh]">
        <div className="px-14 pb-4 w-[89%] h-full flex flex-col md:flex-row flex-wrap justify-between items-center gap-5 md:gap-0 bg-DGold">
          <div className="flex flex-col justify-center items-center gap-1">
            <h4 className="text-[60px]">38K</h4>
            <h6 className="uppercase">Location</h6>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <h4 className="text-[60px]">38K+</h4>
            <h6 className="uppercase">Location</h6>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <h4 className="text-[60px]">38K</h4>
            <h6 className="uppercase">Location</h6>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <h4 className="text-[60px]">38K</h4>
            <h6 className="uppercase">Location</h6>
          </div>
        </div>
      </div>
      <div className="px-6 md:px-0 my-16 w-full flex flex-col md:flex-row justify-center md:justify-center items-center gap-20 max-h-max md:h-[46vh]">
        <div className="w-[100%] md:w-[55%] h-full flex flex-col justify-center items-start gap-8">
          <h4 className="uppercase text-4xl font-GreatVibes text-DGold">
            Best Luxury Hotel Award
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            asperiores consectetur esse, quidem sunt sed totam ipsam porro nisi
            sequi aliquam, accusamus perspiciatis alias harum sint hic eaque non
            fugiat reiciendis saepe culpa labore quod numquam eos. Temporibus
            dolor minima beatae consectetur repudiandae assumenda harum, minus
            necessitatibus omnis nobis dolorem numquam earum soluta veritatis
            magnam.
          </p>
        </div>
        <div className="w-[100%] md:w-[28%] h-full flex justify-center items-center">
          <img src={Award} alt="Award_Picture" className="w-full h-full" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-7 pt-24 md:pt-0 md:pb-0 px-7 max-h-max md:h-[80vh] lg:h-[70vh] my-10 imgBg">
        <div className="w-[100%] md:w-[55%] h-full flex flex-col justify-center items-start gap-5">
          <h3 className="uppercase text-4xl font-bold w-[70%] md:w-full">
            Book a room with us
          </h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, ut
            alias fugiat accusantium doloribus soluta ad eveniet. Dolores nemo
            accusamus nisi quo enim nobis itaque magnam unde, tenetur,
            necessitatibus incidunt ipsam modi! Ab distinctio sed officia rem.
            Impedit recusandae quibusdam rerum id facilis ratione totam aperiam
            officia, quo exercitationem molestias.
          </p>
          <button className="w-6/12 md:w-1/4 h-[40px] text-lg rounded-lg bg-DGold">
            Book Now
          </button>
        </div>
        <div className="w-[100%] md:w-[28%] h-full flex justify-center items-end">
          <img src={CEO} alt="Award_Picture" className="w-[90%] h-[90%]" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-8 px-7 w-full max-h-full lg:h-[75vh] my-10">
        <h4 className="uppercase text-4xl font-GreatVibes text-DGold">Team</h4>
        <div className="flex flex-wrap justify-center items-center gap-14 w-full h-full md:h-[90%]">
          {TeamINFO.map((team, index) => (
            <div
              key={index}
              className="relative h-[60vh] rounded-lg bg-black w-[100%] md:w-[35%] lg:w-[28%] p-8"
            >
              <img className="h-full w-full" src={team.imgURL} alt="CEO" />
              <div className="w-[80%] flex flex-col justify-center items-center gap-1 rounded-lg absolute -bottom-5 left-[10%] bg-DGold">
                <h5 className="text-2xl">{team.name}</h5>
                <h5 className="font-extralight text-base">{team.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full max-h-full md:h-[60vh] flex flex-col md:flex-row justify-center items-center gap-0">
        <div className="firstAboutBg w-full md:w-6/12 h-full">
          {/* <div className="w-[80%] h-[80%] border-[24px] border-[#333333e1] absolute top-[10%] left-[10%]"></div> */}
          <div className="py-3 md:py-0 w-full h-full flex flex-col justify-center items-start pl-14 gap-4 md:gap-7">
            <h6 className="uppercase">New Member</h6>
            <div className="flex flex-col gap-3">
              <h3 className="text-4xl font-bold">7 dayz free luxury</h3>
              <p>
                Complete the journey with us for a night and surely, you will be
                happy
              </p>
            </div>
            <button className="w-6/12 md:w-1/4 h-[40px] text-lg rounded-lg bg-DGold">
              Book Now
            </button>
          </div>
        </div>
        <div className="secondAboutBg w-full md:w-6/12 h-full">
          {/* <div className="w-[80%] h-[80%] border-[24px] border-[#333333e1] top-[10%] left-[10%]"></div> */}
          <div className="py-3 md:py-0 w-full h-full flex flex-col justify-center items-start pl-14 gap-4 md:gap-7">
            <h6 className="uppercase">Contact Us</h6>
            <div className="flex flex-col gap-3">
              <h3 className="text-4xl font-bold">09 746 204</h3>
              <p>If you trust us on your journey, We won't disappoint you!</p>
            </div>
            <button className="w-6/12 md:w-1/4 h-[40px] text-lg rounded-lg bg-DGold">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
