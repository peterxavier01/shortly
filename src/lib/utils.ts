import BrandIcon from "../assets/icon-brand-recognition.svg";
import DetailsIcon from "../assets/icon-detailed-records.svg";
import CustomizeIcon from "../assets/icon-fully-customizable.svg";
import Facebook from "../assets/icon-facebook.svg";
import Twitter from "../assets/icon-twitter.svg";
import Pinterest from "../assets/icon-pinterest.svg";
import Instagram from "../assets/icon-instagram.svg";

export const navLinks = [
  { id: 1, name: "features", href: "#" },
  { id: 2, name: "pricing", href: "#" },
  { id: 3, name: "resources", href: "#" },
];

export const stats = [
  {
    icon: BrandIcon,
    name: "brand recognition",
    desc: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.",
  },
  {
    icon: DetailsIcon,
    name: "detailed records",
    desc: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    icon: CustomizeIcon,
    name: "fullt customizable",
    desc: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
];

export const featuresLinks = [
  { id: 1, name: "link shortening", href: "#" },
  { id: 2, name: "branded links", href: "#" },
  { id: 3, name: "analytics", href: "#" },
];

export const resourcesLinks = [
  { id: 4, name: "blog", href: "#" },
  { id: 5, name: "developers", href: "#" },
  { id: 6, name: "support", href: "#" },
];

export const companyLinks = [
  { id: 7, name: "about", href: "#" },
  { id: 8, name: "out team", href: "#" },
  { id: 9, name: "careers", href: "#" },
  { id: 10, name: "contact", href: "#" },
];

export const socialIcons = [
  { id: 11, name: "facebook", href: "#", src: Facebook },
  { id: 12, name: "twitter", href: "#", src: Twitter },
  { id: 13, name: "pinterest", href: "#", src: Pinterest },
  { id: 14, name: "instagram", href: "#", src: Instagram },
];

export function copyToClipBoard(str: string) {
  return window.navigator.clipboard.writeText(str);
}
