import { GiCompass } from "react-icons/gi";
import { GiDiamondHard } from "react-icons/gi";
import { MdOutlineHistoryEdu } from "react-icons/md";

export const links = [
  {
    id: 1,
    text: "Home",
    to: "/Home",
  },
  {
    id: 2,
    text: "About",
    to: "/about",
  },
  {
    id: 3,
    text: "Products",
    to: "/products",
  },
];

export const cardData = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "Mission",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "Vision",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 3,
    icon: <MdOutlineHistoryEdu />,
    title: "History",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
];
