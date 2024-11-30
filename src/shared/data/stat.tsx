import { IStatData } from "../types";
import {
  MdAccountBalance,
  MdFingerprint,
  MdCardGiftcard,
} from "react-icons/md";
import { TbCertificate } from "react-icons/tb";

export const StatData: IStatData[] = [
  {
    heading: "Satisfied Student",
    value: "100",
    icon: <MdFingerprint />,
  },
  { heading: "Number of Classes", value: "10%", icon: <MdAccountBalance /> },
  { heading: "Certified Student", value: "5%", icon: <TbCertificate /> },
  { heading: "Dedicated Facilitators", value: "50+", icon: <MdCardGiftcard /> },
];
