import CustomUnderlineInput from "@/ui/atoms/custom-input.tsx";
import useZsStore from "@/app/infrastructure/hooks/use-zs-store.ts";
import { Checkbox } from "@/ui/atoms/checkbox.tsx";
import background from "@/assets/background.png";
import { Button } from "@/ui/atoms/button.tsx";

function TasksPage() {
  const { tasks, addTask, updateTask, toggleTaskCompletion } = useZsStore();

  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center bg-cover bg-center p-8"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1 className="absolute top-4 left-4 text-4xl text-white">Tasks</h1>

      <div className="w-full max-w-md space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center space-x-4">
            <CustomUnderlineInput
              type="text"
              placeholder="Task description"
              value={task.description}
              onChange={(e) => updateTask(task.id, e.target.value)}
              className={`flex-grow ${task.completed ? "text-gray-500" : "text-white"}`}
            />
            <Checkbox
              id={`task-${task.id}`}
              checked={task.completed}
              onCheckedChange={() => toggleTaskCompletion(task.id)}
              className="w-6 h-6 text-yellow-400 mt-3"
            />
          </div>
        ))}
      </div>

      <Button
        onClick={addTask}
        className="text-yellow-400 text-4xl mt-6 bg-transparent"
      >
        +
      </Button>
    </div>
  );
}

export default TasksPage;
