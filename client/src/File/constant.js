import { FaFacebookSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsDribbble } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { GrCheckbox } from "react-icons/gr";
import ThreeDotMenu from "../components/ThreeDotMenu";

export const pages = [
  {
    home: "Home",
    file: "/app/home/",
    number: 7865,
    social: "Facebook",
    count: "Total:782",
    growth: "30.1%",
    logo: <FaFacebookSquare color="rgb(23, 116, 235)" />,
    clr: "red",
  },
  {
    home: "Resources",
    file: "/app/resources/",
    number: 6865,
    social: "Youtube",
    count: "Total:322",
    growth: "30.1%",
    logo: <BsYoutube color="rgb(255, 0, 0)" />,
  },
  {
    home: "Integration",
    file: "/integrations/paypal/",
    number: 3865,
    social: "LinkedIn",
    count: "Total:322",
    growth: "0.1%",
    logo: <BsLinkedin color="rgb(0, 119, 180)" />,
  },
  {
    home: "Partners",
    file: "/partners/our-partners/",
    number: 7565,
    social: "Twitter",
    count: "Total:322",
    growth: "10.1%",
    logo: <BsTwitter color="(28, 157, 235)" />,
  },
  {
    home: "Developers",
    file: "developers/docs/",
    number: 9065,
    social: "Drebbile",
    count: "Total:322",
    growth: "40.1%",
    logo: <BsDribbble color="rgb(228, 74, 133)" />,
  },
];

export const rows = [
  {
    customer: "Clayton Bates",
    firstName: "Clayton",
    lastName: "Bates",
    date: "8 May 2020",
    amount: "$137",
    Status: "Approved",
  },
  {
    customer: "Gabriel Frazier",
    firstName: "Gabriel",
    lastName: "Frazier",
    date: "6 May 2020",
    amount: "$146",
    Status: "Approved",
  },
  {
    customer: "Debra Hamilton",
    firstName: "Debra",
    lastName: "Hamilton",
    date: "1 May 2020",
    amount: "$355",
    Status: "Pending",
  },
  {
    customer: "Stacey Ward",
    firstName: "Stacey",
    lastName: "Ward",
    date: "28 April 2020",
    amount: "$1375",
    Status: "Rejected",
  },
  {
    customer: "Troy Alexander",
    firstName: "Troy",
    lastName: "Alexander",
    date: "28 April 2020",
    amount: "$137",
    Status: "Approved",
  },
];

export const items = [
  {
    checkbox: <input type="checkbox" />,
    id: 1,
    img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F48%2F82%2F4882438d0b95f0832af0297a060fb37ce92c2680.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    Product: "Blue Jeans",
    Category: "Category A",
    Price: "$10.99",
    Stock: 5,
    Status: "InStock",
    dot:<ThreeDotMenu/>,
  },
  {
    checkbox: <input type="checkbox" />,
    id: 2,
    Product: "White Backpack",
    img: "https://emilus.themenate.net/img/thumbs/thumb-8.jpg",
    Category: "Bags",
    Price: "$10.99",
    Stock: 5,
    Status: "InStock",
    dot:<ThreeDotMenu/>,
  },
  {
    checkbox: <input type="checkbox" />,
    id: 3,
    img: "https://emilus.themenate.net/img/thumbs/thumb-9.jpg",
    Product: "Black Sneaker",
    Category: "Shoes",
    Price: "$10.99",
    Stock: 5,
    Status: "Limited Stock",
    dot:<ThreeDotMenu/>,
  },
  {
    checkbox: <input type="checkbox" />,
    id: 4,
    img: "https://emilus.themenate.net/img/thumbs/thumb-10.jpg",
    Product: "Gray Hoodies",
    Category: "Cloths",
    Price: "$10.99",
    Stock: 5,
    Status: "Out Of Stock",
    dot:<ThreeDotMenu/>,
  },
  {
    checkbox: <input type="checkbox" />,
    id: 5,
    img: "https://emilus.themenate.net/img/thumbs/thumb-7.jpg",
    Product: "Jackets",
    Category: "Bags",
    Price: "$10.99",
    Stock: 5,
    Status: "Limited Stock",
    dot:<ThreeDotMenu/>,
  },
  {
    checkbox: <input type="checkbox" />,
    id: 6,
    img: "https://emilus.themenate.net/img/thumbs/thumb-11.jpg",
    Product: "White BackPack",
    Category: "Bags",
    Price: "$10.99",
    Stock: 5,
    Status: "Out of Stock",
    dot:<ThreeDotMenu/>,
  },
  {
    checkbox: <input type="checkbox" />,
    id: 7,
    img: "https://emilus.themenate.net/img/thumbs/thumb-12.jpg",
    Product: "Strip Analog Watch",
    Category: "Watches",
    Price: "$10.99",
    Stock: 5,
    Status: "Out of Stock",
    dot:<ThreeDotMenu/>,
  },
  {
    checkbox: <input type="checkbox" />,
    id: 8,
    img: "https://emilus.themenate.net/img/thumbs/thumb-13.jpg",
    Product: "Red Beat Headphone",
    Category: "Devices",
    Price: "$10.99",
    Stock: 5,
    Status: "In Stock",
    dot:<ThreeDotMenu/>,
  },
  {
    checkbox: <input type="checkbox" />,
    id: 9,
    img: "https://emilus.themenate.net/img/thumbs/thumb-14.jpg",
    Product: "Red HeadPhones",
    Category: "Devices",
    Price: "$10.99",
    Stock: 5,
    Status: "Out of Stock",
    dot:<ThreeDotMenu/>,
  },
];