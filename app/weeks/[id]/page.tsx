import { assignments } from "@/data";
import Assignment from "@/ui/Assignment";

export default async function WeeklyAssignment({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const assignment = assignments.findLast((a) => a.id === resolvedParams.id);

  if (!assignment) {
    return <div>Birşey bozuldu...</div>;
  }

  return (
    <div className="p-8">
      <Assignment assignment={assignment} />
    </div>
  );
}
