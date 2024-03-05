import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/b01.png";
import benefitTwoImg from "../public/img/b02.png";

const benefitOne = {
  title: "Schrute Farms.",
  desc: "Own a Piece of Schrute Farms: Invest in Schrute Bucks!",
  image: benefitOneImg,
  bullets: [
    {
      title: "Earn",
      desc: "Earn, trade, and hodl Schrute Bucks on the Ethereum blockchain.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Trade",
      desc: "Earn, trade, and hodl Schrute Bucks on the Ethereum blockchain.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Hodl",
      desc: "Earn, trade, and hodl Schrute Bucks on the Ethereum blockchain.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
