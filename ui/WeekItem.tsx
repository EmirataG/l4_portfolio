import Link from "next/link";
import { GrDocumentSound } from "react-icons/gr";

export default function WeekItem({
  week,
  name,
  audio,
}: {
  week: string;
  name: string;
  audio: string | null;
}) {
  return (
    <article className="w-full flex gap-4">
      <Link
        className="p-4 bg-white text-left shadow-md rounded-md transition-all w-full active:bg-slate-100 hover:cursor-pointer hover:scale-103"
        href={`/weeks/${week}`}
      >
        <h3>{`Hafta ${week}: ${name}`}</h3>
      </Link>
      {audio ? (
        <Link
          className="p-2 bg-white shadow-md rounded-md size-14 active:bg-slate-100 hover:cursor-pointer hover:scale-103 flex items-center justify-center"
          href={audio}
          target="_blank"
        >
          <GrDocumentSound size={20} />
        </Link>
      ) : null}
    </article>
  );
}
