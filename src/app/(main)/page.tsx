import { MdAddTask } from "react-icons/md";
import Link from "next/link";
import TaskCard from "@/components/TaskCard/TaskCard";
import { TaskDocument } from "@/models/task";

const getAllTasks = async () => {
  const res = await fetch(`${process.env.API_URL}/tasks`, {
    cache: "no-store",
  });

  if (res.status !== 200) {
    throw new Error();
  }

  const data = await res.json();

  return data.tasks as TaskDocument[];
};

const MainPage = async () => {
  const allTasks = await getAllTasks();

  return (
    <div className="text-gray-800 p-8 h-full overflow-y-auto pb-24">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">All Tasks</h1>
        <Link
          href="/new"
          className="flex items-center gap-1 font-semibold border px-4 py-2 rouded-full shadow-sm text-white bg-gray-800 hover:bg-gray-700"
        >
          <MdAddTask />
          <div>Add Task</div>
        </Link>
      </header>
      <div className="mt-8 flex flex-wrap gap-4">
        {allTasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
