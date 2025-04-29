import { AssignmentType, WeekType } from "@/types";
import WeekItem from "@/ui/WeekItem";

export default function WeeksList({ data }: { data: Array<AssignmentType> }) {
  return (
    <ul className="flex flex-col gap-3 items-center">
      {data.map((weekData) => (
        <WeekItem
          key={weekData.id}
          week={weekData.id}
          name={weekData.name}
          audio={weekData.audioUrl}
        />
      ))}
    </ul>
  );
}
