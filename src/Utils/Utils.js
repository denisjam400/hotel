import first from "../Asset/Banner/pexels-vecislavas-popa-1571459.jpg";
import second from "../Asset/Banner/499d1ede8de311d4d374d699f62eb4a9.jpg";
import third from "../Asset/Banner/9d70ae962bbef1bccef87eed05789eec.jpg";
import fourth from "../Asset/Banner/first.jpg";
import CEO from "../Asset/team/banner-person.png";
import fifth from "../Asset/Banner/palaceroom.jpg";
import img1 from "../Asset/Banner/pexels-joey-342800.jpg";
import img2 from "../Asset/Banner/pexels-vecislavas-popa-1571459.jpg";
import img3 from "../Asset/Banner/499d1ede8de311d4d374d699f62eb4a9.jpg";
import { AiFillStar, AiOutlineAlert } from "react-icons/ai";
import firstTeamMemeber from "../Asset/team/1.jpg";
import secondTeamMemeber from "../Asset/team/2.jpg";
import thirdTeamMemeber from "../Asset/team/3.jpg";

export const GalleryData = [
  {
    id: 1,
    IMG: img1,
    MainCatalog: "Gallery",
  },
  {
    id: 2,
    IMG: img2,
    MainCatalog: "Gallery",
  },
  {
    id: 3,
    IMG: img3,
    MainCatalog: "Gallery",
  },
  {
    id: 4,
    IMG: first,
    MainCatalog: "Gallery",
  },
  {
    id: 5,
    IMG: second,
    MainCatalog: "Gallery",
  },
  { id: 6, IMG: third, MainCatalog: "Gallery" },
  {
    id: 7,
    IMG: fourth,
    MainCatalog: "Gallery",
  },
  { id: 8, IMG: fifth, MainCatalog: "Gallery" },
];

