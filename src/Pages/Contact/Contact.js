import OtherHeaderBlade from "../../Component/OtherHeaderBlade";
import BGIMG from "../../Asset/Product/632e8cfdf66eb9f4f4c8fa7802d03919.jpg";
import { contactINFO } from "../../Utils/Utils";
import { AiFillStar, AiOutlineAlert } from "react-icons/ai";

const Contact = () => {
  let paramName = window.location.pathname;

  return (
    <>
      <OtherHeaderBlade paramName={paramName} />
      <div className="flex flex-wrap w-[100%] justify-center items-center gap-16 my-12 text-white">
        {contactINFO.map((Info, index) => (
          <div
            key={index}
            className="w-[80%] sm:w-[43%] h-[40vh] md:w-[27%] border-[1px] border-DGold rounded-md flex flex-col justify-center items-center gap-1"
          >
            <div className="flex justify-center items-center h-14 w-14 rounded-full border-[1px] border-DGold">
              {Info.Icon}
            </div>
            <h5 className="font-KenokyLight font-extralight text-xl">
              {Info.Context}
            </h5>
            <div className="flex flex-col justify-center items-center gap-0 text-sm">
              <address className="font-extralight">{Info.Number}</address>
              <address className="font-extralight">{Info.AltNumber}</address>
            </div>
          </div>
        ))}
      </div>
      <div className="max-h-max md:h-[102vh] py-3 px-12 md:px-16 flex flex-col justify-start items-start gap-9 my-9">
        <h4 className="h-[5vh] text-DGold text-4xl font-GreatVibes">
          Contact Us
        </h4>
        <div className="w-[100%] max-h-max md:h-[85vh] flex flex-col md:flex-row justify-start items-start gap-16 md:gap-10">
          <div className="w-[100%] md:w-[48%] pt-3 pb-6 bg-black h-full flex flex-col justify-start items-start gap-4 border-y-4 border-y-DGold">
            <div className="px-5 w-[100%] h-[18%] flex justify-center items-center gap-5">
              <div className="flex justify-center items-center h-[46px] w-[46px] rounded-[50%] border-[1px] border-DGold">
                <AiOutlineAlert className="text-HGold text-lg" />
              </div>
              <div className="w-[100%] flex flex-col justify-start items-start gap-1">
                <h3 className="text-HGold text-lg sm:text-xl">Location:</h3>
                <address className="text-sm sm:text-lg">
                  7, UniAlpha Street, Wall street
                </address>
              </div>
            </div>
            <div className="px-5 w-[100%] h-[18%] flex justify-center items-center gap-5">
              <div className="flex justify-center items-center h-[46px] w-[46px] rounded-[50%] border-[1px] border-DGold">
                <AiOutlineAlert className="text-HGold text-lg" />
              </div>
              <div className="w-[100%] flex flex-col justify-start items-start gap-1">
                <h3 className="text-HGold text-lg sm:text-xl">Email:</h3>
                <address className="text-sm sm:text-lg">
                  Noreply@valleykingdom.com
                </address>
              </div>
            </div>
            <div className="px-5 w-[100%] h-[18%] flex justify-center items-center gap-5">
              <div className="flex justify-center items-center h-[46px] w-[46px] rounded-[50%] border-[1px] border-DGold">
                <AiOutlineAlert className="text-HGold text-lg" />
              </div>
              <div className="w-[100%] flex flex-col justify-start items-start gap-1">
                <h3 className="text-HGold text-lg sm:text-xl">Phone:</h3>
                <address className="text-sm sm:text-lg">08183792902</address>
              </div>
            </div>
            <div className="h-[46%] w-[100%] flex justify-center items-center">
              <img
                className="h-[100%] w-[85%] object-cover"
                src={BGIMG}
                alt=""
              />
            </div>
          </div>
          <div className="px-5 w-[100%] md:w-[48%]  pt-3 pb-6 h-full bg-black flex flex-col justify-center items-center gap-4 border-y-4 border-y-DGold">
            <div className="w-[100%] h-[18%] flex flex-col md:flex-row justify-center items-center gap-2">
              <div className="w-[100%] md:w-[50%] flex flex-col items-start justify-center gap-1">
                <label htmlFor="Name">Your Name:</label>
                <input
                  type="text"
                  className="w-[100%] py-1 px-2 outline-none border-2 rounded-md border-DGold text-black"
                  name="Name"
                />
              </div>
              <div className="w-[100%] md:w-[50%] flex flex-col items-start justify-center gap-1">
                <label htmlFor="Email">Your Email:</label>
                <input
                  type="email"
                  className="w-[100%] py-1 px-2 outline-none border-2 rounded-md border-DGold text-black"
                  name="Email"
                />
              </div>
            </div>
            <div className="w-[100%] h-[18%] flex flex-col items-start justify-center gap-1">
              <label htmlFor="Subject">Subject:</label>
              <input
                type="text"
                className="w-[100%] py-1 px-2 outline-none border-2 rounded-md border-DGold text-black"
                name="Subject"
              />
            </div>
            <div className="w-[100%] h-[45%] flex flex-col items-start justify-center gap-1">
              <label htmlFor="Message">Message:</label>
              <textarea
                cols={8}
                rows={10}
                className="w-[100%] py-1 px-2 outline-none border-2 rounded-md border-DGold text-black"
                name="Message"
              />
            </div>
            <div className="w-[100%] h-[18%] flex justify-center items-center">
              <button
                className="bg-DGold rounded-full px-5 py-2 text-lg"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
