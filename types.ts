import { StaticImageData } from "next/image";

export type WeekType = { week: string; name: string };
export type AssignmentType = {
  id: string;
  name: string;
  prompt: string;
  title: string | null;
  text: string | null;
  images: string[] | StaticImageData[];
  center: boolean;
  audioUrl: string | null;
};