export const Testimonies = [
  {
    id: 1,
    IMG: first,
    testimony: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Laudantium molestiae atque fugit labore velit?`,
    testimonyNames: "Bill Gaek, Mikocok",
  },
  {
    id: 2,
    IMG: second,
    testimony: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Laudantium molestiae atque fugit labore velit?`,
    testimonyNames: "Bill Gaek, Mikocok",
  },
  {
    id: 3,
    IMG: fifth,
    testimony: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Laudantium molestiae atque fugit labore velit?`,
    testimonyNames: "Bill Gaek, Mikocok",
  },
  {
    id: 4,
    IMG: third,
    testimony: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Laudantium molestiae atque fugit labore velit?`,
    testimonyNames: "Bill Gaek, Mikocok",
  },
  {
    id: 5,
    IMG: fourth,
    testimony: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Laudantium molestiae atque fugit labore velit?`,
    testimonyNames: "Bill Gaek, Mikocok",
  },
  {
    id: 6,
    IMG: first,
    testimony: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    testimonyNames: "Bill Gaek, Mikocok",
  },
  {
    id: 7,
    IMG: first,
    testimony: `Laudantium molestiae atque fugit labore velit?`,
    testimonyNames: "Bill Gaek, Mikocok",
  },
];

export const bannerList = [
  { id: 1, img: img2 },
  { id: 2, img: img1 },
  { id: 3, img: img3 },
];

export const hotelListing = [
  { image: first, name: "The Will", price: "8000", rating: "4.2" },
  { image: second, name: "The Clue", price: "18000", rating: "1.2" },
  { image: fifth, name: "The Villa", price: "38000", rating: "15.2" },
  { image: third, name: "The Mafia", price: "3800", rating: "9.6" },
  { image: fourth, name: "The Palace", price: "38000", rating: "4.2" },
  { image: first, name: "The Will", price: "8000", rating: "4.2" },
  { image: first, name: "The Will", price: "8000", rating: "4.2" },
];

export const mostWantedRooms = [
  {
    RoomID: 1,
    RoomIMG: first,
    RoomName: "Cleopatra room",
    RoomRating: 16.7,
    RoomRatingIcon: <AiFillStar />,
    RoomRatingInfo: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem et sint ex nisi at labore veritatis explicabo quasi, dolor molestiae quos possimus voluptatum ipsum.`,
  },
  {
    RoomID: 2,
    RoomIMG: fourth,
    RoomName: "Exclusive room",
    RoomRating: 12.3,
    RoomRatingIcon: <AiFillStar />,
    RoomRatingInfo: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem et sint ex nisi at labore veritatis explicabo quasi, dolor molestiae quos possimus voluptatum ipsum.`,
  },
  {
    RoomID: 3,
    RoomIMG: img1,
    RoomName: "Triple room",
    RoomRating: 17.9,
    RoomRatingIcon: <AiFillStar />,
    RoomRatingInfo: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem et sint ex nisi at labore veritatis explicabo quasi, dolor molestiae quos possimus voluptatum ipsum.`,
  },
  {
    RoomID: 4,
    RoomIMG: img3,
    RoomName: "Triple room",
    RoomRating: 1.24,
    RoomRatingIcon: <AiFillStar />,
    RoomRatingInfo: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem et sint ex nisi at labore veritatis explicabo quasi, dolor molestiae quos possimus voluptatum ipsum.`,
  },
  {
    RoomID: 5,
    RoomIMG: img2,
    RoomName: "Triple room",
    RoomRating: 0.89,
    RoomRatingIcon: <AiFillStar />,
    RoomRatingInfo: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem et sint ex nisi at labore veritatis explicabo quasi, dolor molestiae quos possimus voluptatum ipsum.`,
  },
  {
    RoomID: 6,
    RoomIMG: second,
    RoomName: "Tig room",
    RoomRating: 124.3,
    RoomRatingIcon: <AiFillStar />,
    RoomRatingInfo: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem et sint ex nisi at labore veritatis explicabo quasi, dolor molestiae quos possimus voluptatum ipsum.`,
  },
];

export const NewzList = [
  {
    id: 1,
    newzImage: img1,
    newzTitle: "Lorem ipsum dolor sit",
    newzBlog: "",
  },
];

export const contactINFO = [
  {
    Icon: <AiOutlineAlert className="text-HGold text-2xl" />,
    Context: "Our Location",
    Number: " 08183792902 / 07183562788",
    AltNumber: "Customerservice@valleykingdom.com",
  },
  {
    Icon: <AiOutlineAlert className="text-HGold text-2xl" />,
    Context: "Contact Us AnyTime",
    Number: " Mobile: 012 345 678",
    AltNumber: "Fax: 123 456 789",
  },
  {
    Icon: <AiOutlineAlert className="text-HGold text-2xl" />,
    Context: "Support Overall",
    Number: " Support24/7@example.com",
    AltNumber: "Customerservice@valleykingdom.com",
  },
];

export const NewsINFO = [
  {
    title: "10 States At Risk of Rural Hospital Closures",
    imgURL: img1,
    hashTag: [{ hash: "Newz" }, { hash: "yio" }, { hash: "luxury" }],
    date: "February 17, 2019",
  },
  {
    title: "10 States At Risk of Rural Hospital Closures",
    imgURL: img2,
    hashTag: [{ hash: "Newz" }, { hash: "yio" }, { hash: "luxury" }],
    date: "February 17, 2019",
  },
  {
    title: "10 States At Risk of Rural Hospital Closures",
    imgURL: img3,
    hashTag: [{ hash: "Newz" }, { hash: "yio" }, { hash: "luxury" }],
    date: "February 17, 2019",
  },
  {
    title: "10 States At Risk of Rural Hospital Closures",
    imgURL: first,
    hashTag: [{ hash: "Newz" }, { hash: "yio" }, { hash: "luxury" }],
    date: "February 17, 2019",
  },
  {
    title: "10 States At Risk of Rural Hospital Closures",
    imgURL: second,
    hashTag: [{ hash: "Newz" }, { hash: "yio" }, { hash: "luxury" }],
    date: "February 17, 2019",
  },
  {
    title: "10 States At Risk of Rural Hospital Closures",
    imgURL: fourth,
    hashTag: [{ hash: "Newz" }, { hash: "yio" }, { hash: "luxury" }],
    date: "February 17, 2019",
  },
  {
    title: "10 States At Risk of Rural Hospital Closures",
    imgURL: third,
    hashTag: [{ hash: "Newz" }, { hash: "yio" }, { hash: "luxury" }],
    date: "February 17, 2019",
  },
];

export const TeamINFO = [
  {
    imgURL: firstTeamMemeber,
    name: "Gregory Smith",
    title: "Customer Relations",
  },
  {
    imgURL: CEO,
    name: "Patrick Cortez",
    title: "CEO",
  },
  {
    imgURL: thirdTeamMemeber,
    name: "Walter Wagner",
    title: "Analyst",
  },
];
