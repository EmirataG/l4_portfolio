import { assignments } from "@/data";
import Assignment from "@/ui/Assignment";

export default async function WeeklyAssignment({
  params,
}: {
  params: { id: string };
}) {
  const assignment = assignments.findLast((a) => a.id === params.id);

  if (!assignment) {
    return <div>Birşey bozuldu...</div>;
  }

  return (
    <div className="p-8">
      <Assignment assignment={assignment} />
    </div>
  );
}
