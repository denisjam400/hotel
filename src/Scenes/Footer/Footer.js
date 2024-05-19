import { AiFillContacts, AiFillMail, AiOutlineWhatsApp } from "react-icons/ai";
import IMG1 from "../../Asset/Banner/05cd7a589e2b59a13e7804ea0676122d.jpg";
import IMG2 from "../../Asset/Banner/696fa0d6dcfda3440199dd98f6cf2d38.jpg";
import IMG3 from "../../Asset/Banner/pexels-joey-342800.jpg";
import IMG4 from "../../Asset/Banner/palaceroom.jpg";

const Footer = () => {
  return (
    <footer
      className={`max-h-max "h-max pt-14"
       w-screen flex flex-col justify-center items-start gap-3`}
    >
      <div className="px-16 py-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:justify-items-center justify-items-start gap-14 md:gap-0">
        <aside className="flex flex-col gap-4">
          <h3 className="border-b-4 border-DGold w-[40%] md:w-[20%] text-xl font-KenokyLight">
            About Us
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            inventore esse fugit excepturi quaerat vitae earum id aliquid
            sapiente accusamus obcaecati fugiat labore et, accusantium deleniti
            qui amet, quas error! Commodi perspiciatis consequuntur architecto
            fugiat es <br /> se quaerat accusamus, cum minima quo, quod facere
            voluptatem optio illum, aliquid pariatur!
          </p>
        </aside>
        <div className="flex flex-col justify-center items-start md:items-center gap-3">
          <h2 className="font-KenokyLight text-xl">
            <span className="text-HGold font-extrabold">Valley </span>
            Kingdom
          </h2>
          <div className="w-[100%] md:w-[290px] flex gap-2">
            <figure className="w-[35%] flex flex-col items-center gap-2">
              <img src={IMG2} alt="" className="w-full h-20" />
              <img src={IMG4} alt="" className="w-full h-20" />
              <img src={IMG3} alt="" className="w-full h-20" />
            </figure>
            <figure className="w-[35%] flex flex-col items-center gap-2">
              <img src={IMG1} alt="" className="w-full h-20" />
              <img src={IMG2} alt="" className="w-full h-20" />
              <img src={IMG4} alt="" className="w-full h-20" />
            </figure>
            <figure className="w-[35%] flex flex-col items-center gap-2">
              <img src={IMG3} alt="" className="w-full h-20" />
              <img src={IMG1} alt="" className="w-full h-20" />
              <img src={IMG2} alt="" className="w-full h-20" />
            </figure>
          </div>
        </div>
        <aside className=" flex flex-col gap-4">
          <h4 className="border-b-4 border-DGold w-[54%] text-xl font-KenokyLight">
            Reservation
          </h4>
          <address className="flex flex-col gap-3">
            <p>
              Abdul Guong Street, Cledeong <br />
              Desok City, 16145 <br />
              West Java.
            </p>
            <div className="flex flex-col gap-2 items-start">
              <p className="flex justify-center items-center gap-2">
                <AiFillContacts className="text-2xl" /> 01-458-985-00
              </p>
              <p className="flex justify-center items-center gap-2">
                <AiOutlineWhatsApp className="text-2xl" /> 01-453-978-00
              </p>
              <p className="flex justify-center items-center gap-2">
                <AiFillMail className="text-2xl" /> ValleyKingdom@mail.com
              </p>
            </div>
          </address>
        </aside>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
