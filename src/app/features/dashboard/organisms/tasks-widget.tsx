import WidgetFactory from "@/app/features/dashboard/molecules/widget-factory.tsx";
import useZsStore from "@/app/infrastructure/hooks/use-zs-store.ts";
import { Checkbox } from "@/ui/atoms/checkbox.tsx";

function TasksWidget() {
  const { tasks } = useZsStore();
  const topTasks = tasks.slice(0, 3);

  return (
    <WidgetFactory title="Tasks">
      <div className="text-center">
        {topTasks.length > 0 ? (
          <ul className="space-y-4">
            {topTasks.map((task) => (
              <li
                key={task.id}
                className="flex items-center justify-between text-sm"
              >
                <div className="relative flex-grow mr-8">
                  <span
                    className={`text-left text-lg ${task.completed ? "text-gray-500" : ""}`}
                  >
                    {task.description}
                  </span>
                  <span
                    className={`absolute left-0 -right-14 bottom-0 h-[1px] ${
                      task.completed ? "bg-gray-500" : "bg-black"
                    }`}
                  ></span>
                </div>

                <Checkbox
                  id={`task-${task.id}`}
                  checked={task.completed}
                  className="h-4 w-4 ml-6 flex-shrink-0"
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500">No tasks available</p>
        )}
      </div>
    </WidgetFactory>
  );
}

export default TasksWidget;
