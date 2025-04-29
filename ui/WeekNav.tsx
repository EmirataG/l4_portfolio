import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { GrHomeRounded } from "react-icons/gr";

import { assignments } from "@/data";

export default function WeekNav({
  week,
  name,
}: {
  week: string;
  name: string;
}) {
  const index = assignments.findIndex((assignment) => assignment.id == week);
  const nextExists = index < assignments.length - 1 ? true : false;
  const prevExists = index == 0 ? false : true;
  console.log(index, assignments.length);

  const nextWeek = nextExists ? assignments[index + 1].id : null;
  const previousWeek = prevExists ? assignments[index - 1].id : null;

  return (
    <nav className="flex gap-3 items-center">
      <Link className="mr-1" href={"/"}>
        <GrHomeRounded
          className="hover:scale-115 active:scale-105 transition-all"
          size={20}
        />
      </Link>
      {prevExists ? (
        <Link href={`/weeks/${previousWeek}`}>
          <IoIosArrowBack
            className="hover:scale-115 active:scale-105 transition-all"
            size={20}
          />
        </Link>
      ) : null}
      <h3 className="text-lg">{`Hafta ${week}: ${name}`}</h3>
      {nextExists ? (
        <Link href={`/weeks/${nextWeek}`}>
          <IoIosArrowForward
            className="hover:scale-115 active:scale-105 transition-all"
            size={20}
          />
        </Link>
      ) : null}
    </nav>
  );
}
