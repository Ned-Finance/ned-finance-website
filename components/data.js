import {
  ChartBarSquareIcon,
  ArrowTrendingUpIcon,
  ArrowUpRightIcon,
  Square2StackIcon,
  ArrowsRightLeftIcon,
  WalletIcon
} from "@heroicons/react/24/outline";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "A new world for your finances",
  desc: "Blockchain and cryptocurrencies are more than just holding, it's the new way of financial freedom.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Invest in most featured platforms",
      desc: "One place for all your finances, only selected platforms.",
      icon: () => <ChartBarSquareIcon />,
    },
    {
      title: "Automatic savings, round up and more",
      desc: "Here you can add the next benefit point.",
      icon: () => <ArrowTrendingUpIcon />,
    },
    {
      title: "Pay, split the bill and send money easly.",
      desc: "Pay in selected stores and and receive cashback.",
      icon: () => <WalletIcon />,
    },
  ],
};

const benefitTwo = {
  title: "All your NFTs collections in one place",
  desc: "More than JPGs, with NED you can get all your collections from THE fastest blockchains in one place. Forget about going to a website to list them, major NFTs marketplaces right in your phone.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Easly manage your NFTs from multiple networks",
      desc: "Recognize your NFTs by network, filter them and see collection information.",
      icon: () => <Square2StackIcon />,
    },
    {
      title: "List in marketplaces directly from your phone",
      desc: "List your NFTs in the marketplaces with high volume of each network.",
      icon: () => <ArrowUpRightIcon />,
    },
    {
      title: "Transfer NFTs in a breeze",
      desc: "Smooth experience for transfering NFTs on any network",
      icon: () => <ArrowsRightLeftIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
