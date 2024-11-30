import { IoCalendarClearOutline } from "react-icons/io5";
import { BiAward } from "react-icons/bi";
import { MdPermContactCalendar } from "react-icons/md";
import { ISectionData } from "../types";

export const SectionData: ISectionData[] = [
  { icon: <IoCalendarClearOutline />, small: "Book To", big: "Join Class" },
  { icon: <BiAward />, small: "Meet Our", big: "Trainers" },
  {
    icon: <MdPermContactCalendar />,
    small: "You Can Easily",
    big: "Get Our Course",
  },
];
