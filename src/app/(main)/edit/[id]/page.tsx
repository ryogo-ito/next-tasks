import EditTaskForm from "@/components/EditTaskForm/EditTaskForm";
import { TaskDocument } from "@/models/task";

interface Params {
  params: { id: string };
}

const getTask = async (id: string) => {
  const res = await fetch(`${process.env.API_URL}/tasks/${id}`, {
    cache: "no-store",
  });

  if (res.status !== 200) {
    throw new Error();
  }

  const data = await res.json();

  return data.task as TaskDocument;
};

const EditTaskPage = async ({ params }: Params) => {
  const task = await getTask(params.id);

  return (
    <div className="flex flex-col justify-center py-20">
      <h2 className="text-center text-2xl font-bold">Edit Task</h2>
      <EditTaskForm task={task} />
    </div>
  );
};

export default EditTaskPage;
