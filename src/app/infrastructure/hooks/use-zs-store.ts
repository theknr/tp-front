import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ClothingDistribution } from "@/app/features/clothing/clothing.props.ts";

type Photo = {
  id: string;
  url: string;
};

type Task = {
  id: string;
  description: string;
  completed: boolean;
};

type StoreState = {
  photos: Photo[];
  tasks: Task[];
  addTask: () => void;
  updateTask: (id: string, description: string) => void;
  toggleTaskCompletion: (id: string) => void;
  addPhoto: (photo: Photo) => void;
  removePhoto: (photoId: string) => void;
  team: string;
  setSelectedTeam: (team: string) => void;
  clothingData: ClothingDistribution[];
  setClothingData: (data: ClothingDistribution[]) => void;
};

const useZsStore = create(
  persist<StoreState>(
    (set) => ({
      photos: [],
      team: "",
      tasks: [
        { id: "1", description: "Task 1", completed: false },
        { id: "2", description: "Task 2", completed: false },
        { id: "3", description: "Task 3", completed: false },
        { id: "4", description: "Task 4", completed: false },
        { id: "5", description: "Task 5", completed: false },
        { id: "6", description: "Task 6", completed: false },
        { id: "7", description: "Task 7", completed: false },
      ],
      addTask: () =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            { id: Date.now().toString(), description: "", completed: false },
          ],
        })),
      updateTask: (id, description) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, description } : task,
          ),
        })),
      toggleTaskCompletion: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task,
          ),
        })),
      setSelectedTeam: (team) => set({ team }),
      addPhoto: (photo) =>
        set((state) => ({ photos: [...state.photos, photo] })),
      removePhoto: (photoId) =>
        set((state) => ({
          photos: state.photos.filter((photo) => photo.id !== photoId),
        })),
      clothingData: [],
      setClothingData: (data) => set({ clothingData: data }),
    }),
    {
      name: "app-storage",
    },
  ),
);

export default useZsStore;
