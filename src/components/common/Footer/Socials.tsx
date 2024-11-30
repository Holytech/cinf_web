import {
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Social } from "../../../shared/types";

export const SocialsData: Social[] = [
  {
    url: "#",
    text: "Twitter",
    icon: <FaXTwitter className="text-white" />,
  },
  {
    url: "#",
    text: "LinkedIn",
    icon: <FaLinkedin className="text-white" />,
  },
  {
    url: "#",
    text: "Instagram",
    icon: <FaInstagram className="text-white" />,
  },
  {
    url: "#",
    text: "Google",
    icon: <FaGoogle className="text-white" />,
  },
  {
    url: "#",
    text: "Youtube",
    icon: <FaYoutube className="text-white" />,
  },
];
